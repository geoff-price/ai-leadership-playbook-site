import { repoUrl } from "@/lib/skills";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="wrap flex flex-wrap items-center justify-between gap-3 border-t border-line py-8">
        <div className="flex items-center gap-5">
          <a href="mailto:geoff@guthrieblackwell.com" className="meta hover:text-accent">
            geoff@guthrieblackwell.com
          </a>
          <a href={repoUrl} className="meta hover:text-accent">
            GitHub
          </a>
        </div>
        <span className="meta">© {new Date().getFullYear()} Geoff Price</span>
      </div>
    </footer>
  );
}
