import Link from "next/link";
import { PenLine, BookOpen, Headphones, Mic, ArrowRight, Clock, ChevronRight, Activity } from "lucide-react";
import { auth } from "@/auth";
import {
  getSubmissionStats,
  getReadingStats,
  getListeningStats,
  getSpeakingSessionCount,
  getRecentAllSubmissions,
} from "@/lib/firebase/db";
import type { AnySubmission } from "@/types/submission";

// ─── Helpers ───────────────────────────────────────────────────────────────────

function formatRelativeDate(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  return `${days} days ago`;
}

function getSubmissionTitle(s: AnySubmission): string {
  if (s.skill === "writing") return s.promptTitle;
  if (s.skill === "reading") return s.passageTitle;
  if (s.skill === "listening") return s.sectionTitle;
  return s.partTitle;
}

function getSubmissionScore(s: AnySubmission): number | null {
  if (s.skill === "writing") return s.feedback.overall;
  if (s.skill === "reading" || s.skill === "listening") return s.bandScore;
  return null;
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function PracticeHomePage() {
  const session = await auth();
  const uid = session?.user?.id ?? null;

  const [writingStats, readingStats, listeningStats, speakingCount, recent] = await Promise.all([
    uid ? getSubmissionStats(uid) : null,
    uid ? getReadingStats(uid) : null,
    uid ? getListeningStats(uid) : null,
    uid ? getSpeakingSessionCount(uid) : 0,
    uid ? getRecentAllSubmissions(uid, 5) : ([] as AnySubmission[]),
  ]);

  const modules = [
    {
      key: "writing",
      label: "Writing",
      icon: PenLine,
      desc: "AI-powered essay feedback for Task 1 & 2",
      href: "/practice/writing",
      color: "from-amber-400 to-orange-500",
      badge: "Most Popular" as string | null,
      count: writingStats?.totalCount ?? 0,
      best: writingStats?.bestScore ?? null,
    },
    {
      key: "reading",
      label: "Reading",
      icon: BookOpen,
      desc: "Authentic passages with all question types",
      href: "/practice/reading",
      color: "from-purple-400 to-purple-600",
      badge: null,
      count: readingStats?.totalCount ?? 0,
      best: readingStats?.bestScore ?? null,
    },
    {
      key: "listening",
      label: "Listening",
      icon: Headphones,
      desc: "Real exam-style audio with transcripts",
      href: "/practice/listening",
      color: "from-sky-400 to-sky-600",
      badge: null,
      count: listeningStats?.totalCount ?? 0,
      best: listeningStats?.bestScore ?? null,
    },
    {
      key: "speaking",
      label: "Speaking",
      icon: Mic,
      desc: "Practice all 3 parts — AI evaluation coming soon",
      href: "/practice/speaking",
      color: "from-[#D32F2F] to-[#E57373]",
      badge: "New" as string | null,
      count: speakingCount,
      best: null,
    },
  ];

  const skillIconMap: Record<string, React.ReactNode> = {
    writing: <PenLine className="w-4 h-4" />,
    reading: <BookOpen className="w-4 h-4" />,
    listening: <Headphones className="w-4 h-4" />,
    speaking: <Mic className="w-4 h-4" />,
  };

  const skillColorMap: Record<string, string> = {
    writing: "bg-amber-50 text-amber-600",
    reading: "bg-purple-50 text-purple-600",
    listening: "bg-sky-50 text-sky-600",
    speaking: "bg-red-50 text-red-600",
  };

  return (
    <div className="max-w-5xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Practice</h1>
          <p className="text-sm text-gray-500 mt-1">Choose a module to start practising</p>
        </div>
        <div className="flex items-center gap-2 bg-gray-50 text-gray-600 px-3 py-1.5 rounded-xl text-sm font-medium border border-gray-100">
          <Activity className="w-4 h-4" />
          {(writingStats?.totalCount ?? 0) +
            (readingStats?.totalCount ?? 0) +
            (listeningStats?.totalCount ?? 0) +
            speakingCount}{" "}
          sessions total
        </div>
      </div>

      {/* Module cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {modules.map((mod) => {
          const Icon = mod.icon;
          return (
            <Link key={mod.key} href={mod.href}>
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer group">
                <div className={`bg-linear-to-br ${mod.color} p-6 relative`}>
                  {mod.badge && (
                    <span className="absolute top-3 right-3 text-xs bg-white/20 text-white px-2 py-0.5 rounded-full font-medium">
                      {mod.badge}
                    </span>
                  )}
                  <Icon className="w-8 h-8 text-white mb-2" />
                  <h3 className="text-xl font-bold text-white">{mod.label}</h3>
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-3">{mod.desc}</p>
                  <div className="flex justify-between text-xs text-gray-600 mb-3">
                    <span>
                      <span className="font-semibold text-gray-900">{mod.count}</span>{" "}
                      {mod.key === "speaking" ? "sessions" : "tests"}
                    </span>
                    {mod.best != null ? (
                      <span>
                        Best:{" "}
                        <span className="font-semibold text-gray-900">{mod.best}</span>
                      </span>
                    ) : (
                      <span className="text-gray-400">No score yet</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#D32F2F] font-medium group-hover:gap-2 transition-all">
                    Start practice <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Recent activity */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#D32F2F]" /> Recent Practice
          </h2>
          <Link
            href="/progress"
            className="text-xs text-[#D32F2F] font-medium flex items-center gap-1 hover:underline"
          >
            View all <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        {recent.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-6">
            No practice sessions yet — start with any module above.
          </p>
        ) : (
          <div className="space-y-3">
            {recent.map((s) => {
              const score = getSubmissionScore(s);
              return (
                <div
                  key={s.id}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition"
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${skillColorMap[s.skill]}`}
                  >
                    {skillIconMap[s.skill]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">
                      {getSubmissionTitle(s)}
                    </p>
                    <p className="text-xs text-gray-400">
                      {s.skill.charAt(0).toUpperCase() + s.skill.slice(1)} ·{" "}
                      {formatRelativeDate(s.createdAt)}
                    </p>
                  </div>
                  {score != null && (
                    <span className="text-lg font-extrabold text-gray-900 shrink-0">
                      {score}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
