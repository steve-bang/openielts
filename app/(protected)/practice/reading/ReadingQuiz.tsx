"use client";

import { useState, useEffect, useRef } from "react";
import { Clock, CheckCircle } from "lucide-react";
import type { ContentQuestion } from "@/types/content";

// ─── Helpers ───────────────────────────────────────────────────────────────────

function getCorrectAnswer(q: ContentQuestion): string {
  return q.type === "fill" ? (q.answer ?? "") : (q.correct ?? "");
}

function checkAnswer(q: ContentQuestion, userAnswer: string): boolean {
  if (q.type === "fill") {
    return userAnswer.toLowerCase().trim() === (q.answer ?? "").toLowerCase().trim();
  }
  return userAnswer === (q.correct ?? "");
}

function calcBandScore(correct: number, total: number): number {
  return Math.round((6 + (correct / total) * 2) * 2) / 2;
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface PassageData {
  readonly title: string;
  readonly text: string;
  readonly questions: ContentQuestion[];
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function ReadingQuiz({ passage }: { readonly passage: PassageData }) {
  const { title, text, questions } = passage;

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [bandScore, setBandScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20 * 60);
  const [saving, setSaving] = useState(false);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    if (submitted) return;
    const id = setInterval(() => setTimeLeft((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(id);
  }, [submitted]);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  async function handleSubmit() {
    const timeTakenSeconds = Math.round((Date.now() - startTimeRef.current) / 1000);
    const correct = questions.filter((q) => checkAnswer(q, answers[q.id] ?? "")).length;
    const band = calcBandScore(correct, questions.length);

    setSubmitted(true);
    setCorrectCount(correct);
    setBandScore(band);
    setSaving(true);

    try {
      await fetch("/api/reading/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          passageTitle: title,
          totalQuestions: questions.length,
          correctAnswers: correct,
          bandScore: band,
          timeTakenSeconds,
          questions: questions.map((q) => ({
            id: q.id,
            type: q.type,
            question: q.question,
            userAnswer: answers[q.id] ?? "",
            correctAnswer: getCorrectAnswer(q),
            isCorrect: checkAnswer(q, answers[q.id] ?? ""),
          })),
        }),
      });
    } catch {
      // Non-blocking
    } finally {
      setSaving(false);
    }
  }

  function handleReset() {
    setAnswers({});
    setSubmitted(false);
    setCorrectCount(0);
    setBandScore(0);
    setTimeLeft(20 * 60);
    setSaving(false);
    startTimeRef.current = Date.now();
  }

  return (
    <div className="max-w-6xl space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Reading Practice</h1>
          <p className="text-sm text-gray-500">Academic Reading — {title}</p>
        </div>
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-xl font-mono font-bold text-sm text-gray-700">
          <Clock className="w-4 h-4" />
          {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 items-start">
        {/* Passage */}
        <div className="bg-white rounded-2xl shadow-sm p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          <h2 className="font-bold text-gray-900 text-lg mb-4">{title}</h2>
          {text.split("\n\n").map((para, i) => (
            <p key={i} className="text-sm text-gray-700 leading-relaxed mb-4">
              {para}
            </p>
          ))}
        </div>

        {/* Questions */}
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
          <h2 className="font-bold text-gray-800 text-sm">Questions 1–{questions.length}</h2>

          {submitted && (
            <div className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-xl p-3">
              <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
              <div>
                <p className="font-semibold text-green-800 text-sm">
                  Score: {correctCount}/{questions.length}
                </p>
                <p className="text-xs text-green-600">
                  Estimated band: {bandScore.toFixed(1)}
                  {saving && " · Saving…"}
                </p>
              </div>
            </div>
          )}

          {questions.map((q) => {
            const userAnswer = answers[q.id];
            const isCorrect = submitted && checkAnswer(q, userAnswer ?? "");
            const isWrong = submitted && !!userAnswer && !isCorrect;

            return (
              <div
                key={q.id}
                className={`border rounded-xl p-4 transition-colors ${
                  submitted
                    ? isCorrect
                      ? "border-green-200 bg-green-50"
                      : isWrong
                        ? "border-red-200 bg-red-50"
                        : "border-gray-200"
                    : "border-gray-200"
                }`}
              >
                <p className="text-sm font-medium text-gray-800 mb-3">
                  <span className="text-[#D32F2F] font-bold mr-2">{q.id}.</span>
                  {q.question}
                </p>

                {q.type === "fill" ? (
                  <input
                    disabled={submitted}
                    value={userAnswer ?? ""}
                    onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                    placeholder="Type your answer..."
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#D32F2F]/20 disabled:bg-transparent"
                  />
                ) : (
                  <div className="space-y-2">
                    {(q.options ?? []).map((opt) => {
                      const isSelected = userAnswer === opt;
                      const isRightAnswer = submitted && opt === q.correct;
                      return (
                        <label
                          key={opt}
                          className={`flex items-center gap-2.5 p-2.5 rounded-lg cursor-pointer text-sm transition-colors ${
                            isRightAnswer
                              ? "bg-green-100 text-green-800"
                              : submitted && isSelected && !isRightAnswer
                                ? "bg-red-100 text-red-800"
                                : isSelected
                                  ? "bg-red-50 text-[#D32F2F] border border-[#D32F2F]/30"
                                  : "hover:bg-gray-50 text-gray-700"
                          }`}
                        >
                          <input
                            type="radio"
                            disabled={submitted}
                            checked={isSelected}
                            onChange={() => setAnswers({ ...answers, [q.id]: opt })}
                            className="accent-[#D32F2F]"
                          />
                          {opt}
                        </label>
                      );
                    })}
                  </div>
                )}

                {submitted && (
                  <p
                    className={`text-xs mt-2 font-medium ${isCorrect ? "text-green-600" : "text-red-600"}`}
                  >
                    {isCorrect ? "✓ Correct" : `✗ Answer: ${getCorrectAnswer(q)}`}
                  </p>
                )}
              </div>
            );
          })}

          {!submitted ? (
            <button
              onClick={handleSubmit}
              className="w-full py-3 gradient-bg text-white rounded-xl font-semibold text-sm hover:opacity-90 transition"
            >
              Submit Answers
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full py-3 border border-gray-200 text-gray-700 rounded-xl font-semibold text-sm hover:bg-gray-50 transition"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
