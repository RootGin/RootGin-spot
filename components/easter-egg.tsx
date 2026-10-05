"use client";

import { useState } from "react";

export function EasterEgg() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <p className="hero-prompt" onClick={() => setOpen(true)}>
        <span>~/home</span> $ whoami
      </p>
      <div className={`egg-overlay${open ? "" : " hidden"}`} onClick={() => setOpen(false)}>
        <pre>
          {`╭──────────────────────────────────────╮
│                                      │
│  Hey Jay...                          │
│  You are fat.                        │
│                                      │
│  — rootgin                           │
╰──────────────────────────────────────╯`}
        </pre>
      </div>
    </>
  );
}