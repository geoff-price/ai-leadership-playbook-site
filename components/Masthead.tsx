import Link from "next/link";

export default function Masthead() {
  return (
    <header className="wrap pt-10">
      <Link href="/" className="meta hover:text-accent">
        AI Leadership Playbook
      </Link>
    </header>
  );
}
