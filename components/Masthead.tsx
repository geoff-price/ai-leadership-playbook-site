import Link from "next/link";

export default function Masthead() {
  return (
    <header className="wrap pt-10">
      <Link href="/" className="group inline-flex items-baseline gap-3">
        <span className="text-[1.05rem] font-medium text-text transition-colors group-hover:text-accent">
          Geoff Price
        </span>
        <span className="meta">AI leadership</span>
      </Link>
    </header>
  );
}
