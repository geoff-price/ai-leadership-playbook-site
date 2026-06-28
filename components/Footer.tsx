import { repoUrl } from "@/lib/skills";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="wrap flex items-center justify-between border-t border-line py-8">
        <a href={repoUrl} className="meta hover:text-accent">
          GitHub
        </a>
        <span className="meta">© {new Date().getFullYear()} Geoff Price</span>
      </div>
    </footer>
  );
}
