import { getActiveListeningSection } from "@/lib/firebase/db";
import type { ContentQuestion } from "@/types/content";
import ListeningPlayer from "./ListeningPlayer";

// ─── Fallback section (used when Firestore has no active sections yet) ─────────

const FALLBACK_SECTION = {
  title: "Section 3 — A Student Meeting with a Professor",
  audioUrl: null,
  transcript: `Student: Hi Professor Johnson, I just wanted to check — when exactly is the environmental science report due?

Professor: It's due this Friday, by 5pm. Don't forget the maximum is 3,000 words.

Student: Got it. And for sources — should I just use Google Scholar?

Professor: I'd recommend the university library database. It's more reliable. And if you have questions, I'm available Thursday afternoons during office hours.`,
  questions: [
    {
      id: 1,
      type: "mcq" as const,
      question: "What is the student studying?",
      options: [
        "A. Business Administration",
        "B. Computer Science",
        "C. Environmental Science",
        "D. Civil Engineering",
      ],
      correct: "C. Environmental Science",
    },
    {
      id: 2,
      type: "fill" as const,
      question: "The student needs to submit the assignment by ________ (day).",
      answer: "Friday",
    },
    {
      id: 3,
      type: "fill" as const,
      question: "The maximum word count for the report is ________.",
      answer: "3000",
    },
    {
      id: 4,
      type: "mcq" as const,
      question: "The professor recommends which of the following sources?",
      options: [
        "A. Wikipedia",
        "B. The university library database",
        "C. Google Scholar only",
        "D. Textbooks from 1990s",
      ],
      correct: "B. The university library database",
    },
    {
      id: 5,
      type: "fill" as const,
      question: "Office hours are on ________ afternoons.",
      answer: "Thursday",
    },
  ] satisfies ContentQuestion[],
};

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function ListeningPracticePage() {
  const dbSection = await getActiveListeningSection();

  const section = dbSection
    ? {
        title: dbSection.title,
        audioUrl: dbSection.audioUrl,
        transcript: dbSection.transcript,
        questions: dbSection.questions,
      }
    : FALLBACK_SECTION;

  return <ListeningPlayer section={section} />;
}
