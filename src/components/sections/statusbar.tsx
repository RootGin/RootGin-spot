"use client";

import { usePathname } from "next/navigation";

const NOTES: Record<string, string> = {
  "/projects/": "4 projects",
  "/uses/": "4 sections",
};

export function Statusbar() {
  const pathname = usePathname();
  const file = pathname === "/" ? "index.html" : `${pathname.replace(/^\/|\/$/g, "")}/index.html`;
  const note = NOTES[pathname];

  return (
    <div className="statusbar">
      <span>
        NORMAL &nbsp;|&nbsp; {file}
      </span>
      <div className="statusbar-right">
        <span>UTF-8</span>
        <span>LF</span>
        <span>HTML</span>
        {note && <span>{note}</span>}
      </div>
    </div>
  );
}