import type { Metadata } from "next";
import Link from "next/link";
import { Search, Plus, MessageSquare, ThumbsUp, Eye, Star, BookOpen, PenLine, Headphones, Mic, Users, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Community Forum — OpenIELTS",
  description: "Connect with IELTS learners, share tips, and get expert advice.",
};

const CATEGORIES = [
  { icon: BookOpen, label: "General Discussion", count: 234, color: "bg-blue-100 text-blue-600" },
  { icon: PenLine, label: "Writing Help", count: 189, color: "bg-red-50 text-[#D32F2F]" },
  { icon: Headphones, label: "Listening Tips", count: 97, color: "bg-green-50 text-green-600" },
  { icon: BookOpen, label: "Reading Strategies", count: 143, color: "bg-purple-50 text-purple-600" },
  { icon: Mic, label: "Speaking Practice", count: 76, color: "bg-yellow-50 text-yellow-600" },
  { icon: Star, label: "Success Stories", count: 52, color: "bg-orange-50 text-orange-600" },
];

const POSTS = [
  {
    id: "1",
    sticky: true,
    title: "📌 Welcome to OpenIELTS Forum — Read Before Posting",
    category: "General Discussion",
    author: "Admin",
    authorInitials: "AD",
    authorColor: "bg-[#D32F2F]",
    excerpt: "Welcome to our community! Please read our community guidelines before posting. Be respectful, stay on topic, and help each other succeed...",
    tags: ["pinned", "guidelines"],
    replies: 24,
    likes: 156,
    views: 2840,
    time: "2 days ago",
    badge: "Pinned",
    badgeColor: "bg-yellow-100 text-yellow-700",
  },
  {
    id: "2",
    sticky: false,
    title: "How I went from Band 6.0 to Band 8.0 in Writing — My 3-Month Journey",
    category: "Writing Help",
    author: "Sarah Chen",
    authorInitials: "SC",
    authorColor: "bg-purple-500",
    excerpt: "After failing twice, I finally cracked the writing module. Here's exactly what changed: I stopped memorising templates and started understanding the criteria...",
    tags: ["writing", "success-story", "tips"],
    replies: 87,
    likes: 342,
    views: 5621,
    time: "3 hours ago",
    badge: "Featured",
    badgeColor: "bg-cyan-100 text-cyan-700",
  },
  {
    id: "3",
    sticky: false,
    title: "Best strategies for True/False/Not Given questions — comprehensive guide",
    category: "Reading Strategies",
    author: "Mohammed Al-Rashid",
    authorInitials: "MA",
    authorColor: "bg-green-500",
    excerpt: "T/F/NG questions trip up almost everyone. The key distinction: False = the passage contradicts the statement. Not Given = the passage doesn't mention it at all...",
    tags: ["reading", "strategy", "TFNG"],
    replies: 43,
    likes: 218,
    views: 3890,
    time: "1 day ago",
    badge: null,
    badgeColor: "",
  },
  {
    id: "4",
    sticky: false,
    title: "AI feedback vs. human examiner — are the scores comparable?",
    category: "General Discussion",
    author: "Priya Sharma",
    authorInitials: "PS",
    authorColor: "bg-pink-500",
    excerpt: "I've been using OpenIELTS AI feedback for 2 months. Compared my AI scores to a real examiner mock test and the results were surprisingly close...",
    tags: ["AI", "feedback", "comparison"],
    replies: 31,
    likes: 127,
    views: 2150,
    time: "5 hours ago",
    badge: null,
    badgeColor: "",
  },
  {
    id: "5",
    sticky: false,
    title: "Speaking Part 2 — how to talk for 2 minutes without going blank",
    category: "Speaking Practice",
    author: "David Kim",
    authorInitials: "DK",
    authorColor: "bg-indigo-500",
    excerpt: "The cue card is your friend. Before you speak, take the full 1 minute to organise. Use the SPSE framework: Situation, Problem, Solution, Evaluation...",
    tags: ["speaking", "part2", "cue-card"],
    replies: 56,
    likes: 193,
    views: 3320,
    time: "12 hours ago",
    badge: null,
    badgeColor: "",
  },
];

const POPULAR_TAGS = ["writing-task2", "band-7", "grammar", "vocabulary", "reading", "speaking", "listening", "mock-test", "tips", "AI-feedback"];

const STATS = [
  { icon: Users, value: "12,400+", label: "Members" },
  { icon: MessageSquare, value: "8,900+", label: "Posts" },
  { icon: ThumbsUp, value: "45,000+", label: "Helpful votes" },
];

export default function ForumPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="gradient-bg text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">IELTS Community Forum</h1>
          <p className="text-red-100 text-lg mb-6">Connect with fellow learners, share tips, and get expert advice to achieve your target band score.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/sign-up">
              <button className="flex items-center gap-2 bg-white text-[#D32F2F] px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition">
                <Plus className="w-4 h-4" /> New Post
              </button>
            </Link>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2.5 rounded-xl flex-1 max-w-sm">
              <Search className="w-4 h-4 text-white/70 shrink-0" />
              <input placeholder="Search forum..." className="bg-transparent text-white placeholder:text-white/60 outline-none text-sm w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex gap-8">
          {STATS.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-[#D32F2F]" />
                <span className="font-bold text-gray-800">{s.value}</span>
                <span className="text-sm text-gray-500">{s.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Main Posts */}
          <main className="flex-1">
            {/* Tabs */}
            <div className="flex gap-6 border-b border-gray-200 mb-6">
              {["Latest", "Popular", "Unanswered"].map((tab, i) => (
                <button key={tab} className={`pb-3 text-sm font-medium transition ${i === 0 ? "border-b-2 border-[#D32F2F] text-[#D32F2F]" : "text-gray-500 hover:text-gray-800"}`}>
                  {tab}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {POSTS.map((post) => (
                <Link key={post.id} href={`/forum/${post.id}`}>
                  <div className={`bg-white rounded-xl shadow-sm p-5 hover:-translate-y-0.5 hover:shadow-md transition-all cursor-pointer ${post.sticky ? "border-l-4 border-yellow-400" : ""}`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-full ${post.authorColor} flex items-center justify-center text-white font-semibold text-sm shrink-0`}>
                        {post.authorInitials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          {post.badge && (
                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${post.badgeColor}`}>{post.badge}</span>
                          )}
                          <span className="text-xs text-gray-400">{post.category}</span>
                        </div>
                        <h3 className="font-semibold text-gray-800 text-sm leading-snug mb-2 hover:text-[#D32F2F] transition line-clamp-2">{post.title}</h3>
                        <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center gap-4 flex-wrap">
                          <div className="flex gap-1.5 flex-wrap">
                            {post.tags.map((tag) => (
                              <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">#{tag}</span>
                            ))}
                          </div>
                          <div className="flex items-center gap-4 text-xs text-gray-400 ml-auto">
                            <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" />{post.replies}</span>
                            <span className="flex items-center gap-1"><ThumbsUp className="w-3 h-3" />{post.likes}</span>
                            <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{post.views}</span>
                            <span>{post.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-8">
              {[1, 2, 3, "...", 8].map((p, i) => (
                <button key={i} className={`w-9 h-9 rounded-lg text-sm font-medium transition ${p === 1 ? "gradient-bg text-white" : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"}`}>
                  {p}
                </button>
              ))}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:w-64 space-y-6">
            {/* Categories */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-gray-800 mb-4">Categories</h3>
              <ul className="space-y-2">
                {CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <li key={cat.label}>
                      <Link href="#" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${cat.color}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-sm text-gray-700">{cat.label}</span>
                        </div>
                        <span className="text-xs text-gray-400">{cat.count}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2"><Tag className="w-4 h-4 text-[#D32F2F]" /> Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {POPULAR_TAGS.map((tag) => (
                  <Link key={tag} href="#" className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full hover:bg-red-50 hover:text-[#D32F2F] transition">
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="gradient-bg rounded-xl p-5 text-white">
              <h3 className="font-bold mb-2">Share your experience</h3>
              <p className="text-sm text-red-100 mb-4">Help others by sharing your IELTS tips and success stories.</p>
              <Link href="/sign-up">
                <button className="w-full bg-white text-[#D32F2F] py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-50 transition">
                  Start Posting
                </button>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
