"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LEFT = [
  { href: "/now/", label: "now" },
  { href: "/misc/", label: "misc" },
];
const RIGHT = [{ href: "/build/", label: "build" }];

export function Nav() {
  const pathname = usePathname();

  return (
    <header>
      <nav>
        <div className="nav-left">
          <Link className="nav-logo" href="/">
            Gin
          </Link>
          <ul className="nav-left-links">
            {LEFT.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={pathname.startsWith(href) ? "nav-active" : undefined}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-center" />
        <ul className="nav-right">
          {RIGHT.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={pathname.startsWith(href) ? "nav-active" : undefined}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}