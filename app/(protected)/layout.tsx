import Sidebar from "@/components/layout/Sidebar";
import { auth } from "@/auth";
import { Bell, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function getInitials(name: string | null | undefined, email: string | null | undefined): string {
  if (name) {
    const parts = name.trim().split(" ");
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return parts[0].slice(0, 2).toUpperCase();
  }
  return email ? email[0].toUpperCase() : "U";
}

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const user = session?.user;
  const initials = getInitials(user?.name, user?.email);
  const displayName = user?.name ?? user?.email ?? "My Account";

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-30">
          <div className="flex items-center gap-3 w-72">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-100 rounded-lg px-3 py-2 text-sm w-full outline-none focus:ring-2 focus:ring-[#D32F2F]/20"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#D32F2F] rounded-full" />
            </button>
            <Link href="/profile" className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition">
              {user?.image ? (
                <Image src={user.image} alt={displayName} width={32} height={32} className="w-8 h-8 rounded-full object-cover" />
              ) : (
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#D32F2F] to-[#E57373] flex items-center justify-center text-white text-xs font-bold">
                  {initials}
                </div>
              )}
              <span className="text-sm font-medium text-gray-700 max-w-[120px] truncate">{displayName}</span>
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
