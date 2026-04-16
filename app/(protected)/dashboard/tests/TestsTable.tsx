"use client";

import { useState } from "react";
import {
  PenLine,
  BookOpen,
  Headphones,
  Mic,
  Edit,
  Trash2,
  Search,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { AnyContent } from "@/types/content";

const TYPE_STYLE: Record<string, string> = {
  reading: "bg-purple-50 text-purple-700",
  writing: "bg-amber-50 text-amber-700",
  listening: "bg-sky-50 text-sky-700",
  speaking: "bg-red-50 text-[#D32F2F]",
};

const TYPE_LABEL: Record<string, string> = {
  reading: "Reading",
  writing: "Writing",
  listening: "Listening",
  speaking: "Speaking",
};

function TypeIcon({ type }: { type: string }) {
  const cls = "w-4 h-4";
  if (type === "reading") return <BookOpen className={cls} />;
  if (type === "writing") return <PenLine className={cls} />;
  if (type === "listening") return <Headphones className={cls} />;
  return <Mic className={cls} />;
}

function getTitle(item: AnyContent): string {
  if (item.contentType === "reading") return item.title;
  if (item.contentType === "writing") return item.title;
  if (item.contentType === "listening") return item.title;
  return item.title;
}

function getSubtitle(item: AnyContent): string {
  if (item.contentType === "writing") return `Task ${item.taskType === "task1" ? "1" : "2"}`;
  if (item.contentType === "reading") return `${item.questions.length} questions`;
  if (item.contentType === "listening") return `${item.questions.length} questions`;
  return `Part ${item.partNumber}`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function TestsTable({ initialContent }: { initialContent: AnyContent[] }) {
  const router = useRouter();
  const [content, setContent] = useState<AnyContent[]>(initialContent);
  const [filterType, setFilterType] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [busy, setBusy] = useState<string | null>(null);

  const filtered = content.filter((item) => {
    if (filterType !== "all" && item.contentType !== filterType) return false;
    if (filterStatus !== "all" && item.status !== filterStatus) return false;
    if (search && !getTitle(item).toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  async function toggleStatus(item: AnyContent) {
    const newStatus = item.status === "active" ? "draft" : "active";
    setBusy(item.id);
    try {
      const res = await fetch(`/api/admin/content/${item.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contentType: item.contentType, status: newStatus }),
      });
      if (res.ok) {
        setContent((prev) =>
          prev.map((c) => (c.id === item.id ? { ...c, status: newStatus } : c))
        );
      }
    } finally {
      setBusy(null);
    }
  }

  async function handleDelete(item: AnyContent) {
    if (!confirm(`Delete "${getTitle(item)}"? This cannot be undone.`)) return;
    setBusy(item.id);
    try {
      const res = await fetch(`/api/admin/content/${item.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contentType: item.contentType }),
      });
      if (res.ok) {
        setContent((prev) => prev.filter((c) => c.id !== item.id));
        router.refresh();
      }
    } finally {
      setBusy(null);
    }
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 flex-1 max-w-sm">
          <Search className="w-4 h-4 text-gray-400 shrink-0" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search content..."
            className="outline-none text-sm w-full text-gray-700 placeholder:text-gray-400"
          />
        </div>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border border-gray-200 bg-white rounded-xl px-3 py-2 text-sm outline-none"
        >
          <option value="all">All types</option>
          <option value="reading">Reading</option>
          <option value="writing">Writing</option>
          <option value="listening">Listening</option>
          <option value="speaking">Speaking</option>
        </select>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border border-gray-200 bg-white rounded-xl px-3 py-2 text-sm outline-none"
        >
          <option value="all">All status</option>
          <option value="active">Active</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-sm">No content found.</p>
            <Link href="/dashboard/tests/create">
              <button className="mt-3 text-xs text-[#D32F2F] font-medium hover:underline">
                Create your first piece of content →
              </button>
            </Link>
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">
                  Content
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">
                  Type
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">
                  Difficulty
                </th>
                <th className="text-center py-3 px-4 text-xs font-semibold text-gray-500 uppercase">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">
                  Created
                </th>
                <th className="text-center py-3 px-4 text-xs font-semibold text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => {
                const isBusy = busy === item.id;
                return (
                  <tr
                    key={item.id}
                    className="border-b border-gray-50 hover:bg-gray-50 transition"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${TYPE_STYLE[item.contentType]}`}
                        >
                          <TypeIcon type={item.contentType} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 text-sm line-clamp-1 max-w-xs">
                            {getTitle(item)}
                          </p>
                          <p className="text-xs text-gray-400">{getSubtitle(item)}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-medium ${TYPE_STYLE[item.contentType]}`}
                      >
                        {TYPE_LABEL[item.contentType]}
                      </span>
                    </td>
                    <td className="py-4 px-4 capitalize text-sm text-gray-600">
                      {item.difficulty}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                          item.status === "active"
                            ? "bg-green-50 text-green-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-500">
                      {formatDate(item.createdAt)}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-center gap-1">
                        <button
                          onClick={() => toggleStatus(item)}
                          disabled={isBusy}
                          title={item.status === "active" ? "Set to draft" : "Set to active"}
                          className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-blue-600 transition disabled:opacity-40"
                        >
                          {item.status === "active" ? (
                            <ToggleRight className="w-4 h-4 text-green-600" />
                          ) : (
                            <ToggleLeft className="w-4 h-4" />
                          )}
                        </button>
                        <Link
                          href={`/dashboard/tests/create?edit=${item.id}&type=${item.contentType}`}
                        >
                          <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-[#D32F2F] transition">
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(item)}
                          disabled={isBusy}
                          className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-red-600 transition disabled:opacity-40"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        {filtered.length > 0 && (
          <div className="px-4 py-3 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              Showing {filtered.length} of {content.length} items
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
