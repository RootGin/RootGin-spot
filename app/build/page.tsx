import type { Metadata } from "next";
import { BackLink, PageHeader } from "@/components/chrome";

export const metadata: Metadata = {
  title: "build",
  description: "Stuff I build, configure, and tinker with.",
};

export default function BuildPage() {
  return (
    <main className="page">
      <BackLink />

      <div className="build-header">
        <p className="build-header-label">~/build</p>
        <h1 className="build-title">
          things_i_build<span className="c-accent">()</span>
        </h1>
        <p className="build-desc">
          Stuff I build, configure, and tinker with. Dotfiles, widget shells, self-hosted services.
        </p>
      </div>

      <section className="build-project">
        <div className="project-head">
          <span className="project-num">01</span>
          <span className="project-name">NixOS dotfiles</span>
        </div>
        <p className="project-desc">
          The whole system in one flake — system, shell, editor, desktop. Rebuild to update, rebuild to roll
          back.
        </p>
        <a
          href="https://github.com/RootGin/dotfile/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-github"
        >
          github →
        </a>
      </section>

      <section className="build-project">
        <div className="project-head">
          <span className="project-num">02</span>
          <span className="project-name">Portfolio Website</span>
        </div>
        <p className="project-desc">This site. Terminal aesthetic, statically exported Next.js.</p>
        <a
          href="https://github.com/RootGin/RootGin-spot"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-github"
        >
          github →
        </a>
      </section>

      <section className="build-project">
        <div className="project-head">
          <span className="project-num">03</span>
          <span className="project-name">Phobos</span>
          <span className="btn-planned">wip</span>
        </div>
        <p className="project-desc">
          EWW widget shell for Niri. Bars, panels, launcher, powermenu, notification history. Forked from
          Phobos, ported off Sway IPC, re-themed on Nord.
        </p>
        <a
          href="https://github.com/RootGin/Phobos"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-github"
        >
          github →
        </a>
        <div className="project-detail">
          <div className="detail-item">
            <p className="detail-label">Widgets</p>
            <p className="detail-desc">
              Fifteen modules — topbar, bottom bar, tasklist, launcher, powermenu, history, OSD, system
              panels.
            </p>
          </div>
          <div className="detail-item">
            <p className="detail-label">Scripts layer</p>
            <p className="detail-desc">
              Widgets render only. Values come from Python and shell helpers — launcher, tasklist, workspace,
              network, notification log.
            </p>
          </div>
        </div>
      </section>

      <section className="build-project">
        <div className="project-head">
          <span className="project-num">04</span>
          <span className="project-name">Homelab</span>
        </div>
        <p className="project-desc">Podman-based homelab. Three services, all self-hosted.</p>
        <div className="project-detail">
          <div className="detail-item">
            <p className="detail-label">File Browser</p>
            <p className="detail-desc">Web-based file management running on port 8080.</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">Homepage</p>
            <p className="detail-desc">Personal dashboard and service launcher for the homelab.</p>
          </div>
          <div className="detail-item">
            <p className="detail-label">Vaultwarden</p>
            <p className="detail-desc">Self-hosted Bitwarden-compatible password manager.</p>
          </div>
        </div>
      </section>
    </main>
  );
}