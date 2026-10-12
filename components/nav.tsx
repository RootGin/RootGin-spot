"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

const LEFT = [
  { href: "/now/", label: "now" },
  { href: "/uses/", label: "uses" },
  { href: "/build/", label: "build" },
];

const CTA = { href: "/#links", label: "say hi" };

export function Nav() {
  const pathname = usePathname();

  return (
    <header>
      <nav>
        <Link className="nav-logo" href="/">
          <img src="/icon.svg" alt="Gin" width={28} height={28} />
        </Link>
        <ul className="nav-links">
          {LEFT.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>
                <span className={pathname.startsWith(href) ? "nav-active" : undefined}>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
        <a className="nav-cta" href={CTA.href}>
          {CTA.label}
        </a>
      </nav>
    </header>
  );
}