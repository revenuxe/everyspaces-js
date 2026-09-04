import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function unauthorizedResponse() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Sanity Studio", charset="UTF-8"',
    },
  });
}

export function middleware(request: NextRequest) {
  // Canonical host redirects: old domain + apex -> canonical www host.
  const host = request.nextUrl.hostname.toLowerCase();
  if (host === "zikhra.com" || host === "www.zikhra.com" || host === "everyspaces.com") {
    const url = request.nextUrl.clone();
    url.hostname = "www.everyspaces.com";
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  // `redirects()` rules are case-insensitive in Next.js, so a rule for
  // `/Bangalore` would also redirect the canonical `/bangalore` path to
  // itself. Middleware preserves the request pathname's case and lets us
  // normalize only the legacy uppercase URLs.
  if (
    request.nextUrl.pathname === "/Bangalore" ||
    request.nextUrl.pathname.startsWith("/Bangalore/")
  ) {
    const url = request.nextUrl.clone();
    url.pathname = request.nextUrl.pathname.replace(/^\/Bangalore(?=\/|$)/, "/bangalore");
    return NextResponse.redirect(url, 308);
  }

  if (!request.nextUrl.pathname.startsWith("/studio")) {
    return NextResponse.next();
  }

  const user = process.env.SANITY_STUDIO_BASIC_USER;
  const pass = process.env.SANITY_STUDIO_BASIC_PASS;

  if (!user || !pass) {
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { error: "Studio auth credentials are not configured." },
        { status: 503 },
      );
    }
    return NextResponse.next();
  }

  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Basic ")) {
    return unauthorizedResponse();
  }

  const encoded = authHeader.split(" ")[1] || "";
  const decoded = atob(encoded);
  const [inputUser, inputPass] = decoded.split(":");

  if (inputUser !== user || inputPass !== pass) {
    return unauthorizedResponse();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
