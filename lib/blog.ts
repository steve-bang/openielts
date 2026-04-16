export type BlogCategory = "Writing" | "Listening" | "Reading" | "Speaking" | "Study Tips" | "Success Stories";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;         // ≤160 chars for meta description
  category: BlogCategory;
  author: string;
  authorInitials: string;
  authorRole: string;
  date: string;                // Human-readable display date
  datePublished: string;       // ISO 8601 — for structured data & <time>
  dateModified?: string;       // ISO 8601 — falls back to datePublished
  readTime: string;
  featured?: boolean;
  image: string;               // OG image (1200×630)
  tags: string[];
}

export const CATEGORY_STYLES: Record<BlogCategory, { bg: string; text: string }> = {
  Writing: { bg: "bg-red-100", text: "text-[#D32F2F]" },
  Listening: { bg: "bg-green-100", text: "text-green-700" },
  Reading: { bg: "bg-amber-100", text: "text-amber-700" },
  Speaking: { bg: "bg-blue-100", text: "text-blue-700" },
  "Study Tips": { bg: "bg-purple-100", text: "text-purple-700" },
  "Success Stories": { bg: "bg-pink-100", text: "text-pink-700" },
};

export const POSTS: BlogPost[] = [
  {
    slug: "ielts-writing-task-2-structure",
    title: "IELTS Writing Task 2: 7-Step Essay Structure for Band 7+",
    description:
      "Master IELTS Writing Task 2 with our proven 7-step essay structure. Write band 7+ essays with detailed examples and templates for all question types.",
    category: "Writing",
    author: "Sarah Chen",
    authorInitials: "SC",
    authorRole: "IELTS Writing Expert",
    date: "October 21, 2025",
    datePublished: "2025-10-21",
    readTime: "15 min read",
    featured: true,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=630&fit=crop",
    tags: ["Writing Task 2", "Essay Structure", "Band 7", "Academic Writing"],
  },
  {
    slug: "ielts-listening-tips-band-9",
    title: "IELTS Listening Tips to Score Band 9: Complete Strategy Guide",
    description:
      "Expert strategies used by top scorers in the IELTS Listening test. Learn before, during, and after-listening techniques to maximize your score.",
    category: "Listening",
    author: "Michael Roberts",
    authorInitials: "MR",
    authorRole: "IELTS Listening Coach",
    date: "October 28, 2025",
    datePublished: "2025-10-28",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1546521343-4eb2c01aa44b?w=1200&h=630&fit=crop",
    tags: ["Listening Tips", "Band 9", "Listening Strategies", "Question Types"],
  },
  {
    slug: "improve-ielts-4-to-6.5",
    title: "How to Improve from Band 4.0 to 6.5: A Realistic Study Plan",
    description:
      "A step-by-step roadmap to raise your IELTS score from Band 4 to 6.5. Includes a 12-week study schedule and skill-by-skill improvement strategies.",
    category: "Study Tips",
    author: "Linda Wong",
    authorInitials: "LW",
    authorRole: "IELTS Preparation Specialist",
    date: "October 21, 2025",
    datePublished: "2025-10-21",
    readTime: "18 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&fit=crop",
    tags: ["Study Plan", "Score Improvement", "Band 6.5", "Preparation"],
  },
  {
    slug: "free-ielts-practice-tests-2025",
    title: "Best Free IELTS Practice Tests Online in 2025 (Ranked & Reviewed)",
    description:
      "The best free IELTS practice resources reviewed and ranked. Find sites with realistic test conditions, answer keys, and instant feedback.",
    category: "Study Tips",
    author: "James Kumar",
    authorInitials: "JK",
    authorRole: "IELTS Resource Curator",
    date: "October 21, 2025",
    datePublished: "2025-10-21",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=1200&h=630&fit=crop",
    tags: ["Free Practice Tests", "Resources", "Online Practice", "2025"],
  },
  {
    slug: "top-10-ielts-listening-websites",
    title: "Top 10 Websites to Practice IELTS Listening for Free",
    description:
      "The best websites for free IELTS listening practice — from official Cambridge tests to AI platforms with transcripts and instant scoring.",
    category: "Listening",
    author: "Emma Parker",
    authorInitials: "EP",
    authorRole: "Digital Learning Expert",
    date: "October 28, 2025",
    datePublished: "2025-10-28",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=630&fit=crop",
    tags: ["Listening Resources", "Free Websites", "Practice Tests", "Online Learning"],
  },
  {
    slug: "free-ielts-listening-2025",
    title: "Free IELTS Listening Practice Test with Answers & Audio Script",
    description:
      "Full IELTS Listening practice test with 40 questions, complete audio script, answer key, and band score estimator. Free to take online.",
    category: "Listening",
    author: "David Anderson",
    authorInitials: "DA",
    authorRole: "IELTS Examiner",
    date: "January 15, 2025",
    datePublished: "2025-01-15",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&h=630&fit=crop",
    tags: ["Practice Test", "Free Test", "Listening", "Audio Script"],
  },
  {
    slug: "ielts-reading-strategies-finish-on-time",
    title: "IELTS Reading: 8 Strategies to Finish All 40 Questions on Time (Band 7+ Guide)",
    description:
      "Running out of time in IELTS Reading? These 8 proven strategies help you answer all 40 questions in 60 minutes — with real timing breakdowns, question-type tactics, and a practice routine that works.",
    category: "Reading",
    author: "James Whitfield",
    authorInitials: "JW",
    authorRole: "IELTS Reading Specialist",
    date: "April 14, 2026",
    datePublished: "2026-04-14",
    readTime: "16 min read",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=630&fit=crop",
    tags: ["Reading Strategies", "Time Management", "Band 7", "Reading Tips", "40 Questions"],
  },
  {
    slug: "ielts-30-day-study-plan",
    title: "How to Prepare for IELTS in 30 Days: A Realistic Day-by-Day Study Plan",
    description:
      "A complete 30-day IELTS study plan with daily tasks for all four modules. Based on a real student who went from Band 5.5 to 7.0 in 31 days using this exact schedule.",
    category: "Study Tips",
    author: "Linda Wong",
    authorInitials: "LW",
    authorRole: "IELTS Preparation Specialist",
    date: "April 16, 2026",
    datePublished: "2026-04-16",
    readTime: "17 min read",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&h=630&fit=crop",
    tags: ["30-Day Plan", "Study Plan", "IELTS Preparation", "Band 7", "All Modules"],
  },
  {
    slug: "ielts-vocabulary-band-7",
    title: "IELTS Vocabulary for Band 7+: 150 Essential Words, Collocations & Topic Lists",
    description:
      "Stop memorising random word lists. Learn the IELTS vocabulary strategy that actually works — word families, collocations, and 6 topic word banks with example sentences.",
    category: "Study Tips",
    author: "Linda Wong",
    authorInitials: "LW",
    authorRole: "IELTS Preparation Specialist",
    date: "April 16, 2026",
    datePublished: "2026-04-16",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200&h=630&fit=crop",
    tags: ["Vocabulary", "Band 7", "Lexical Resource", "Word Lists", "Collocations", "Academic English"],
  },
  {
    slug: "ielts-writing-task-1-describe-graphs-charts",
    title: "IELTS Writing Task 1: How to Describe Any Graph or Chart (Band 7+ Guide)",
    description:
      "Learn the 4-paragraph structure that works for every IELTS Writing Task 1 chart type. Includes Band 5.5, 7.0, and 8.0 sample responses, trend vocabulary toolkit, and a 3-week practice plan.",
    category: "Writing",
    author: "Sarah Chen",
    authorInitials: "SC",
    authorRole: "IELTS Writing Expert",
    date: "April 16, 2026",
    datePublished: "2026-04-16",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",
    tags: ["Writing Task 1", "Graphs", "Charts", "Band 7", "Academic Writing", "Overview"],
  },
  {
    slug: "ielts-speaking-part-2-cue-card",
    title: "IELTS Speaking Part 2: How to Speak for 2 Minutes on Any Cue Card (Band 7+ Guide)",
    description:
      "Learn exactly how to structure your IELTS Speaking Part 2 long turn. Includes real sample answers at Band 5.5, 7.0, and 8.5, a prep-minute technique, and the phrases examiners love.",
    category: "Speaking",
    author: "Priya Mehta",
    authorInitials: "PM",
    authorRole: "IELTS Speaking Coach & Former Examiner",
    date: "April 10, 2026",
    datePublished: "2026-04-10",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&h=630&fit=crop",
    tags: ["Speaking Part 2", "Cue Card", "Long Turn", "Band 7", "Speaking Tips"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getFeaturedPost(): BlogPost | undefined {
  return POSTS.find((p) => p.featured);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const post = getPostBySlug(slug);
  if (!post) return POSTS.slice(0, limit);
  const sameCategory = POSTS.filter((p) => p.slug !== slug && p.category === post.category);
  const other = POSTS.filter((p) => p.slug !== slug && p.category !== post.category);
  return [...sameCategory, ...other].slice(0, limit);
}
