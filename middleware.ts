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
  // SEO canonicalization: redirect /hyderabad?area=XYZ → /hyderabad/<slug> when we have a dedicated page.
  if (request.nextUrl.pathname === "/hyderabad") {
    const area = (request.nextUrl.searchParams.get("area") ?? "").trim();
    if (area) {
      const normalized = area.toLowerCase().replace(/\s+/g, " ").trim();
      const slug =
        normalized === "hitech city"
          ? "hitec-city"
          : normalized === "financial district"
            ? "financial-district"
            : normalized.replace(/\s+/g, "-");

      const allowed = new Set([
        "jubilee-hills",
        "gachibowli",
        "kondapur",
        "madhapur",
        "himayatnagar",
        "nallagandla",
        "ameerpet",
        "hitec-city",
        "nanakramguda",
        "narsingi",
        "financial-district",
        "kokapet",
        "kompally",
        "secunderabad",
        "miyapur",
        "abids",
        "uppal",
        "kukatpally",
        "banjara-hills",
        "manikonda",
        "begumpet",
      ]);

      if (allowed.has(slug)) {
        const url = request.nextUrl.clone();
        url.pathname = `/hyderabad/${slug}`;
        url.search = "";
        return NextResponse.redirect(url, 301);
      }
    }
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
  matcher: ["/studio/:path*", "/hyderabad"],
};
