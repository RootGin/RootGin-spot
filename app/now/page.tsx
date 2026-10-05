import type { Metadata } from "next";
import { BackLink, PageHeader } from "@/components/chrome";

export const metadata: Metadata = {
  title: "now",
  description: "What I'm focused on right now.",
};

const SECTIONS = [
  {
    head: "learning",
    items: [
      {
        title: "HTML, CSS & JavaScript",
        desc: "Getting the fundamentals right.",
      },
      {
        title: "C#",
        desc: "Picking up C# for backend and game-related projects.",
      },
      {
        title: "Nix",
        desc: "Learning the Nix expression language through my own flake — understanding the module system and derivations.",
      },
    ],
  },
  {
    head: "building",
    items: [
      {
        title: "This portfolio",
        desc: "rootgin.vercel.app — iterating on the terminal aesthetic, adding pages, keeping it minimal.",
      },
      {
        title: "Self-hosted Minecraft server",
        desc: "Planning to set one up. Looking into containerization and backup strategies.",
      },
    ],
  },
  {
    head: "reading",
    items: [
      {
        title: "Nothing in particular",
        desc: "Docs, blogs, and random GitHub READMEs. The usual rabbit holes.",
      },
    ],
  },
  {
    head: "playing",
    items: [
      {
        title: "Limbus Company",
        desc: "Great story, amazing soundtrack, and a battle system that actually makes you think.",
      },
      {
        title: "Minecraft",
        desc: "Classic. Building, exploring, and occasionally falling into lava.",
      },
    ],
  },
];

export default function NowPage() {
  return (
    <main className="page">
      <BackLink />
      <PageHeader label="~/now" title="currently" desc="What I'm focused on right now." />

      {SECTIONS.map(({ head, items }) => (
        <section className="now-section" key={head}>
          <h2 className="now-section-head">## {head}</h2>
          <div className="now-items">
            {items.map((item) => (
              <div className="now-item" key={item.title}>
                <p className="now-item-title">{item.title}</p>
                <p className="now-item-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}