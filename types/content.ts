export type ContentStatus = "active" | "draft";
export type ContentDifficulty = "easy" | "medium" | "hard";
export type ContentQuestionType = "true-false-ng" | "mcq" | "fill";

// ─── Shared question shape (used by Reading & Listening) ──────────────────────

export interface ContentQuestion {
  id: number;
  type: ContentQuestionType;
  question: string;
  /** Present for true-false-ng and mcq */
  options?: string[];
  /** Correct answer for true-false-ng and mcq */
  correct?: string;
  /** Correct answer for fill-in-blank */
  answer?: string;
}

// ─── Reading ──────────────────────────────────────────────────────────────────

export interface ReadingPassage {
  id: string;
  title: string;
  text: string;
  questions: ContentQuestion[];
  difficulty: ContentDifficulty;
  status: ContentStatus;
  createdAt: string;
  updatedAt: string;
  createdBy: string; // uid
}

// ─── Writing ──────────────────────────────────────────────────────────────────

export type WritingTaskType = "task1" | "task2";

export interface WritingPrompt {
  id: string;
  title: string;
  taskType: WritingTaskType;
  prompt: string;
  difficulty: ContentDifficulty;
  status: ContentStatus;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
}

// ─── Listening ────────────────────────────────────────────────────────────────

export interface ListeningSection {
  id: string;
  title: string;
  transcript: string;
  audioUrl: string | null;
  questions: ContentQuestion[];
  difficulty: ContentDifficulty;
  status: ContentStatus;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
}

// ─── Speaking ─────────────────────────────────────────────────────────────────

export interface SpeakingCueCard {
  topic: string;
  points: string[];
}

export interface SpeakingPart {
  id: string;
  partNumber: 1 | 2 | 3;
  title: string;
  /** Part 1 & 3 questions */
  questions: string[];
  /** Part 2 cue card — null for parts 1 & 3 */
  cueCard: SpeakingCueCard | null;
  difficulty: ContentDifficulty;
  status: ContentStatus;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
}

// ─── Union for dashboard list ─────────────────────────────────────────────────

export type ContentType = "reading" | "writing" | "listening" | "speaking";

export type AnyContent =
  | (ReadingPassage & { contentType: "reading" })
  | (WritingPrompt & { contentType: "writing" })
  | (ListeningSection & { contentType: "listening" })
  | (SpeakingPart & { contentType: "speaking" });
