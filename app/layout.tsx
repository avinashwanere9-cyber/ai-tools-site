import type { Metadata } from "next";
import MouseGlow from "./mouse-glow";
import "./globals.css";

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
  verification: {
    other: {
      "impact-site-verification": "59bfdab6-1dd9-4800-8da2-bc38ab942c4d",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
     <body suppressHydrationWarning>
  <MouseGlow />
  {children}
  <script dangerouslySetInnerHTML={{__html: `
    let last = 0;
    window.addEventListener('scroll', () => {
      const top = document.querySelector('.topBar');
      if (!top) return;
      const cur = window.scrollY;
      if (cur > last && cur > 80) top.classList.add('topBar--hidden');
      else top.classList.remove('topBar--hidden');
      last = cur;
    });
  `}} />
</body>
  </html>
  );
}