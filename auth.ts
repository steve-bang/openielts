import NextAuth, { type DefaultSession } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { getUserById, getUserByEmail, buildNewUser, createUser, updateUser } from "@/lib/firebase/db";
import type { UserRole } from "@/types/user";

// Extend NextAuth session type to include uid + role
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: UserRole;
    } & DefaultSession["user"];
  }
}

const credentialsSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google,

    Credentials({
      async authorize(credentials) {
        const parsed = credentialsSchema.safeParse(credentials);
        if (!parsed.success) return null;

        const { email, password } = parsed.data;

        try {
          // Look up user in Firestore by email
          const user = await getUserByEmail(email);
          if (!user) {
            console.error("[auth] No account found for email:", email);
            return null;
          }
          if (!user.isActive) {
            console.error("[auth] User account is inactive:", user.uid);
            return null;
          }
          if (!user.passwordHash) {
            console.error("[auth] No password hash stored for uid:", user.uid);
            return null;
          }

          // Verify password against stored bcrypt hash — no Firebase REST API call
          const valid = await bcrypt.compare(password, user.passwordHash);
          if (!valid) {
            console.error("[auth] Invalid password for uid:", user.uid);
            return null;
          }

          return {
            id: user.uid,
            email: user.email,
            name: user.profile.fullName,
            image: user.profile.avatarUrl,
            role: user.role,
          };
        } catch (err) {
          console.error("[auth] authorize error:", err);
          return null;
        }
      },
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    // Runs on every successful sign-in (all providers)
    async signIn({ user, account }) {
      if (account?.provider === "google" && user.id) {
        const existing = await getUserById(user.id);

        if (existing) {
          // Update avatar and activity timestamp
          await updateUser(user.id, {
            "profile.avatarUrl": user.image ?? null,
            "stats.lastActiveAt": new Date().toISOString(),
          });
        } else {
          // First Google sign-in — create Firestore document
          await createUser(
            buildNewUser(user.id, user.email ?? "", user.name ?? null, "google", user.image ?? null, true)
          );
        }
      }
      return true;
    },

    // Embed id + role into JWT on first creation
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as { role?: UserRole }).role ?? "student";
      }
      return token;
    },

    // Expose id + role on the session object
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.role = (token.role as UserRole) ?? "student";
      return session;
    },
  },

  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
});
