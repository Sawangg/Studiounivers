import NextAuth from "next-auth";
import type { NextAuthConfig, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// TODO: Remove this file and merge it with @lib/auth.ts once postgres.js supports edge runtime
export const config = {
  providers: [
    CredentialsProvider({
      async authorize(credentials, request) {
        const authResponse = await fetch(`${request.url}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });
        if (!authResponse.ok) return null;
        const user = (await authResponse.json()) as User;
        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;

export const { auth: authMiddleware } = NextAuth(config);
