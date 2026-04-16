import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireAdmin } from "@/lib/admin-guard";
import { updateReadingPassage, deleteReadingPassage } from "@/lib/firebase/db";

const patchSchema = z.object({
  title: z.string().min(1).optional(),
  text: z.string().min(1).optional(),
  difficulty: z.enum(["easy", "medium", "hard"]).optional(),
  status: z.enum(["active", "draft"]).optional(),
});

type Params = { params: Promise<{ id: string }> };

export async function PATCH(req: NextRequest, { params }: Params) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { id } = await params;
  const body = await req.json();
  const parsed = patchSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 });
  }

  await updateReadingPassage(id, parsed.data);
  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { id } = await params;
  await deleteReadingPassage(id);
  return NextResponse.json({ ok: true });
}
