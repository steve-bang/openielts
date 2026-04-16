import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SessionProvider from "@/components/providers/SessionProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://openielts.org"),
  title: {
    default: "OpenIELTS | Free IELTS Practice & AI Learning Platform",
    template: "%s | OpenIELTS",
  },
  description:
    "Boost your IELTS band score with OpenIELTS. Free practice tests, AI-powered feedback, and expert study tools for Writing, Speaking, Reading & Listening.",
  openGraph: {
    type: "website",
    siteName: "OpenIELTS",
    locale: "en_US",
    url: "https://openielts.org",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@openielts",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
