"use server";

import { createHash } from "node:crypto";

export type RegistrationState = {
  message: string;
  status: "idle" | "success" | "error";
};

const requiredFields = [
  "fullName",
  "nationalId",
  "phone",
  "email",
  "district",
  "profession",
  "citizenship",
  "gender",
  "dateOfBirth",
  "digitalSignature",
];

function getRequiredValue(formData: FormData, key: string) {
  const value = formData.get(key);

  if (typeof value !== "string" || value.trim().length === 0) {
    return "";
  }

  return value.trim();
}

function getSupabaseConfig() {
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    return null;
  }

  return {
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      "Content-Type": "application/json",
    },
    url: url.replace(/\/$/, ""),
  };
}

function getNationalIdHash(nationalId: string) {
  const normalizedId = nationalId.toUpperCase().replace(/\s+/g, "");
  const salt = process.env.NATIONAL_ID_HASH_SALT ?? "";

  return {
    hash: createHash("sha256")
      .update(`${salt}:${normalizedId}`)
      .digest("hex"),
    last4: normalizedId.slice(-4),
  };
}

export async function createMember(
  _previousState: RegistrationState,
  formData: FormData,
): Promise<RegistrationState> {
  const missingField = requiredFields.find(
    (field) => getRequiredValue(formData, field).length === 0,
  );

  if (missingField) {
    return {
      message: "Please complete all required fields before submitting.",
      status: "error",
    };
  }

  if (formData.get("pledgeAgreement") !== "on") {
    return {
      message: "Please confirm the anti-corruption pledge agreement.",
      status: "error",
    };
  }

  const config = getSupabaseConfig();

  if (!config) {
    return {
      message:
        "Supabase is not configured. Add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to the server environment.",
      status: "error",
    };
  }

  const nationalId = getRequiredValue(formData, "nationalId");
  const nationalIdRecord = getNationalIdHash(nationalId);

  const duplicateResponse = await fetch(
    `${config.url}/rest/v1/members?select=id&national_id_hash=eq.${nationalIdRecord.hash}&limit=1`,
    {
      cache: "no-store",
      headers: config.headers,
    },
  );

  if (!duplicateResponse.ok) {
    return {
      message: "Could not verify National ID uniqueness. Please try again.",
      status: "error",
    };
  }

  const duplicateRows = (await duplicateResponse.json()) as Array<{
    id: string;
  }>;

  if (duplicateRows.length > 0) {
    return {
      message:
        "A membership registration already exists for this National ID number.",
      status: "error",
    };
  }

  const insertResponse = await fetch(`${config.url}/rest/v1/members`, {
    body: JSON.stringify({
      citizenship_status: getRequiredValue(formData, "citizenship"),
      date_of_birth: getRequiredValue(formData, "dateOfBirth"),
      digital_signature: getRequiredValue(formData, "digitalSignature"),
      district: getRequiredValue(formData, "district"),
      email: getRequiredValue(formData, "email").toLowerCase(),
      full_name: getRequiredValue(formData, "fullName"),
      gender: getRequiredValue(formData, "gender"),
      national_id_hash: nationalIdRecord.hash,
      national_id_last4: nationalIdRecord.last4,
      phone: getRequiredValue(formData, "phone"),
      pledge_agreed: true,
      pledge_agreed_at: new Date().toISOString(),
      profession: getRequiredValue(formData, "profession"),
      registration_status: "pending",
    }),
    cache: "no-store",
    headers: {
      ...config.headers,
      Prefer: "return=minimal",
    },
    method: "POST",
  });

  if (!insertResponse.ok) {
    const error = (await insertResponse.json().catch(() => null)) as
      | { code?: string }
      | null;

    if (error?.code === "23505") {
      return {
        message:
          "A membership registration already exists for this National ID number.",
        status: "error",
      };
    }

    return {
      message: "Registration could not be saved. Please try again.",
      status: "error",
    };
  }

  return {
    message:
      "Registration submitted successfully. Your membership is pending review.",
    status: "success",
  };
}
