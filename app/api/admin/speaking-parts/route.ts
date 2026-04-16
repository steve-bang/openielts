import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireAdmin } from "@/lib/admin-guard";
import { createSpeakingPart, getSpeakingParts } from "@/lib/firebase/db";
import type { SpeakingPart } from "@/types/content";

const cueCardSchema = z.object({
  topic: z.string().min(1),
  points: z.array(z.string().min(1)).min(1),
});

const schema = z.object({
  title: z.string().min(1),
  partNumber: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  questions: z.array(z.string()).default([]),
  cueCard: cueCardSchema.nullable().default(null),
  difficulty: z.enum(["easy", "medium", "hard"]),
  status: z.enum(["active", "draft"]).default("draft"),
});

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;
  const parts = await getSpeakingParts(100);
  return NextResponse.json({ parts });
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
  const part: SpeakingPart = {
    id: `sp_${Date.now()}`,
    ...parsed.data,
    createdAt: now,
    updatedAt: now,
    createdBy: uid,
  };

  await createSpeakingPart(part);
  return NextResponse.json({ part }, { status: 201 });
}
