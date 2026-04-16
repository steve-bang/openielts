"use client";

import { MAIN_NAV } from "@/config/navigation";
import { Menu, X, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import UserMenu from "./UserMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data: session, status } = useSession();

  const isAuthenticated = status === "authenticated";
  const isLoading = status === "loading";

  return (
    <header>
      <nav className="fixed w-full bg-white shadow-md z-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <div className="text-3xl font-bold bg-linear-to-br from-[#D32F2F] to-[#E57373] bg-clip-text text-transparent">
                OpenIELTS
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {MAIN_NAV.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-[#D32F2F] transition text-gray-700 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA — auth-aware */}
            <div className="hidden md:flex items-center space-x-3">
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
              ) : isAuthenticated ? (
                <UserMenu
                  name={session.user.name ?? null}
                  email={session.user.email ?? null}
                  image={session.user.image ?? null}
                />
              ) : (
                <>
                  <Link href="/sign-in">
                    <button className="text-gray-700 font-medium cursor-pointer hover:text-[#D32F2F] transition">
                      Sign In
                    </button>
                  </Link>
                  <Link href="/sign-up">
                    <button className="inline-block cursor-pointer rounded-xl px-8 py-3.5 font-semibold text-white bg-linear-to-br from-[#D32F2F] to-[#E57373] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(211,47,47,0.4)]">
                      Get Started
                    </button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:text-[#D32F2F] transition"
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-gray-100 pt-3 mt-3 flex flex-col gap-2">
              {isAuthenticated ? (
                <>
                  <Link href="/dashboard" onClick={() => setMobileOpen(false)}>
                    <button className="w-full text-left px-3 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:text-[#D32F2F] transition">
                      Dashboard
                    </button>
                  </Link>
                  <Link href="/profile" onClick={() => setMobileOpen(false)}>
                    <button className="w-full text-left px-3 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:text-[#D32F2F] transition">
                      Profile
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/sign-in" onClick={() => setMobileOpen(false)}>
                    <button className="w-full text-left px-3 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:text-[#D32F2F] transition">
                      Sign In
                    </button>
                  </Link>
                  <Link href="/sign-up" onClick={() => setMobileOpen(false)}>
                    <button className="w-full rounded-xl px-4 py-3 font-semibold text-white bg-linear-to-br from-[#D32F2F] to-[#E57373] hover:opacity-90 transition">
                      Get Started
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
