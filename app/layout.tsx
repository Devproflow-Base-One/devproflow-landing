import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevProFlow · Lumina Ecosystem",
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
    shortcut: '/favicon.svg',
  },
  description: "Pure-black SaaS studio shipping 14+ products, 300+ Chrome extensions, and zero-cost AI automations.",
  keywords: [
    "DevProFlow",
    "Lumina",
    "Resend style",
    "SaaS",
    "AI studio",
    "Next.js",
    "Tailwind",
    "Chrome extensions",
  ],
  authors: [{ name: "Lumina Labs" }],
  openGraph: {
    title: "DevProFlow · Lumina Ecosystem",
    description: "Lumina Labs builds commercial products on a shared AI spine — pure black, iris violet, zero fluff.",
    type: "website",
    url: "https://www.devproflow.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}<Analytics /></body>
    </html>
  );
}
