import Link from "next/link";
import { SectionHeader } from "@/components/chrome";
import { ExploreCard } from "@/components/explore-card";
import { EasterEgg } from "@/components/easter-egg";
import { DiscordCard } from "@/components/discord-card";

const ICON = { width: 22, height: 22 };

export default function Home() {
  return (
    <main id="main-content">
      <section id="hero">
        <div className="hero-bg-grid" />
        <div className="hero-glow" />
        <div className="hero-content">
          <pre className="hero-banner">╭── rootgin ────────────────────╮</pre>
          <EasterEgg />
          <h1 className="hero-name">
            Gin<span className="c-cursor" />
          </h1>
          <p className="hero-sub">
            just someone who likes building things for the web. terminal enthusiast, tea addict, occasional
            rabbit-hole explorer.
          </p>
          <div className="hero-ctas">
            <Link href="/build/" className="btn-primary">
              ./build
            </Link>
            <Link href="#explore" className="btn-outline">
              ./explore
            </Link>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/RootGin" target="_blank" rel="noopener noreferrer">
              github
            </a>
            <a href="mailto:hi@rootgin.xyz">email</a>
            <a href="#">discord</a>
          </div>
        </div>
      </section>

      <section id="about">
        <SectionHeader label="01 — about" title="who_am_i" />
        <div className="about-grid">
          <div className="about-photo-box">
            <DiscordCard />
            <div className="about-photo-label">discord.txt</div>
          </div>
          <div className="about-text">
            <p>
              hey, i&apos;m <strong>Gin</strong> — someone who spends too much time in the terminal building
              things for the web. i like clean code, good design, and tools that just work.
            </p>
            <p>
              you&apos;ll probably find me exploring new frameworks, breaking things just to fix them, or
              diving into some random tech rabbit hole.
            </p>
            <p>this site is my little corner of the internet — no fluff, no tracking, just me and what i build.</p>
          </div>
        </div>
      </section>

      <section id="links">
        <SectionHeader label="02 — links" title="find_me_online" />
        <div className="links-grid">
          <a href="https://github.com/RootGin" className="link-btn" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden>
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>github</span>
          </a>
          <a href="mailto:hi@rootgin.xyz" className="link-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" aria-hidden>
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4l-10 9L2 4" />
            </svg>
            <span>email</span>
          </a>
        </div>
      </section>

      <section id="explore">
        <SectionHeader label="03 — explore" title="continue_to_explore" />
        <div className="explore-grid">
          <ExploreCard
            num="01"
            title="build"
            desc="Stuff I build — dotfiles, projects, configs, and experiments."
            href="/build/"
            delay={0}
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...ICON} aria-hidden>
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>
            }
          />
          <ExploreCard
            num="02"
            title="now"
            desc="What I'm currently learning, reading, and building."
            href="/now/"
            delay={0.08}
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...ICON} aria-hidden>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            }
          />
          <ExploreCard
            num="03"
            title="uses"
            desc="Hardware, distro, editor, and the tools I run it with."
            href="/uses/"
            delay={0.16}
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...ICON} aria-hidden>
                <rect x="2" y="4" width="20" height="13" rx="2" />
                <line x1="2" y1="20" x2="22" y2="20" />
                <line x1="6" y1="8" x2="10" y2="8" />
              </svg>
            }
          />
        </div>
      </section>
    </main>
  );
}