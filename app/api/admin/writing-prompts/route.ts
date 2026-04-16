import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireAdmin } from "@/lib/admin-guard";
import { createWritingPrompt, getWritingPrompts } from "@/lib/firebase/db";
import type { WritingPrompt } from "@/types/content";

const schema = z.object({
  title: z.string().min(1),
  taskType: z.enum(["task1", "task2"]),
  prompt: z.string().min(1),
  difficulty: z.enum(["easy", "medium", "hard"]),
  status: z.enum(["active", "draft"]).default("draft"),
});

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  const prompts = await getWritingPrompts(100);
  return NextResponse.json({ prompts });
}

export async function POST(req: NextRequest) {
  const { uid, error } = await requireAdmin();
  if (error) return error;

  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 });
  }

  const now = new Date().toISOString();
  const prompt: WritingPrompt = {
    id: `wp_${Date.now()}`,
    ...parsed.data,
    createdAt: now,
    updatedAt: now,
    createdBy: uid,
  };

  await createWritingPrompt(prompt);
  return NextResponse.json({ prompt }, { status: 201 });
}
