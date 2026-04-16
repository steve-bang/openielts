import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireAdmin } from "@/lib/admin-guard";
import { setContentStatus, deleteContent } from "@/lib/firebase/db";

const patchSchema = z.object({
  contentType: z.enum(["reading", "writing", "listening", "speaking"]),
  status: z.enum(["active", "draft"]),
});

const deleteSchema = z.object({
  contentType: z.enum(["reading", "writing", "listening", "speaking"]),
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

  await setContentStatus(parsed.data.contentType, id, parsed.data.status);
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest, { params }: Params) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { id } = await params;
  const body = await req.json();
  const parsed = deleteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 });
  }

  await deleteContent(parsed.data.contentType, id);
  return NextResponse.json({ ok: true });
}
