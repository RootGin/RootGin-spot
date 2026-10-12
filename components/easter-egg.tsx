"use client";

import { useState } from "react";

export function EasterEgg() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className="hero-prompt" onClick={() => setOpen(true)}>
        ~/home $ whoami
      </button>
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