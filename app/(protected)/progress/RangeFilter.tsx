"use client";

import { useRouter, usePathname } from "next/navigation";

const OPTIONS = [
  { label: "Last 30 days", value: "30" },
  { label: "Last 90 days", value: "90" },
  { label: "All time", value: "all" },
];

export default function RangeFilter({ current }: { current: string }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <select
      value={current}
      onChange={(e) => router.push(`${pathname}?range=${e.target.value}`)}
      className="border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#D32F2F]/20 bg-white"
    >
      {OPTIONS.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  );
}
