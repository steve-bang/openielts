import { getActiveWritingPrompts } from "@/lib/firebase/db";
import WritingEditor from "./WritingEditor";

// ─── Fallback prompt (used when Firestore has no active prompts yet) ──────────

const FALLBACK_PROMPT = {
  taskType: "task2" as const,
  title: "Technology & Society",
  prompt: `You should spend about 40 minutes on this task.

Write about the following topic:

**Some people believe that technology has made our lives more complex and stressful. Others think it has improved the quality of our lives.**

**Discuss both views and give your own opinion.**

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`,
};

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function WritingPracticePage() {
  const prompts = await getActiveWritingPrompts();

  // Pick the most recent active prompt; fall back to the built-in one
  const dbPrompt = prompts[0] ?? null;

  const promptData = dbPrompt
    ? { taskType: dbPrompt.taskType, title: dbPrompt.title, prompt: dbPrompt.prompt }
    : FALLBACK_PROMPT;

  return <WritingEditor promptData={promptData} />;
}
