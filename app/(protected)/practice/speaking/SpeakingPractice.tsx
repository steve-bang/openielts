"use client";

import { useState, useEffect, useRef } from "react";
import { Mic, MicOff, Square, Clock, ChevronRight, CheckCircle, Volume2 } from "lucide-react";
import type { SpeakingPart } from "@/types/content";

// ─── Static metadata per part number ─────────────────────────────────────────

const PART_META: Record<1 | 2 | 3, { duration: string; desc: string }> = {
  1: {
    duration: "4–5 min",
    desc: "The examiner asks general questions about you and familiar topics.",
  },
  2: {
    duration: "3–4 min",
    desc: "You speak for 1–2 minutes on a topic from a cue card.",
  },
  3: {
    duration: "4–5 min",
    desc: "The examiner asks more abstract questions related to the Part 2 topic.",
  },
};

type Stage = "select" | "prep" | "recording" | "done";

// ─── Component ────────────────────────────────────────────────────────────────

export default function SpeakingPractice({ parts }: { readonly parts: SpeakingPart[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stage, setStage] = useState<Stage>("select");
  const [recording, setRecording] = useState(false);
  const [prepTime, setPrepTime] = useState(60);
  const [recordTime, setRecordTime] = useState(0);
  const [saving, setSaving] = useState(false);
  const recordStartRef = useRef<number | null>(null);

  const part = parts[activeIndex];
  const meta = PART_META[part.partNumber];

  // Prep countdown (Part 2 only)
  useEffect(() => {
    if (stage !== "prep") return;
    if (prepTime <= 0) {
      setStage("recording");
      return;
    }
    const id = setInterval(() => setPrepTime((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [stage, prepTime]);

  // Recording timer
  useEffect(() => {
    if (!recording) return;
    const id = setInterval(() => setRecordTime((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, [recording]);

  function handleStart() {
    setPrepTime(60);
    setRecordTime(0);
    setStage(part.partNumber === 2 ? "prep" : "recording");
  }

  function handleStartRecording() {
    recordStartRef.current = Date.now();
    setRecording(true);
  }

  async function handleStopRecording() {
    setRecording(false);
    const durationSeconds = recordStartRef.current
      ? Math.round((Date.now() - recordStartRef.current) / 1000)
      : recordTime;

    setSaving(true);
    setStage("done");

    try {
      await fetch("/api/speaking/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          partNumber: part.partNumber,
          partTitle: part.title,
          durationSeconds,
        }),
      });
    } catch {
      // Non-blocking
    } finally {
      setSaving(false);
    }
  }

  function handleReset() {
    setStage("select");
    setActiveIndex(0);
    setRecording(false);
    setPrepTime(60);
    setRecordTime(0);
    setSaving(false);
    recordStartRef.current = null;
  }

  return (
    <div className="max-w-3xl space-y-4">
      <div>
        <h1 className="text-xl font-bold text-gray-900">Speaking Practice</h1>
        <p className="text-sm text-gray-500">Practice speaking — record your response for each part</p>
      </div>

      {/* Part selection */}
      {stage === "select" && (
        <>
          <div className="grid gap-3">
            {parts.map((p, i) => {
              const m = PART_META[p.partNumber];
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`bg-white rounded-2xl shadow-sm p-5 text-left transition-all hover:-translate-y-0.5 hover:shadow-md border-2 ${
                    activeIndex === i ? "border-[#D32F2F]" : "border-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shrink-0 ${
                          activeIndex === i ? "gradient-bg text-white" : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {p.partNumber}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          Part {p.partNumber}: {p.title}
                        </p>
                        <p className="text-xs text-gray-500">{m.duration}</p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-colors ${
                        activeIndex === i ? "text-[#D32F2F]" : "text-gray-300"
                      }`}
                    />
                  </div>
                  {activeIndex === i && (
                    <p className="text-sm text-gray-600 mt-3 pl-[52px]">{m.desc}</p>
                  )}
                </button>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="font-bold text-gray-800 mb-4">
              Part {part.partNumber}: {part.title}
            </h3>

            {part.questions.length > 0 && (
              <div className="space-y-3 mb-5">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Sample Questions
                </p>
                {part.questions.map((q) => (
                  <div key={q} className="flex items-start gap-2 p-3 bg-gray-50 rounded-xl">
                    <Volume2 className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">{q}</p>
                  </div>
                ))}
              </div>
            )}

            {part.cueCard && (
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-5">
                <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-2">
                  Cue Card
                </p>
                <p className="font-semibold text-gray-800 mb-3">{part.cueCard.topic}</p>
                <p className="text-xs text-amber-600 mb-2">You should say:</p>
                <ul className="space-y-1">
                  {part.cueCard.points.map((point) => (
                    <li key={point} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              type="button"
              onClick={handleStart}
              className="w-full py-3 gradient-bg text-white rounded-xl font-semibold text-sm hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              <Mic className="w-4 h-4" /> Start Part {part.partNumber}
            </button>
          </div>
        </>
      )}

      {/* Prep countdown (Part 2 only) */}
      {stage === "prep" && (
        <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
          <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-200">
            <span className="text-3xl font-extrabold text-white">{prepTime}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Preparation Time</h3>
          <p className="text-sm text-gray-500 mb-6">
            Read your cue card and prepare your response. You have 1 minute.
          </p>
          {part.cueCard && (
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-6 text-left">
              <p className="font-semibold text-gray-800 mb-2">{part.cueCard.topic}</p>
              <ul className="space-y-1">
                {part.cueCard.points.map((point) => (
                  <li key={point} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button
            type="button"
            onClick={() => setStage("recording")}
            className="gradient-bg text-white px-8 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition"
          >
            Start Speaking
          </button>
        </div>
      )}

      {/* Recording */}
      {stage === "recording" && (
        <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
          <div
            className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 ${
              recording
                ? "gradient-bg shadow-lg shadow-red-300 animate-pulse"
                : "bg-gray-100"
            }`}
          >
            {recording ? (
              <Mic className="w-10 h-10 text-white" />
            ) : (
              <MicOff className="w-10 h-10 text-gray-400" />
            )}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {recording ? "Recording…" : "Ready to Record"}
          </h3>
          {recording && (
            <div className="flex items-center justify-center gap-1.5 text-sm text-gray-500 mb-4">
              <Clock className="w-4 h-4" />
              <span>
                {Math.floor(recordTime / 60)}:{String(recordTime % 60).padStart(2, "0")}
              </span>
            </div>
          )}
          <p className="text-sm text-gray-500 mb-6">
            {recording
              ? "Speak clearly into your microphone."
              : "Click the button below to start recording your response."}
          </p>
          <div className="flex gap-3 justify-center">
            {recording ? (
              <button
                type="button"
                onClick={handleStopRecording}
                className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                <Square className="w-4 h-4" /> Stop &amp; Submit
              </button>
            ) : (
              <button
                type="button"
                onClick={handleStartRecording}
                className="flex items-center gap-2 gradient-bg text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                <Mic className="w-4 h-4" /> Start Recording
              </button>
            )}
          </div>
        </div>
      )}

      {/* Done */}
      {stage === "done" && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <h3 className="font-bold text-gray-900">
                {saving ? "Saving session…" : "Session saved!"}
              </h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Your <strong>Part {part.partNumber}: {part.title}</strong> practice session has been
              recorded. Duration:{" "}
              <strong>
                {Math.floor(recordTime / 60)}:{String(recordTime % 60).padStart(2, "0")}
              </strong>
              .
            </p>
            <p className="text-xs text-gray-400">
              AI speaking evaluation is coming soon. Keep practising regularly to build fluency and
              confidence.
            </p>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="w-full py-3 border border-gray-200 text-gray-700 rounded-xl font-semibold text-sm hover:bg-gray-50 transition"
          >
            Try Another Part
          </button>
        </div>
      )}

      {/* Part meta description (shown during non-select stages) */}
      {stage !== "select" && (
        <p className="text-xs text-gray-400 text-center">{meta.duration} · {meta.desc}</p>
      )}
    </div>
  );
}
