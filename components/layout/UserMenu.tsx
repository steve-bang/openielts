"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { LayoutDashboard, BarChart2, User, LogOut, ChevronDown, Crown } from "lucide-react";

interface UserMenuProps {
  name: string | null;
  email: string | null;
  image: string | null;
  isPremium?: boolean;
}

function getInitials(name: string | null, email: string | null): string {
  if (name) {
    const parts = name.trim().split(" ");
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return parts[0].slice(0, 2).toUpperCase();
  }
  return email ? email[0].toUpperCase() : "U";
}

export default function UserMenu({ name, email, image, isPremium }: UserMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const initials = getInitials(name, email);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-gray-100 transition"
        aria-label="User menu"
      >
        {/* Avatar */}
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={name ?? "User"} className="w-8 h-8 rounded-full object-cover" />
        ) : (
          <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-bold shrink-0">
            {initials}
          </div>
        )}
        <span className="hidden md:block text-sm font-medium text-gray-700 max-w-[120px] truncate">
          {name ?? email ?? "Account"}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-50">
          {/* User info */}
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              {image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={image} alt="" className="w-10 h-10 rounded-full object-cover" />
              ) : (
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {initials}
                </div>
              )}
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">{name ?? "User"}</p>
                <p className="text-xs text-gray-500 truncate">{email}</p>
              </div>
            </div>
            {isPremium && (
              <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full w-fit">
                <Crown className="w-3 h-3" /> Premium
              </div>
            )}
          </div>

          {/* Links */}
          <div className="py-1">
            {[
              { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
              { label: "My Progress", href: "/progress", icon: BarChart2 },
              { label: "Profile Settings", href: "/profile", icon: User },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#D32F2F] transition"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Sign out */}
          <div className="border-t border-gray-100 pt-1">
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
