import Link from "next/link";
import { EasterEgg } from "@/components/ui/easter-egg";

const TICKER = [
  { label: "nixos", href: "https://nixos.org" },
  { label: "niri", href: "https://github.com/Yaahc/niri" },
  { label: "neovim", href: "https://github.com/neovim/neovim" },
  { label: "wayland", href: "https://wayland.freedesktop.org" },
  { label: "eww", href: "https://github.com/elkowar/eww" },
  { label: "podman", href: "https://github.com/containers/podman" },
  { label: "self-hosted", href: "https://en.wikipedia.org/wiki/Self-hosting" },
  { label: "tea", href: "https://en.wikipedia.org/wiki/Tea" },
];

export function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-grid" />
      <div className="hero-content">
        <p className="hero-eyebrow">rootgin / portfolio</p>
        <EasterEgg />
        <h1 className="hero-name">
          Gin<span className="c-cursor" />
        </h1>
        <p className="hero-sub">
          <span className="hero-serif">Just someone who likes building things for the web.</span> Terminal
          enthusiast, tea addict, occasional rabbit-hole explorer.
        </p>
        <div className="hero-ctas">
          <Link href="/projects/" className="btn-primary">
            ./projects
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
  );
}

export function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-half" key={copy} aria-hidden={copy === 1}>
            {TICKER.map(({ label, href }) => (
              <a
                className="marquee-item"
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={copy === 1 ? -1 : undefined}
              >
                {label}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
