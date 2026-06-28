import { repoUrl } from "@/lib/skills";
import EmailForm from "./EmailForm";

export default function Footer() {
  return (
    <footer id="dispatch" className="mt-auto border-t border-rule">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="eyebrow mb-3">The Dispatch</p>
          <h2 className="display-lg mb-4 max-w-md">One durable idea, made usable. Most weeks.</h2>
          <p className="max-w-md text-ink-soft">
            A new decision tool drawn from a book worth reading — and the thinking behind it.
            No noise.
          </p>
          <div className="mt-6 max-w-md">
            <EmailForm />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-8 md:items-end md:text-right">
          <div>
            <p className="eyebrow mb-3">Elsewhere</p>
            <ul className="space-y-1.5 font-mono text-sm text-ink-soft">
              <li>
                <a href={repoUrl} className="link-underline hover:text-oxblood">
                  GitHub — the skills
                </a>
              </li>
            </ul>
          </div>
          <p className="font-mono text-xs text-ink-faint">
            © {new Date().getFullYear()} AI Leadership Playbook
          </p>
        </div>
      </div>
    </footer>
  );
}
