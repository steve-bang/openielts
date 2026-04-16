import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({ email: z.email() });

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // Call Firebase Auth REST API to send a password reset email.
    // Firebase handles email delivery — no third-party email service needed.
    // We always return success regardless of whether the email exists (security best practice).
    await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.FIREBASE_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: parsed.data.email,
        }),
      }
    );

    // Always return success — never reveal whether the email exists
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[forgot-password]", error);
    return NextResponse.json({ success: true }); // Still return success for security
  }
}
