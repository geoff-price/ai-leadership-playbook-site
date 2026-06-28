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
      className="meta border border-line px-4 py-2.5 text-text transition-colors hover:border-accent hover:text-accent"
    >
      {copied ? "✓ Copied" : label}
    </button>
  );
}
