export const adminAccessCookie = "cifacu_admin_access_token";
export const adminRefreshCookie = "cifacu_admin_refresh_token";

export type SupabaseAuthUser = {
  app_metadata?: {
    role?: string;
    roles?: string[];
  };
  email?: string;
  id: string;
};

export type SupabaseSession = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
  user?: SupabaseAuthUser;
};

export function getSupabaseAuthConfig() {
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey =
    process.env.SUPABASE_ANON_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return null;
  }

  return {
    anonKey,
    url: url.replace(/\/$/, ""),
  };
}

export function isAdminUser(user: SupabaseAuthUser | null) {
  if (!user?.email) {
    return false;
  }

  const adminEmails = (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);

  return (
    user.app_metadata?.role === "admin" ||
    user.app_metadata?.roles?.includes("admin") ||
    adminEmails.includes(user.email.toLowerCase())
  );
}

export async function fetchSupabaseUser(accessToken: string) {
  const config = getSupabaseAuthConfig();

  if (!config) {
    return null;
  }

  const response = await fetch(`${config.url}/auth/v1/user`, {
    cache: "no-store",
    headers: {
      apikey: config.anonKey,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    return null;
  }

  return (await response.json()) as SupabaseAuthUser;
}

export async function refreshSupabaseSession(refreshToken: string) {
  const config = getSupabaseAuthConfig();

  if (!config) {
    return null;
  }

  const response = await fetch(`${config.url}/auth/v1/token?grant_type=refresh_token`, {
    body: JSON.stringify({ refresh_token: refreshToken }),
    cache: "no-store",
    headers: {
      apikey: config.anonKey,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    return null;
  }

  return (await response.json()) as SupabaseSession;
}
