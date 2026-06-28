import { repoUrl } from "@/lib/skills";
import EmailForm from "./EmailForm";

export default function Footer() {
  return (
    <footer id="newsletter" className="mt-auto border-t border-rule">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 className="display-lg mb-4 max-w-md">One new decision tool, most weeks.</h2>
          <p className="max-w-md text-ink-soft">
            A prompt drawn from a book worth your time, plus the thinking behind it.
          </p>
          <div className="mt-6 max-w-md">
            <EmailForm />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-8 md:items-end md:text-right">
          <a href={repoUrl} className="font-mono text-sm text-ink-soft link-underline hover:text-oxblood">
            GitHub
          </a>
          <p className="font-mono text-xs text-ink-faint">
            © {new Date().getFullYear()} AI Leadership Playbook
          </p>
        </div>
      </div>
    </footer>
  );
}
