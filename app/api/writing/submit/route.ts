import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import Anthropic from "@anthropic-ai/sdk";
import { auth } from "@/auth";
import { createWritingSubmission } from "@/lib/firebase/db";
import type { WritingSubmission } from "@/types/submission";

const schema = z.object({
  taskType: z.enum(["task1", "task2"]),
  prompt: z.string().min(10),
  promptTitle: z.string().min(1),
  essay: z.string().min(50),
  wordCount: z.number().int().positive(),
  timeTakenSeconds: z.number().int().nonnegative(),
});

const criterionSchema = z.object({
  name: z.string(),
  score: z.number().min(0).max(9),
  comment: z.string(),
});

const highlightSchema = z.object({
  text: z.string(),
  type: z.enum(["vocabulary", "grammar", "coherence", "structure"]),
  suggestion: z.string(),
});

const feedbackSchema = z.object({
  overall: z.number().min(0).max(9),
  criteria: z.array(criterionSchema).length(4),
  highlights: z.array(highlightSchema).min(1).max(6),
  summary: z.string(),
});

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are an expert IELTS examiner with 15+ years of experience marking Writing tasks.
You grade essays strictly according to the official IELTS band descriptors (0–9 scale, 0.5 increments).

The four criteria are:
1. Task Achievement (Task 2) / Task Response (Task 1) — Does the essay fully address the task? Is the position clear and supported?
2. Coherence & Cohesion — Is the essay logically organised? Are cohesive devices used effectively?
3. Lexical Resource — Is there a wide range of vocabulary used accurately and appropriately?
4. Grammatical Range & Accuracy — Is there a variety of sentence structures with few errors?

Always return ONLY valid JSON. No preamble, no explanation outside the JSON.`;

function buildUserPrompt(taskType: string, prompt: string, essay: string): string {
  return `Grade this IELTS Writing ${taskType === "task1" ? "Task 1" : "Task 2"} essay.

TASK PROMPT:
${prompt}

STUDENT ESSAY:
${essay}

Return exactly this JSON structure (no markdown, no extra text):
{
  "overall": <number 0-9 in 0.5 increments>,
  "criteria": [
    { "name": "${taskType === "task1" ? "Task Achievement" : "Task Response"}", "score": <0-9>, "comment": "<2-3 sentence specific feedback>" },
    { "name": "Coherence & Cohesion", "score": <0-9>, "comment": "<2-3 sentence specific feedback>" },
    { "name": "Lexical Resource", "score": <0-9>, "comment": "<2-3 sentence specific feedback>" },
    { "name": "Grammatical Range & Accuracy", "score": <0-9>, "comment": "<2-3 sentence specific feedback>" }
  ],
  "highlights": [
    { "text": "<exact phrase from the essay>", "type": "<vocabulary|grammar|coherence|structure>", "suggestion": "<specific improvement>" }
  ],
  "summary": "<3-4 sentence overall summary with key strengths and the single most important area to improve>"
}

Rules:
- "highlights" must reference exact phrases from the essay (2–4 highlights)
- "overall" is the mean of the four criteria scores, rounded to the nearest 0.5
- Be honest and precise — do not inflate scores`;
}

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

    const { taskType, prompt, promptTitle, essay, wordCount, timeTakenSeconds } = parsed.data;

    // Call Claude for grading
    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        { role: "user", content: buildUserPrompt(taskType, prompt, essay) },
      ],
    });

    const firstBlock = message.content[0];
    const rawText = firstBlock?.type === "text" ? firstBlock.text : "";

    let parsedJson: unknown;
    try {
      parsedJson = JSON.parse(rawText);
    } catch {
      return NextResponse.json({ error: "Failed to parse AI feedback." }, { status: 502 });
    }

    const feedbackResult = feedbackSchema.safeParse(parsedJson);
    if (!feedbackResult.success) {
      console.error("[writing/submit] Invalid feedback schema", feedbackResult.error.issues);
      return NextResponse.json({ error: "AI returned unexpected feedback format." }, { status: 502 });
    }
    const feedback = feedbackResult.data;

    // Save to Firestore
    const submissionId = `${session.user.id}_${Date.now()}`;
    const submission: WritingSubmission = {
      id: submissionId,
      uid: session.user.id,
      skill: "writing",
      taskType,
      prompt,
      promptTitle,
      essay,
      wordCount,
      timeTakenSeconds,
      feedback,
      createdAt: new Date().toISOString(),
    };

    await createWritingSubmission(submission);

    return NextResponse.json({ feedback, submissionId });
  } catch (error) {
    console.error("[writing/submit]", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
