"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Camera, User, Mail, Globe, Target, BookOpen, Bell,
  Lock, Eye, EyeOff, CheckCircle, Loader2,
} from "lucide-react";
import type { PublicUser } from "@/types/user";

const TABS = ["Personal Info", "IELTS Goals", "Notifications", "Security"];

const BAND_OPTIONS = ["4.0","4.5","5.0","5.5","6.0","6.5","7.0","7.5","8.0","8.5","9.0"];

const NOTIFICATION_ITEMS = [
  { key: "essay", label: "Essay feedback ready", desc: "Notified when AI finishes reviewing your essay", defaultOn: true },
  { key: "reminder", label: "Daily study reminder", desc: "Daily reminder at your preferred time", defaultOn: true },
  { key: "forum_reply", label: "New forum replies", desc: "When someone replies to your posts", defaultOn: false },
  { key: "forum_post", label: "New forum posts", desc: "New posts in categories you follow", defaultOn: false },
  { key: "weekly", label: "Weekly progress report", desc: "Weekly summary of your learning progress", defaultOn: true },
  { key: "promo", label: "Promotions & offers", desc: "Discounts and special offers", defaultOn: false },
];

interface Props {
  user: PublicUser | null;
  email: string;
  memberSince: string;
}

function getInitials(name: string | null, email: string): string {
  if (name) {
    const parts = name.trim().split(" ");
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return parts[0].slice(0, 2).toUpperCase();
  }
  return email[0]?.toUpperCase() ?? "U";
}

export default function ProfileClient({ user, email, memberSince }: Props) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Personal Info state
  const [fullName, setFullName] = useState(user?.profile.fullName ?? "");
  const [nationality, setNationality] = useState(user?.profile.nationality ?? "");
  const [bio, setBio] = useState(user?.profile.bio ?? "");

  // IELTS Goals state
  const [targetBand, setTargetBand] = useState(
    user?.profile.targetBand != null ? String(user.profile.targetBand) : ""
  );
  const [currentBand, setCurrentBand] = useState(
    user?.profile.currentBand != null ? String(user.profile.currentBand) : ""
  );

  const initials = getInitials(user?.profile.fullName ?? null, email);
  const displayName = user?.profile.fullName || email;
  const isPremium = user?.subscription.status === "premium";

  async function handleSave(fields: Record<string, unknown>) {
    setSaving(true);
    setSaveError("");
    try {
      const res = await fetch("/api/users/me", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profile: fields }),
      });
      if (!res.ok) {
        const data = await res.json() as { error?: string };
        setSaveError(data.error ?? "Failed to save. Please try again.");
        return;
      }
      setSaved(true);
      router.refresh();
      setTimeout(() => setSaved(false), 2500);
    } finally {
      setSaving(false);
    }
  }

  const inputCls = "w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#D32F2F]/20 focus:border-[#D32F2F]";
  const labelCls = "block text-xs font-medium text-gray-500 mb-1.5";
  const flexLabelCls = "flex items-center gap-1 text-xs font-medium text-gray-500 mb-1.5";

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Profile &amp; Settings</h1>
        <p className="text-gray-500 text-sm mt-1">Manage your personal information and preferences</p>
      </div>

      {/* Avatar card */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 flex items-center gap-6">
        <div className="relative shrink-0">
          {user?.profile.avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={user.profile.avatarUrl} alt={displayName} className="w-20 h-20 rounded-full object-cover" />
          ) : (
            <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-white text-2xl font-bold">
              {initials}
            </div>
          )}
          <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-[#D32F2F] rounded-full flex items-center justify-center hover:opacity-90 transition" aria-label="Change avatar">
            <Camera className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
        <div className="min-w-0">
          <h2 className="font-bold text-gray-900 text-lg truncate">{displayName}</h2>
          <p className="text-sm text-gray-500 truncate">{email}</p>
          <div className="flex gap-2 mt-2 flex-wrap">
            {user?.profile.currentBand != null && (
              <span className="text-xs bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded-full font-medium">
                Band {user.profile.currentBand.toFixed(1)}
              </span>
            )}
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${isPremium ? "bg-red-50 text-[#D32F2F]" : "bg-gray-100 text-gray-500"}`}>
              {isPremium ? "Premium" : "Free"}
            </span>
          </div>
        </div>
        <div className="ml-auto text-right shrink-0">
          <p className="text-xs text-gray-400">Member since</p>
          <p className="text-sm font-medium text-gray-700">{memberSince}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-6 w-fit overflow-x-auto">
        {TABS.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition whitespace-nowrap ${activeTab === i ? "bg-white shadow text-gray-800" : "text-gray-500 hover:text-gray-700"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6">
        {/* ── Tab 0: Personal Info ─────────────────────────────────────────── */}
        {activeTab === 0 && (
          <div className="space-y-5">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <User className="w-4 h-4 text-[#D32F2F]" /> Personal Information
            </h3>
            <div>
              <label className={labelCls}>Full Name</label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className={inputCls}
              />
            </div>
            <div>
              <label className={flexLabelCls}>
                <Mail className="w-3 h-3" /> Email Address
              </label>
              <input
                value={email}
                disabled
                className={`${inputCls} bg-gray-50 text-gray-400 cursor-not-allowed`}
              />
              <p className="text-xs text-gray-400 mt-1">Email cannot be changed from here.</p>
            </div>
            <div>
              <label className={flexLabelCls}>
                <Globe className="w-3 h-3" /> Nationality
              </label>
              <input
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                placeholder="e.g. Vietnamese"
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls}>Bio</label>
              <textarea
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Tell us a little about yourself…"
                className={`${inputCls} resize-none`}
              />
            </div>
            {saveError && <p className="text-xs text-red-600">{saveError}</p>}
            <button
              onClick={() => handleSave({ fullName, nationality, bio })}
              disabled={saving}
              className="gradient-bg text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 disabled:opacity-60 transition flex items-center gap-2"
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle className="w-4 h-4" />}
              {saved ? "Saved!" : "Save Changes"}
            </button>
          </div>
        )}

        {/* ── Tab 1: IELTS Goals ───────────────────────────────────────────── */}
        {activeTab === 1 && (
          <div className="space-y-5">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Target className="w-4 h-4 text-[#D32F2F]" /> IELTS Goals
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Target Band Score</label>
                <select
                  value={targetBand}
                  onChange={(e) => setTargetBand(e.target.value)}
                  className={inputCls}
                >
                  <option value="">— Select —</option>
                  {BAND_OPTIONS.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Current Band Score</label>
                <select
                  value={currentBand}
                  onChange={(e) => setCurrentBand(e.target.value)}
                  className={inputCls}
                >
                  <option value="">— Select —</option>
                  {BAND_OPTIONS.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className={labelCls}>Focus Areas</label>
              <div className="grid grid-cols-2 gap-2">
                {["Writing", "Reading", "Listening", "Speaking"].map((skill) => (
                  <label key={skill} className="flex items-center gap-2 p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                    <input type="checkbox" defaultChecked={skill === "Writing"} className="accent-[#D32F2F]" />
                    <BookOpen className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-700">{skill}</span>
                  </label>
                ))}
              </div>
            </div>
            {saveError && <p className="text-xs text-red-600">{saveError}</p>}
            <button
              onClick={() => handleSave({
                targetBand: targetBand ? parseFloat(targetBand) : null,
                currentBand: currentBand ? parseFloat(currentBand) : null,
              })}
              disabled={saving}
              className="gradient-bg text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 disabled:opacity-60 transition flex items-center gap-2"
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle className="w-4 h-4" />}
              {saved ? "Saved!" : "Save Goals"}
            </button>
          </div>
        )}

        {/* ── Tab 2: Notifications (UI only — no backend yet) ──────────────── */}
        {activeTab === 2 && (
          <div className="space-y-5">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Bell className="w-4 h-4 text-[#D32F2F]" /> Notification Preferences
            </h3>
            {NOTIFICATION_ITEMS.map((item) => (
              <NotificationToggle key={item.key} label={item.label} desc={item.desc} defaultOn={item.defaultOn} />
            ))}
          </div>
        )}

        {/* ── Tab 3: Security ──────────────────────────────────────────────── */}
        {activeTab === 3 && (
          <div className="space-y-5">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#D32F2F]" /> Security Settings
            </h3>
            <div>
              <label className={labelCls}>Current Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`${inputCls} pr-10`}
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div>
              <label className={labelCls}>New Password</label>
              <input type="password" placeholder="••••••••" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Confirm New Password</label>
              <input type="password" placeholder="••••••••" className={inputCls} />
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h4 className="font-medium text-gray-800 text-sm mb-3">Two-Factor Authentication</h4>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <p className="text-sm font-medium text-gray-700">Enable 2FA</p>
                  <p className="text-xs text-gray-500">Add extra security to your account</p>
                </div>
                <button className="text-xs px-4 py-2 border border-gray-200 rounded-lg hover:bg-white transition font-medium">
                  Setup
                </button>
              </div>
            </div>
            <button className="gradient-bg text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> Update Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Notification toggle (self-contained with local state) ────────────────────

function NotificationToggle({ label, desc, defaultOn }: { label: string; desc: string; defaultOn: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl">
      <div>
        <p className="font-medium text-gray-800 text-sm">{label}</p>
        <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
      </div>
      <button
        onClick={() => setOn(!on)}
        aria-label={on ? "Disable" : "Enable"}
        className={`w-11 h-6 rounded-full relative transition-colors shrink-0 ${on ? "bg-[#D32F2F]" : "bg-gray-200"}`}
      >
        <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${on ? "left-6" : "left-1"}`} />
      </button>
    </div>
  );
}
