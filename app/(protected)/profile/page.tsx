import { auth } from "@/auth";
import { getUserById, toPublicUser } from "@/lib/firebase/db";
import ProfileClient from "@/components/profile/ProfileClient";

function formatMemberSince(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}

export default async function ProfilePage() {
  const session = await auth();
  const uid = session?.user?.id;
  const email = session?.user?.email ?? "";

  const userDoc = uid ? await getUserById(uid) : null;
  const user = userDoc ? toPublicUser(userDoc) : null;
  const memberSince = userDoc?.createdAt ? formatMemberSince(userDoc.createdAt) : "—";

  return <ProfileClient user={user} email={email} memberSince={memberSince} />;
}
