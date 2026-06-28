"use client";

import { useState } from "react";

export default function CopyButton({ text, label = "Copy prompt" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      onClick={copy}
      className="group inline-flex items-center gap-2 bg-ink px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-paper transition-colors hover:bg-oxblood"
    >
      {copied ? "✓ Copied — paste into your AI" : label}
      {!copied && <span className="transition-transform group-hover:translate-x-1">→</span>}
    </button>
  );
}
