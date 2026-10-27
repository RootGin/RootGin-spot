import Link from "next/link";
import { SectionHeader } from "@/components/ui/chrome";
import { ExploreCard } from "@/components/ui/explore-card";
import { Hero, Marquee } from "@/components/sections/hero";
import { EXPLORE_CARDS } from "@/content/projects";
import { ICONS } from "@/content/icons";

const LINKS = [
  {
    href: "https://github.com/RootGin",
    label: "github",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden>
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    href: "mailto:hi@rootgin.xyz",
    label: "email",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" aria-hidden>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4l-10 9L2 4" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Marquee />

      <section id="links">
        <SectionHeader label="01 / links" title="Find Me Online" />
        <div className="links-grid">
          {LINKS.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              className="link-btn"
              {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </div>
      </section>

      <section id="explore">
        <SectionHeader label="02 / explore" title="Continue Exploring" />
        <div className="explore-grid">
          {EXPLORE_CARDS.map((card, i) => (
            <ExploreCard key={card.href} {...card} icon={ICONS[card.icon]} delay={i * 0.08} />
          ))}
        </div>
      </section>
    </main>
  );
}
