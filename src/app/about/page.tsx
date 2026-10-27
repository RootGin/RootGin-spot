import type { Metadata } from "next";
import { BackLink, PageHeader } from "@/components/ui/chrome";
import { DiscordCard } from "@/components/ui/discord-card";

export const metadata: Metadata = {
  title: "about",
  description: "Who I am and what this site is.",
};

export default function AboutPage() {
  return (
    <main className="page">
      <BackLink />

      <PageHeader label="/about" title="Who I Am" desc="A little about me and this corner of the internet." />

      <div className="about-grid">
        <div className="about-photo-box">
          <DiscordCard />
          <div className="about-photo-label">discord.txt</div>
        </div>
        <div className="about-text">
          <p>
            hey, i&apos;m <strong>Gin</strong> — someone who spends too much time in the terminal building things
            for the web. i like clean code, good design, and tools that just work.
          </p>
          <p>
            you&apos;ll probably find me exploring new frameworks, breaking things just to fix them, or diving into
            some random tech rabbit hole.
          </p>
          <p>this site is my little corner of the internet — no fluff, no tracking, just me and what i build.</p>
        </div>
      </div>
    </main>
  );
}
