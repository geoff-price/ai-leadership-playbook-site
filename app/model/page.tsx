import Link from "next/link";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";
import { stages } from "@/lib/model";
import { getIdea } from "@/lib/ideas";
import LoopDiagram from "@/components/LoopDiagram";

export const metadata = {
  title: "The operating model · Geoff Price",
  description:
    "The individual ideas read as one decision loop for AI leadership: frame the obstacle, choose the one move, locate where it binds, prove it's working.",
};

export default function ModelPage() {
  return (
    <>
      <Masthead />

      <article className="wrap pt-14 pb-16">
        <Link href="/" className="meta hover:text-accent">
          ← Back
        </Link>

        <header className="reveal mt-10" style={{ animationDelay: "60ms" }}>
          <p className="meta">The operating model</p>
          <h1 className="mt-3 text-[2rem] leading-tight md:text-[2.6rem]">
            Four questions, in order.
          </h1>
          <p className="mt-6 max-w-[58ch] text-[1.12rem] leading-relaxed text-soft">
            Each piece here takes one idea from one book. Read together, they are a single
            decision loop for AI leadership. Most programs jump straight to the last question,
            counting pilots and seats, and wonder why the dashboards stay green while nothing
            moves. AI is an operating-model problem, not a tool problem, and the order is the
            point.
          </p>
        </header>

        {/* The loop, as a picture */}
        <div className="reveal mt-14" style={{ animationDelay: "180ms" }}>
          <LoopDiagram />
        </div>

        {/* The loop, stage by stage */}
        <ol className="reveal mt-14 border-t border-line" style={{ animationDelay: "300ms" }}>
          {stages.map((stage) => {
            const idea = getIdea(stage.slug);
            const live = idea?.status === "live";

            const body = (
              <>
                <div>
                  <p className="meta">
                    {stage.no} · {stage.verb}
                  </p>
                  <h2 className="mt-2 text-[1.5rem] leading-tight transition-colors group-hover:text-accent">
                    {stage.question}
                  </h2>
                  <p className="mt-3 max-w-[60ch] text-soft">{stage.gist}</p>
                  <p className="meta mt-3">
                    {live && idea ? (
                      <>
                        {idea.title} · {idea.author}
                      </>
                    ) : (
                      <>Essay coming soon</>
                    )}
                  </p>
                </div>
                {live && (
                  <span
                    aria-hidden
                    className="meta translate-x-[-6px] pt-2 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    →
                  </span>
                )}
              </>
            );

            return (
              <li key={stage.no}>
                {live ? (
                  <Link
                    href={`/ideas/${stage.slug}`}
                    className="group grid grid-cols-[1fr_auto] items-start gap-4 border-b border-line py-7 transition-[padding] duration-300 hover:pl-2"
                  >
                    {body}
                  </Link>
                ) : (
                  <div className="grid grid-cols-[1fr_auto] items-start gap-4 border-b border-line py-7 opacity-55">
                    {body}
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        {/* The loop repeats */}
        <p
          className="reveal mt-12 max-w-[58ch] text-soft"
          style={{ animationDelay: "320ms" }}
        >
          Break the constraint and a new one takes its place, so the loop never really closes.
          Frame, choose, locate, prove, then start again on whatever now sets the pace. This is
          the spine, not the whole skeleton; more stages, on adoption and on the people the work
          is meant to develop, will join it.
        </p>
      </article>

      <Footer />
    </>
  );
}
