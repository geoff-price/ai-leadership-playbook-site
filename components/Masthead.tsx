import Link from "next/link";

export default function Masthead() {
  return (
    <header className="border-b border-rule">
      <div className="wrap flex items-center justify-between py-4">
        <Link href="/" className="group flex items-baseline gap-3">
          <span className="font-display text-[1.35rem] font-semibold tracking-tight text-ink">
            AI Leadership Playbook
          </span>
          <span className="hidden sm:inline eyebrow">No. 01</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/#playbook" className="font-mono text-xs uppercase tracking-[0.14em] text-ink-soft hover:text-oxblood">
            The Playbook
          </Link>
          <Link href="/#dispatch" className="font-mono text-xs uppercase tracking-[0.14em] text-ink-soft hover:text-oxblood">
            Dispatch
          </Link>
        </nav>
      </div>
    </header>
  );
}
