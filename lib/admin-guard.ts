import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { UserRole } from "@/types/user";

const ADMIN_ROLES: UserRole[] = ["admin", "teacher", "super_admin"];

/**
 * Verify that the current request comes from an admin/teacher.
 * Returns { uid } on success, or a NextResponse 401/403 on failure.
 */
export async function requireAdmin(): Promise<
  { uid: string; error: null } | { uid: null; error: NextResponse }
> {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      uid: null,
      error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
    };
  }

  if (!ADMIN_ROLES.includes(session.user.role as UserRole)) {
    return {
      uid: null,
      error: NextResponse.json({ error: "Forbidden" }, { status: 403 }),
    };
  }

  return { uid: session.user.id, error: null };
}
