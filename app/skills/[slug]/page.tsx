import Link from "next/link";
import { notFound } from "next/navigation";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";
import CopyButton from "@/components/CopyButton";
import EmailForm from "@/components/EmailForm";
import { getSkill, skills } from "@/lib/skills";

export function generateStaticParams() {
  return skills.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSkill(slug);
  return { title: s ? `${s.title} — AI Leadership Playbook` : "AI Leadership Playbook" };
}

export default async function SkillPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSkill(slug);
  if (!s) notFound();

  return (
    <>
      <Masthead />

      <article className="wrap py-14 md:py-20">
        <Link href="/#playbook" className="arrow-link mb-10 inline-flex" style={{ color: "var(--ink-faint)" }}>
          ← The Plays
        </Link>

        {/* Header */}
        <header className="grid gap-3 border-b border-ink pb-8 md:grid-cols-[5rem_1fr] md:gap-8">
          <span className="font-mono text-4xl text-ink-faint">{s.no}</span>
          <div>
            <h1 className="display-xl" style={{ fontSize: "clamp(2.4rem,5.5vw,4.4rem)" }}>
              {s.title}
            </h1>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-ink-faint">
              after {s.author} · {s.book}
            </p>
          </div>
        </header>

        {/* Two-column: summary + actions */}
        <div className="grid gap-12 py-12 md:grid-cols-[1fr_0.85fr] md:gap-16">
          <div>
            <p className="eyebrow mb-5">The Idea</p>
            <div className="space-y-5 text-[1.12rem] leading-relaxed">
              {s.summary.map((p, i) => (
                <p key={i} className={i === 0 ? "dropcap" : undefined}>
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Run it */}
          <aside className="md:border-l md:border-rule md:pl-12">
            <p className="eyebrow mb-5">Run it on your own AI</p>
            <p className="mb-6 text-ink-soft">
              Copy the prompt into ChatGPT, Claude, or Copilot. It interviews you about a real
              decision and returns a one-pager built on your situation. Free — it runs on your
              AI, not ours.
            </p>

            <div className="mb-6 max-h-72 overflow-auto border border-rule bg-paper-deep/50 p-5 font-mono text-[0.78rem] leading-relaxed text-ink-soft whitespace-pre-wrap">
              {s.prompt}
            </div>

            <div className="flex flex-wrap gap-3">
              <CopyButton text={s.prompt} />
              <a
                href={s.repoUrl}
                className="inline-flex items-center gap-2 border border-ink px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                Get the Claude skill →
              </a>
            </div>

            <p className="mt-8 border-t border-rule pt-6 text-ink-soft">
              This is one idea from a book full of them.{" "}
              <a href={s.bookUrl} className="link-underline text-ink">
                Read {s.book}
              </a>
              .
            </p>
          </aside>
        </div>

        {/* inline subscribe */}
        <div className="rule-double pt-10">
          <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <p className="eyebrow mb-2">Get the next play</p>
              <p className="display-lg" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>
                One durable idea, made usable.
              </p>
            </div>
            <EmailForm />
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
