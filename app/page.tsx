import Link from "next/link";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";
import { skills } from "@/lib/skills";

export default function Home() {
  const live = skills.filter((s) => s.status === "live");

  return (
    <>
      <Masthead />

      {/* Hero */}
      <section className="wrap pt-20 pb-16 md:pt-28 md:pb-20">
        <h1 className="display-xl max-w-[15ch] reveal" style={{ animationDelay: "60ms" }}>
          AI is an <span className="text-oxblood">operating-model</span> problem, not a tool problem.
        </h1>
        <p className="lede mt-8 max-w-2xl reveal" style={{ animationDelay: "170ms" }}>
          Each tool here runs on your own AI — ChatGPT, Claude, or Copilot. It asks about a
          real decision and hands back a one-page answer built on your situation.
        </p>
        <div className="mt-9 reveal" style={{ animationDelay: "260ms" }}>
          <Link href="#tools" className="arrow-link">
            See the tools <span className="arr">→</span>
          </Link>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="wrap pb-20 md:pb-28">
        <div className="border-b border-ink pb-4">
          <h2 className="display-lg">Tools</h2>
        </div>

        <ol>
          {live.map((s) => (
            <li key={s.slug} className="group border-b border-rule">
              <Link
                href={`/skills/${s.slug}`}
                className="grid items-start gap-4 py-9 md:grid-cols-[4rem_1fr_auto] md:gap-8"
              >
                <span className="font-mono text-2xl text-ink-faint md:text-3xl">{s.no}</span>
                <div className="max-w-2xl">
                  <h3 className="display-lg leading-none transition-colors group-hover:text-oxblood">
                    {s.title}
                  </h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
                    {s.author}
                  </p>
                  <p className="mt-4 text-ink-soft">{s.oneLiner}</p>
                </div>
                <span className="arrow-link md:pt-3">
                  Open <span className="arr">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-ink-soft">
          More coming.{" "}
          <Link href="#newsletter" className="link-underline text-ink">
            Subscribe to get the next one.
          </Link>
        </p>
      </section>

      <Footer />
    </>
  );
}
