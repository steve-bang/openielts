import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Clock, Calendar, Tag, ArrowLeft } from "lucide-react";
import { POSTS, CATEGORY_STYLES, getPostBySlug, getRelatedPosts } from "@/lib/blog";

// Article content imports
import WritingTask2Structure from "@/content/blog/ielts-writing-task-2-structure";
import ListeningTipsBand9 from "@/content/blog/ielts-listening-tips-band-9";
import ImproveIelts4To65 from "@/content/blog/improve-ielts-4-to-6.5";
import FreePracticeTests2025 from "@/content/blog/free-ielts-practice-tests-2025";
import Top10ListeningWebsites from "@/content/blog/top-10-ielts-listening-websites";
import FreeListeningTest2025 from "@/content/blog/free-ielts-listening-2025";
import SpeakingPart2CueCard from "@/content/blog/ielts-speaking-part-2-cue-card";
import ReadingStrategiesFinishOnTime from "@/content/blog/ielts-reading-strategies-finish-on-time";
import WritingTask1GraphsCharts from "@/content/blog/ielts-writing-task-1-describe-graphs-charts";
import VocabularyBand7 from "@/content/blog/ielts-vocabulary-band-7";
import Ielts30DayStudyPlan from "@/content/blog/ielts-30-day-study-plan";

const ARTICLE_CONTENT: Record<string, React.ComponentType> = {
  "ielts-writing-task-2-structure": WritingTask2Structure,
  "ielts-listening-tips-band-9": ListeningTipsBand9,
  "improve-ielts-4-to-6.5": ImproveIelts4To65,
  "free-ielts-practice-tests-2025": FreePracticeTests2025,
  "top-10-ielts-listening-websites": Top10ListeningWebsites,
  "free-ielts-listening-2025": FreeListeningTest2025,
  "ielts-speaking-part-2-cue-card": SpeakingPart2CueCard,
  "ielts-reading-strategies-finish-on-time": ReadingStrategiesFinishOnTime,
  "ielts-writing-task-1-describe-graphs-charts": WritingTask1GraphsCharts,
  "ielts-vocabulary-band-7": VocabularyBand7,
  "ielts-30-day-study-plan": Ielts30DayStudyPlan,
};

const SITE_URL = "https://openielts.com";

export async function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  const url = `${SITE_URL}/blog/${slug}`;

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      siteName: "OpenIELTS",
      locale: "en_US",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified ?? post.datePublished,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

function ArticleJsonLd({ slug }: { slug: string }) {
  const post = getPostBySlug(slug)!;
  const url = `${SITE_URL}/blog/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": url,
        headline: post.title,
        description: post.description,
        image: {
          "@type": "ImageObject",
          url: post.image,
          width: 1200,
          height: 630,
        },
        datePublished: post.datePublished,
        dateModified: post.dateModified ?? post.datePublished,
        author: {
          "@type": "Person",
          name: post.author,
          jobTitle: post.authorRole,
        },
        publisher: {
          "@type": "Organization",
          name: "OpenIELTS",
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo.png`,
          },
          url: SITE_URL,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
        keywords: post.tags.join(", "),
        articleSection: post.category,
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.category,
            item: `${SITE_URL}/blog?category=${encodeURIComponent(post.category)}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: post.title,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const ArticleContent = ARTICLE_CONTENT[slug];
  if (!ArticleContent) notFound();

  const related = getRelatedPosts(slug, 3);
  const categoryStyle = CATEGORY_STYLES[post.category];

  return (
    <div className="bg-gray-50 min-h-screen">
      <ArticleJsonLd slug={slug} />

      {/* Article Header */}
      <div className="gradient-bg pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb — schema-aligned, includes article title */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-red-200 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <Link href="/blog" className="hover:text-white transition">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <Link
              href={`/blog?category=${encodeURIComponent(post.category)}`}
              className="hover:text-white transition"
            >
              {post.category}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="text-white truncate max-w-xs">{post.title}</span>
          </nav>

          <span
            className={`inline-block text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full mb-5 ${categoryStyle.bg} ${categoryStyle.text}`}
          >
            {post.category}
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-red-100 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">
                {post.authorInitials}
              </div>
              <div>
                <span className="font-semibold text-white">{post.author}</span>
                <span className="ml-1 opacity-75">· {post.authorRole}</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.datePublished}>{post.date}</time>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8 items-start">
          {/* Main content */}
          <article className="lg:col-span-3">
            {/* Featured image — Next.js Image for LCP optimisation */}
            <div className="mb-10 rounded-2xl overflow-hidden shadow-xl relative h-72 md:h-80">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
                priority
              />
            </div>

            <ArticleContent />

            {/* Tags */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-gray-400" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-medium hover:bg-[#D32F2F] hover:text-white transition cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author bio */}
            <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center text-white font-extrabold text-xl shrink-0">
                  {post.authorInitials}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{post.author}</p>
                  <p className="text-sm text-[#D32F2F] mb-2">{post.authorRole}</p>
                  <p className="text-sm text-gray-600">
                    {post.author} is a certified IELTS expert and contributor to OpenIELTS. Their strategies have
                    helped thousands of candidates achieve their target band scores.
                  </p>
                </div>
              </div>
            </div>

            {/* Back link */}
            <div className="mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[#D32F2F] font-semibold text-sm hover:underline"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block sticky top-24">
            {/* Newsletter */}
            <div className="gradient-bg rounded-2xl p-5 text-white mb-6">
              <h3 className="font-bold text-lg mb-2">Get Weekly Tips</h3>
              <p className="text-sm text-red-100 mb-3">Join 50,000+ IELTS candidates.</p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2.5 rounded-xl bg-white/20 border border-white/30 text-white placeholder:text-red-200 text-sm outline-none focus:border-white mb-2"
              />
              <button className="w-full py-2.5 bg-white text-[#D32F2F] rounded-xl font-semibold text-sm hover:bg-gray-50 transition">
                Subscribe
              </button>
            </div>

            {/* Related Posts */}
            {related.length > 0 && (
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {related.map((rel) => (
                    <Link key={rel.slug} href={`/blog/${rel.slug}`} className="block group">
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-[#D32F2F] transition leading-snug mb-1">
                        {rel.title}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {rel.readTime}
                        <span
                          className={`ml-1 px-2 py-0.5 rounded-full text-xs font-medium ${CATEGORY_STYLES[rel.category].bg} ${CATEGORY_STYLES[rel.category].text}`}
                        >
                          {rel.category}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* Related posts (mobile) */}
      {related.length > 0 && (
        <section className="lg:hidden py-10 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((rel) => (
                <Link key={rel.slug} href={`/blog/${rel.slug}`}>
                  <div className="bg-gray-50 rounded-xl p-4 hover:bg-red-50 transition">
                    <span
                      className={`inline-block text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full mb-2 ${CATEGORY_STYLES[rel.category].bg} ${CATEGORY_STYLES[rel.category].text}`}
                    >
                      {rel.category}
                    </span>
                    <p className="text-sm font-semibold text-gray-800 hover:text-[#D32F2F] transition leading-snug">
                      {rel.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
