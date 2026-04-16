"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Client → Next.js API → Firebase Auth REST API (sends reset email automatically)
    const res = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    setLoading(false);

    if (!res.ok) {
      setError("Something went wrong. Please try again.");
      return;
    }

    setSent(true);
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">

        {sent ? (
          /* Success state */
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-extrabold text-gray-900 mb-3">Check your inbox</h1>
            <p className="text-gray-500 text-sm mb-2">
              We&apos;ve sent a password reset link to
            </p>
            <p className="font-semibold text-gray-800 mb-6">{email}</p>
            <p className="text-xs text-gray-400 mb-8">
              Didn&apos;t receive it? Check your spam folder, or{" "}
              <button
                onClick={() => setSent(false)}
                className="text-[#D32F2F] hover:underline font-medium"
              >
                try again
              </button>
              .
            </p>
            <Link
              href="/sign-in"
              className="inline-flex items-center gap-2 text-sm text-[#D32F2F] font-semibold hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Sign In
            </Link>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-200">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-2xl font-extrabold text-gray-900">Forgot your password?</h1>
              <p className="text-sm text-gray-500 mt-1.5">
                Enter your email and we&apos;ll send you a reset link.
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-5 p-3.5 bg-red-50 border border-red-100 rounded-xl text-sm text-red-700">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm outline-none focus:border-[#D32F2F] transition"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 gradient-bg text-white rounded-xl font-semibold text-sm hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link
                href="/sign-in"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#D32F2F] transition"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Sign In
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
