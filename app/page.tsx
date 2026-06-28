import Link from "next/link";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";
import { skills } from "@/lib/skills";

export default function Home() {
  return (
    <>
      <Masthead />

      {/* Hero — the thesis */}
      <section className="wrap pt-20 pb-16 md:pt-28 md:pb-24">
        <p className="eyebrow reveal" style={{ animationDelay: "0ms" }}>
          An operating-model dispatch · Est. 2026
        </p>
        <h1 className="display-xl mt-6 max-w-[14ch] reveal" style={{ animationDelay: "90ms" }}>
          AI is an <span className="text-oxblood">operating-model</span> problem, not a tool problem.
        </h1>
        <p className="lede mt-8 max-w-2xl reveal" style={{ animationDelay: "200ms" }}>
          Practical decision tools for the people who have to make AI real — drawn from books
          worth reading, one durable idea at a time.
        </p>
        <div className="mt-9 reveal" style={{ animationDelay: "300ms" }}>
          <Link href="#playbook" className="arrow-link">
            Read the plays <span className="arr">→</span>
          </Link>
        </div>
      </section>

      {/* Manifesto */}
      <section className="border-t border-rule bg-paper-deep/40">
        <div className="wrap grid gap-8 py-16 md:grid-cols-[0.4fr_1fr]">
          <p className="eyebrow md:pt-2">The Premise</p>
          <div className="max-w-2xl space-y-5 text-[1.12rem] leading-relaxed">
            <p className="dropcap">
              Ideas are cheap now. Models produce them by the thousand, and every AI roadmap
              carries the same five slogans. What’s scarce isn’t information — it’s judgment:
              knowing the signal from the noise, and what to actually do about it.
            </p>
            <p>
              The discipline of strategy, leadership, and systems thinking didn’t change when
              the technology arrived. So the plan here is simple: take one durable idea from a
              book that has earned its place, and turn it into a tool you can run on your own AI
              today — then go read the book.
            </p>
          </div>
        </div>
      </section>

      {/* The Playbook — index of plays */}
      <section id="playbook" className="wrap py-16 md:py-24">
        <div className="flex items-baseline justify-between border-b border-ink pb-4">
          <h2 className="display-lg">The Plays</h2>
          <span className="eyebrow">Updated weekly</span>
        </div>

        <ol>
          {skills.map((s) => (
            <li key={s.slug} className="group border-b border-rule">
              {s.status === "live" ? (
                <Link
                  href={`/skills/${s.slug}`}
                  className="grid items-start gap-4 py-9 md:grid-cols-[5rem_1fr_auto] md:gap-8"
                >
                  <span className="font-mono text-3xl text-ink-faint md:text-4xl">{s.no}</span>
                  <div className="max-w-2xl">
                    <h3 className="display-lg leading-none transition-colors group-hover:text-oxblood">
                      {s.title}
                    </h3>
                    <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
                      after {s.author}
                    </p>
                    <p className="mt-4 text-ink-soft">{s.oneLiner}</p>
                  </div>
                  <span className="arrow-link md:pt-3">
                    Open the play <span className="arr">→</span>
                  </span>
                </Link>
              ) : (
                <div className="grid items-start gap-4 py-9 opacity-45 md:grid-cols-[5rem_1fr_auto] md:gap-8">
                  <span className="font-mono text-3xl md:text-4xl">{s.no}</span>
                  <div className="max-w-2xl">
                    <h3 className="display-lg leading-none">{s.title}</h3>
                    <p className="mt-4 text-ink-soft">{s.oneLiner}</p>
                  </div>
                  <span className="eyebrow md:pt-3">In the queue</span>
                </div>
              )}
            </li>
          ))}

          {/* forthcoming teasers */}
          {[
            { no: "02", title: "Forthcoming", note: "The next durable idea is being drawn." },
            { no: "03", title: "Forthcoming", note: "Subscribe to get it first." },
          ].map((t) => (
            <li key={t.no} className="grid items-start gap-4 border-b border-rule py-9 opacity-40 md:grid-cols-[5rem_1fr_auto] md:gap-8">
              <span className="font-mono text-3xl md:text-4xl">{t.no}</span>
              <div className="max-w-2xl">
                <h3 className="display-lg leading-none">{t.title}</h3>
                <p className="mt-4 text-ink-soft">{t.note}</p>
              </div>
              <span className="eyebrow md:pt-3">Soon</span>
            </li>
          ))}
        </ol>
      </section>

      <Footer />
    </>
  );
}
