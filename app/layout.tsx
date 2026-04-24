import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Sora({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "AI Tools Directory | Find AI Tools by Real Outcome",
  description:
    "Discover the best AI tools for editing faster, generating thumbnails, automating Instagram, writing assignments, and more.",
  keywords: [
    "AI tools directory",
    "best AI tools",
    "AI for YouTube",
    "AI thumbnails",
    "AI automation tools",
    "AI use case finder",
  ],
  openGraph: {
    title: "AI Tools Directory",
    description: "Find the best AI tools by outcome, not vague categories.",
    type: "website",
  },

  // ✅ THIS FIXES YOUR PROBLEM
  verification: {
    other: {
      "impact-site-verification": "59bfdab6-1dd9-4800-8da2-bc38ab942c4d",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}