"use client";

import { useState, useEffect, useCallback } from "react";

/* ── Data ────────────────────────────────────────────── */

const stats = [
  { value: "14+", label: "Products Built", sub: "Commercial & enterprise" },
  { value: "300+", label: "Browser Extensions", sub: "8 categories, production-ready" },
  { value: "10", label: "Industries Served", sub: "Fintech to Infrastructure" },
  { value: "∞", label: "Global Reach", sub: "Multi-region, scalable" },
];

const marqueeItems = [
  { name: "Next.js", icon: "nextdotjs", color: "ffffff" },
  { name: "React", icon: "react", color: "61dafb" },
  { name: "TypeScript", icon: "typescript", color: "3178c6" },
  { name: "Python", icon: "python", color: "3776ab" },
  { name: "Node.js", icon: "nodedotjs", color: "5fa04e" },
  { name: "PostgreSQL", icon: "postgresql", color: "4169e1" },
  { name: "Supabase", icon: "supabase", color: "3ecf8e" },
  { name: "Redis", icon: "redis", color: "dc381d" },
  { name: "Docker", icon: "docker", color: "2496ed" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "06b6d4" },
  { name: "Vercel", icon: "vercel", color: "ffffff" },
  { name: "Railway", icon: "railway", color: "9e2f5e" },
  { name: "Cloudflare", icon: "cloudflare", color: "f38020" },
  { name: "Polygon", icon: "polygon", color: "8247e5" },
  { name: "Electron", icon: "electron", color: "47848f" },
  { name: "React Native", icon: "react", color: "61dafb" },
  { name: "Turborepo", icon: "turbo", color: "ef4444" },
  { name: "Playwright", icon: "playwright", color: "2e2e32" },
  { name: "OAuth", icon: "openid", color: "f78c40" },
  { name: "JWT", icon: "jsonwebtokens", color: "fbfbfb" },
];

const products = [
  {
    name: "DevFlo",
    tagline: "Unified API Platform",
    description: "Access 33+ models with a single API. Compatible format with auto-fallback.",
    icon: "M12 2a3 3 0 00-3 3v2a3 3 0 006 0V5a3 3 0 00-3-3zM5 8h14v11a2 2 0 01-2 2H7a2 2 0 01-2-2V8z",
    status: "Live",
    url: "https://aidevflo.devproflow.com",
    tech: ["Next.js", "TypeScript", "Supabase"],
  },
  {
    name: "MarktBit",
    tagline: "Crypto + Stocks Signals",
    description: "Hybrid signal dashboard with smart analysis. Real-time crypto + global stock signals.",
    icon: "M3 3v18h18M7 14l4-4 4 4 6-6",
    status: "90%",
    url: "https://marktbit.devproflow.com",
    tech: ["Next.js 15", "Node.js", "PostgreSQL"],
  },
  {
    name: "Chrome Extension Factory",
    tagline: "300+ extensions, 8 categories",
    description: "Mass production system for Chrome extensions. Academic, productivity, writing, PDF, video, learning.",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M9 5h6a2 2 0 012 2v10a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2z",
    status: "97%",
    url: "/coming-soon?name=Chrome+Extension+Factory",
    tech: ["TypeScript", "Vite", "Chrome MV3", "Playwright"],
  },
  {
    name: "Mosquemu",
    tagline: "Digital Mosque Management",
    description: "Complete mosque management with 14 languages, secure payments, and role-based access. Web + mobile.",
    icon: "M12 2L2 12h3v8h14v-8h3L12 2z",
    status: "Production",
    url: "https://mosquemu.devproflow.com",
    tech: ["Next.js 14", "React Native", "Supabase"],
  },
  {
    name: "MusicVerse",
    tagline: "Music Marketplace",
    description: "Marketplace where producers and engineers connect. Blockchain copyright protection and automatic royalty splits.",
    icon: "M9 18V5l12-2v13M9 9l12-2M9 18a3 3 0 11-6 0 3 3 0 016 0zm12-3a3 3 0 11-6 0 3 3 0 016 0z",
    status: "25%",
    url: "/coming-soon?name=MusicVerse",
    tech: ["Next.js 14", "Supabase", "Polygon", "R2"],
  },
  {
    name: "Automotive Ecosystem",
    tagline: "B2C + B2B Platform",
    description: "Automotive platform with B2C vehicle marketplace and B2B fleet management. Smart marketing tools.",
    icon: "M5 11l1.5-4.5h11L19 11M5 11h14v6H5v-6z",
    status: "70%",
    url: "/coming-soon?name=Automotive+Ecosystem",
    tech: ["Python", "FastAPI", "Next.js"],
  },
  {
    name: "Live Speak",
    tagline: "Voice & Streaming Platform",
    description: "Voice cloning and neural streaming. Chrome extension + Desktop + Mobile. Real-time synthesis.",
    icon: "M12 14a3 3 0 003-3V5a3 3 0 00-6 0v6a3 3 0 003 3z M19 11a7 7 0 01-14 0M12 18v4",
    status: "100%",
    url: "/coming-soon?name=Live+Speak",
    tech: ["Next.js", "Electron", "React Native"],
  },
  {
    name: "Lumina Core",
    tagline: "Global SaaS CRM Platform",
    description: "Enterprise-grade CRM with content management, outreach automation, and segmentation engine.",
    icon: "M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z",
    status: "Concept",
    url: "/coming-soon?name=Lumina+Core",
    tech: ["Next.js", "Supabase", "PostgreSQL"],
  },
  {
    name: "Auto Life Diary",
    tagline: "Smart Life Diary",
    description: "Automated life logging app. Smart journaling with context awareness and pattern recognition.",
    icon: "M6 2v20l6-4 6 4V2H6z",
    status: "20%",
    url: "/coming-soon?name=Auto+Life+Diary",
    tech: ["Python", "Flask", "SQLite"],
  },
  {
    name: "AuroraToday",
    tagline: "Bilingual Local Digital Platform",
    description: "Bilingual EN/ES local platform for Aurora, Colorado. Events, jobs, businesses, real estate, multicultural food, and community forum.",
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6l4 2",
    status: "Live",
    url: "https://auroratoday.devproflow.com",
    tech: ["Next.js", "Supabase", "FastAPI"],
  },
  {
    name: "ASEAN Bakery",
    tagline: "Artisan Bakery Experience",
    description: "Modern artisan bakery with ASEAN heritage and Colorado flair. Ghost-kitchen + pop-up model with smart ordering and loyalty program.",
    icon: "M5 11h14v2H5v-2zM7 13v6h10v-6M9 6h6v3H9V6z",
    status: "70%",
    url: "https://asean-bakery.vercel.app",
    tech: ["Next.js 14", "Supabase", "Stripe"],
  },
  {
    name: "ASEAN Sportainment",
    tagline: "Social-Sports Destination",
    description: "Premier social-sports hub with padel, pickleball, food court, VIP billiards, karaoke, and golf simulators. B2B lead generation engine included.",
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6l4 2",
    status: "80%",
    url: "https://asean-sportainment.devproflow.com",
    tech: ["Next.js", "FastAPI", "Supabase"],
  },
  {
    name: "PayBridge",
    tagline: "PayPal Bridge for Indonesia",
    description: "Top-up PayPal, withdraw to bank, and pay CC-only subscriptions without a credit card. QRIS, VA, and e-wallet payments accepted.",
    icon: "M3 10h18M3 14h18M7 6h10v12H7V6z",
    status: "Concept",
    url: "/coming-soon?name=PayBridge",
    tech: ["Next.js", "PayPal API", "Xendit"],
  },
  {
    name: "Lumina Webmail",
    tagline: "Self-Hosted Email Platform",
    description: "Gmail-like self-hosted webmail with Postfix, Dovecot, and Next.js. Full IMAP/SMTP support with dark mode and label management.",
    icon: "M3 8l9 6 9-6M3 8v10a2 2 0 002 2h14a2 2 0 002-2V8M3 8a2 2 0 012-2h14a2 2 0 012 2",
    status: "90%",
    url: "https://lumina-mail.devproflow.com",
    tech: ["Next.js", "Postfix", "Dovecot"],
  },
];

const capabilities = [
  {
    title: "Scalable Infrastructure",
    description: "High-performance infrastructure with seamless failover. Built for enterprise-grade reliability.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Seamless Workflows",
    description: "A coordinated system where every product works together. Scalable workflows across the entire ecosystem.",
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20zM12 7v5l3 3",
  },
  {
    title: "Modular Architecture",
    description: "A modular architecture with plug-and-play integrations. Add new capabilities in minutes, not months.",
    icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
  },
  {
    title: "Enterprise Compliance",
    description: "OWASP Top 10, GDPR, SOC 2, HIPAA, PCI-DSS, WCAG 2.2, OAuth 2.1, JWT.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Omnichannel Automation",
    description: "WhatsApp, Telegram, Discord, Email, Push. Multi-channel automation with CRM integration.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
];

const testimonials = [
  {
    quote: "DevProFlow delivered our platform in record time. The shared core meant we got enterprise-grade security out of the box.",
    author: "Product Lead",
    role: "Fintech Startup",
  },
  {
    quote: "The Chrome Extension Factory alone saved us months of development. 300+ tools ready to deploy across 8 categories.",
    author: "Engineering Manager",
    role: "SaaS Company",
  },
  {
    quote: "From concept to production in weeks, not months. The ecosystem approach is a game-changer for lean teams.",
    author: "CTO",
    role: "Digital Agency",
  },
  {
    quote: "We needed a bilingual platform for our community. AuroraToday shipped with EN/ES support and a full local directory.",
    author: "Operations Director",
    role: "Local Media",
  },
  {
    quote: "PayBridge solved a real problem for our Indonesian users — PayPal access without a credit card. Clean UX, fast delivery.",
    author: "Founder",
    role: "Payments Platform",
  },
  {
    quote: "The self-hosted webmail replaced our Google Workspace dependency. Full IMAP/SMTP, dark mode, zero vendor lock-in.",
    author: "IT Lead",
    role: "Infrastructure Team",
  },
];

const faqs = [
  {
    question: "What is DevProFlow?",
    answer: "DevProFlow is a product ecosystem by Lumina Labs — a collection of 14+ commercial products spanning fintech, music, community, automotive, lifestyle, and infrastructure. Every product is powered by the same proven core, ensuring enterprise-grade reliability and rapid delivery.",
  },
  {
    question: "How does the shared core work?",
    answer: "Every product inherits the same foundation — authentication, database, analytics, security, and infrastructure. This means new products launch faster, with the same reliability and compliance standards as existing ones.",
  },
  {
    question: "Are the products production-ready?",
    answer: "Several products are already deployed and serving users (DevFlo, AuroraToday, Live Speak, Mosquemu). Others are in active development with clear completion percentages shown on each product card.",
  },
  {
    question: "Can I use DevFlo AI for my own projects?",
    answer: "Yes. DevFlo AI provides a unified API for 33+ LLM models with auto-fallback. It's live at aidevflo.devproflow.com and compatible with standard API formats.",
  },
  {
    question: "What industries does DevProFlow serve?",
    answer: "Our products span 10+ industries including fintech, music, religious communities, automotive, lifestyle, sports, food, local media, payments, and infrastructure.",
  },
  {
    question: "Is DevProFlow open source?",
    answer: "DevProFlow is a commercial product ecosystem. Some components and tools may be open-sourced in the future. Contact us at hello@devproflow.com for partnership or licensing inquiries.",
  },
];

const techStack = [
  { name: "Next.js", icon: "nextdotjs", color: "ffffff" },
  { name: "React", icon: "react", color: "61dafb" },
  { name: "TypeScript", icon: "typescript", color: "3178c6" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "06b6d4" },
  { name: "Node.js", icon: "nodedotjs", color: "5fa04e" },
  { name: "Python", icon: "python", color: "3776ab" },
  { name: "PostgreSQL", icon: "postgresql", color: "4169e1" },
  { name: "Supabase", icon: "supabase", color: "3ecf8e" },
  { name: "Vercel", icon: "vercel", color: "ffffff" },
  { name: "Cloudflare", icon: "cloudflare", color: "f38020" },
  { name: "Docker", icon: "docker", color: "2496ed" },
  { name: "Git", icon: "git", color: "f05032" },
];

function ProductIcon({ path, className }: { path: string; className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-[#292d30]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg border border-[#292d30] bg-[#0a0a0c] flex items-center justify-center">
            <span className="text-sm font-bold text-white">D</span>
          </div>
          <span className="text-sm font-bold tracking-tight text-white">DevProFlow</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-[#a1a4a5]">
          <a href="#products" className="hover:text-white transition-colors">Products</a>
          <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
          <a href="#stack" className="hover:text-white transition-colors">Tech Stack</a>
          <a href="/about" className="hover:text-white transition-colors">About</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="/products" className="hidden sm:block text-xs text-[#6e727a] hover:text-white transition-colors">All Products</a>
          <a href="/about" className="btn-ghost text-xs">About</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 spotlight-halo opacity-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#9281f7]/8 blur-[150px] animate-glow-pulse" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* 3D Iridescent Hexagon Icon */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="relative w-20 h-20 animate-float-3d">
            <div className="absolute inset-0 bg-gradient-to-br from-[#9281f7] via-[#3ad389] to-[#ffca16] rounded-lg rotate-45 blur-sm opacity-60 animate-glow-pulse" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#9281f7] via-[#3ad389] to-[#ffca16] rounded-lg rotate-45 opacity-80" />
            <div className="absolute inset-1 bg-[#0a0a0c] rounded-lg rotate-45 backdrop-blur-sm" />
            <div className="absolute inset-2 bg-gradient-to-br from-[#9281f7]/20 via-[#3ad389]/20 to-[#ffca16]/20 rounded-lg rotate-45 border border-white/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-10 h-10 text-white relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#292d30] bg-[#0a0a0c]/60 backdrop-blur-sm text-xs text-[#a1a4a5] mb-8 animate-fade-in">
          <span className="inline-block w-2 h-2 rounded-full bg-[#3ad389] animate-pulse" />
          <span className="font-mono-label">ecosystem.live</span>
          <span className="text-[#464a4d]">·</span>
          <span>14+ products · 300+ extensions</span>
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif-display tracking-tight mb-6 animate-fade-up text-[#fcfdff]">
          Built to lead.<br /><span className="text-iris">Born for scale.</span>
        </h1>
        <p className="text-base sm:text-xl text-[#a1a4a5] max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          An all-in-one product ecosystem — powered by a high-performance core.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <a href="#products" className="btn-white-pill inline-flex items-center gap-2">
            Explore Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
          <a href="/about" className="btn-ghost inline-flex items-center gap-2">About Lumina Labs</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-16 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-[#a1a4a5] mt-1">{stat.label}</div>
              <div className="text-[10px] text-[#464a4d] mt-0.5 font-mono-label">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <svg className="w-5 h-5 text-[#464a4d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <section className="relative py-10 border-y border-[#292d30] overflow-hidden">
      <div className="text-center text-xs text-[#464a4d] mb-6 font-mono-label uppercase tracking-widest">A single core. Infinite products. Built for what's next.</div>
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee gap-12 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm font-medium text-[#6e727a] hover:text-[#9281f7] transition-colors cursor-default">
              <img 
                src={`https://cdn.simpleicons.org/${item.icon}/${item.color}`} 
                alt={item.name}
                className="w-5 h-5 flex-shrink-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoverflowCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = products.length;

  const next = useCallback(() => setActiveIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setActiveIndex((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <section id="products" className="relative py-24 scroll-mt-16 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] spotlight-halo opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#292d30] bg-[#0a0a0c] text-xs text-[#a1a4a5] mb-4">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#9281f7]" />
            <span className="font-mono-label">The Collection</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-display tracking-tight mb-4 text-[#fcfdff]">
            Explore the <span className="text-iris">ecosystem</span>
          </h2>
          <p className="text-[#a1a4a5] text-sm sm:text-base max-w-2xl mx-auto">Swipe or use arrow keys to browse. Click the center card to visit.</p>
        </div>

        <div className="relative w-full h-[500px] flex items-center justify-center" style={{ perspective: "1200px" }}>
          {/* Click zones for rotation */}
          <button onClick={prev} className="absolute left-0 top-0 bottom-0 w-1/3 z-30 cursor-pointer focus:outline-none group" aria-label="Previous product">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#292d30] bg-[#0a0a0c]/80 backdrop-blur-sm flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </div>
          </button>
          <button onClick={next} className="absolute right-0 top-0 bottom-0 w-1/3 z-30 cursor-pointer focus:outline-none group" aria-label="Next product">
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#292d30] bg-[#0a0a0c]/80 backdrop-blur-sm flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </div>
          </button>

          {products.map((product, i) => {
            let offset = i - activeIndex;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const absOffset = Math.abs(offset);
            const isActive = offset === 0;
            const isAdjacent = absOffset === 1;
            const isFar = absOffset > 1;

            const translateX = offset * 200;
            const scale = isActive ? 1 : isAdjacent ? 0.82 : 0.6;
            const rotateY = offset * -30;
            const zIndex = 30 - absOffset;
            const opacity = isFar ? 0.25 : isAdjacent ? 0.5 : 1;

            return (
              <div
                key={product.name}
                className="absolute transition-all duration-500 ease-out"
                onClick={isAdjacent ? (offset > 0 ? next : prev) : undefined}
                style={{
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  zIndex,
                  opacity,
                  pointerEvents: isActive || isAdjacent ? "auto" : "none",
                  transformStyle: "preserve-3d",
                }}
              >
                <a
                  href={isActive && product.url !== "#" ? product.url : undefined}
                  target={isActive && product.url !== "#" ? "_blank" : undefined}
                  rel={isActive && product.url !== "#" ? "noopener noreferrer" : undefined}
                  className={`block w-[340px] h-[420px] rounded-2xl p-6 transition-all duration-300 ${isActive ? "frosted-card-active" : "frosted-card"}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-[#292d30] bg-[#101012]">
                      <ProductIcon path={product.icon} className="w-5 h-5 text-white" />
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-mono-label ${product.status === "Live" || product.status === "Production" || product.status === "100%" ? "bg-[#3ad389]/10 text-[#3ad389] border border-[#3ad389]/20" : "bg-[#ffca16]/10 text-[#ffca16] border border-[#ffca16]/20"}`}>
                      {product.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-1">{product.name}</h3>
                  <p className="text-sm text-iris mb-3">{product.tagline}</p>
                  <p className="text-sm text-[#a1a4a5] leading-relaxed mb-4 line-clamp-4">{product.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.tech.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-[#292d30] text-[#a1a4a5]">{t}</span>
                    ))}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-1 text-xs text-iris">
                      <span>{isActive ? "Visit" : "—"}</span>
                      {isActive && (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      )}
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "w-6 bg-iris" : "w-2 bg-[#292d30] hover:bg-[#3a3f44]"}`}
              aria-label={`Go to product ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 scroll-mt-16 border-y border-[#292d30]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#292d30] bg-[#0a0a0c] text-xs text-[#a1a4a5] mb-4">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#9281f7]" />Platform Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-display tracking-tight mb-4 text-[#fcfdff]">
            Engineered for <span className="text-iris">scale and resilience</span>
          </h2>
          <p className="text-[#a1a4a5] text-sm sm:text-base max-w-2xl mx-auto">Every product is powered by the same proven core.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap, i) => (
            <div key={cap.title} className="group p-6 animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-[#292d30] mb-4">
                <ProductIcon path={cap.icon} className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{cap.title}</h3>
              <p className="text-sm text-[#a1a4a5] leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section id="stack" className="relative py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#292d30] bg-[#0a0a0c] text-xs text-[#a1a4a5] mb-4">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#9281f7]" />Tech Stack
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-display tracking-tight mb-4 text-[#fcfdff]">
            Powered by <span className="text-iris">modern tools</span>
          </h2>
          <p className="text-[#a1a4a5] text-sm sm:text-base max-w-2xl mx-auto">A carefully curated stack optimized for performance and scale.</p>
        </div>
        <div className="grid grid-cols-6 gap-12 max-w-6xl mx-auto">
          {techStack.map((item, i) => (
            <div key={item.name} className="flex flex-col items-center gap-2 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://cdn.simpleicons.org/${item.icon}/${item.color}`} alt={item.name} className="w-14 h-14 flex-shrink-0" />
              <span className="text-xs text-[#6e727a]">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative py-24 scroll-mt-16 border-y border-[#292d30]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#292d30] bg-[#0a0a0c] text-xs text-[#a1a4a5] mb-4">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#9281f7]" />
            <span className="font-mono-label">Trusted by builders</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-display tracking-tight mb-4 text-[#fcfdff]">
            What people are <span className="text-iris">saying</span>
          </h2>
          <p className="text-[#a1a4a5] text-sm sm:text-base max-w-2xl mx-auto">Real feedback from teams using DevProFlow products.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="group rounded-lg border border-[#292d30] bg-[#0a0a0c] p-6 hover:border-[#3a3f44] transition-all animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <svg className="w-8 h-8 text-[#292d30] mb-4 group-hover:text-iris transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.281.65-.384.217-.117.413-.241.617-.328.198-.092.39-.178.575-.258.18-.079.355-.16.518-.226.157-.063.303-.13.438-.185.127-.052.243-.103.349-.143l.303-.117.267-.097c.078-.027.146-.05.207-.07l.183-.062c.056-.017.098-.03.134-.04.068-.022.108-.034.108-.034l-.075-.287s-.043.011-.117.031c-.037.011-.082.022-.134.04l-.193.065c-.066.022-.142.046-.227.074l-.278.1-.31.12c-.112.043-.233.094-.36.151-.13.057-.273.115-.418.183-.144.07-.296.142-.452.225-.156.082-.32.163-.481.262-.161.099-.335.193-.497.31-.162.117-.339.226-.491.367-.156.137-.322.267-.462.426-.147.153-.292.31-.413.481-.128.165-.237.345-.338.527-.105.18-.183.368-.262.55-.079.182-.136.368-.193.548-.057.18-.097.358-.136.528-.04.17-.062.333-.085.487-.022.154-.037.298-.048.431-.011.133-.016.255-.022.367-.006.112-.006.213-.006.302v.205c0 .06.003.105.003.137v.082c0 .022.003.034.003.034l.06-.003.155-.008c.06-.003.134-.008.214-.014.082-.006.171-.014.267-.022.097-.008.198-.014.302-.014.105 0 .214.003.327.014.113.008.229.022.347.04.118.022.236.043.355.074.118.031.236.066.355.112.118.046.233.1.347.16.114.06.224.13.328.207.105.077.202.165.292.26.09.094.171.196.244.302.074.105.134.22.183.338.05.12.086.244.112.372.026.13.034.262.034.398 0 .137-.014.273-.04.41-.026.137-.066.273-.118.41-.05.137-.118.273-.193.41-.074.137-.165.273-.262.41-.097.137-.207.273-.328.41-.12.137-.254.273-.398.41-.144.137-.302.273-.472.41-.17.137-.35.273-.541.41-.192.137-.395.273-.61.41-.215.137-.441.273-.68.41-.239.137-.489.273-.752.41-.263.137-.538.273-.826.41l-.303.117-.267.097c-.078.027-.146.05-.207.07l-.183.062c-.056.017-.098.03-.134.04-.068.022-.108.034-.108.034l.075.287s.043-.011.117-.031c.037-.011.082-.022.134-.04l.193-.065c.066-.022.142-.046.227-.074l.278-.1.31-.12c.112-.043.233-.094.36-.151.13-.057.273-.115.418-.183.144-.07.296-.142.452-.225.156-.082.32-.163.481-.262.161-.099.335-.193.497-.31.162-.117.339-.226.491-.367.156-.137.322-.267.462-.426.147-.153.292-.31.413-.481.128-.165.237-.345.338-.527.105-.18.183-.368.262-.55.079-.182.136-.368.193-.548.057-.18.097-.358.136-.528.04-.17.062-.333.085-.487.022-.154.037-.298.048-.431.011-.133.016-.255.022-.367.006-.112.006-.213.006-.302v-.205c0-.06-.003-.105-.003-.137v-.082c0-.022-.003-.034-.003-.034l-.06.003-.155.008c-.06.003-.134.008-.214.014-.082.006-.171.014-.267.022-.097.008-.198.014-.302.014-.105 0-.214-.003-.327-.014-.113-.008-.229-.022-.347-.04-.118-.022-.236-.043-.355-.074-.118-.031-.236-.066-.355-.112-.118-.046-.233-.1-.347-.16-.114-.06-.224-.13-.328-.207-.105-.077-.202-.165-.292-.26-.09-.094-.171-.196-.244-.302-.074-.105-.134-.22-.183-.338-.05-.12-.086-.244-.112-.372-.026-.13-.034-.262-.034-.398 0-.137.014-.273.04-.41.026-.137.066-.273.118-.41.05-.137.118-.273.193-.41.074-.137.165-.273.262-.41.097-.137.207-.273.328-.41.12-.137.254-.273.398-.41.144-.137.302-.273.472-.41.17-.137.35-.273.541-.41.192-.137.395-.273.61-.41.215-.137.441-.273.68-.41.239-.137.489-.273.752-.41.263-.137.538-.273.826-.41z" /></svg>
              <p className="text-sm text-[#a1a4a5] leading-relaxed mb-5">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-[#292d30] bg-[#101012] flex items-center justify-center">
                  <span className="text-xs font-bold text-iris">{t.author.charAt(0)}</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">{t.author}</div>
                  <div className="text-[10px] text-[#6e727a] font-mono-label">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 scroll-mt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#292d30] bg-[#0a0a0c] text-xs text-[#a1a4a5] mb-4">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#9281f7]" />
            <span className="font-mono-label">Questions? Answers.</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-display tracking-tight mb-4 text-[#fcfdff]">
            Frequently asked <span className="text-iris">questions</span>
          </h2>
          <p className="text-[#a1a4a5] text-sm sm:text-base max-w-2xl mx-auto">Everything you need to know about DevProFlow and the Lumina ecosystem.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-lg border border-[#292d30] bg-[#0a0a0c] overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[#101012] transition-colors"
              >
                <span className="text-sm font-semibold text-white pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-[#6e727a] flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96" : "max-h-0"}`}
              >
                <p className="px-5 pb-5 text-sm text-[#a1a4a5] leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative py-24 border-y border-[#292d30]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#292d30] bg-[#0a0a0c] text-xs text-[#a1a4a5] mb-4">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#9281f7]" />
          <span className="font-mono-label">Stay in the loop</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif-display tracking-tight mb-4 text-[#fcfdff]">
          Get product <span className="text-iris">updates</span>
        </h2>
        <p className="text-[#a1a4a5] text-sm sm:text-base max-w-xl mx-auto mb-8">
          New launches, release notes, and ecosystem insights. No spam, unsubscribe anytime.
        </p>
        {submitted ? (
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#1f4d38] bg-[#10291f] text-sm text-[#3ad389]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Thanks for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full sm:flex-1 px-4 py-3 rounded-lg border border-[#292d30] bg-[#0a0a0c] text-sm text-white placeholder:text-[#464a4d] focus:outline-none focus:border-iris transition-colors"
            />
            <button type="submit" className="btn-white-pill inline-flex items-center gap-2 whitespace-nowrap">
              Subscribe
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-lg border border-[#292d30] bg-[#0a0a0c] p-10 sm:p-16 text-center">
          <h2 className="text-3xl sm:text-5xl font-serif-display tracking-tight mb-4 text-[#fcfdff]">
            Want to see the <span className="text-iris">full ecosystem?</span>
          </h2>
          <p className="text-[#a1a4a5] text-sm sm:text-base max-w-xl mx-auto mb-8">Explore the full collection — each product with detailed specs, capabilities, and completion status.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/products" className="btn-white-pill inline-flex items-center gap-2">View All Products<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></a>
            <a href="/about" className="btn-ghost inline-flex items-center gap-2">About Lumina Labs</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-[#292d30] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg border border-[#292d30] bg-[#0a0a0c] flex items-center justify-center">
              <span className="text-sm font-bold text-white">D</span>
            </div>
            <div>
              <div className="text-sm font-bold text-white">DevProFlow</div>
              <div className="text-xs text-[#6e727a]">Lumina Ecosystem</div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-xs text-[#6e727a]">
            <a href="/products" className="hover:text-white transition-colors">Products</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="https://www.devproflow.com" className="hover:text-white transition-colors">Website</a>
          </div>
          <div className="text-xs text-[#464a4d]">© 2026 Lumina Labs · devproflow.com</div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />
      <Hero />
      <Marquee />
      <CoverflowCarousel />
      <Capabilities />
      <TechStack />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <CTA />
      <Footer />
    </main>
  );
}
