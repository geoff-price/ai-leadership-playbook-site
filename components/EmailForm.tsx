"use client";

import { useState } from "react";

export default function EmailForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <p className="font-mono text-sm text-oxblood">
        ✓ You’re on the list. Watch for the next dispatch.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="flex-1 border-b border-ink/40 bg-transparent px-1 py-2.5 font-mono text-sm text-ink placeholder:text-ink-faint focus:border-oxblood focus:outline-none"
      />
      <button
        type="submit"
        disabled={state === "loading"}
        className="group inline-flex items-center justify-center gap-2 border border-ink px-5 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-ink transition-colors hover:bg-ink hover:text-paper disabled:opacity-50"
      >
        {state === "loading" ? "Sending…" : "Subscribe"}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </button>
      {state === "error" && (
        <span className="font-mono text-xs text-oxblood sm:self-center">Try again.</span>
      )}
    </form>
  );
}
