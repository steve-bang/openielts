export type SkillType = "writing" | "reading" | "listening" | "speaking";
export type TaskType = "task1" | "task2";
export type QuestionType = "true-false-ng" | "mcq" | "fill";

// ─── Writing ───────────────────────────────────────────────────────────────────

export interface WritingCriterion {
  name: string;
  score: number;
  comment: string;
}

export interface WritingHighlight {
  text: string;
  type: "vocabulary" | "grammar" | "coherence" | "structure";
  suggestion: string;
}

export interface WritingFeedback {
  overall: number;
  criteria: WritingCriterion[];
  highlights: WritingHighlight[];
  summary: string;
}

export interface WritingSubmission {
  id: string;
  uid: string;
  skill: "writing";
  taskType: TaskType;
  prompt: string;
  promptTitle: string;
  essay: string;
  wordCount: number;
  timeTakenSeconds: number;
  feedback: WritingFeedback;
  createdAt: string;
}

// ─── Reading & Listening (shared question shape) ──────────────────────────────

export interface AnsweredQuestion {
  id: number;
  type: QuestionType;
  question: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

export interface ReadingSubmission {
  id: string;
  uid: string;
  skill: "reading";
  passageTitle: string;
  totalQuestions: number;
  correctAnswers: number;
  bandScore: number;
  timeTakenSeconds: number;
  questions: AnsweredQuestion[];
  createdAt: string;
}

export interface ListeningSubmission {
  id: string;
  uid: string;
  skill: "listening";
  sectionTitle: string;
  totalQuestions: number;
  correctAnswers: number;
  bandScore: number;
  timeTakenSeconds: number;
  questions: AnsweredQuestion[];
  createdAt: string;
}

// ─── Speaking ─────────────────────────────────────────────────────────────────

export interface SpeakingSession {
  id: string;
  uid: string;
  skill: "speaking";
  partNumber: 1 | 2 | 3;
  partTitle: string;
  durationSeconds: number;
  createdAt: string;
}

// ─── Union for cross-skill queries ────────────────────────────────────────────

export type AnySubmission =
  | WritingSubmission
  | ReadingSubmission
  | ListeningSubmission
  | SpeakingSession;
