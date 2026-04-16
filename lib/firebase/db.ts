import { FieldValue } from "firebase-admin/firestore";
import { adminDb } from "./admin";
import type { UserDocument, PublicUser } from "@/types/user";
import type {
  WritingSubmission,
  ReadingSubmission,
  ListeningSubmission,
  SpeakingSession,
  AnySubmission,
} from "@/types/submission";
import type {
  ReadingPassage,
  WritingPrompt,
  ListeningSection,
  SpeakingPart,
  ContentStatus,
  AnyContent,
} from "@/types/content";

const USERS = "users";
const WRITING_SUBMISSIONS = "writing_submissions";
const READING_SUBMISSIONS = "reading_submissions";
const LISTENING_SUBMISSIONS = "listening_submissions";
const SPEAKING_SESSIONS = "speaking_sessions";
const READING_PASSAGES = "reading_passages";
const WRITING_PROMPTS = "writing_prompts";
const LISTENING_SECTIONS = "listening_sections";
const SPEAKING_PARTS = "speaking_parts";

// ─── User helpers ──────────────────────────────────────────────────────────────

export async function getUserById(uid: string): Promise<UserDocument | null> {
  const snap = await adminDb.collection(USERS).doc(uid).get();
  if (!snap.exists) return null;
  return snap.data() as UserDocument;
}

export async function getUserByEmail(email: string): Promise<UserDocument | null> {
  const snap = await adminDb
    .collection(USERS)
    .where("email", "==", email)
    .limit(1)
    .get();
  if (snap.empty) return null;
  return snap.docs[0].data() as UserDocument;
}

export async function createUser(data: UserDocument): Promise<void> {
  await adminDb.collection(USERS).doc(data.uid).set(data);
}

export async function updateUser(
  uid: string,
  data: Partial<UserDocument> | Record<string, unknown>
): Promise<void> {
  await adminDb.collection(USERS).doc(uid).update({
    ...data,
    updatedAt: new Date().toISOString(),
  });
}

export function toPublicUser(doc: UserDocument): PublicUser {
  return {
    uid: doc.uid,
    email: doc.email,
    role: doc.role,
    profile: doc.profile,
    subscription: doc.subscription,
    stats: doc.stats,
  };
}

// ─── Shared stat shape ────────────────────────────────────────────────────────

export interface SubmissionStats {
  totalCount: number;
  avgScore: number | null;
  bestScore: number | null;
  totalWords: number;
}

export interface SkillStats {
  totalCount: number;
  avgScore: number | null;
  bestScore: number | null;
}

/** Increment user stats after any submission. */
async function bumpUserStats(uid: string, createdAt: string): Promise<void> {
  await adminDb.collection(USERS).doc(uid).update({
    "stats.totalSubmissions": FieldValue.increment(1),
    "stats.lastActiveAt": createdAt,
    updatedAt: createdAt,
  });
}

// ─── Writing helpers ──────────────────────────────────────────────────────────

export async function createWritingSubmission(data: WritingSubmission): Promise<void> {
  await adminDb.collection(WRITING_SUBMISSIONS).doc(data.id).set(data);
  await bumpUserStats(data.uid, data.createdAt);
}

export async function getWritingSubmissions(uid: string, limit = 10): Promise<WritingSubmission[]> {
  const snap = await adminDb
    .collection(WRITING_SUBMISSIONS)
    .where("uid", "==", uid)
    .get();
  return snap.docs
    .map((d) => d.data() as WritingSubmission)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, limit);
}

export async function getWritingSubmissionsSince(
  uid: string,
  since: string
): Promise<WritingSubmission[]> {
  const snap = await adminDb
    .collection(WRITING_SUBMISSIONS)
    .where("uid", "==", uid)
    .get();
  return snap.docs
    .map((d) => d.data() as WritingSubmission)
    .filter((s) => s.createdAt >= since)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function getSubmissionStats(uid: string): Promise<SubmissionStats> {
  const snap = await adminDb.collection(WRITING_SUBMISSIONS).where("uid", "==", uid).get();

  if (snap.empty) return { totalCount: 0, avgScore: null, bestScore: null, totalWords: 0 };

  const submissions = snap.docs.map((d) => d.data() as WritingSubmission);
  const scores = submissions.map((s) => s.feedback.overall);
  const raw = scores.reduce((a, b) => a + b, 0) / scores.length;

  return {
    totalCount: submissions.length,
    avgScore: Math.round(raw * 2) / 2,
    bestScore: Math.max(...scores),
    totalWords: submissions.reduce((sum, s) => sum + s.wordCount, 0),
  };
}

// ─── Reading helpers ──────────────────────────────────────────────────────────

export async function createReadingSubmission(data: ReadingSubmission): Promise<void> {
  await adminDb.collection(READING_SUBMISSIONS).doc(data.id).set(data);
  await bumpUserStats(data.uid, data.createdAt);
}

export async function getReadingSubmissions(uid: string, limit = 10): Promise<ReadingSubmission[]> {
  const snap = await adminDb
    .collection(READING_SUBMISSIONS)
    .where("uid", "==", uid)
    .get();
  return snap.docs
    .map((d) => d.data() as ReadingSubmission)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, limit);
}

export async function getReadingStats(uid: string): Promise<SkillStats> {
  const snap = await adminDb.collection(READING_SUBMISSIONS).where("uid", "==", uid).get();
  if (snap.empty) return { totalCount: 0, avgScore: null, bestScore: null };

  const scores = snap.docs.map((d) => (d.data() as ReadingSubmission).bandScore);
  return {
    totalCount: scores.length,
    avgScore: Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 2) / 2,
    bestScore: Math.max(...scores),
  };
}

// ─── Listening helpers ────────────────────────────────────────────────────────

export async function createListeningSubmission(data: ListeningSubmission): Promise<void> {
  await adminDb.collection(LISTENING_SUBMISSIONS).doc(data.id).set(data);
  await bumpUserStats(data.uid, data.createdAt);
}

export async function getListeningSubmissions(uid: string, limit = 10): Promise<ListeningSubmission[]> {
  const snap = await adminDb
    .collection(LISTENING_SUBMISSIONS)
    .where("uid", "==", uid)
    .get();
  return snap.docs
    .map((d) => d.data() as ListeningSubmission)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, limit);
}

export async function getListeningStats(uid: string): Promise<SkillStats> {
  const snap = await adminDb.collection(LISTENING_SUBMISSIONS).where("uid", "==", uid).get();
  if (snap.empty) return { totalCount: 0, avgScore: null, bestScore: null };

  const scores = snap.docs.map((d) => (d.data() as ListeningSubmission).bandScore);
  return {
    totalCount: scores.length,
    avgScore: Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 2) / 2,
    bestScore: Math.max(...scores),
  };
}

// ─── Speaking helpers ─────────────────────────────────────────────────────────

export async function createSpeakingSession(data: SpeakingSession): Promise<void> {
  await adminDb.collection(SPEAKING_SESSIONS).doc(data.id).set(data);
  await bumpUserStats(data.uid, data.createdAt);
}

export async function getSpeakingSessionCount(uid: string): Promise<number> {
  const snap = await adminDb.collection(SPEAKING_SESSIONS).where("uid", "==", uid).get();
  return snap.size;
}

// ─── Cross-skill recent activity ──────────────────────────────────────────────

/**
 * Fetch the N most recent submissions across writing, reading, and listening.
 * Speaking sessions are excluded (no band score to display).
 */
export async function getRecentAllSubmissions(uid: string, limit = 5): Promise<AnySubmission[]> {
  const [writing, reading, listening] = await Promise.all([
    getWritingSubmissions(uid, limit),
    getReadingSubmissions(uid, limit),
    getListeningSubmissions(uid, limit),
  ]);

  return [...writing, ...reading, ...listening]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, limit);
}

// ─── User document factory ────────────────────────────────────────────────────

export function buildNewUser(
  uid: string,
  email: string,
  fullName: string | null,
  provider: "email" | "google",
  avatarUrl: string | null = null,
  emailVerified = false,
  passwordHash?: string
): UserDocument {
  const now = new Date().toISOString();
  return {
    uid,
    email,
    role: "student",
    provider,
    emailVerified,
    isActive: true,
    ...(passwordHash ? { passwordHash } : {}),
    profile: {
      fullName,
      avatarUrl,
      targetBand: null,
      currentBand: null,
      nationality: null,
      bio: null,
      timezone: "UTC",
      languageCode: "en",
    },
    subscription: { status: "free", expiresAt: null },
    stats: { streak: 0, lastActiveAt: now, totalSubmissions: 0 },
    createdAt: now,
    updatedAt: now,
  };
}

// ─── Reading Passage helpers ──────────────────────────────────────────────────

export async function createReadingPassage(data: ReadingPassage): Promise<void> {
  await adminDb.collection(READING_PASSAGES).doc(data.id).set(data);
}

export async function getReadingPassages(limitCount = 50): Promise<ReadingPassage[]> {
  const snap = await adminDb
    .collection(READING_PASSAGES)
    .orderBy("createdAt", "desc")
    .limit(limitCount)
    .get();
  return snap.docs.map((d) => d.data() as ReadingPassage);
}

export async function getActiveReadingPassage(): Promise<ReadingPassage | null> {
  const snap = await adminDb
    .collection(READING_PASSAGES)
    .where("status", "==", "active")
    .get();
  if (snap.empty) return null;
  const sorted = snap.docs
    .map((d) => d.data() as ReadingPassage)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  return sorted[0];
}

export async function updateReadingPassage(
  id: string,
  data: Partial<ReadingPassage>
): Promise<void> {
  await adminDb
    .collection(READING_PASSAGES)
    .doc(id)
    .update({ ...data, updatedAt: new Date().toISOString() });
}

export async function deleteReadingPassage(id: string): Promise<void> {
  await adminDb.collection(READING_PASSAGES).doc(id).delete();
}

// ─── Writing Prompt helpers ───────────────────────────────────────────────────

export async function createWritingPrompt(data: WritingPrompt): Promise<void> {
  await adminDb.collection(WRITING_PROMPTS).doc(data.id).set(data);
}

export async function getWritingPrompts(limitCount = 50): Promise<WritingPrompt[]> {
  const snap = await adminDb
    .collection(WRITING_PROMPTS)
    .orderBy("createdAt", "desc")
    .limit(limitCount)
    .get();
  return snap.docs.map((d) => d.data() as WritingPrompt);
}

export async function getActiveWritingPrompts(taskType?: "task1" | "task2"): Promise<WritingPrompt[]> {
  const snap = await adminDb
    .collection(WRITING_PROMPTS)
    .where("status", "==", "active")
    .get();
  let prompts = snap.docs.map((d) => d.data() as WritingPrompt);
  if (taskType) prompts = prompts.filter((p) => p.taskType === taskType);
  return prompts
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 10);
}

export async function updateWritingPrompt(
  id: string,
  data: Partial<WritingPrompt>
): Promise<void> {
  await adminDb
    .collection(WRITING_PROMPTS)
    .doc(id)
    .update({ ...data, updatedAt: new Date().toISOString() });
}

export async function deleteWritingPrompt(id: string): Promise<void> {
  await adminDb.collection(WRITING_PROMPTS).doc(id).delete();
}

// ─── Listening Section helpers ────────────────────────────────────────────────

export async function createListeningSection(data: ListeningSection): Promise<void> {
  await adminDb.collection(LISTENING_SECTIONS).doc(data.id).set(data);
}

export async function getListeningSections(limitCount = 50): Promise<ListeningSection[]> {
  const snap = await adminDb
    .collection(LISTENING_SECTIONS)
    .orderBy("createdAt", "desc")
    .limit(limitCount)
    .get();
  return snap.docs.map((d) => d.data() as ListeningSection);
}

export async function getActiveListeningSection(): Promise<ListeningSection | null> {
  const snap = await adminDb
    .collection(LISTENING_SECTIONS)
    .where("status", "==", "active")
    .get();
  if (snap.empty) return null;
  const sorted = snap.docs
    .map((d) => d.data() as ListeningSection)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  return sorted[0];
}

export async function updateListeningSection(
  id: string,
  data: Partial<ListeningSection>
): Promise<void> {
  await adminDb
    .collection(LISTENING_SECTIONS)
    .doc(id)
    .update({ ...data, updatedAt: new Date().toISOString() });
}

export async function deleteListeningSection(id: string): Promise<void> {
  await adminDb.collection(LISTENING_SECTIONS).doc(id).delete();
}

// ─── Speaking Part helpers ────────────────────────────────────────────────────

export async function createSpeakingPart(data: SpeakingPart): Promise<void> {
  await adminDb.collection(SPEAKING_PARTS).doc(data.id).set(data);
}

export async function getSpeakingParts(limitCount = 50): Promise<SpeakingPart[]> {
  const snap = await adminDb
    .collection(SPEAKING_PARTS)
    .orderBy("createdAt", "desc")
    .limit(limitCount)
    .get();
  return snap.docs.map((d) => d.data() as SpeakingPart);
}

export async function updateSpeakingPart(
  id: string,
  data: Partial<SpeakingPart>
): Promise<void> {
  await adminDb
    .collection(SPEAKING_PARTS)
    .doc(id)
    .update({ ...data, updatedAt: new Date().toISOString() });
}

export async function deleteSpeakingPart(id: string): Promise<void> {
  await adminDb.collection(SPEAKING_PARTS).doc(id).delete();
}

// ─── Cross-content dashboard list ─────────────────────────────────────────────

export async function getAllContent(limitEach = 20): Promise<AnyContent[]> {
  const [passages, prompts, sections, parts] = await Promise.all([
    getReadingPassages(limitEach),
    getWritingPrompts(limitEach),
    getListeningSections(limitEach),
    getSpeakingParts(limitEach),
  ]);

  return [
    ...passages.map((p) => ({ ...p, contentType: "reading" as const })),
    ...prompts.map((p) => ({ ...p, contentType: "writing" as const })),
    ...sections.map((s) => ({ ...s, contentType: "listening" as const })),
    ...parts.map((p) => ({ ...p, contentType: "speaking" as const })),
  ].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function getContentStatusCounts(): Promise<{
  reading: number;
  writing: number;
  listening: number;
  speaking: number;
  total: number;
}> {
  const [passages, prompts, sections, parts] = await Promise.all([
    getReadingPassages(200),
    getWritingPrompts(200),
    getListeningSections(200),
    getSpeakingParts(200),
  ]);
  return {
    reading: passages.length,
    writing: prompts.length,
    listening: sections.length,
    speaking: parts.length,
    total: passages.length + prompts.length + sections.length + parts.length,
  };
}

// ─── Content status toggle ────────────────────────────────────────────────────

export async function setContentStatus(
  contentType: "reading" | "writing" | "listening" | "speaking",
  id: string,
  status: ContentStatus
): Promise<void> {
  const collMap = {
    reading: READING_PASSAGES,
    writing: WRITING_PROMPTS,
    listening: LISTENING_SECTIONS,
    speaking: SPEAKING_PARTS,
  };
  await adminDb
    .collection(collMap[contentType])
    .doc(id)
    .update({ status, updatedAt: new Date().toISOString() });
}

export async function deleteContent(
  contentType: "reading" | "writing" | "listening" | "speaking",
  id: string
): Promise<void> {
  const collMap = {
    reading: READING_PASSAGES,
    writing: WRITING_PROMPTS,
    listening: LISTENING_SECTIONS,
    speaking: SPEAKING_PARTS,
  };
  await adminDb.collection(collMap[contentType]).doc(id).delete();
}
