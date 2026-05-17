import { NextRequest, NextResponse } from "next/server";
import {
  adminAccessCookie,
  adminRefreshCookie,
  fetchSupabaseUser,
  isAdminUser,
  refreshSupabaseSession,
  type SupabaseSession,
} from "@/lib/adminAuth";

function redirectToLogin(request: NextRequest) {
  const loginUrl = new URL("/admin", request.url);
  loginUrl.searchParams.set("next", request.nextUrl.pathname);

  const response = NextResponse.redirect(loginUrl);
  response.cookies.delete(adminAccessCookie);
  response.cookies.delete(adminRefreshCookie);

  return response;
}

function setSessionCookies(response: NextResponse, session: SupabaseSession) {
  const secure = process.env.NODE_ENV === "production";

  response.cookies.set(adminAccessCookie, session.access_token, {
    httpOnly: true,
    maxAge: session.expires_in,
    path: "/",
    sameSite: "lax",
    secure,
  });
  response.cookies.set(adminRefreshCookie, session.refresh_token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
    sameSite: "lax",
    secure,
  });
}

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get(adminAccessCookie)?.value;
  const refreshToken = request.cookies.get(adminRefreshCookie)?.value;

  if (accessToken) {
    const user = await fetchSupabaseUser(accessToken);

    if (isAdminUser(user)) {
      return NextResponse.next();
    }
  }

  if (refreshToken) {
    const session = await refreshSupabaseSession(refreshToken);

    if (session) {
      const user =
        session.user ?? (await fetchSupabaseUser(session.access_token));

      if (isAdminUser(user ?? null)) {
        const response = NextResponse.next();
        setSessionCookies(response, session);
        return response;
      }
    }
  }

  return redirectToLogin(request);
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
