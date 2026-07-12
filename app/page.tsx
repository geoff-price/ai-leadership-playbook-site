import Link from "next/link";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";
import { ideas } from "@/lib/ideas";

export default function Home() {
  const live = ideas.filter((i) => i.status === "live");
  const upNext = ideas.filter((i) => i.status === "forthcoming");

  return (
    <>
      <Masthead />

      {/* Intro: a quote, then a plain personal line */}
      <section className="wrap pt-16 pb-14 md:pt-24">
        <blockquote className="reveal max-w-[30ch]" style={{ animationDelay: "60ms" }}>
          <span className="mb-7 block h-px w-9 bg-accent" aria-hidden />
          <p className="text-2xl leading-snug md:text-[1.9rem]">
            “The farther backward you can look, the farther forward you are likely to see.”
          </p>
          <cite className="meta mt-4 block not-italic">Winston Churchill</cite>
        </blockquote>
        <p className="reveal mt-10 max-w-[54ch] text-soft" style={{ animationDelay: "160ms" }}>
          Simple insights from books I’ve read over the years, brought to bear on AI
          leadership. Part of it is just for me, a way to keep some coherence as the noise
          gets louder. Take what’s useful.
        </p>
      </section>

      {/* The ideas */}
      <section className="wrap pb-20">
        <ol className="reveal border-t border-line" style={{ animationDelay: "260ms" }}>
          {live.map((i) => (
            <li key={i.slug}>
              <Link
                href={`/ideas/${i.slug}`}
                className="group grid grid-cols-[1fr_auto] items-start gap-4 border-b border-line py-7 transition-[padding] duration-300 hover:pl-2"
              >
                <div>
                  <h2 className="text-[1.5rem] leading-tight transition-colors group-hover:text-accent">
                    {i.title}
                  </h2>
                  <p className="meta mt-1.5">{i.author} · {i.year}</p>
                  <p className="mt-3 max-w-[60ch] text-soft">{i.oneLiner}</p>
                </div>
                <span
                  aria-hidden
                  className="meta translate-x-[-6px] pt-2 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
          {upNext.map((i) => (
            <li
              key={i.slug}
              className="grid grid-cols-[1fr_auto] items-start gap-4 border-b border-line py-7 opacity-55"
            >
              <div>
                <h2 className="text-[1.5rem] leading-tight">{i.title}</h2>
                <p className="meta mt-1.5">
                  {i.author} · {i.year}
                </p>
              </div>
              <span className="meta pt-2">Up next</span>
            </li>
          ))}
        </ol>
      </section>

      <Footer />
    </>
  );
}
