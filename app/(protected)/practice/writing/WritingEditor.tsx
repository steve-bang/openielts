"use client";

import { useState, useEffect, useRef } from "react";
import {
  Clock,
  FileText,
  CheckCircle,
  AlertCircle,
  Send,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  Loader2,
} from "lucide-react";
import type { WritingFeedback } from "@/types/submission";

const TOTAL_SECONDS = 40 * 60;

type Tab = "write" | "feedback";

interface PromptData {
  readonly taskType: "task1" | "task2";
  readonly title: string;
  readonly prompt: string;
}

export default function WritingEditor({ promptData }: { readonly promptData: PromptData }) {
  const [text, setText] = useState("");
  const [timeLeft, setTimeLeft] = useState(TOTAL_SECONDS);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("write");
  const [showPrompt, setShowPrompt] = useState(true);
  const [feedback, setFeedback] = useState<WritingFeedback | null>(null);
  const [error, setError] = useState("");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);
  useEffect(() => { startTimeRef.current = Date.now(); }, []);

  useEffect(() => {
    if (!submitted) {
      intervalRef.current = setInterval(() => setTimeLeft((t) => Math.max(0, t - 1)), 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [submitted]);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const isWarning = timeLeft < 300;
  const taskLabel = promptData.taskType === "task1" ? "Task 1" : "Task 2";

  async function handleSubmit() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setSubmitted(true);
    setLoading(true);
    setError("");

    const timeTakenSeconds = Math.round((Date.now() - startTimeRef.current) / 1000);

    const res = await fetch("/api/writing/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        taskType: promptData.taskType,
        prompt: promptData.prompt,
        promptTitle: promptData.title,
        essay: text,
        wordCount,
        timeTakenSeconds,
      }),
    });

    setLoading(false);

    if (!res.ok) {
      setError("Failed to get AI feedback. Please try again.");
      return;
    }

    const data = (await res.json()) as { feedback: WritingFeedback };
    setFeedback(data.feedback);
    setActiveTab("feedback");
  }

  function handleReset() {
    setText("");
    setTimeLeft(TOTAL_SECONDS);
    setSubmitted(false);
    setLoading(false);
    setFeedback(null);
    setError("");
    setActiveTab("write");
    startTimeRef.current = Date.now();
  }

  return (
    <div className="max-w-5xl space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Writing Practice</h1>
          <p className="text-sm text-gray-500">
            {taskLabel} — {promptData.title}
          </p>
        </div>
        <div
          className={`flex items-center gap-2 px-3 py-2 rounded-xl font-mono font-bold text-sm ${
            isWarning ? "bg-red-50 text-red-600 animate-pulse" : "bg-gray-100 text-gray-700"
          }`}
        >
          <Clock className="w-4 h-4" />
          {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
        </div>
      </div>

      {/* Tabs (after submit) */}
      {submitted && (
        <div className="flex gap-1 bg-gray-100 rounded-xl p-1 w-fit">
          {(["write", "feedback"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition capitalize ${
                activeTab === tab
                  ? "bg-white shadow text-gray-800"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab === "write" ? "Your Essay" : "AI Feedback"}
            </button>
          ))}
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-4">
        {/* Prompt panel */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <button
            onClick={() => setShowPrompt(!showPrompt)}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition"
          >
            <span className="font-semibold text-gray-800 text-sm flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#D32F2F]" /> Task Prompt
            </span>
            {showPrompt ? (
              <ChevronUp className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            )}
          </button>
          {showPrompt && (
            <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed whitespace-pre-line border-t border-gray-100 pt-3">
              {promptData.prompt.split("**").map((part, i) =>
                i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
              )}
            </div>
          )}
        </div>

        {/* Write / Feedback panel */}
        <div className="bg-white rounded-2xl shadow-sm p-4">
          {activeTab === "write" ? (
            <>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-500">Your Response</span>
                <span
                  className={`text-xs font-semibold ${
                    wordCount >= 250 ? "text-green-600" : "text-gray-400"
                  }`}
                >
                  {wordCount} / 250+ words
                </span>
              </div>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                disabled={submitted}
                rows={14}
                placeholder="Begin writing your essay here..."
                className="w-full border border-gray-200 rounded-xl p-3 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#D32F2F]/20 focus:border-[#D32F2F] resize-none disabled:bg-gray-50 disabled:text-gray-600"
              />
              {error && (
                <p className="text-xs text-red-600 mt-2 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {error}
                </p>
              )}
              <div className="flex items-center justify-between mt-3">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition"
                >
                  <RotateCcw className="w-3 h-3" /> Reset
                </button>
                {!submitted ? (
                  <button
                    onClick={handleSubmit}
                    disabled={wordCount < 50}
                    className="flex items-center gap-2 gradient-bg text-white px-4 py-2 rounded-xl text-sm font-semibold hover:opacity-90 disabled:opacity-40 transition"
                  >
                    <Send className="w-3.5 h-3.5" /> Submit Essay
                  </button>
                ) : (
                  <div className="flex items-center gap-1.5 text-xs text-green-600 font-medium">
                    <CheckCircle className="w-4 h-4" /> Submitted
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              {loading ? (
                <div className="flex flex-col items-center justify-center h-64 gap-3">
                  <Loader2 className="w-8 h-8 animate-spin text-[#D32F2F]" />
                  <p className="text-sm text-gray-500">Analysing your essay...</p>
                  <p className="text-xs text-gray-400">This usually takes 5–10 seconds</p>
                </div>
              ) : feedback ? (
                <div className="space-y-4">
                  {/* Overall score */}
                  <div className="bg-linear-to-br from-[#D32F2F] to-[#E57373] rounded-xl p-4 text-white text-center">
                    <p className="text-sm text-red-100 mb-1">Estimated Band Score</p>
                    <p className="text-5xl font-extrabold">{feedback.overall}</p>
                    <p className="text-xs text-red-200 mt-1">Based on IELTS official criteria</p>
                  </div>

                  {/* Summary */}
                  {feedback.summary && (
                    <p className="text-xs text-gray-600 leading-relaxed bg-gray-50 rounded-xl p-3">
                      {feedback.summary}
                    </p>
                  )}

                  {/* Criteria */}
                  <div className="space-y-3">
                    {feedback.criteria.map((c) => (
                      <div key={c.name} className="border border-gray-100 rounded-xl p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-gray-700">{c.name}</span>
                          <span className="font-bold text-[#D32F2F]">{c.score}</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-100 rounded-full mb-2">
                          <div
                            className="h-full gradient-bg rounded-full transition-all"
                            style={{ width: `${(c.score / 9) * 100}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">{c.comment}</p>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  {feedback.highlights.length > 0 && (
                    <div>
                      <h4 className="text-xs font-semibold text-gray-600 mb-2 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-500" /> Suggestions
                      </h4>
                      {feedback.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="bg-amber-50 border border-amber-100 rounded-lg p-2.5 mb-2"
                        >
                          <p className="text-xs font-medium text-amber-800">&ldquo;{h.text}&rdquo;</p>
                          <p className="text-xs text-amber-600 mt-0.5">{h.suggestion}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <button
                    onClick={handleReset}
                    className="w-full flex items-center justify-center gap-2 border border-gray-200 text-gray-600 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 transition"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Practice Again
                  </button>
                </div>
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
