import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { createSpeakingSession } from "@/lib/firebase/db";
import type { SpeakingSession } from "@/types/submission";

const schema = z.object({
  partNumber: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  partTitle: z.string().min(1),
  durationSeconds: z.number().int().nonnegative(),
});

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 });
    }

    const { partNumber, partTitle, durationSeconds } = parsed.data;

    const sessionId = `${session.user.id}_s_${Date.now()}`;
    const speakingSession: SpeakingSession = {
      id: sessionId,
      uid: session.user.id,
      skill: "speaking",
      partNumber,
      partTitle,
      durationSeconds,
      createdAt: new Date().toISOString(),
    };

    await createSpeakingSession(speakingSession);

    return NextResponse.json({ sessionId });
  } catch (error) {
    console.error("[speaking/submit]", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
