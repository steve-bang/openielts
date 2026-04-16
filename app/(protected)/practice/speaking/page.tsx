import { getSpeakingParts } from "@/lib/firebase/db";
import type { SpeakingPart } from "@/types/content";
import SpeakingPractice from "./SpeakingPractice";

// ─── Fallback parts (used when Firestore has no active speaking parts yet) ─────

const FALLBACK_PARTS: SpeakingPart[] = [
  {
    id: "fallback_sp_1",
    partNumber: 1,
    title: "Personal Questions",
    questions: [
      "Can you tell me about where you live?",
      "Do you enjoy spending time in nature? Why or why not?",
      "What kind of music do you like to listen to?",
    ],
    cueCard: null,
    difficulty: "medium",
    status: "active",
    createdAt: "",
    updatedAt: "",
    createdBy: "",
  },
  {
    id: "fallback_sp_2",
    partNumber: 2,
    title: "Long Turn",
    questions: [],
    cueCard: {
      topic: "Describe a memorable journey you have taken.",
      points: ["Where you went", "Who you went with", "What you did there", "Why it was memorable"],
    },
    difficulty: "medium",
    status: "active",
    createdAt: "",
    updatedAt: "",
    createdBy: "",
  },
  {
    id: "fallback_sp_3",
    partNumber: 3,
    title: "Discussion",
    questions: [
      "How has travel changed in the last 20 years?",
      "Do you think international travel benefits society?",
      "What are the environmental impacts of mass tourism?",
    ],
    cueCard: null,
    difficulty: "medium",
    status: "active",
    createdAt: "",
    updatedAt: "",
    createdBy: "",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function SpeakingPracticePage() {
  const dbParts = await getSpeakingParts(20);
  const activeParts = dbParts.filter((p) => p.status === "active");

  // Use one active part per part number, falling back to the hardcoded default
  const parts = ([1, 2, 3] as const).map((num) => {
    return (
      activeParts.find((p) => p.partNumber === num) ??
      FALLBACK_PARTS.find((p) => p.partNumber === num)!
    );
  });

  return <SpeakingPractice parts={parts} />;
}
