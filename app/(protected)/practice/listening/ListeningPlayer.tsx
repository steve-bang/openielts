"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, Volume2, FileText, CheckCircle, Clock } from "lucide-react";
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

interface SectionData {
  readonly title: string;
  readonly audioUrl: string | null;
  readonly transcript: string;
  readonly questions: ContentQuestion[];
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function ListeningPlayer({ section }: { readonly section: SectionData }) {
  const { title, audioUrl, transcript, questions } = section;

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [bandScore, setBandScore] = useState(0);
  const [saving, setSaving] = useState(false);
  const startTimeRef = useRef(Date.now());

  // Wire up real audio if a URL is provided
  useEffect(() => {
    if (!audioUrl) return;
    const audio = new Audio(audioUrl);
    audioRef.current = audio;

    const onTimeUpdate = () => {
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };
    const onEnded = () => setPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
    };
  }, [audioUrl]);

  function handlePlayPause() {
    if (!audioRef.current) {
      setPlaying((p) => !p);
      return;
    }
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying((p) => !p);
  }

  function handleRewind() {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
    } else {
      setProgress((p) => Math.max(0, p - 5));
    }
  }

  function handleSeek(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = ((e.clientX - rect.left) / rect.width) * 100;
    if (audioRef.current) {
      audioRef.current.currentTime = (pct / 100) * audioRef.current.duration;
    } else {
      setProgress(pct);
    }
  }

  async function handleSubmit() {
    const timeTakenSeconds = Math.round((Date.now() - startTimeRef.current) / 1000);
    const correct = questions.filter((q) => checkAnswer(q, answers[q.id] ?? "")).length;
    const band = calcBandScore(correct, questions.length);

    setSubmitted(true);
    setCorrectCount(correct);
    setBandScore(band);
    setSaving(true);

    try {
      await fetch("/api/listening/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sectionTitle: title,
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
      // Non-blocking — result shown regardless of save success
    } finally {
      setSaving(false);
    }
  }

  function handleReset() {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setAnswers({});
    setSubmitted(false);
    setShowTranscript(false);
    setCorrectCount(0);
    setBandScore(0);
    setProgress(0);
    setPlaying(false);
    setSaving(false);
    startTimeRef.current = Date.now();
  }

  return (
    <div className="max-w-4xl space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Listening Practice</h1>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-xl text-sm font-medium text-gray-700">
          <Clock className="w-4 h-4" /> ~8 min
        </div>
      </div>

      {/* Audio Player */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold text-gray-800">{title}</h3>
            {!audioUrl && (
              <p className="text-xs text-amber-600 mt-0.5">
                Audio not available — read the transcript after submitting
              </p>
            )}
          </div>
          <span className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded-full font-medium">
            Academic
          </span>
        </div>

        {/* Waveform */}
        <div className="w-full h-16 bg-gray-50 rounded-xl mb-4 flex items-center px-4 gap-1 overflow-hidden">
          {Array.from({ length: 80 }).map((_, i) => (
            <div
              key={i}
              className={`w-0.5 rounded-full ${
                i / 80 < progress / 100 ? "bg-[#D32F2F]" : "bg-gray-200"
              }`}
              style={{ height: `${20 + Math.sin(i * 0.3) * 15 + ((i * 7) % 20)}px` }}
            />
          ))}
        </div>

        {/* Seek bar */}
        <div
          className="w-full h-1.5 bg-gray-200 rounded-full mb-3 cursor-pointer"
          onClick={handleSeek}
        >
          <div
            className="h-full gradient-bg rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-center gap-4 mt-2">
          <button
            onClick={handleRewind}
            className="p-2 rounded-full hover:bg-gray-100 transition text-gray-600"
          >
            <SkipBack className="w-5 h-5" />
          </button>
          <button
            onClick={handlePlayPause}
            className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center hover:opacity-90 transition shadow-lg shadow-red-200"
          >
            {playing ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white ml-0.5" />
            )}
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition text-gray-600">
            <Volume2 className="w-5 h-5" />
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          {submitted ? (
            <button
              onClick={() => setShowTranscript(!showTranscript)}
              className="flex items-center gap-1 mx-auto text-[#D32F2F] hover:underline"
            >
              <FileText className="w-3.5 h-3.5" /> {showTranscript ? "Hide" : "Show"} Transcript
            </button>
          ) : (
            "Note: In the real IELTS exam, you only hear each recording once."
          )}
        </p>

        {showTranscript && submitted && (
          <div className="mt-4 bg-gray-50 rounded-xl p-4 text-xs text-gray-600 leading-relaxed max-h-40 overflow-y-auto whitespace-pre-line">
            {transcript}
          </div>
        )}
      </div>

      {/* Questions */}
      <div className="bg-white rounded-2xl shadow-sm p-6 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-gray-800 text-sm">Questions 1–{questions.length}</h2>
          {submitted && (
            <div className="flex items-center gap-2 text-sm font-semibold text-green-700 bg-green-50 px-3 py-1.5 rounded-xl">
              <CheckCircle className="w-4 h-4" />
              {correctCount}/{questions.length} correct · Band {bandScore.toFixed(1)}
              {saving && " · Saving…"}
            </div>
          )}
        </div>

        {questions.map((q) => {
          const userAnswer = answers[q.id];
          const isCorrect = submitted && checkAnswer(q, userAnswer ?? "");
          const isWrong = submitted && !!userAnswer && !isCorrect;

          return (
            <div
              key={q.id}
              className={`border rounded-xl p-4 ${
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
                  placeholder="Your answer..."
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#D32F2F]/20 disabled:bg-transparent"
                />
              ) : (
                <div className="space-y-1.5">
                  {(q.options ?? []).map((opt) => {
                    const isSel = userAnswer === opt;
                    const isRight = submitted && opt === q.correct;
                    return (
                      <label
                        key={opt}
                        className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer text-sm transition-colors ${
                          isRight
                            ? "bg-green-100 text-green-800"
                            : submitted && isSel && !isRight
                              ? "bg-red-100 text-red-800"
                              : isSel
                                ? "bg-red-50 text-[#D32F2F]"
                                : "hover:bg-gray-50 text-gray-700"
                        }`}
                      >
                        <input
                          type="radio"
                          disabled={submitted}
                          checked={isSel}
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
                <p className={`text-xs mt-2 font-medium ${isCorrect ? "text-green-600" : "text-red-600"}`}>
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
  );
}
