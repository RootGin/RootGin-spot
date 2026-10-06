"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/** Extra right-hand status shown per page, matching the original littlelink pages. */
const NOTES: Record<string, string> = {
  "/build/": "4 projects",
  "/uses/": "4 sections",
};

export function Statusbar() {
  const pathname = usePathname();
  const file = pathname === "/" ? "index.html" : `${pathname.replace(/^\/|\/$/g, "")}/index.html`;
  const note = NOTES[pathname];
  const line = useScrollLine(pathname === "/");

  return (
    <div className="statusbar">
      <span dangerouslySetInnerHTML={{ __html: `NORMAL &nbsp;|&nbsp; ${file}` }} />
      <div className="statusbar-right">
        <span>UTF-8</span>
        <span>LF</span>
        <span>HTML</span>
        {note ?? (line !== null && <span>{line}</span>)}
      </div>
    </div>
  );
}

/** Scroll-driven fake line counter: `ln N, col 1`. Home page only. */
function useScrollLine(enabled: boolean) {
  const [line, setLine] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setLine(`ln ${Math.round((max > 0 ? window.scrollY / max : 0) * 400)}, col 1`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [enabled]);

  return line;
}