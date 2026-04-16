import { auth } from "@/auth";
import { getUserById, getWritingSubmissions, getWritingSubmissionsSince } from "@/lib/firebase/db";
import { TrendingUp, PenLine, BookOpen, Headphones, Mic, Calendar, Target, Award, FileText, Zap } from "lucide-react";
import type { WritingSubmission } from "@/types/submission";
import RangeFilter from "./RangeFilter";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function sinceDate(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString();
}

function round5(n: number): number {
  return Math.round(n * 2) / 2;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

/** Build last-N-days array of { day, score | null }. */
function buildWeeklyChart(submissions: WritingSubmission[]) {
  const dailyMap = new Map<string, number[]>();
  for (const s of submissions) {
    const day = s.createdAt.slice(0, 10); // YYYY-MM-DD
    const bucket = dailyMap.get(day) ?? [];
    bucket.push(s.feedback.overall);
    dailyMap.set(day, bucket);
  }

  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    const key = d.toISOString().slice(0, 10);
    const label = d.toLocaleDateString("en", { weekday: "short" });
    const bucket = dailyMap.get(key);
    const score = bucket ? round5(bucket.reduce((a, b) => a + b, 0) / bucket.length) : null;
    return { day: label, score };
  });
}

// ─── Page ─────────────────────────────────────────────────────────────────────

type Props = { searchParams: Promise<{ range?: string }> };

export default async function ProgressPage({ searchParams }: Props) {
  const { range } = await searchParams;
  const days = range === "90" ? 90 : range === "all" ? null : 30;

  const session = await auth();
  const uid = session?.user?.id;

  const [user, rangedSubmissions, recentSubmissions] = await Promise.all([
    uid ? getUserById(uid) : null,
    uid
      ? days === null
        ? getWritingSubmissions(uid, 200)
        : getWritingSubmissionsSince(uid, sinceDate(days))
      : ([] as WritingSubmission[]),
    uid ? getWritingSubmissions(uid, 10) : ([] as WritingSubmission[]),
  ]);

  // ── Computed values ──────────────────────────────────────────────────────────
  const scores = rangedSubmissions.map((s) => s.feedback.overall);
  const overallBand = scores.length > 0 ? round5(scores.reduce((a, b) => a + b, 0) / scores.length) : null;
  const totalWords = rangedSubmissions.reduce((sum, s) => sum + s.wordCount, 0);

  // Writing avg across all-time for skill card
  const allScores = recentSubmissions.map((s) => s.feedback.overall);
  const writingAvg = allScores.length > 0
    ? round5(allScores.reduce((a, b) => a + b, 0) / allScores.length)
    : null;

  const weeklyChart = buildWeeklyChart(recentSubmissions); // always last 7 days
  const maxChartScore = 9;

  const targetBand = user?.profile.targetBand ?? null;
  const targetGap = overallBand != null && targetBand != null
    ? round5(targetBand - overallBand)
    : null;

  const SKILL_CARDS = [
    {
      skill: "Writing",
      icon: PenLine,
      current: writingAvg,
      color: "bg-amber-500",
      available: true,
    },
    { skill: "Reading", icon: BookOpen, current: null, color: "bg-purple-500", available: false },
    { skill: "Listening", icon: Headphones, current: null, color: "bg-sky-500", available: false },
    { skill: "Speaking", icon: Mic, current: null, color: "bg-[#D32F2F]", available: false },
  ];

  return (
    <div className="max-w-5xl space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Progress Tracking</h1>
          <p className="text-gray-500 text-sm mt-1">Monitor your IELTS improvement over time</p>
        </div>
        <RangeFilter current={range ?? "30"} />
      </div>

      {/* Overall band banner */}
      <div className="gradient-bg rounded-2xl p-6 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="text-red-100 text-sm mb-1">Overall Estimated Band</p>
          <div className="flex items-end gap-2">
            <span className="text-6xl font-extrabold">
              {overallBand != null ? overallBand.toFixed(1) : "—"}
            </span>
            {targetBand != null && (
              <div className="pb-2">
                <p className="text-red-200 text-xs">Target: {targetBand.toFixed(1)}</p>
                {targetGap != null && (
                  <p className={`text-sm font-semibold ${targetGap <= 0 ? "text-green-300" : "text-red-200"}`}>
                    {targetGap <= 0 ? "Goal reached!" : `${targetGap.toFixed(1)} to go`}
                  </p>
                )}
              </div>
            )}
          </div>
          {scores.length === 0 && (
            <p className="text-red-200 text-sm mt-2">Submit your first essay to start tracking</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Streak", value: `${user?.stats.streak ?? 0}d`, icon: Zap },
            { label: "Sessions", value: scores.length, icon: Award },
            { label: "Words", value: totalWords > 0 ? totalWords.toLocaleString() : "0", icon: FileText },
            {
              label: "Target Gap",
              value: targetGap != null ? (targetGap <= 0 ? "✓" : `−${targetGap.toFixed(1)}`) : "—",
              icon: Target,
            },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="bg-white/10 rounded-xl px-4 py-3 text-center">
                <Icon className="w-4 h-4 mx-auto text-red-200 mb-1" />
                <p className="text-lg font-bold">{s.value}</p>
                <p className="text-xs text-red-200">{s.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Skill breakdown */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SKILL_CARDS.map((s) => {
          const Icon = s.icon;
          const pct = s.current != null ? (s.current / maxChartScore) * 100 : 0;
          return (
            <div key={s.skill} className="bg-white rounded-2xl shadow-sm p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-gray-600" />
                  <span className="font-semibold text-gray-800 text-sm">{s.skill}</span>
                </div>
                {s.available ? (
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-green-50 text-green-700">
                    Active
                  </span>
                ) : (
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-gray-100 text-gray-400">
                    Soon
                  </span>
                )}
              </div>
              {s.available && s.current != null ? (
                <>
                  <div className="flex items-end gap-1 mb-3">
                    <span className="text-3xl font-extrabold text-gray-900">{s.current.toFixed(1)}</span>
                    <span className="text-sm text-gray-400 pb-1">/ 9</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${s.color} rounded-full`} style={{ width: `${pct}%` }} />
                  </div>
                  {targetBand != null && (
                    <div className="flex justify-between mt-2 text-xs text-gray-400">
                      <span>Current</span>
                      <span className="text-gray-600 font-medium">Target: {targetBand.toFixed(1)}</span>
                    </div>
                  )}
                </>
              ) : (
                <div className="mt-2">
                  <p className="text-2xl font-extrabold text-gray-300">—</p>
                  <p className="text-xs text-gray-400 mt-1">No data yet</p>
                  <div className="w-full h-2 bg-gray-100 rounded-full mt-3" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Weekly chart */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="font-bold text-gray-800 mb-5 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-[#D32F2F]" /> Band Score — Last 7 Days
        </h2>
        {weeklyChart.every((d) => d.score === null) ? (
          <p className="text-sm text-gray-400 text-center py-8">No submissions in the last 7 days</p>
        ) : (
          <div className="flex items-end gap-3 h-32">
            {weeklyChart.map((d) => {
              const h = d.score != null ? (d.score / maxChartScore) * 100 : 0;
              return (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                  {d.score != null && (
                    <span className="text-xs font-medium text-gray-600">{d.score.toFixed(1)}</span>
                  )}
                  <div
                    className={`w-full rounded-t-lg transition-all ${d.score != null ? "gradient-bg opacity-80 hover:opacity-100" : "bg-gray-100"}`}
                    style={{ height: d.score != null ? `${h}%` : "8px" }}
                  />
                  <span className="text-xs text-gray-400">{d.day}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Recent submissions */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="font-bold text-gray-800 mb-5 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#D32F2F]" /> Recent Submissions
        </h2>
        {recentSubmissions.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-8">No submissions yet — start practicing!</p>
        ) : (
          <div className="space-y-3">
            {recentSubmissions.map((sub) => (
              <div key={sub.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-amber-50 text-amber-600">
                  <PenLine className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-800 text-sm truncate">
                    {sub.taskType === "task1" ? "Task 1" : "Task 2"} — {sub.promptTitle}
                  </p>
                  <p className="text-xs text-gray-400">{formatDate(sub.createdAt)} · {sub.wordCount} words</p>
                </div>
                <span className="text-xs text-gray-400 hidden sm:block">AI Feedback</span>
                <span className="font-bold text-lg text-gray-900 w-12 text-right">
                  {sub.feedback.overall.toFixed(1)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
