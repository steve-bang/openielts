import type { Metadata } from "next";
import { Award, BookOpen, PenLine, Headphones, Mic, MessageSquare, ThumbsUp, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Public Profile — OpenIELTS",
};

const ACTIVITY = [
  { type: "writing", title: "Task 2 — Technology & Society", score: 7.5, date: "Apr 9, 2026" },
  { type: "forum", title: "Replied to 'How to improve coherence in Writing Task 2'", score: null, date: "Apr 8, 2026" },
  { type: "reading", title: "Academic Reading — Climate Change", score: 8.0, date: "Apr 7, 2026" },
  { type: "forum", title: "Posted in 'Speaking Part 2 strategies'", score: null, date: "Apr 5, 2026" },
];

export default async function PublicProfilePage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-3xl mx-auto px-4 space-y-6">

        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="h-24 gradient-bg" />
          <div className="px-6 pb-6">
            <div className="-mt-10 mb-4 flex items-end justify-between">
              <div className="w-20 h-20 rounded-2xl border-4 border-white gradient-bg flex items-center justify-center text-white text-2xl font-bold shadow-sm">
                JS
              </div>
              <button className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                Follow
              </button>
            </div>
            <h1 className="text-xl font-bold text-gray-900">John Smith</h1>
            <p className="text-sm text-gray-500 mt-0.5">@{username}</p>
            <p className="text-sm text-gray-600 mt-3">IELTS aspirant targeting Band 8.0. Currently studying in Vietnam. Passionate about academic writing.</p>

            <div className="flex flex-wrap gap-3 mt-4">
              <span className="flex items-center gap-1.5 text-xs bg-yellow-50 text-yellow-700 px-3 py-1.5 rounded-full font-medium">
                <Award className="w-3.5 h-3.5" /> Band 7.0 Overall
              </span>
              <span className="flex items-center gap-1.5 text-xs bg-red-50 text-[#D32F2F] px-3 py-1.5 rounded-full font-medium">
                🔥 14-day streak
              </span>
              <span className="flex items-center gap-1.5 text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                <Calendar className="w-3.5 h-3.5" /> Member since Jan 2024
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: "Tests Done", value: "28", icon: BookOpen },
            { label: "Forum Posts", value: "14", icon: MessageSquare },
            { label: "Helpful Votes", value: "87", icon: ThumbsUp },
            { label: "Best Score", value: "8.0", icon: Award },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="bg-white rounded-xl shadow-sm p-4 text-center">
                <Icon className="w-4 h-4 text-[#D32F2F] mx-auto mb-1" />
                <p className="text-xl font-extrabold text-gray-900">{s.value}</p>
                <p className="text-xs text-gray-500">{s.label}</p>
              </div>
            );
          })}
        </div>

        {/* Skill scores */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="font-bold text-gray-800 mb-4">Band Score Progress</h2>
          {[
            { skill: "Writing", score: 7.5, icon: PenLine, color: "bg-amber-500" },
            { skill: "Reading", score: 8.0, icon: BookOpen, color: "bg-purple-500" },
            { skill: "Listening", score: 7.0, icon: Headphones, color: "bg-sky-500" },
            { skill: "Speaking", score: 6.0, icon: Mic, color: "bg-[#D32F2F]" },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.skill} className="flex items-center gap-4 mb-3">
                <Icon className="w-4 h-4 text-gray-500 shrink-0" />
                <span className="text-sm text-gray-700 w-20">{s.skill}</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full ${s.color} rounded-full`} style={{ width: `${(s.score / 9) * 100}%` }} />
                </div>
                <span className="font-bold text-sm text-gray-900 w-8 text-right">{s.score}</span>
              </div>
            );
          })}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="font-bold text-gray-800 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {ACTIVITY.map((a, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                  a.type === "writing" ? "bg-amber-50 text-amber-600" :
                  a.type === "reading" ? "bg-purple-50 text-purple-600" :
                  "bg-blue-50 text-blue-600"
                }`}>
                  {a.type === "writing" ? <PenLine className="w-4 h-4" /> :
                   a.type === "reading" ? <BookOpen className="w-4 h-4" /> :
                   <MessageSquare className="w-4 h-4" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700">{a.title}</p>
                  <p className="text-xs text-gray-400">{a.date}</p>
                </div>
                {a.score && <span className="font-bold text-gray-900">{a.score}</span>}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
