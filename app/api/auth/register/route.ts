import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { adminAuth } from "@/lib/firebase/admin";
import { buildNewUser, createUser, getUserByEmail } from "@/lib/firebase/db";

const registerSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = registerSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const { email, password, fullName } = parsed.data;

    // Check if email already exists in Firestore
    const existing = await getUserByEmail(email);
    if (existing) {
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    // Hash password for Firestore-based credential verification
    const passwordHash = await bcrypt.hash(password, 10);

    // Create Firebase Auth user via Admin SDK (server-side — no client SDK)
    const firebaseUser = await adminAuth.createUser({
      email,
      password,
      displayName: fullName,
      emailVerified: false,
    });

    // Create corresponding Firestore user document (with password hash)
    await createUser(
      buildNewUser(firebaseUser.uid, email, fullName, "email", null, false, passwordHash)
    );

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: unknown) {
    const err = error as { code?: string };

    if (err.code === "auth/email-already-exists") {
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    console.error("[register] error:", error);
    return NextResponse.json(
      { error: "Failed to create account. Please try again." },
      { status: 500 }
    );
  }
}
