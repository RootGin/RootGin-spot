"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Staggered scroll-in reveal, ported from littlelink's IntersectionObserver in main.js. */
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
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.07 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      className="explore-card"
      style={{
        opacity: 0,
        transform: "translateY(10px)",
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