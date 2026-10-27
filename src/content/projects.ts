export type ProjectDetail = {
  label: string;
  desc: string;
};

export type Project = {
  slug: string;
  num: string;
  name: string;
  desc: string;
  href?: string;
  wip?: boolean;
  details?: ProjectDetail[];
};

export const projects: Project[] = [
  {
    slug: "nixos-dotfiles",
    num: "01",
    name: "NixOS dotfiles",
    desc: "The whole system in one flake — system, shell, editor, desktop. Rebuild to update, rebuild to roll back.",
    href: "https://github.com/RootGin/dotfile/tree/main",
  },
  {
    slug: "portfolio",
    num: "02",
    name: "Portfolio Website",
    desc: "This site. Brutalist dark, statically exported Next.js.",
    href: "https://github.com/RootGin/RootGin-spot",
  },
  {
    slug: "phobos",
    num: "03",
    name: "Phobos",
    desc: "EWW widget shell for Niri. Bars, panels, launcher, powermenu, notification history. Forked from Phobos, ported off Sway IPC, re-themed on Nord.",
    href: "https://github.com/RootGin/Phobos",
    wip: true,
    details: [
      {
        label: "Widgets",
        desc: "Fifteen modules — topbar, bottom bar, tasklist, launcher, powermenu, history, OSD, system panels.",
      },
      {
        label: "Scripts layer",
        desc: "Widgets render only. Values come from Python and shell helpers — launcher, tasklist, workspace, network, notification log.",
      },
    ],
  },
  {
    slug: "homelab",
    num: "04",
    name: "Homelab",
    desc: "Podman-based homelab. Three services, all self-hosted.",
    details: [
      {
        label: "File Browser",
        desc: "Web-based file management running on port 8080.",
      },
      {
        label: "Homepage",
        desc: "Personal dashboard and service launcher for the homelab.",
      },
      {
        label: "Vaultwarden",
        desc: "Self-hosted Bitwarden-compatible password manager.",
      },
    ],
  },
];

export type IconKey = "terminal" | "clock" | "screen";

export const EXPLORE_CARDS: readonly { num: string; title: string; desc: string; href: string; icon: IconKey }[] = [
  {
    num: "01",
    title: "projects",
    desc: "Stuff I build — dotfiles, projects, configs, and experiments.",
    href: "/projects/",
    icon: "terminal",
  },
  {
    num: "02",
    title: "now",
    desc: "What I'm currently learning, reading, and building.",
    href: "/now/",
    icon: "clock",
  },
  {
    num: "03",
    title: "uses",
    desc: "Hardware, distro, editor, and the tools I run it with.",
    href: "/uses/",
    icon: "screen",
  },
];
