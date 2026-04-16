import Link from "next/link";
import { auth } from "@/auth";
import { getUserById, getSubmissionStats, getWritingSubmissions } from "@/lib/firebase/db";
import {
  Plus, FolderOpen, ClipboardList, TrendingUp, Award, BookOpen,
  ArrowUpRight, PenLine, BarChart2, Flame, Target, FileText,
} from "lucide-react";
import type { WritingSubmission } from "@/types/submission";

function daysSince(isoDate: string): number {
  return Math.max(0, Math.floor((Date.now() - new Date(isoDate).getTime()) / 86_400_000));
}

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function scoreColor(score: number): string {
  if (score >= 7.5) return "text-green-600";
  if (score >= 6.5) return "text-amber-600";
  return "text-red-500";
}

export default async function DashboardPage() {
  const session = await auth();
  const uid = session?.user?.id;
  const firstName = session?.user?.name?.split(" ")[0] ?? session?.user?.email ?? "there";

  const [user, stats, recent] = await Promise.all([
    uid ? getUserById(uid) : null,
    uid ? getSubmissionStats(uid) : null,
    uid ? getWritingSubmissions(uid, 5) : ([] as WritingSubmission[]),
  ]);

  const memberDays = user?.createdAt ? daysSince(user.createdAt) : 0;
  const latestSubmission = recent[0] ?? null;

  const KPI = [
    {
      label: "Submissions",
      value: stats?.totalCount ?? 0,
      sub: "writing practice sessions",
      icon: ClipboardList,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Avg Band Score",
      value: stats?.avgScore == null ? "—" : stats.avgScore.toFixed(1),
      sub: "across all writing",
      icon: BarChart2,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      label: "Best Score",
      value: stats?.bestScore == null ? "—" : stats.bestScore.toFixed(1),
      sub: "personal best",
      icon: Award,
      color: "bg-green-50 text-green-600",
    },
    {
      label: "Study Streak",
      value: `${user?.stats.streak ?? 0}d`,
      sub: "consecutive days",
      icon: Flame,
      color: "bg-orange-50 text-orange-500",
    },
    {
      label: "Words Written",
      value: stats?.totalWords ? stats.totalWords.toLocaleString() : "0",
      sub: "total across essays",
      icon: FileText,
      color: "bg-purple-50 text-purple-600",
    },
    {
      label: "Member Days",
      value: memberDays,
      sub: "days since joining",
      icon: Target,
      color: "bg-red-50 text-[#D32F2F]",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-500 text-sm mt-1">
            Welcome back, {firstName} — Here&apos;s what&apos;s happening today.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/practice/writing">
            <button className="flex items-center gap-2 gradient-bg text-white px-4 py-2 rounded-xl text-sm font-semibold hover:opacity-90 transition">
              <Plus className="w-4 h-4" /> Start Writing
            </button>
          </Link>
          <Link href="/progress">
            <button className="flex items-center gap-2 border border-gray-200 bg-white text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 transition">
              <BarChart2 className="w-4 h-4" /> View Progress
            </button>
          </Link>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {KPI.map((k) => {
          const Icon = k.icon;
          return (
            <div key={k.label} className="bg-white rounded-2xl shadow-sm p-4 hover:-translate-y-0.5 hover:shadow-md transition-all">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${k.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <p className="text-2xl font-extrabold text-gray-900">{k.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{k.label}</p>
              <p className="text-xs text-gray-400 mt-0.5 leading-tight">{k.sub}</p>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Writing Sessions */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-gray-800 flex items-center gap-2">
              <PenLine className="w-4 h-4 text-[#D32F2F]" /> Recent Writing Sessions
            </h2>
            <Link href="/progress" className="text-xs text-[#D32F2F] font-medium flex items-center gap-1 hover:underline">
              View all <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          {recent.length === 0 ? (
            <div className="text-center py-10">
              <PenLine className="w-10 h-10 text-gray-200 mx-auto mb-3" />
              <p className="text-sm font-medium text-gray-500">No practice sessions yet</p>
              <p className="text-xs text-gray-400 mt-1">Submit your first essay to see results here</p>
              <Link href="/practice/writing">
                <button className="mt-4 gradient-bg text-white px-4 py-2 rounded-xl text-sm font-semibold hover:opacity-90 transition">
                  Start Practicing
                </button>
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {recent.map((sub) => (
                <div key={sub.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-amber-50 text-amber-600">
                    <PenLine className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-800 text-sm truncate">
                      {sub.taskType === "task1" ? "Task 1" : "Task 2"} — {sub.promptTitle}
                    </p>
                    <p className="text-xs text-gray-400">
                      {sub.wordCount} words · {formatDate(sub.createdAt)}
                    </p>
                  </div>
                  <span className={`text-lg font-extrabold ${scoreColor(sub.feedback.overall)}`}>
                    {sub.feedback.overall.toFixed(1)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Latest Feedback Breakdown */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="font-bold text-gray-800 mb-5 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#D32F2F]" /> Latest Breakdown
          </h2>

          {latestSubmission ? (
            <div className="space-y-4">
              <div className="text-center bg-linear-to-br from-[#D32F2F] to-[#E57373] rounded-xl p-3 text-white mb-4">
                <p className="text-xs text-red-200">Band Score</p>
                <p className="text-3xl font-extrabold">{latestSubmission.feedback.overall.toFixed(1)}</p>
              </div>
              {latestSubmission.feedback.criteria.map((c) => (
                <div key={c.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-medium text-gray-700 truncate pr-2">{c.name}</span>
                    <span className="font-bold text-[#D32F2F] shrink-0">{c.score}</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full">
                    <div
                      className="h-full gradient-bg rounded-full"
                      style={{ width: `${(c.score / 9) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
              <Link href="/practice/writing">
                <button className="w-full mt-2 border border-gray-200 text-gray-600 px-4 py-2 rounded-xl text-xs font-medium hover:bg-gray-50 transition">
                  Practice Again
                </button>
              </Link>
            </div>
          ) : (
            <div className="text-center py-8">
              <BookOpen className="w-10 h-10 text-gray-200 mx-auto mb-3" />
              <p className="text-sm text-gray-500">Submit an essay to see your breakdown</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Writing Task 2", href: "/practice/writing", icon: PenLine, color: "from-amber-400 to-amber-600" },
            { label: "Reading Practice", href: "/practice/reading", icon: BookOpen, color: "from-purple-400 to-purple-600" },
            { label: "Manage Tests", href: "/dashboard/tests", icon: FolderOpen, color: "from-sky-400 to-sky-600" },
            { label: "View Progress", href: "/progress", icon: BarChart2, color: "from-[#D32F2F] to-[#E57373]" },
          ].map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.label} href={action.href}>
                <div className={`bg-linear-to-br ${action.color} rounded-xl p-4 text-white cursor-pointer hover:opacity-90 transition hover:-translate-y-0.5`}>
                  <Icon className="w-5 h-5 mb-3 opacity-90" />
                  <p className="text-sm font-semibold">{action.label}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
