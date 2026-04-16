import Link from "next/link";
import { Plus } from "lucide-react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getAllContent, getContentStatusCounts } from "@/lib/firebase/db";
import TestsTable from "./TestsTable";

const ADMIN_ROLES = ["admin", "teacher", "super_admin"];

export default async function TestsPage() {
  const session = await auth();
  if (!ADMIN_ROLES.includes(session?.user?.role ?? "")) {
    redirect("/dashboard");
  }

  const [content, counts] = await Promise.all([
    getAllContent(50),
    getContentStatusCounts(),
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage Content</h1>
          <p className="text-sm text-gray-500 mt-1">{counts.total} items total</p>
        </div>
        <Link href="/dashboard/tests/create">
          <button className="flex items-center gap-2 gradient-bg text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition">
            <Plus className="w-4 h-4" /> Create Content
          </button>
        </Link>
      </div>

      {/* Counts */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: "Reading", count: counts.reading, color: "text-purple-700 bg-purple-50" },
          { label: "Writing", count: counts.writing, color: "text-amber-700 bg-amber-50" },
          { label: "Listening", count: counts.listening, color: "text-sky-700 bg-sky-50" },
          { label: "Speaking", count: counts.speaking, color: "text-red-700 bg-red-50" },
        ].map((c) => (
          <div key={c.label} className={`rounded-2xl px-4 py-3 ${c.color}`}>
            <p className="text-2xl font-extrabold">{c.count}</p>
            <p className="text-xs font-medium mt-0.5">{c.label}</p>
          </div>
        ))}
      </div>

      <TestsTable initialContent={content} />
    </div>
  );
}
