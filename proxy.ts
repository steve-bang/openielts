import { auth } from "@/auth";
import { NextResponse } from "next/server";

// Routes that require authentication
const PROTECTED_PREFIXES = [
  "/practice",
  "/dashboard",
  "/progress",
  "/profile",
];

// Auth pages — redirect away if already signed in
const AUTH_PAGES = ["/sign-in", "/sign-up"];

export default auth((req) => {
  const { nextUrl, auth: session } = req;
  const path = nextUrl.pathname;
  const isAuthenticated = !!session;

  // Redirect authenticated users away from auth pages → dashboard
  if (isAuthenticated && AUTH_PAGES.includes(path)) {
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  // Redirect unauthenticated users away from protected routes → sign-in
  const isProtected = PROTECTED_PREFIXES.some((prefix) => path.startsWith(prefix));
  if (isProtected && !isAuthenticated) {
    const signInUrl = new URL("/sign-in", nextUrl);
    signInUrl.searchParams.set("callbackUrl", path);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

export const config = {
  // Run on all routes except static files, images, and Next.js internals
  matcher: ["/((?!api|_next/static|_next/image|favicon\\.ico|.*\\..*).*)"],
};
