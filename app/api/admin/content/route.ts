import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-guard";
import { getAllContent, getContentStatusCounts } from "@/lib/firebase/db";

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  const [content, counts] = await Promise.all([getAllContent(30), getContentStatusCounts()]);
  return NextResponse.json({ content, counts });
}
