"use client";

import { useSearchParams } from "next/navigation";

export default function ComingSoonContent() {
  const searchParams = useSearchParams();
  const productName = searchParams.get("name") || "This product";

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="fixed inset-0 spotlight-halo opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#9281f7]/8 blur-[150px] animate-glow-pulse" />

      <nav className="absolute top-0 inset-x-0 z-10 border-b border-[#292d30] bg-black/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg border border-[#292d30] bg-[#0a0a0c] flex items-center justify-center">
              <span className="text-sm font-bold text-white">D</span>
            </div>
            <span className="text-sm font-bold tracking-tight text-white">DevProFlow</span>
          </a>
          <div className="flex items-center gap-4 text-xs text-[#a1a4a5]">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/products" className="hover:text-white transition-colors">Products</a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#292d30] bg-[#0a0a0c] text-xs text-[#a1a4a5] mb-8 animate-fade-in">
          <span className="inline-block w-2 h-2 rounded-full bg-[#ffca16] animate-pulse" />
          <span className="font-mono-label">under construction</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-serif-display tracking-tight mb-4 text-[#fcfdff] animate-fade-up">
          {productName}
        </h1>

        <p className="text-base sm:text-xl text-[#a1a4a5] mb-2 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          is under active development.
        </p>

        <p className="text-sm text-[#6e727a] mb-12 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          We&apos;re building something great. Stay tuned for updates.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <a href="/products" className="btn-white-pill inline-flex items-center gap-2">
            View All Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a href="/" className="btn-ghost inline-flex items-center gap-2">Back to Home</a>
        </div>

        <div className="mt-16 pt-8 border-t border-[#292d30] text-xs text-[#6e727a]">
          Questions? <a href="mailto:hello@devproflow.com" className="text-iris hover:underline">hello@devproflow.com</a>
        </div>
      </div>
    </main>
  );
}
