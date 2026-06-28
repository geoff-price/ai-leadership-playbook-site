import Link from "next/link";

export default function Masthead() {
  return (
    <header className="border-b border-rule">
      <div className="wrap flex items-center justify-between py-4">
        <Link href="/" className="font-display text-[1.35rem] font-semibold tracking-tight text-ink">
          AI Leadership Playbook
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/#tools" className="font-mono text-xs uppercase tracking-[0.14em] text-ink-soft hover:text-oxblood">
            Tools
          </Link>
          <Link href="/#newsletter" className="font-mono text-xs uppercase tracking-[0.14em] text-ink-soft hover:text-oxblood">
            Newsletter
          </Link>
        </nav>
      </div>
    </header>
  );
}
