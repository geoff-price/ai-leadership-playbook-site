import Link from "next/link";
import { notFound } from "next/navigation";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";
import CopyButton from "@/components/CopyButton";
import { getIdea, ideas } from "@/lib/ideas";

export function generateStaticParams() {
  return ideas.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = getIdea(slug);
  return { title: i ? `${i.title} — Geoff Price` : "Geoff Price — AI leadership" };
}

export default async function IdeaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idea = getIdea(slug);
  if (!idea) notFound();

  return (
    <>
      <Masthead />

      <article className="wrap pt-14 pb-16">
        <Link href="/" className="meta hover:text-accent">
          ← Back
        </Link>

        <header className="mt-10">
          <h1 className="text-[2rem] leading-tight md:text-[2.6rem]">{idea.title}</h1>
          <p className="mt-2 text-[1.05rem] italic text-soft">{idea.subtitle}</p>
          <p className="meta mt-2">
            {idea.author} · {idea.year}
          </p>
        </header>

        {/* The essay — the writing itself (canonical home; syndicated to LinkedIn) */}
        <div className="mt-10 space-y-5 text-[1.12rem] leading-relaxed">
          {idea.essay.map((p, n) => (
            <p key={n}>{p}</p>
          ))}
        </div>

        {/* Apply it */}
        <section className="mt-14 border-t border-line pt-10">
          <h2 className="meta mb-4">Apply it</h2>
          <p className="mb-6 max-w-[60ch] text-[1.05rem]">
            <span className="text-soft">Reach for it when</span> {idea.reachWhen}.{" "}
            <span className="text-soft">Paste the prompt into ChatGPT, Claude, or Copilot —
            it asks you a few sharp questions, then tells you whether you’ve actually got a
            strategy and names what you’re dodging. Runs on your AI, not mine.</span>
          </p>

          <div className="mb-5 max-h-72 overflow-auto border border-line bg-black/20 p-5 font-mono text-[0.78rem] leading-relaxed text-soft whitespace-pre-wrap">
            {idea.prompt}
          </div>

          <CopyButton text={idea.prompt} />

          <p className="meta mt-5">
            <a href={idea.repoUrl} className="hover:text-accent">
              View this prompt on GitHub →
            </a>
          </p>

          <p className="mt-10 text-soft">
            This is one idea from the book. If it’s useful,{" "}
            <a href={idea.bookUrl} className="link">
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
