import { getActiveReadingPassage } from "@/lib/firebase/db";
import type { ContentQuestion } from "@/types/content";
import ReadingQuiz from "./ReadingQuiz";

// ─── Fallback passage (used when Firestore has no active content yet) ─────────

const FALLBACK_PASSAGE = {
  title: "The Psychology of Colour",
  text: `Colour has long been studied for its psychological effects on human behaviour and perception. Research suggests that colour can influence mood, productivity, and even appetite, though the exact mechanisms are still debated among scientists.

Red is traditionally associated with urgency, passion, and danger. Studies have shown that exposure to red can increase heart rate and stimulate the senses. This is why red is frequently used in fast-food restaurants — it is thought to increase appetite and encourage quick eating. However, the same colour in a workplace may increase stress and reduce performance on tasks requiring careful thought.

Blue, by contrast, is often described as calming and conducive to focused work. In a 2009 study published in Science magazine, researchers found that participants working in blue environments performed better on creative tasks than those in red environments, while red improved performance on detail-oriented tasks. This finding suggests that the effect of colour is task-dependent rather than universally positive or negative.

Green has historically been associated with nature and restoration. Recent research in environmental psychology suggests that brief exposure to the colour green can enhance creative thinking and increase motivation. Some theorists argue this is an evolutionary response — our ancestors would have associated green environments with food and water resources.

Cultural factors also play a significant role in colour perception. White, which represents purity and cleanliness in Western cultures, is associated with mourning in parts of Asia. Yellow is considered lucky in China but associated with danger in some Western contexts. These cross-cultural variations suggest that the psychological effects of colour are not purely innate but are substantially shaped by cultural conditioning.`,
  questions: [
    {
      id: 1,
      type: "true-false-ng" as const,
      question: "Red environments always reduce performance in the workplace.",
      options: ["True", "False", "Not Given"],
      correct: "False",
    },
    {
      id: 2,
      type: "true-false-ng" as const,
      question:
        "The 2009 Science magazine study found that blue environments improved creative thinking.",
      options: ["True", "False", "Not Given"],
      correct: "True",
    },
    {
      id: 3,
      type: "true-false-ng" as const,
      question: "Green office spaces are now standard in modern architecture.",
      options: ["True", "False", "Not Given"],
      correct: "Not Given",
    },
    {
      id: 4,
      type: "mcq" as const,
      question: "According to the passage, why is red used in fast-food restaurants?",
      options: [
        "A. It makes the restaurant look more attractive",
        "B. It is thought to increase appetite and speed of eating",
        "C. It reduces stress in crowded environments",
        "D. It is the most culturally neutral colour",
      ],
      correct: "B. It is thought to increase appetite and speed of eating",
    },
    {
      id: 5,
      type: "fill" as const,
      question:
        "The passage states that the psychological effects of colour are ________ by cultural conditioning.",
      answer: "substantially shaped",
    },
  ] satisfies ContentQuestion[],
};

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function ReadingPracticePage() {
  const dbPassage = await getActiveReadingPassage();
  const passage = dbPassage ?? FALLBACK_PASSAGE;

  return <ReadingQuiz passage={passage} />;
}
