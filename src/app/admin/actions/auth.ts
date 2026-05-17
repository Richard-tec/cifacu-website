"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  adminAccessCookie,
  adminRefreshCookie,
  fetchSupabaseUser,
  getSupabaseAuthConfig,
  isAdminUser,
  type SupabaseSession,
} from "@/lib/adminAuth";

export type LoginState = {
  message: string;
  status: "idle" | "success" | "error";
};

function getCookieOptions(maxAge?: number) {
  return {
    httpOnly: true,
    ...(maxAge ? { maxAge } : {}),
    path: "/",
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
  };
}

async function setAdminSession(session: SupabaseSession, rememberDevice: boolean) {
  const cookieStore = await cookies();

  cookieStore.set(
    adminAccessCookie,
    session.access_token,
    getCookieOptions(session.expires_in),
  );
  cookieStore.set(
    adminRefreshCookie,
    session.refresh_token,
    getCookieOptions(rememberDevice ? 60 * 60 * 24 * 30 : undefined),
  );
}

async function clearAdminSession() {
  const cookieStore = await cookies();

  cookieStore.delete(adminAccessCookie);
  cookieStore.delete(adminRefreshCookie);
}

export async function loginAdmin(
  _previousState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = formData.get("email");
  const password = formData.get("password");
  const rememberDevice = formData.get("remember") === "on";

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    !email.trim() ||
    !password
  ) {
    return {
      message: "Enter an admin email address and password.",
      status: "error",
    };
  }

  const config = getSupabaseAuthConfig();

  if (!config) {
    return {
      message:
        "Supabase Auth is not configured. Add SUPABASE_URL and SUPABASE_ANON_KEY.",
      status: "error",
    };
  }

  const response = await fetch(`${config.url}/auth/v1/token?grant_type=password`, {
    body: JSON.stringify({
      email: email.trim().toLowerCase(),
      password,
    }),
    cache: "no-store",
    headers: {
      apikey: config.anonKey,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    await clearAdminSession();

    return {
      message: "Invalid admin email or password.",
      status: "error",
    };
  }

  const session = (await response.json()) as SupabaseSession;
  const user = session.user ?? (await fetchSupabaseUser(session.access_token));

  if (!isAdminUser(user ?? null)) {
    await clearAdminSession();

    return {
      message: "This account is not authorized for admin access.",
      status: "error",
    };
  }

  await setAdminSession(session, rememberDevice);

  return {
    message: "Login successful. Opening dashboard...",
    status: "success",
  };
}

export async function logoutAdmin() {
  const config = getSupabaseAuthConfig();
  const accessToken = (await cookies()).get(adminAccessCookie)?.value;

  if (config && accessToken) {
    await fetch(`${config.url}/auth/v1/logout`, {
      cache: "no-store",
      headers: {
        apikey: config.anonKey,
        Authorization: `Bearer ${accessToken}`,
      },
      method: "POST",
    }).catch(() => null);
  }

  await clearAdminSession();
  redirect("/admin");
}
