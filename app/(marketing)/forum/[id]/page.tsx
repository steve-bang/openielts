import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ThumbsUp, MessageSquare, Eye, Bookmark, Share2, Flag, Reply, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Forum Post — OpenIELTS",
};

const POST = {
  title: "How I went from Band 6.0 to Band 8.0 in Writing — My 3-Month Journey",
  category: "Writing Help",
  author: "Sarah Chen",
  authorInitials: "SC",
  authorColor: "bg-purple-500",
  authorBand: "Band 8.0",
  authorPosts: 47,
  time: "3 hours ago",
  likes: 342,
  views: 5621,
  tags: ["writing", "success-story", "tips", "band-8"],
  content: `
After two failed attempts (Band 5.5, then Band 6.0), I finally achieved Band 8.0 in Writing last month. Here's exactly what changed.

**The biggest mistake I was making**

I was using templates. Almost every Vietnamese student does this — we learn a fixed structure and try to fill in vocabulary. The problem? Examiners can spot templates immediately, and they penalise you for it under "Coherence & Cohesion."

**What actually works**

1. **Understand the band descriptors** — Download the official IELTS Writing Band Descriptors from the British Council website. Read them carefully. For each criterion, understand what separates Band 6 from Band 7, and Band 7 from Band 8. This changed everything for me.

2. **Task Achievement first** — Before you write a single word, make sure you fully understand what the question is asking. Underline key words. Many candidates write beautifully but miss the task — instant Band 5 for Task Achievement.

3. **The "sandwich" approach for body paragraphs** — Topic sentence → evidence/example → link back to the argument. Don't start with evidence. Always start with a clear claim.

4. **Lexical Resource = precision, not complexity** — Stop using "big" words just to sound academic. Use precise words. "The graph depicts a sharp increase" is better than "The graph shows a very big rise." Examiners reward accuracy, not thesaurus abuse.

5. **Use OpenIELTS AI feedback every day** — I submitted at least one essay per day and studied the AI feedback carefully. After 3 weeks, I could predict what my weaknesses were before submitting.

**My study schedule**

- Morning (30 min): Write one Task 1 or Task 2 without looking at anything
- Evening (45 min): Review AI feedback, compare with model answers, take notes

That's it. No complicated system. Consistency beat everything.

Hope this helps someone.
  `.trim(),
};

const COMMENTS = [
  {
    author: "Mohammed Al-Rashid",
    initials: "MA",
    color: "bg-green-500",
    band: "Band 7.5",
    time: "2 hours ago",
    likes: 48,
    text: "This is gold. I've been using templates for 6 months and my score keeps fluctuating between 6.0 and 6.5. Going to try your approach this week.",
    replies: [
      {
        author: "Sarah Chen",
        initials: "SC",
        color: "bg-purple-500",
        time: "1 hour ago",
        likes: 23,
        text: "Good luck! The first week is hard because you feel less 'safe' without a template. But push through it. The improvement comes fast once you internalize the criteria.",
      },
    ],
  },
  {
    author: "Priya Sharma",
    initials: "PS",
    color: "bg-pink-500",
    band: "Band 6.5",
    time: "1 hour ago",
    likes: 31,
    text: "Can you share which resources you used to understand the band descriptors better? I've read them but struggle to apply them to my own writing.",
    replies: [],
  },
  {
    author: "David Kim",
    initials: "DK",
    color: "bg-indigo-500",
    band: "Band 7.0",
    time: "45 minutes ago",
    likes: 19,
    text: "The point about precision vs. complexity is so true. My teacher kept telling me to use more 'academic' vocabulary, but what she really meant was more precise vocabulary. These are not the same thing!",
    replies: [],
  },
];

export default function ForumDetailPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-6">
          <Link href="/forum" className="hover:text-[#D32F2F] transition">Forum</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/forum" className="hover:text-[#D32F2F] transition">{POST.category}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 truncate max-w-xs">{POST.title}</span>
        </nav>

        {/* Main Post */}
        <article className="bg-white rounded-2xl shadow-sm p-8 mb-6">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className={`w-12 h-12 rounded-full ${POST.authorColor} flex items-center justify-center text-white font-bold shrink-0`}>
              {POST.authorInitials}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-gray-800">{POST.author}</span>
                <span className="text-xs bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                  <Award className="w-3 h-3" /> {POST.authorBand}
                </span>
                <span className="text-xs text-gray-400">{POST.authorPosts} posts</span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">{POST.time}</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg hover:bg-gray-100 transition text-gray-400 hover:text-[#D32F2F]">
                <Bookmark className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 transition text-gray-400 hover:text-[#D32F2F]">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 transition text-gray-400">
                <Flag className="w-4 h-4" />
              </button>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">{POST.title}</h1>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap mb-6">
            {POST.tags.map((tag) => (
              <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">#{tag}</span>
            ))}
          </div>

          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
            {POST.content.split("\n\n").map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return <h3 key={i} className="font-bold text-gray-800 mt-4 mb-2 text-base">{para.slice(2, -2)}</h3>;
              }
              if (para.match(/^\d\. /m)) {
                return (
                  <ol key={i} className="list-decimal list-inside space-y-2 my-3">
                    {para.split("\n").map((line, j) => (
                      <li key={j} className="text-sm"
                        dangerouslySetInnerHTML={{
                          __html: line.replace(/^\d+\. /, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        }}
                      />
                    ))}
                  </ol>
                );
              }
              if (para.startsWith("- ")) {
                return (
                  <ul key={i} className="list-disc list-inside space-y-1 my-3">
                    {para.split("\n").map((line, j) => (
                      <li key={j} className="text-sm">{line.slice(2)}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-sm mb-3"
                  dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
                />
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 text-[#D32F2F] font-medium text-sm hover:bg-red-100 transition">
              <ThumbsUp className="w-4 h-4" /> {POST.likes} Helpful
            </button>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <Eye className="w-4 h-4" /> {POST.views} views
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <MessageSquare className="w-4 h-4" /> {COMMENTS.length} replies
            </div>
          </div>
        </article>

        {/* Comments */}
        <section className="bg-white rounded-2xl shadow-sm p-8 mb-6">
          <h2 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#D32F2F]" />
            {COMMENTS.length} Replies
          </h2>

          <div className="space-y-6">
            {COMMENTS.map((comment, i) => (
              <div key={i}>
                <div className="flex gap-3">
                  <div className={`w-9 h-9 rounded-full ${comment.color} flex items-center justify-center text-white font-semibold text-xs shrink-0`}>
                    {comment.initials}
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-800 text-sm">{comment.author}</span>
                          {comment.band && (
                            <span className="text-xs bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded-full">{comment.band}</span>
                          )}
                        </div>
                        <span className="text-xs text-gray-400">{comment.time}</span>
                      </div>
                      <p className="text-sm text-gray-700">{comment.text}</p>
                    </div>
                    <div className="flex items-center gap-3 mt-2 ml-1">
                      <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-[#D32F2F] transition">
                        <ThumbsUp className="w-3 h-3" /> {comment.likes}
                      </button>
                      <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-[#D32F2F] transition">
                        <Reply className="w-3 h-3" /> Reply
                      </button>
                    </div>

                    {/* Nested replies */}
                    {comment.replies.map((reply, j) => (
                      <div key={j} className="ml-6 mt-3 flex gap-3">
                        <div className={`w-8 h-8 rounded-full ${reply.color} flex items-center justify-center text-white font-semibold text-xs shrink-0`}>
                          {reply.initials}
                        </div>
                        <div className="flex-1">
                          <div className="bg-white border border-gray-100 rounded-xl p-3">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-semibold text-gray-800 text-xs">{reply.author}</span>
                              <span className="text-xs text-gray-400">{reply.time}</span>
                            </div>
                            <p className="text-xs text-gray-700">{reply.text}</p>
                          </div>
                          <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-[#D32F2F] mt-1.5 ml-1 transition">
                            <ThumbsUp className="w-3 h-3" /> {reply.likes}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reply Box */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="font-bold text-gray-800 mb-4">Leave a Reply</h3>
          <textarea
            rows={4}
            placeholder="Share your thoughts, tips, or questions..."
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#D32F2F]/20 focus:border-[#D32F2F] resize-none"
          />
          <div className="flex justify-between items-center mt-3">
            <p className="text-xs text-gray-400">Be helpful and respectful · <Link href="/help" className="text-[#D32F2F] hover:underline">Community guidelines</Link></p>
            <button className="gradient-bg text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition">
              Post Reply
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
