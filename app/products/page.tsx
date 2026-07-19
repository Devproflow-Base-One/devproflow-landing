import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — DevProFlow Lumina",
  description:
    "A curated collection of products — spanning fintech, music, community, automotive, and more.",
};

type ProductStatus = "Deployed" | "Production Ready" | "High" | "Mid" | "Early" | "Concept";

type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  tech: string[];
  features: string[];
  status: ProductStatus;
  statusLabel: string;
  completion: number;
  url: string;
  deploy: string;
  icon: string;
  accent: string;
};

const products: Product[] = [
  {
    id: "devflo",
    name: "DevFlo AI",
    tagline: "Unified API for 33+ LLM models",
    description:
      "Access 33+ AI models with a single API. Compatible format with auto-fallback. Real-time responses, image generation, and usage tracking.",
    category: "AI & API Platform",
    tech: ["Unified API", "33+ Models", "Auto-Fallback", "Usage Tracking"],
    features: [
      "Single API for 33+ LLM models",
      "Auto-fallback when provider is down",
      "Real-time responses and image generation",
      "Usage tracking and analytics",
    ],
    status: "Deployed",
    statusLabel: "Live",
    completion: 100,
    url: "https://aidevflo.devproflow.com",
    deploy: "Vercel",
    icon: "M12 2a3 3 0 00-3 3v2a3 3 0 006 0V5a3 3 0 00-3-3zM5 8h14v11a2 2 0 01-2 2H7a2 2 0 01-2-2V8z",
    accent: "from-violet-500 to-purple-600",
  },
  {
    id: "marktbit",
    name: "Lumina MarktBit",
    tagline: "Crypto + Global Stocks Signal Dashboard",
    description:
      "Real-time signal dashboard for crypto and global stocks. Get alerts, track trends, and make informed decisions.",
    category: "Fintech",
    tech: ["Real-Time Dashboard", "Multi-Market", "Alert System", "Analytics"],
    features: [
      "Real-time signals for crypto and global stocks",
      "Market trend analysis & predictions",
      "Price alerts & notifications",
      "Multi-market dashboard in one view",
      "Historical performance tracking",
    ],
    status: "High",
    statusLabel: "90% Complete",
    completion: 90,
    url: "#",
    deploy: "Vercel + Railway",
    icon: "M3 3v18h18M7 14l4-4 4 4 6-6",
    accent: "from-amber-500 to-orange-600",
  },
  {
    id: "chrome-ext",
    name: "Chrome Extension Factory",
    tagline: "300+ extensions across 8 categories",
    description:
      "300+ browser extensions to boost productivity, research, writing, and learning. Tools for students, professionals, and creators.",
    category: "Browser Extensions",
    tech: ["300+ Products", "8 Categories", "Productivity Tools", "Academic Tools"],
    features: [
      "Academic tools: research, citation, study aids",
      "Productivity tools: focus boosters, time management",
      "Writing tools: grammar checker, coherence checker",
      "PDF tools: extraction, analysis, conversion",
    ],
    status: "High",
    statusLabel: "97% Complete",
    completion: 97,
    url: "#",
    deploy: "Chrome Web Store",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M9 5h6a2 2 0 012 2v10a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2z",
    accent: "from-green-500 to-emerald-600",
  },
  {
    id: "musicverse",
    name: "Lumina MusicVerse",
    tagline: "Music engineering marketplace",
    description:
      "Music marketplace where producers and engineers connect. Protect your copyright, split royalties automatically, and get paid securely.",
    category: "Music & Entertainment",
    tech: ["Marketplace", "Blockchain Copyright", "Mobile App", "Royalty System"],
    features: [
      "Marketplace connecting producers & engineers",
      "Blockchain copyright protection",
      "Smart auto-tagging — BPM, key, genre, mood",
      "Automated royalty splits",
      "Secure escrow-protected payments",
    ],
    status: "Mid",
    statusLabel: "DB Ready, 25% UI",
    completion: 25,
    url: "#",
    deploy: "Vercel + Supabase",
    icon: "M9 18V5l12-2v13M9 9l12-2M9 18a3 3 0 11-6 0 3 3 0 016 0zm12-3a3 3 0 11-6 0 3 3 0 016 0z",
    accent: "from-purple-500 to-fuchsia-600",
  },
  {
    id: "mosquemu",
    name: "Mosquemu",
    tagline: "Digital mosque management platform",
    description:
      "Complete mosque management platform. Prayer schedules, events, and announcements — all in one place. Available in 14 languages.",
    category: "Religious & Community",
    tech: ["Web + Mobile", "Multi-Language", "Prayer Schedule", "Event Management"],
    features: [
      "Prayer schedule management",
      "Event management",
      "Smart announcements",
      "Multi-language support (14 languages)",
      "Web + mobile app + public website",
    ],
    status: "Production Ready",
    statusLabel: "Production Ready",
    completion: 95,
    url: "#",
    deploy: "Vercel + EAS Build",
    icon: "M12 2L2 12h3v8h14v-8h3L12 2z",
    accent: "from-teal-500 to-cyan-600",
  },
  {
    id: "automotive",
    name: "Automotive Ecosystem",
    tagline: "Automotive accessories & workshop tools",
    description:
      "Automotive accessories marketplace with custom modification tools for workshops. Manage inventory and reach more customers.",
    category: "Automotive",
    tech: ["Accessories Marketplace", "Customization Tools", "Workshop Tools", "Smart Marketing"],
    features: [
      "Accessories marketplace",
      "Custom modification tools for workshops",
      "Smart marketing tools",
      "Inventory management",
    ],
    status: "Mid",
    statusLabel: "70% Complete",
    completion: 70,
    url: "#",
    deploy: "VPS",
    icon: "M5 11l1.5-4.5h11L19 11M5 11h14v6H5v-6z",
    accent: "from-red-500 to-rose-600",
  },
  {
    id: "live-speak",
    name: "Live Speak",
    tagline: "Multi-platform voice & streaming",
    description:
      "Voice cloning and streaming platform. Create realistic voice clones and stream in real-time across desktop, mobile, and browser.",
    category: "Media & Streaming",
    tech: ["Voice Cloning", "Desktop + Mobile", "Real-Time Streaming", "Multi-Platform"],
    features: [
      "Realistic voice cloning",
      "Chrome extension + Desktop + Mobile",
      "Real-time streaming",
      "Multi-device sync",
    ],
    status: "Deployed",
    statusLabel: "100% Complete",
    completion: 100,
    url: "#",
    deploy: "TBD",
    icon: "M12 14a3 3 0 003-3V5a3 3 0 00-6 0v6a3 3 0 003 3z M19 11a7 7 0 01-14 0M12 18v4",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    id: "lumina-core",
    name: "Lumina Core",
    tagline: "Global SaaS CRM Platform",
    description:
      "Enterprise CRM platform to manage customers, automate outreach, and grow your business.",
    category: "CRM & SaaS",
    tech: ["CRM", "Content Management", "Automation", "Analytics"],
    features: [
      "Customer relationship management",
      "Content management system",
      "Automated outreach & follow-ups",
      "Customer insights & analytics",
    ],
    status: "Concept",
    statusLabel: "In Development",
    completion: 0,
    url: "#",
    deploy: "Vercel",
    icon: "M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z",
    accent: "from-brand-500 to-purple-600",
  },
  {
    id: "auto-life-diary",
    name: "Auto Life Diary",
    tagline: "Smart life diary",
    description:
      "Smart journaling app that automatically captures and organizes your daily activities. Your life, documented effortlessly.",
    category: "Lifestyle & Productivity",
    tech: ["Smart Journaling", "Auto-Capture", "Pattern Recognition", "Categorization"],
    features: [
      "Automatic daily journaling",
      "Context-aware activity tracking",
      "Pattern recognition over time",
      "Smart categorization",
    ],
    status: "Early",
    statusLabel: "Early Stage",
    completion: 20,
    url: "#",
    deploy: "TBD",
    icon: "M6 2v20l6-4 6 4V2H6z",
    accent: "from-pink-500 to-rose-600",
  },
  {
    id: "auroratoday",
    name: "AuroraToday",
    tagline: "Bilingual local digital platform",
    description:
      "Bilingual EN/ES local platform for Aurora, Colorado. Events, jobs, businesses, real estate, multicultural food, and community forum.",
    category: "Local & Community",
    tech: ["Bilingual EN/ES", "Local News", "Job Board", "Real Estate"],
    features: [
      "Bilingual content (English/Spanish)",
      "Local events, jobs, and business directory",
      "Real estate listings with market data",
      "Multicultural food atlas with 15+ cuisines",
      "Community forum with AI moderation",
    ],
    status: "Deployed",
    statusLabel: "Live",
    completion: 100,
    url: "#",
    deploy: "VPS",
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6l4 2",
    accent: "from-cyan-500 to-blue-600",
  },
  {
    id: "asean-bakery",
    name: "ASEAN Bakery",
    tagline: "Artisan bakery experience",
    description:
      "Modern artisan bakery with ASEAN heritage and Colorado flair. Ghost-kitchen + pop-up model with smart ordering and loyalty program.",
    category: "Food & Lifestyle",
    tech: ["Smart Ordering", "Loyalty Program", "Calendar Slots", "Supabase"],
    features: [
      "Immersive landing with bento grid hero",
      "Smart ordering with calendar availability",
      "Loyalty and membership tiers",
      "Content engine with SEO blog and cultural stories",
      "Operations admin with CMS-lite",
    ],
    status: "Mid",
    statusLabel: "70% Complete",
    completion: 70,
    url: "#",
    deploy: "VPS",
    icon: "M5 11h14v2H5v-2zM7 13v6h10v-6M9 6h6v3H9V6z",
    accent: "from-amber-500 to-yellow-600",
  },
  {
    id: "asean-sportainment",
    name: "ASEAN Sportainment",
    tagline: "Social-sports destination hub",
    description:
      "Premier social-sports hub with padel, pickleball, food court, VIP billiards, karaoke, and golf simulators. B2B lead generation engine included.",
    category: "Sports & Entertainment",
    tech: ["Booking System", "B2B Lead Gen", "Membership", "AI Assistant"],
    features: [
      "Consumer booking and membership system",
      "Venue showcase with 24,185 sq ft facility",
      "3-tier B2B lead generation engine",
      "AI assistant for customer support",
      "Multi-platform revenue streams",
    ],
    status: "High",
    statusLabel: "80% Complete",
    completion: 80,
    url: "#",
    deploy: "VPS",
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6l4 2",
    accent: "from-green-500 to-teal-600",
  },
  {
    id: "paybridge",
    name: "PayBridge",
    tagline: "PayPal bridge for Indonesia",
    description:
      "Top-up PayPal, withdraw to bank, and pay CC-only subscriptions without a credit card. QRIS, VA, and e-wallet payments accepted.",
    category: "Fintech & Payments",
    tech: ["PayPal API", "QRIS", "Virtual Account", "E-Wallet"],
    features: [
      "Top-up PayPal with IDR via QRIS/VA",
      "Withdraw PayPal to Indonesian bank",
      "Pay CC-only subscriptions without credit card",
      "Multi-channel comparison for best rates",
    ],
    status: "Concept",
    statusLabel: "In Development",
    completion: 0,
    url: "#",
    deploy: "Vercel",
    icon: "M3 10h18M3 14h18M7 6h10v12H7V6z",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    id: "lumina-webmail",
    name: "Lumina Webmail",
    tagline: "Self-hosted email platform",
    description:
      "Gmail-like self-hosted webmail with Postfix, Dovecot, and Next.js. Full IMAP/SMTP support with dark mode and label management.",
    category: "Infrastructure",
    tech: ["Postfix", "Dovecot", "IMAP/SMTP", "Self-Hosted"],
    features: [
      "Gmail-like UI with dark/light mode",
      "Full IMAP/SMTP support via Postfix + Dovecot",
      "Compose, reply, forward, search",
      "Folders, labels, and contact management",
      "DKIM signing and spam filtering",
    ],
    status: "High",
    statusLabel: "90% Complete",
    completion: 90,
    url: "#",
    deploy: "VPS",
    icon: "M3 8l9 6 9-6M3 8v10a2 2 0 002 2h14a2 2 0 002-2V8M3 8a2 2 0 012-2h14a2 2 0 012 2",
    accent: "from-slate-500 to-gray-600",
  },
];

const statusColors: Record<ProductStatus, string> = {
  Deployed: "bg-[#10291f] border-[#1f4d38] text-[#3ad389]",
  "Production Ready": "bg-[#10291f] border-[#1f4d38] text-[#3ad389]",
  High: "bg-[#2b2414] border-[#4c3a15] text-[#ffca16]",
  Mid: "bg-[#2b2414] border-[#4c3a15] text-[#ffca16]",
  Early: "bg-[#2a1a1c] border-[#4a2a2f] text-[#ff7a7a]",
  Concept: "bg-[#1a1d20] border-[#2d3238] text-[#6e727a]",
};

function ProductIcon({ path, className }: { path: string; className: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group rounded-lg border border-[#292d30] bg-[#0a0a0c] p-6 transition-colors hover:border-[#3a3f44]">
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg border border-[#292d30] bg-black text-white">
            <ProductIcon path={product.icon} className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-[#6e727a] font-mono-label">{product.category}</div>
            <h3 className="text-base font-semibold text-white group-hover:text-iris transition-colors">{product.name}</h3>
          </div>
        </div>
        <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono-label border ${statusColors[product.status]}`}>
          {product.statusLabel}
        </span>
      </div>

      <p className="text-sm text-[#a1a4a5] mb-2">{product.tagline}</p>
      <p className="text-xs text-[#6e727a] leading-relaxed mb-5">{product.description}</p>

      <div className="mb-5">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] text-[#6e727a]">Completion</span>
          <span className="text-[11px] font-mono-label text-white">{product.completion}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-[#1a1c22] overflow-hidden">
          <div className="h-full rounded-full bg-iris transition-all duration-700" style={{ width: `${product.completion}%` }} />
        </div>
      </div>

      <div className="mb-5">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#464a4d] mb-3">Key Features</p>
        <ul className="space-y-1.5">
          {product.features.slice(0, 5).map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-[#a1a4a5]">
              <span className="mt-1 inline-block h-1 w-1 rounded-full bg-iris" />
              {feature}
            </li>
          ))}
          {product.features.length > 5 && (
            <li className="text-xs text-[#6e727a] pl-4">+{product.features.length - 5} more</li>
          )}
        </ul>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {product.tech.map((t) => (
          <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-[#292d30] text-[#a1a4a5]">
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-[#292d30] text-[11px] text-[#6e727a]">
        <div className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
          {product.deploy}
        </div>
        {product.url !== "#" && (
          <a href={product.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-white">
            Visit
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const sorted = [...products].sort((a, b) => b.completion - a.completion);

  const totalProducts = products.length;
  const deployed = products.filter((p) => p.status === "Deployed" || p.status === "Production Ready").length;
  const highProgress = products.filter((p) => p.status === "High").length;
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 spotlight-halo opacity-20 pointer-events-none" />

      <nav className="z-10 border-b border-[#292d30] bg-black/80 backdrop-blur-xl sticky top-0">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="/" className="text-sm font-semibold text-white hover:text-iris transition-colors">
            ← DevProFlow
          </a>
          <div className="flex items-center gap-4 text-xs text-[#a1a4a5]">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <span className="text-white">Products</span>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-12">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#292d30] bg-[#0a0a0c] text-xs text-[#a1a4a5]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-iris" />
            Products in the ecosystem
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif-display text-white">Lumina Product Index</h1>
          <p className="text-sm text-[#a1a4a5] max-w-2xl mx-auto">
            Each product is powered by the same proven core — spanning fintech, music, community, automotive, and beyond.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-lg border border-[#292d30] bg-[#0a0a0c] p-4">
              <div className="text-xs text-[#6e727a] font-mono-label uppercase tracking-wide">products</div>
              <div className="text-2xl font-semibold text-white">{totalProducts}</div>
            </div>
            <div className="rounded-lg border border-[#292d30] bg-[#0a0a0c] p-4">
              <div className="text-xs text-[#6e727a] font-mono-label uppercase tracking-wide">production ready</div>
              <div className="text-2xl font-semibold text-[#3ad389]">{deployed}</div>
            </div>
            <div className="rounded-lg border border-[#292d30] bg-[#0a0a0c] p-4">
              <div className="text-xs text-[#6e727a] font-mono-label uppercase tracking-wide">categories</div>
              <div className="text-2xl font-semibold text-white">{categories.length}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-up">
          {sorted.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center text-xs text-[#464a4d] pt-4">
          DevProFlow Lumina Ecosystem © 2026
        </div>
      </div>
    </main>
  );
}
