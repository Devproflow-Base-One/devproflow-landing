import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About — Lumina Labs | DevProFlow",
  description:
    "A technology enterprise building scalable web, mobile, and enterprise platforms — spanning fintech, music, community, automotive, and more.",
};

const profile = {
  name: "Lumina Labs",
  title: "Technology Enterprise",
  tagline:
    "A technology enterprise building scalable web, mobile, and enterprise platforms — spanning fintech, music, community, automotive, and more.",
  email: "hello@devproflow.com",
  website: "https://www.devproflow.com",
};

const stats = [
  { label: "Products Built", value: "14+" },
  { label: "Browser Extensions", value: "300+" },
  { label: "Industries Served", value: "10" },
  { label: "Years Experience", value: "3" },
];

const skills = [
  {
    category: "Web, Mobile & SaaS",
    items: ["Web Apps", "Mobile Apps", "Desktop Apps", "CRM", "Subscriptions", "Multi-tenant"],
  },
  {
    category: "Data",
    items: ["Database", "Analytics", "Real-time Data"],
  },
  {
    category: "Cloud & Infra",
    items: ["Cloud Hosting", "Edge Network", "Auto-scaling"],
  },
  {
    category: "Integrations",
    items: ["WhatsApp", "Telegram", "Discord", "PayPal", "Polygon"],
  },
  {
    category: "Security",
    items: ["GDPR", "SOC 2", "OAuth", "JWT"],
  },
];

const projects = [
  {
    name: "DevFlo AI",
    description:
      "Unified API platform with smart analysis. Real-time responses, image generation, and usage tracking.",
    tech: ["API Platform", "Real-Time", "Analytics"],
    status: "Deployed",
    url: "https://aidevflo.devproflow.com",
  },
  {
    name: "Lumina MarktBit",
    description:
      "Real-time signal dashboard for crypto and global stocks. Get alerts, track trends, and make informed decisions.",
    tech: ["Real-Time Dashboard", "Multi-Market", "Alert System"],
    status: "90% Complete",
    url: "/coming-soon?name=MarktBit",
  },
  {
    name: "Chrome Extension Factory",
    description:
      "300+ browser extensions to boost productivity, research, writing, and learning. Tools for students, professionals, and creators.",
    tech: ["300+ Products", "8 Categories", "Productivity Tools"],
    status: "97% Complete",
    url: "/coming-soon?name=Chrome+Extension+Factory",
  },
  {
    name: "Lumina MusicVerse",
    description:
      "Music marketplace where producers and engineers connect. Protect your copyright, split royalties automatically, and get paid securely.",
    tech: ["Marketplace", "Blockchain Copyright", "Royalty System"],
    status: "In Progress",
    url: "/coming-soon?name=MusicVerse",
  },
  {
    name: "Mosquemu",
    description:
      "Complete mosque management platform. Prayer schedules, events, and announcements — all in one place. Available in 14 languages.",
    tech: ["Web + Mobile", "Multi-Language", "Prayer Schedule"],
    status: "Production Ready",
    url: "/coming-soon?name=Mosquemu",
  },
  {
    name: "Automotive Ecosystem",
    description:
      "Automotive accessories marketplace with custom modification tools for workshops. Manage inventory and reach more customers.",
    tech: ["Accessories Marketplace", "Customization Tools", "Workshop Tools"],
    status: "70% Complete",
    url: "/coming-soon?name=Automotive+Ecosystem",
  },
  {
    name: "Live Speak",
    description:
      "Voice cloning and streaming platform. Create realistic voice clones and stream in real-time across desktop, mobile, and browser.",
    tech: ["Voice Cloning", "Desktop + Mobile", "Real-Time Streaming"],
    status: "100% Complete",
    url: "/coming-soon?name=Live+Speak",
  },
  {
    name: "Lumina Core",
    description:
      "Enterprise CRM platform to manage customers, automate outreach, and grow your business.",
    tech: ["CRM", "Content Management", "Automation"],
    status: "In Development",
    url: "/coming-soon?name=Lumina+Core",
  },
  {
    name: "Auto Life Diary",
    description:
      "Smart journaling app that automatically captures and organizes your daily activities. Your life, documented effortlessly.",
    tech: ["Smart Journaling", "Auto-Capture", "Pattern Recognition"],
    status: "Early Stage",
    url: "/coming-soon?name=Auto+Life+Diary",
  },
  {
    name: "AuroraToday",
    description:
      "Bilingual EN/ES local platform for Aurora, Colorado. Events, jobs, businesses, real estate, multicultural food, and community forum.",
    tech: ["Bilingual EN/ES", "Local News", "Job Board"],
    status: "Deployed",
    url: "/coming-soon?name=AuroraToday",
  },
  {
    name: "ASEAN Bakery",
    description:
      "Modern artisan bakery with ASEAN heritage and Colorado flair. Ghost-kitchen + pop-up model with smart ordering and loyalty program.",
    tech: ["Smart Ordering", "Loyalty Program", "Supabase"],
    status: "70% Complete",
    url: "/coming-soon?name=ASEAN+Bakery",
  },
  {
    name: "ASEAN Sportainment",
    description:
      "Premier social-sports hub with padel, pickleball, food court, VIP billiards, karaoke, and golf simulators. B2B lead generation engine included.",
    tech: ["Booking System", "B2B Lead Gen", "Membership"],
    status: "80% Complete",
    url: "/coming-soon?name=ASEAN+Sportainment",
  },
  {
    name: "PayBridge",
    description:
      "Top-up PayPal, withdraw to bank, and pay CC-only subscriptions without a credit card. QRIS, VA, and e-wallet payments accepted.",
    tech: ["PayPal API", "QRIS", "E-Wallet"],
    status: "In Development",
    url: "/coming-soon?name=PayBridge",
  },
  {
    name: "Lumina Webmail",
    description:
      "Gmail-like self-hosted webmail with Postfix, Dovecot, and Next.js. Full IMAP/SMTP support with dark mode and label management.",
    tech: ["Postfix", "Dovecot", "IMAP/SMTP"],
    status: "90% Complete",
    url: "/coming-soon?name=Lumina+Webmail",
  },
];

const certifications = [
  "ISO/IEC 27001",
  "OWASP Top 10",
  "GDPR",
  "SOC 2",
  "HIPAA",
  "PCI-DSS",
  "WCAG 2.2",
  "OAuth 2.1",
  "JWT",
];

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mb-16 scroll-mt-24">
      <div className="mb-6">
        <div className="font-mono-label text-[#464a4d] uppercase tracking-[0.2em]">section.{id}</div>
        <h2 className="text-3xl font-serif-display text-white mt-3">{title}</h2>
        {description && <p className="text-sm text-[#a1a4a5] mt-2 max-w-3xl">{description}</p>}
      </div>
      {children}
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 spotlight-halo opacity-20 pointer-events-none" />

      <nav className="relative z-10 border-b border-[#292d30] bg-black/80 backdrop-blur-xl sticky top-0">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="/" className="text-sm font-semibold text-white hover:text-iris transition-colors">
            ← DevProFlow
          </a>
          <div className="flex items-center gap-4 text-xs text-[#a1a4a5]">
            <a href="/products" className="hover:text-white transition-colors">Products</a>
            <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#standards" className="hover:text-white transition-colors">Standards</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#292d30] bg-[#0a0a0c] text-xs text-[#a1a4a5]">
            Enterprise Profile
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif-display text-white">{profile.name}</h1>
          <p className="text-lg text-[#a1a4a5]">{profile.title}</p>
          <p className="text-sm text-[#a1a4a5] max-w-3xl mx-auto leading-relaxed">{profile.tagline}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-[#292d30] bg-[#0a0a0c] p-4 text-center">
                <div className="text-xs text-[#6e727a] font-mono-label uppercase tracking-wide">{stat.label}</div>
                <div className="text-2xl font-semibold text-white mt-2">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-[#a1a4a5]">
            <div className="rounded-full border border-[#292d30] px-4 py-2 flex items-center gap-2">
              <span className="font-mono-label">email</span>
              <a href={`mailto:${profile.email}`} className="text-white hover:text-iris transition-colors">
                {profile.email}
              </a>
            </div>
          </div>
        </div>

        <Section
          id="about"
          title="About Lumina Labs"
          description="We build DevProFlow — a growing ecosystem of products spanning fintech, music, community, automotive, and beyond."
        >
          <div className="space-y-4 text-sm text-[#a1a4a5] leading-relaxed">
            <p>
              Every product is powered by the same proven core — built for scale, reliability, and speed. From cloud hosting to enterprise-grade
              security, each launch inherits the same foundation.
            </p>
            <p>
              Our team focuses on clean design, smart automation, and compliance-first development. We treat user experience and performance as
              first-class citizens from day one.
            </p>
            <p>
              The result: a composable ecosystem that can launch new products in record time — all with one proven core.
            </p>
          </div>
        </Section>

        <Section id="capabilities" title="Capabilities" description="What we bring across web, mobile, cloud, and security.">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div key={skill.category} className="rounded-lg border border-[#292d30] bg-[#0a0a0c] p-5">
                <h3 className="text-sm font-semibold text-iris mb-3">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="text-xs px-2.5 py-1 rounded-full border border-[#292d30] text-[#a1a4a5]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Featured Projects" description="Flagship launches spanning fintech, music, community, automotive, and lifestyle.">
          <div className="grid grid-cols-1 gap-4">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target={project.url !== "#" ? "_blank" : undefined}
                rel={project.url !== "#" ? "noopener noreferrer" : undefined}
                className="group rounded-lg border border-[#292d30] bg-[#0a0a0c] p-5 hover:border-[#3a3f44] transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-[11px] text-[#6e727a] font-mono-label">{project.tech.slice(0, 2).join(" · ")}</div>
                    <h3 className="text-base font-semibold text-white group-hover:text-iris transition-colors">{project.name}</h3>
                  </div>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-mono-label ${
                      project.status === "Deployed" || project.status === "100% Complete" || project.status === "Production Ready"
                        ? "bg-[#3ad389]/10 text-[#3ad389] border border-[#3ad389]/20"
                        : "bg-[#ffca16]/10 text-[#ffca16] border border-[#ffca16]/20"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-[#a1a4a5] leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded border border-[#292d30] text-[#6e727a]">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </Section>

        <Section
          id="standards"
          title="Compliance & Standards"
          description="Security and accessibility are baked into everything we build."
        >
          <div className="rounded-lg border border-[#292d30] bg-[#0a0a0c] p-6">
            <p className="text-sm text-[#a1a4a5] mb-4">
              Every product ships with enterprise-grade security, structured monitoring, and zero-trust authentication. We reuse the same
              compliance foundation across all launches.
            </p>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span key={cert} className="text-xs px-3 py-1.5 rounded-full border border-[#292d30] text-[#a1a4a5]">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact" description="Let's build something great together. We're just a message away.">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-lg border border-[#292d30] bg-[#0a0a0c] p-4 hover:border-[#3a3f44] transition-colors"
            >
              <svg className="w-5 h-5 text-iris" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <div>
                <div className="text-xs text-[#6e727a]">Email</div>
                <div className="text-sm text-white">{profile.email}</div>
              </div>
            </a>

            <a
              href={profile.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-[#292d30] bg-[#0a0a0c] p-4 hover:border-[#3a3f44] transition-colors"
            >
              <svg className="w-5 h-5 text-iris" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0l3-3m-3 3l-3-3m3-9l3 3m-3-3l-3 3" />
              </svg>
              <div>
                <div className="text-xs text-[#6e727a]">Website</div>
                <div className="text-sm text-white">{profile.website.replace("https://", "")}</div>
              </div>
            </a>
          </div>
        </Section>

        <div className="text-center text-xs text-[#464a4d] pt-4">Lumina Labs © 2026 · DevProFlow</div>
      </div>
    </main>
  );
}
