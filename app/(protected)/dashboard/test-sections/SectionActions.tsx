"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  readonly id: string;
  readonly contentType: "reading" | "writing" | "listening" | "speaking";
}

export default function SectionActions({ id, contentType }: Props) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function handleDelete() {
    if (!confirm("Delete this item? This cannot be undone.")) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/content/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contentType }),
      });
      if (res.ok) router.refresh();
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={busy}
      className="p-1.5 rounded-lg border border-gray-200 hover:bg-red-50 text-gray-400 hover:text-red-500 transition disabled:opacity-40"
    >
      <Trash2 className="w-3 h-3" />
    </button>
  );
}
