import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { createReadingSubmission } from "@/lib/firebase/db";
import type { ReadingSubmission } from "@/types/submission";

const answeredQuestionSchema = z.object({
  id: z.number().int().positive(),
  type: z.enum(["true-false-ng", "mcq", "fill"]),
  question: z.string().min(1),
  userAnswer: z.string(),
  correctAnswer: z.string().min(1),
  isCorrect: z.boolean(),
});

const schema = z.object({
  passageTitle: z.string().min(1),
  totalQuestions: z.number().int().positive(),
  correctAnswers: z.number().int().min(0),
  bandScore: z.number().min(0).max(9),
  timeTakenSeconds: z.number().int().nonnegative(),
  questions: z.array(answeredQuestionSchema).min(1),
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

    const { passageTitle, totalQuestions, correctAnswers, bandScore, timeTakenSeconds, questions } =
      parsed.data;

    const submissionId = `${session.user.id}_r_${Date.now()}`;
    const submission: ReadingSubmission = {
      id: submissionId,
      uid: session.user.id,
      skill: "reading",
      passageTitle,
      totalQuestions,
      correctAnswers,
      bandScore,
      timeTakenSeconds,
      questions,
      createdAt: new Date().toISOString(),
    };

    await createReadingSubmission(submission);

    return NextResponse.json({ submissionId });
  } catch (error) {
    console.error("[reading/submit]", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
