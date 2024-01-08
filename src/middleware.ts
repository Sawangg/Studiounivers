import { NextResponse } from "next/server";
import type { NextAuthRequest } from "next-auth/lib";
import { authMiddleware } from "@lib/auth.config"; // TODO: change this to @lib/auth.ts once postgres.js supports edge runtime
import { env } from "@src/env.mjs";

export default authMiddleware((request: NextAuthRequest): NextResponse => {
  // Server action ignore
  if (request.headers.get("content-type")?.includes("multipart/form-data")) {
    return NextResponse.next();
  }

  // Content Security Policy
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const cspHeader = `
    default-src 'none';
    script-src-elem 'self' 'nonce-${nonce}';
    script-src 'self' 'nonce-${nonce}'${env.NODE_ENV === "development" && " 'unsafe-eval'"};
    style-src 'self' 'unsafe-inline';
    img-src 'self';
    font-src 'self' https:;
    connect-src 'self';
    form-action 'self';
    object-src 'none';
    frame-ancestors 'none';
    base-uri 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `;
  request.headers.set("X-Nonce", nonce);
  request.headers.set("Content-Security-Policy", cspHeader.replace(/\s{2,}/g, " ").trim());

  request.headers.set("X-DNS-Prefetch-Control", "on");
  request.headers.set("X-Content-Type-Options", "nosniff");

  // Admin routes protection
  const pathname = request.nextUrl.pathname.toLowerCase();
  if (!request.auth && pathname.includes("dashboard") && !pathname.includes("login")) {
    return NextResponse.redirect(new URL(`/dashboard/login`, request.url));
  }

  return NextResponse.next({
    headers: request.headers,
  });
});

export const config = {
  runtime: "experimental-edge",
  matcher: [
    {
      source: "/((?!api|_next|.*\\..*).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
