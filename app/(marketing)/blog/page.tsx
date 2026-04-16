import type { Metadata } from "next";
import Link from "next/link";
import { PenLine, Headphones, BookOpen, Mic, Lightbulb, Trophy, ChevronRight, Clock, Search, Mail } from "lucide-react";
import { POSTS, CATEGORY_STYLES, type BlogCategory } from "@/lib/blog";

export const metadata: Metadata = {
  title: "IELTS Blog — Writing Tips, Listening Strategies & Practice Tests",
  description:
    "Expert IELTS tips on Writing Task 2 structure, Band 9 listening strategies, free practice tests, and proven study plans to boost your IELTS score.",
  alternates: {
    canonical: "https://openielts.com/blog",
  },
  openGraph: {
    type: "website",
    title: "IELTS Blog — Tips, Strategies & Success Stories",
    description:
      "Expert IELTS tips on Writing Task 2 structure, Band 9 listening strategies, free practice tests, and proven study plans.",
    url: "https://openielts.com/blog",
    images: [{ url: "/og-blog.png", width: 1200, height: 630, alt: "OpenIELTS Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IELTS Blog — Tips, Strategies & Success Stories | OpenIELTS",
    description:
      "Expert IELTS tips on Writing Task 2 structure, Band 9 listening strategies, free practice tests, and proven study plans.",
    images: ["/og-blog.png"],
  },
};

const CATEGORY_ICONS: Record<BlogCategory, React.ReactNode> = {
  Writing: <PenLine className="w-4 h-4 text-[#D32F2F]" />,
  Listening: <Headphones className="w-4 h-4 text-green-600" />,
  Reading: <BookOpen className="w-4 h-4 text-amber-600" />,
  Speaking: <Mic className="w-4 h-4 text-blue-600" />,
  "Study Tips": <Lightbulb className="w-4 h-4 text-purple-600" />,
  "Success Stories": <Trophy className="w-4 h-4 text-pink-600" />,
};

const CATEGORY_COUNTS: Record<BlogCategory, number> = {
  Writing: 24,
  Speaking: 18,
  Listening: 16,
  Reading: 21,
  "Study Tips": 15,
  "Success Stories": 12,
};

const POPULAR_POSTS = [
  { title: "Top 15 Vocabulary Words for Band 8+", views: "12.5K" },
  { title: "How to Ace IELTS Speaking Part 2", views: "9.8K" },
  { title: "IELTS Writing Task 1: Graph Description Templates", views: "8.2K" },
  { title: "30-Day IELTS Study Schedule", views: "7.1K" },
];

const TAGS = [
  "Band 7+", "Writing Task 2", "Vocabulary", "Grammar", "Speaking Fluency",
  "Listening Tips", "Reading Speed", "Time Management", "Study Plan", "Band 9",
];

const featured = POSTS.find((p) => p.featured)!;
const others = POSTS.filter((p) => !p.featured);

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-16 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-5">IELTS Success Blog</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto mb-8">
            Expert tips, proven strategies, and inspiring success stories to help you achieve your dream IELTS score
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {(["All", "Writing", "Listening", "Reading", "Speaking", "Study Tips"] as const).map((cat) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition ${
                  cat === "All"
                    ? "bg-white text-[#D32F2F]"
                    : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold uppercase tracking-wide">
              ★ Featured Post
            </span>
          </div>
          <Link href={`/blog/${featured.slug}`}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 grid md:grid-cols-2">
              <div
                className="h-64 md:h-auto gradient-bg"
                style={
                  featured.image
                    ? {
                        backgroundImage: `url(${featured.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : {}
                }
              />
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span
                  className={`inline-block text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4 w-fit ${CATEGORY_STYLES[featured.category].bg} ${CATEGORY_STYLES[featured.category].text}`}
                >
                  {featured.category}
                </span>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-4 leading-tight hover:text-[#D32F2F] transition">
                  {featured.title}
                </h2>
                <p className="text-gray-600 mb-6">{featured.description}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-bold">
                      {featured.authorInitials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{featured.author}</p>
                      <p className="text-xs text-gray-500">{featured.authorRole}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime}
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 gradient-bg text-white px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition w-fit">
                  Read Full Article <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="py-16 bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Articles Grid */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Latest Articles</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {others.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col">
                      <div className="h-44 gradient-bg" />
                      <div className="p-6 flex flex-col flex-1">
                        <span
                          className={`inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-3 w-fit ${CATEGORY_STYLES[post.category].bg} ${CATEGORY_STYLES[post.category].text}`}
                        >
                          {post.category}
                        </span>
                        <h3 className="font-bold text-gray-900 mb-3 hover:text-[#D32F2F] transition leading-snug flex-1">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{post.description}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4 mt-auto">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-bold">
                              {post.authorInitials}
                            </div>
                            <span className="font-medium text-gray-700">{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-12">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    className={`w-10 h-10 rounded-lg font-semibold text-sm border-2 transition ${
                      n === 1
                        ? "gradient-bg text-white border-transparent"
                        : "border-gray-200 text-gray-600 hover:border-[#D32F2F] hover:text-[#D32F2F]"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Search */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Search Articles</h3>
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search blog posts..."
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm outline-none focus:border-[#D32F2F] transition"
                  />
                </div>
              </div>

              {/* Newsletter */}
              <div className="gradient-bg rounded-2xl p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="w-5 h-5" />
                  <h3 className="text-xl font-bold">Get Weekly Tips</h3>
                </div>
                <p className="text-sm text-red-100 mb-4">
                  Subscribe to receive IELTS tips, strategies, and exclusive content directly to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 text-white placeholder:text-red-200 text-sm outline-none focus:border-white mb-3"
                />
                <button className="w-full py-3 bg-white text-[#D32F2F] rounded-xl font-semibold text-sm hover:bg-gray-50 transition">
                  Subscribe Now
                </button>
                <p className="text-xs text-red-200 mt-3 text-center">No spam. Unsubscribe anytime.</p>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-3">
                  {(Object.entries(CATEGORY_COUNTS) as [BlogCategory, number][]).map(([cat, count]) => (
                    <a
                      key={cat}
                      href="#"
                      className="flex items-center justify-between text-gray-700 hover:text-[#D32F2F] transition group"
                    >
                      <span className="flex items-center gap-2">
                        {CATEGORY_ICONS[cat]}
                        {cat}
                      </span>
                      <span className="text-xs bg-gray-100 group-hover:bg-red-50 px-2 py-0.5 rounded font-medium transition">
                        {count}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {POPULAR_POSTS.map((p, i) => (
                    <a key={i} href="#" className="block group">
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-[#D32F2F] transition mb-1">
                        {p.title}
                      </p>
                      <p className="text-xs text-gray-500">{p.views} views</p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {TAGS.map((tag) => (
                    <a
                      key={tag}
                      href="#"
                      className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-lg hover:bg-[#D32F2F] hover:text-white transition font-medium"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
