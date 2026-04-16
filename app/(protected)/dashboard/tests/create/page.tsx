"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ChevronRight,
  PenLine,
  BookOpen,
  Headphones,
  Mic,
  Check,
  Plus,
  Trash2,
  Loader2,
} from "lucide-react";
import type { ContentQuestion } from "@/types/content";

// ─── Types ─────────────────────────────────────────────────────────────────────

type ContentType = "reading" | "writing" | "listening" | "speaking";
type Difficulty = "easy" | "medium" | "hard";
type Status = "active" | "draft";

interface BasicInfo {
  title: string;
  contentType: ContentType;
  difficulty: Difficulty;
  status: Status;
}

// For writing
interface PromptInfo {
  taskType: "task1" | "task2";
  prompt: string;
}

// For speaking
interface SpeakingInfo {
  partNumber: 1 | 2 | 3;
  questions: string; // newline-separated
  cueCardTopic: string;
  cueCardPoints: string; // newline-separated
}

const STEPS = ["Basic Info", "Content", "Questions", "Review & Publish"];
// Writing & Speaking only use 3 steps (no separate Questions step)
const STEPS_SHORT = ["Basic Info", "Content", "Review & Publish"];

const TYPE_OPTIONS: { id: ContentType; label: string; icon: React.ReactNode }[] = [
  { id: "reading", label: "Reading", icon: <BookOpen className="w-5 h-5" /> },
  { id: "writing", label: "Writing", icon: <PenLine className="w-5 h-5" /> },
  { id: "listening", label: "Listening", icon: <Headphones className="w-5 h-5" /> },
  { id: "speaking", label: "Speaking", icon: <Mic className="w-5 h-5" /> },
];

const TYPE_COLOR: Record<ContentType, string> = {
  reading: "bg-purple-50 border-purple-200 text-purple-700",
  writing: "bg-amber-50 border-amber-200 text-amber-700",
  listening: "bg-sky-50 border-sky-200 text-sky-700",
  speaking: "bg-red-50 border-red-200 text-[#D32F2F]",
};

function blankQuestion(id: number): ContentQuestion {
  return { id, type: "mcq", question: "", options: ["", "", "", ""], correct: "" };
}

// ─── Question Editor ───────────────────────────────────────────────────────────

function QuestionEditor({
  question,
  index,
  onChange,
  onRemove,
}: {
  question: ContentQuestion;
  index: number;
  onChange: (q: ContentQuestion) => void;
  onRemove: () => void;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-[#D32F2F]">Q{index + 1}</span>
        <div className="flex items-center gap-2">
          <select
            value={question.type}
            onChange={(e) => {
              const t = e.target.value as ContentQuestion["type"];
              const base = { id: question.id, type: t, question: question.question };
              if (t === "mcq") onChange({ ...base, options: ["", "", "", ""], correct: "" });
              else if (t === "true-false-ng")
                onChange({ ...base, options: ["True", "False", "Not Given"], correct: "True" });
              else onChange({ ...base, answer: "" });
            }}
            className="text-xs border border-gray-200 rounded-lg px-2 py-1 outline-none"
          >
            <option value="mcq">Multiple Choice</option>
            <option value="true-false-ng">True / False / NG</option>
            <option value="fill">Fill in Blank</option>
          </select>
          <button
            onClick={onRemove}
            className="p-1 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <textarea
        rows={2}
        value={question.question}
        onChange={(e) => onChange({ ...question, question: e.target.value })}
        placeholder="Question text..."
        className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#D32F2F]/20 resize-none"
      />

      {question.type === "mcq" && (
        <div className="space-y-2">
          {(question.options ?? []).map((opt, oi) => (
            <div key={oi} className="flex items-center gap-2">
              <input
                type="radio"
                name={`q${question.id}-correct`}
                checked={question.correct === opt && opt !== ""}
                onChange={() => onChange({ ...question, correct: opt })}
                className="accent-[#D32F2F] shrink-0"
              />
              <input
                value={opt}
                onChange={(e) => {
                  const opts = [...(question.options ?? [])];
                  const wasCorrect = question.correct === opts[oi];
                  opts[oi] = e.target.value;
                  onChange({
                    ...question,
                    options: opts,
                    correct: wasCorrect ? e.target.value : question.correct,
                  });
                }}
                placeholder={`Option ${String.fromCharCode(65 + oi)}`}
                className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-1.5 outline-none focus:ring-2 focus:ring-[#D32F2F]/20"
              />
            </div>
          ))}
          <p className="text-xs text-gray-400">Select the radio button next to the correct answer</p>
        </div>
      )}

      {question.type === "true-false-ng" && (
        <div className="space-y-1.5">
          {["True", "False", "Not Given"].map((opt) => (
            <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                name={`q${question.id}-correct`}
                checked={question.correct === opt}
                onChange={() => onChange({ ...question, correct: opt })}
                className="accent-[#D32F2F]"
              />
              {opt}
            </label>
          ))}
        </div>
      )}

      {question.type === "fill" && (
        <input
          value={question.answer ?? ""}
          onChange={(e) => onChange({ ...question, answer: e.target.value })}
          placeholder="Correct answer..."
          className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#D32F2F]/20"
        />
      )}
    </div>
  );
}

// ─── Main form ─────────────────────────────────────────────────────────────────

function CreateContentForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get("edit");
  const editType = searchParams.get("type") as ContentType | null;

  const [step, setStep] = useState(0);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [basic, setBasic] = useState<BasicInfo>({
    title: "",
    contentType: (editType as ContentType) ?? "reading",
    difficulty: "medium",
    status: "draft",
  });

  const [passageText, setPassageText] = useState("");
  const [promptInfo, setPromptInfo] = useState<PromptInfo>({ taskType: "task2", prompt: "" });
  const [speakingInfo, setSpeakingInfo] = useState<SpeakingInfo>({
    partNumber: 1,
    questions: "",
    cueCardTopic: "",
    cueCardPoints: "",
  });
  const [questions, setQuestions] = useState<ContentQuestion[]>([blankQuestion(1)]);

  const usesQuestionStep = basic.contentType === "reading" || basic.contentType === "listening";
  const steps = usesQuestionStep ? STEPS : STEPS_SHORT;
  const totalSteps = steps.length;

  // Load existing content when editing
  const loadContent = useCallback(async () => {
    if (!editId || !editType) return;
    try {
      const res = await fetch(`/api/admin/content/${editId}?type=${editType}`);
      if (!res.ok) return;
      // Prefill handled server-side — for now just redirect to create fresh
    } catch {
      // ignore
    }
  }, [editId, editType]);

  useEffect(() => {
    loadContent();
  }, [loadContent]);

  async function handlePublish(publishStatus: Status) {
    setError("");
    setSaving(true);

    try {
      let endpoint = "";
      let body: Record<string, unknown> = {};

      if (basic.contentType === "reading") {
        endpoint = "/api/admin/reading-passages";
        body = {
          title: basic.title,
          text: passageText,
          questions,
          difficulty: basic.difficulty,
          status: publishStatus,
        };
      } else if (basic.contentType === "writing") {
        endpoint = "/api/admin/writing-prompts";
        body = {
          title: basic.title,
          taskType: promptInfo.taskType,
          prompt: promptInfo.prompt,
          difficulty: basic.difficulty,
          status: publishStatus,
        };
      } else if (basic.contentType === "listening") {
        endpoint = "/api/admin/listening-sections";
        body = {
          title: basic.title,
          transcript: passageText,
          audioUrl: null,
          questions,
          difficulty: basic.difficulty,
          status: publishStatus,
        };
      } else {
        // speaking
        endpoint = "/api/admin/speaking-parts";
        const rawPoints = speakingInfo.cueCardPoints
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean);
        body = {
          title: basic.title,
          partNumber: speakingInfo.partNumber,
          questions: speakingInfo.questions
            .split("\n")
            .map((s) => s.trim())
            .filter(Boolean),
          cueCard:
            speakingInfo.partNumber === 2 && speakingInfo.cueCardTopic
              ? { topic: speakingInfo.cueCardTopic, points: rawPoints }
              : null,
          difficulty: basic.difficulty,
          status: publishStatus,
        };
      }

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? "Failed to save.");
        return;
      }

      router.push("/dashboard/tests");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  function addQuestion() {
    setQuestions((prev) => [...prev, blankQuestion(prev.length + 1)]);
  }

  function updateQuestion(index: number, q: ContentQuestion) {
    setQuestions((prev) => prev.map((old, i) => (i === index ? q : old)));
  }

  function removeQuestion(index: number) {
    setQuestions((prev) =>
      prev
        .filter((_, i) => i !== index)
        .map((q, i) => ({ ...q, id: i + 1 }))
    );
  }


  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          {editId ? "Edit Content" : "Create New Content"}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Add a new reading passage, writing prompt, or listening section
        </p>
      </div>

      {/* Stepper */}
      <div className="flex items-center gap-2">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <button
              onClick={() => i < step && setStep(i)}
              className={`flex items-center gap-2 text-sm font-medium transition ${
                step === i ? "text-[#D32F2F]" : i < step ? "text-green-600" : "text-gray-400"
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition ${
                  i < step
                    ? "border-green-500 bg-green-500 text-white"
                    : i === step
                      ? "border-[#D32F2F] text-[#D32F2F]"
                      : "border-gray-300 text-gray-400"
                }`}
              >
                {i < step ? <Check className="w-3.5 h-3.5" /> : i + 1}
              </div>
              <span className="hidden sm:inline">{s}</span>
            </button>
            {i < steps.length - 1 && (
              <ChevronRight className="w-4 h-4 text-gray-300 shrink-0" />
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      <div className="bg-white rounded-2xl shadow-sm p-6">

        {/* ── Step 0: Basic Info ── */}
        {step === 0 && (
          <div className="space-y-5">
            <h2 className="font-bold text-gray-800">Basic Information</h2>

            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                value={basic.title}
                onChange={(e) => setBasic({ ...basic, title: e.target.value })}
                placeholder="e.g., The Psychology of Colour"
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#D32F2F]/20 focus:border-[#D32F2F]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 mb-2">
                Content Type <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-4 gap-2">
                {TYPE_OPTIONS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setBasic({ ...basic, contentType: t.id })}
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition ${
                      basic.contentType === t.id
                        ? TYPE_COLOR[t.id] + " ring-2 ring-offset-1 ring-[#D32F2F]"
                        : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {t.icon}
                    <span className="text-xs font-medium">{t.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Difficulty
                </label>
                <select
                  value={basic.difficulty}
                  onChange={(e) => setBasic({ ...basic, difficulty: e.target.value as Difficulty })}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none"
                >
                  <option value="easy">Easy (Band 5–6)</option>
                  <option value="medium">Medium (Band 6.5–7)</option>
                  <option value="hard">Hard (Band 7.5+)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Initial Status
                </label>
                <select
                  value={basic.status}
                  onChange={(e) => setBasic({ ...basic, status: e.target.value as Status })}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none"
                >
                  <option value="draft">Save as Draft</option>
                  <option value="active">Publish immediately</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* ── Step 1: Content (passage / prompt / transcript / speaking) ── */}
        {step === 1 && (
          <div className="space-y-5">
            <h2 className="font-bold text-gray-800">
              {basic.contentType === "reading" && "Passage Text"}
              {basic.contentType === "writing" && "Writing Prompt"}
              {basic.contentType === "listening" && "Transcript"}
              {basic.contentType === "speaking" && "Speaking Details"}
            </h2>

            {(basic.contentType === "reading" || basic.contentType === "listening") && (
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  {basic.contentType === "reading" ? "Passage" : "Transcript"}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={14}
                  value={passageText}
                  onChange={(e) => setPassageText(e.target.value)}
                  placeholder={
                    basic.contentType === "reading"
                      ? "Paste the full passage text here. Separate paragraphs with blank lines."
                      : "Paste the audio transcript here. Use Speaker: format for dialogues."
                  }
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#D32F2F]/20 resize-none leading-relaxed"
                />
                <p className="text-xs text-gray-400 mt-1">{passageText.length} characters</p>
              </div>
            )}

            {basic.contentType === "writing" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">
                    Task Type <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-3">
                    {(["task1", "task2"] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setPromptInfo({ ...promptInfo, taskType: t })}
                        className={`flex-1 py-2 rounded-xl border-2 text-sm font-medium transition ${
                          promptInfo.taskType === t
                            ? "border-[#D32F2F] text-[#D32F2F] bg-red-50"
                            : "border-gray-200 text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {t === "task1" ? "Task 1 (Graph / Chart)" : "Task 2 (Essay)"}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">
                    Prompt <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={8}
                    value={promptInfo.prompt}
                    onChange={(e) => setPromptInfo({ ...promptInfo, prompt: e.target.value })}
                    placeholder="Write the full IELTS prompt here..."
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#D32F2F]/20 resize-none"
                  />
                </div>
              </div>
            )}

            {basic.contentType === "speaking" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">
                    Part Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-3">
                    {([1, 2, 3] as const).map((n) => (
                      <button
                        key={n}
                        onClick={() => setSpeakingInfo({ ...speakingInfo, partNumber: n })}
                        className={`flex-1 py-2 rounded-xl border-2 text-sm font-medium transition ${
                          speakingInfo.partNumber === n
                            ? "border-[#D32F2F] text-[#D32F2F] bg-red-50"
                            : "border-gray-200 text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        Part {n}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">
                    Sample Questions{" "}
                    <span className="text-gray-400 font-normal">(one per line)</span>
                  </label>
                  <textarea
                    rows={5}
                    value={speakingInfo.questions}
                    onChange={(e) =>
                      setSpeakingInfo({ ...speakingInfo, questions: e.target.value })
                    }
                    placeholder={"Can you tell me about where you live?\nDo you enjoy cooking?"}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#D32F2F]/20 resize-none"
                  />
                </div>
                {speakingInfo.partNumber === 2 && (
                  <div className="space-y-3 bg-amber-50 border border-amber-100 rounded-xl p-4">
                    <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
                      Cue Card (Part 2)
                    </p>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        Topic
                      </label>
                      <input
                        value={speakingInfo.cueCardTopic}
                        onChange={(e) =>
                          setSpeakingInfo({ ...speakingInfo, cueCardTopic: e.target.value })
                        }
                        placeholder="Describe a memorable journey you have taken."
                        className="w-full border border-amber-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-300 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        Bullet Points{" "}
                        <span className="text-gray-400 font-normal">(one per line)</span>
                      </label>
                      <textarea
                        rows={4}
                        value={speakingInfo.cueCardPoints}
                        onChange={(e) =>
                          setSpeakingInfo({ ...speakingInfo, cueCardPoints: e.target.value })
                        }
                        placeholder={"Where you went\nWho you went with\nWhat you did"}
                        className="w-full border border-amber-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-300 bg-white resize-none"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ── Step 2 (reading/listening only): Questions ── */}
        {step === 2 && usesQuestionStep && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-gray-800">Questions ({questions.length})</h2>
              <button
                onClick={addQuestion}
                className="flex items-center gap-1.5 text-sm text-[#D32F2F] font-medium hover:underline"
              >
                <Plus className="w-4 h-4" /> Add Question
              </button>
            </div>
            <div className="space-y-4">
              {questions.map((q, i) => (
                <QuestionEditor
                  key={q.id}
                  question={q}
                  index={i}
                  onChange={(updated) => updateQuestion(i, updated)}
                  onRemove={() => removeQuestion(i)}
                />
              ))}
            </div>
            {questions.length === 0 && (
              <div className="border border-dashed border-gray-300 rounded-xl p-8 text-center">
                <p className="text-sm text-gray-500 mb-3">No questions yet</p>
                <button
                  onClick={addQuestion}
                  className="gradient-bg text-white px-4 py-2 rounded-xl text-sm font-semibold hover:opacity-90 transition"
                >
                  Add First Question
                </button>
              </div>
            )}
          </div>
        )}

        {/* ── Final step: Review & Publish ── */}
        {step === totalSteps - 1 && (
          <div className="space-y-4">
            <h2 className="font-bold text-gray-800">Review & Publish</h2>

            <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Title</span>
                <span className="font-medium text-gray-800">{basic.title || "—"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Type</span>
                <span className="font-medium text-gray-800 capitalize">{basic.contentType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Difficulty</span>
                <span className="font-medium text-gray-800 capitalize">{basic.difficulty}</span>
              </div>
              {usesQuestionStep && (
                <div className="flex justify-between">
                  <span className="text-gray-500">Questions</span>
                  <span className="font-medium text-gray-800">{questions.length}</span>
                </div>
              )}
              {basic.contentType === "writing" && (
                <div className="flex justify-between">
                  <span className="text-gray-500">Task</span>
                  <span className="font-medium text-gray-800">
                    {promptInfo.taskType === "task1" ? "Task 1" : "Task 2"}
                  </span>
                </div>
              )}
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-sm text-red-700">
                {error}
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => handlePublish("draft")}
                disabled={saving}
                className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {saving && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                Save as Draft
              </button>
              <button
                onClick={() => handlePublish("active")}
                disabled={saving}
                className="flex-1 py-2.5 gradient-bg text-white rounded-xl text-sm font-semibold hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {saving && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                Publish
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Nav buttons */}
      <div className="flex justify-between">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="px-5 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          Back
        </button>
        {step < totalSteps - 1 && (
          <button
            onClick={() => {
              if (step === 0 && !basic.title.trim()) {
                setError("Please enter a title.");
                return;
              }
              setError("");
              setStep((s) => s + 1);
            }}
            className="px-5 py-2.5 gradient-bg text-white rounded-xl text-sm font-semibold hover:opacity-90 transition"
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Page export with Suspense (useSearchParams requires it) ──────────────────

export default function CreateContentPage() {
  return (
    <Suspense>
      <CreateContentForm />
    </Suspense>
  );
}
