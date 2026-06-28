import Link from "next/link";
import { notFound } from "next/navigation";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";
import CopyButton from "@/components/CopyButton";
import { getSkill, skills } from "@/lib/skills";

export function generateStaticParams() {
  return skills.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSkill(slug);
  return { title: s ? `${s.title} — Geoff Price` : "Geoff Price — AI leadership" };
}

export default async function SkillPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSkill(slug);
  if (!s) notFound();

  return (
    <>
      <Masthead />

      <article className="wrap pt-14 pb-16">
        <Link href="/" className="meta hover:text-accent">
          ← Back
        </Link>

        <header className="mt-10">
          <h1 className="text-[2rem] leading-tight md:text-[2.6rem]">{s.title}</h1>
          <p className="meta mt-2">
            {s.author} · {s.book}
          </p>
        </header>

        {/* The essay — the writing itself (canonical home; syndicated to LinkedIn) */}
        <div className="mt-10 space-y-5 text-[1.12rem] leading-relaxed">
          {s.essay.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Apply it */}
        <section className="mt-14 border-t border-line pt-10">
          <h2 className="meta mb-4">Apply it</h2>
          <p className="mb-6 max-w-[58ch] text-soft">
            Copy it into ChatGPT, Claude, or Copilot and answer its questions — it interviews
            you about a real decision and hands back a one-page answer for your situation.
            It’ll ask you a few things first; that’s how it gets built around your situation.
            It runs on your AI, not mine.
          </p>

          <div className="mb-5 max-h-72 overflow-auto border border-line bg-black/20 p-5 font-mono text-[0.78rem] leading-relaxed text-soft whitespace-pre-wrap">
            {s.prompt}
          </div>

          <CopyButton text={s.prompt} />

          <p className="meta mt-5">
            Use Claude with{" "}
            <a
              href="https://support.claude.com/en/articles/12512180-use-skills-in-claude"
              className="hover:text-accent"
            >
              Skills
            </a>
            ?{" "}
            <a href={s.repoUrl} className="hover:text-accent">
              Install the full skill →
            </a>
          </p>

          <p className="mt-10 text-soft">
            This is one idea from the book. If it’s useful,{" "}
            <a href={s.bookUrl} className="link">
              read the rest
            </a>
            .
          </p>
        </section>
      </article>

      <Footer />
    </>
  );
}
