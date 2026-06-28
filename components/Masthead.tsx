import Link from "next/link";

export default function Masthead() {
  return (
    <header className="wrap pt-10">
      <Link href="/" className="text-[1.05rem] font-medium text-text transition-colors hover:text-accent">
        Geoff Price
      </Link>
    </header>
  );
}
