import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { getUserById, toPublicUser } from "@/lib/firebase/db";

export async function GET() {
  // Session is verified server-side — no Firebase call from the client
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await getUserById(session.user.id);
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(toPublicUser(user));
}

export async function PATCH(req: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  // Only allow updating safe profile fields — never role, uid, email
  const allowed = ["profile.fullName", "profile.targetBand", "profile.currentBand", "profile.nationality", "profile.bio", "profile.timezone", "profile.languageCode"];
  const update: Record<string, unknown> = {};

  for (const key of allowed) {
    const shortKey = key.split(".")[1];
    if (shortKey && shortKey in (body.profile ?? {})) {
      update[key] = body.profile[shortKey];
    }
  }

  if (Object.keys(update).length === 0) {
    return NextResponse.json({ error: "No valid fields to update" }, { status: 400 });
  }

  const { updateUser } = await import("@/lib/firebase/db");
  await updateUser(session.user.id, update);

  return NextResponse.json({ success: true });
}
