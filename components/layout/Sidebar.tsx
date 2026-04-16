"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  LayoutDashboard,
  PenLine,
  BookOpen,
  Headphones,
  Mic,
  BarChart2,
  User,
  CreditCard,
  ClipboardList,
  FolderOpen,
  ChevronRight,
} from "lucide-react";

const PRACTICE_ITEMS = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Writing", href: "/practice/writing", icon: PenLine },
  { name: "Reading", href: "/practice/reading", icon: BookOpen },
  { name: "Listening", href: "/practice/listening", icon: Headphones },
  { name: "Speaking", href: "/practice/speaking", icon: Mic },
  { name: "Progress", href: "/progress", icon: BarChart2 },
];

const MANAGE_ITEMS = [
  { name: "Tests", href: "/dashboard/tests", icon: ClipboardList },
  { name: "Test Sections", href: "/dashboard/test-sections", icon: FolderOpen },
];

const ACCOUNT_ITEMS = [
  { name: "Profile", href: "/profile", icon: User },
  { name: "Billing", href: "/profile/billing", icon: CreditCard },
];

const ADMIN_ROLES = ["admin", "teacher", "super_admin"];

export default function Sidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const role = session?.user?.role ?? "student";
  const isAdmin = ADMIN_ROLES.includes(role);

  const allItems = [...PRACTICE_ITEMS, ...(isAdmin ? MANAGE_ITEMS : []), ...ACCOUNT_ITEMS];

  function isActive(href: string) {
    const hasChildren = allItems.some(
      (other) => other.href !== href && other.href.startsWith(href + "/")
    );
    return pathname === href || (!hasChildren && pathname.startsWith(href + "/"));
  }

  const sections = [
    { group: "Practice", items: PRACTICE_ITEMS },
    ...(isAdmin ? [{ group: "Manage", items: MANAGE_ITEMS }] : []),
    { group: "Account", items: ACCOUNT_ITEMS },
  ];

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-gray-300 flex flex-col">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-800">
        <Link
          href="/"
          className="text-2xl font-bold bg-linear-to-br from-[#D32F2F] to-[#E57373] bg-clip-text text-transparent"
        >
          OpenIELTS
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto space-y-6">
        {sections.map((section) => (
          <div key={section.group}>
            <p className="px-3 mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
              {section.group}
            </p>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        active
                          ? "bg-[#D32F2F] text-white"
                          : "hover:bg-gray-800 hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{item.name}</span>
                      {active && <ChevronRight className="w-3 h-3 ml-auto" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-gray-800">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-300 transition"
        >
          ← Back to website
        </Link>
      </div>
    </aside>
  );
}
