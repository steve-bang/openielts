import Link from "next/link";
import { Plus, BookOpen, PenLine, Headphones, Mic, Edit } from "lucide-react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import {
  getReadingPassages,
  getWritingPrompts,
  getListeningSections,
  getSpeakingParts,
} from "@/lib/firebase/db";
import SectionActions from "./SectionActions";

const ADMIN_ROLES = new Set(["admin", "teacher", "super_admin"]);

// ─── Section card ─────────────────────────────────────────────────────────────

interface SectionCardProps {
  readonly id: string;
  readonly contentType: "reading" | "writing" | "listening" | "speaking";
  readonly title: string;
  readonly subtitle: string;
  readonly status: "active" | "draft";
  readonly difficulty: string;
  readonly createdAt: string;
}

function SectionCard({
  id,
  contentType,
  title,
  subtitle,
  status,
  difficulty,
  createdAt,
}: SectionCardProps) {
  const iconMap = {
    reading: <BookOpen className="w-4 h-4" />,
    writing: <PenLine className="w-4 h-4" />,
    listening: <Headphones className="w-4 h-4" />,
    speaking: <Mic className="w-4 h-4" />,
  };

  const colorMap = {
    reading: "bg-purple-50 text-purple-700",
    writing: "bg-amber-50 text-amber-700",
    listening: "bg-sky-50 text-sky-700",
    speaking: "bg-red-50 text-[#D32F2F]",
  };

  const date = new Date(createdAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 hover:-translate-y-0.5 hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-3">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${colorMap[contentType]}`}>
          {iconMap[contentType]}
        </div>
        <span
          className={`text-xs px-2 py-0.5 rounded-full font-medium ${
            status === "active" ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-600"
          }`}
        >
          {status}
        </span>
      </div>

      <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 mb-1">{title}</h3>
      <p className="text-xs text-gray-400 mb-1 capitalize">{subtitle}</p>
      <p className="text-xs text-gray-400 mb-4">
        {difficulty} · {date}
      </p>

      <div className="flex gap-2">
        <Link
          href={`/dashboard/tests/create?edit=${id}&type=${contentType}`}
          className="flex items-center gap-1.5 flex-1 justify-center py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50 transition"
        >
          <Edit className="w-3 h-3" /> Edit
        </Link>
        <SectionActions id={id} contentType={contentType} />
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function TestSectionsPage() {
  const session = await auth();
  if (!ADMIN_ROLES.has(session?.user?.role ?? "")) {
    redirect("/dashboard");
  }

  const [passages, prompts, sections, parts] = await Promise.all([
    getReadingPassages(50),
    getWritingPrompts(50),
    getListeningSections(50),
    getSpeakingParts(50),
  ]);

  const groups = [
    {
      label: "Reading Passages",
      contentType: "reading" as const,
      color: "text-purple-700",
      items: passages.map((p) => ({
        id: p.id,
        title: p.title,
        subtitle: `${p.questions.length} questions`,
        status: p.status,
        difficulty: p.difficulty,
        createdAt: p.createdAt,
      })),
    },
    {
      label: "Writing Prompts",
      contentType: "writing" as const,
      color: "text-amber-700",
      items: prompts.map((p) => ({
        id: p.id,
        title: p.title,
        subtitle: p.taskType === "task1" ? "Task 1" : "Task 2",
        status: p.status,
        difficulty: p.difficulty,
        createdAt: p.createdAt,
      })),
    },
    {
      label: "Listening Sections",
      contentType: "listening" as const,
      color: "text-sky-700",
      items: sections.map((s) => ({
        id: s.id,
        title: s.title,
        subtitle: `${s.questions.length} questions`,
        status: s.status,
        difficulty: s.difficulty,
        createdAt: s.createdAt,
      })),
    },
    {
      label: "Speaking Parts",
      contentType: "speaking" as const,
      color: "text-red-700",
      items: parts.map((p) => ({
        id: p.id,
        title: p.title,
        subtitle: `Part ${p.partNumber}`,
        status: p.status,
        difficulty: p.difficulty,
        createdAt: p.createdAt,
      })),
    },
  ];

  const total = passages.length + prompts.length + sections.length + parts.length;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Content Library</h1>
          <p className="text-sm text-gray-500 mt-1">{total} items across all sections</p>
        </div>
        <Link href="/dashboard/tests/create">
          <button className="flex items-center gap-2 gradient-bg text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition">
            <Plus className="w-4 h-4" /> Add Content
          </button>
        </Link>
      </div>

      {groups.map((group) => (
        <div key={group.contentType}>
          <div className="flex items-center justify-between mb-3">
            <h2 className={`font-bold text-sm uppercase tracking-wide ${group.color}`}>
              {group.label} ({group.items.length})
            </h2>
          </div>

          {group.items.length === 0 ? (
            <div className="bg-white rounded-2xl border border-dashed border-gray-200 p-8 text-center">
              <p className="text-sm text-gray-400">No {group.label.toLowerCase()} yet.</p>
              <Link href={`/dashboard/tests/create?type=${group.contentType}`}>
                <button className="mt-2 text-xs text-[#D32F2F] font-medium hover:underline">
                  Create one →
                </button>
              </Link>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.items.map((item) => (
                <SectionCard key={item.id} contentType={group.contentType} {...item} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
