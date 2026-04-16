import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireAdmin } from "@/lib/admin-guard";
import { createListeningSection, getListeningSections } from "@/lib/firebase/db";
import type { ListeningSection } from "@/types/content";

const questionSchema = z.object({
  id: z.number().int().positive(),
  type: z.enum(["true-false-ng", "mcq", "fill"]),
  question: z.string().min(1),
  options: z.array(z.string()).optional(),
  correct: z.string().optional(),
  answer: z.string().optional(),
});

const schema = z.object({
  title: z.string().min(1),
  transcript: z.string().min(1),
  audioUrl: z.string().nullable().default(null),
  questions: z.array(questionSchema).min(1),
  difficulty: z.enum(["easy", "medium", "hard"]),
  status: z.enum(["active", "draft"]).default("draft"),
});

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;
  const sections = await getListeningSections(100);
  return NextResponse.json({ sections });
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
  const section: ListeningSection = {
    id: `ls_${Date.now()}`,
    ...parsed.data,
    createdAt: now,
    updatedAt: now,
    createdBy: uid,
  };

  await createListeningSection(section);
  return NextResponse.json({ section }, { status: 201 });
}
