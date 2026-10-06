import type { Metadata } from "next";
import { BackLink } from "@/components/chrome";

export const metadata: Metadata = {
  title: "uses",
  description: "Hardware, distro, editor, and tools.",
};

const SECTIONS = [
  {
    head: "hardware",
    items: [
      {
        label: "Lenovo LOQ 15ARP10E",
        desc: "Daily machine.",
      },
      {
        label: "AMD Ryzen 5 7535HS",
        desc: "8 cores / 16 threads, Radeon 610M integrated.",
      },
      {
        label: "16 GB DDR5",
        desc: "zram for the swap side.",
      },
      {
        label: "512 GB Micron NVMe",
        desc: "System disk.",
      },
    ],
  },
  {
    head: "distro",
    items: [
      {
        label: "NixOS unstable",
        desc: "Packages, services, desktop, editor — all declared in one flake. Nothing installed by hand.",
      },
      {
        label: "Niri",
        desc: "Scrollable-tiling Wayland compositor. Waybar for bars, Kitty for terminals, Stylix for color.",
      },
    ],
  },
  {
    head: "editor",
    items: [
      {
        label: "Neovim",
        desc: "Configured through NVF as a declarative module. Two-space indents, relative line numbers.",
      },
      {
        label: "VS Code",
        desc: "For GUI work, mostly Java. Nord theme.",
      },
    ],
  },
  {
    head: "tools",
    items: [
      {
        label: "Fish",
        desc: "Default shell — tide, fzf, autopair, zoxide, direnv hook.",
      },
      {
        label: "Zsh",
        desc: "Alternative shell, powerlevel10k.",
      },
      {
        label: "Kitty",
        desc: "Terminal. Block cursor, no blink, half-transparent.",
      },
      {
        label: "direnv",
        desc: "With nix-direnv. Entering a directory loads its dev shell.",
      },
      {
        label: "devenv",
        desc: "Reproducible dev environments from a devenv.nix.",
      },
      {
        label: "eza, bat, btop, fzf",
        desc: "ls, cat, top, find.",
      },
      {
        label: "Zen",
        desc: "Daily browser. Firefox and Chromium as fallbacks.",
      },
      {
        label: "Obsidian, Zathura, Kdenlive",
        desc: "Notes, PDF, video.",
      },
    ],
  },
];

export default function UsesPage() {
  return (
    <main className="page">
      <BackLink />

      <div className="build-header">
        <p className="build-header-label">~/uses</p>
        <h1 className="build-title">
          things_i_use<span className="c-accent">()</span>
        </h1>
        <p className="build-desc">
          Hardware I run on and software I run it with. Everything except the laptop is declared in my NixOS
          flake.
        </p>
      </div>

      {SECTIONS.map(({ head, items }) => (
        <section className="now-section" key={head}>
          <h2 className="now-section-head">{head}</h2>
          <div className="project-detail">
            {items.map((item) => (
              <div className="detail-item" key={item.label}>
                <p className="detail-label">{item.label}</p>
                <p className="detail-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
