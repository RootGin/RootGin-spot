"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/hooks";

export function ExploreCard({
  num,
  title,
  desc,
  href,
  icon,
  delay = 0,
}: {
  num: string;
  title: string;
  desc: string;
  href: string;
  icon: ReactNode;
  delay?: number;
}) {
  const { ref, revealed } = useReveal<HTMLAnchorElement>();

  return (
    <a
      ref={ref}
      href={href}
      className="explore-card"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(10px)",
        transition: `opacity 0.4s ${delay}s ease, transform 0.4s ${delay}s ease`,
      }}
    >
      <div className="explore-card-top">
        <span className="explore-num">{num}</span>
        {icon}
      </div>
      <p className="explore-title">
        {title}
        <span className="c-accent">/</span>
      </p>
      <p className="explore-desc">{desc}</p>
      <span className="explore-link">cd ./{title} →</span>
    </a>
  );
}
