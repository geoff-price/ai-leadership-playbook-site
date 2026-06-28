import Link from "next/link";
import Masthead from "@/components/Masthead";
import Footer from "@/components/Footer";
import { skills } from "@/lib/skills";

export default function Home() {
  const live = skills.filter((s) => s.status === "live");

  return (
    <>
      <Masthead />

      {/* Intro — plain, first person, no pitch */}
      <section className="wrap pt-16 pb-14 md:pt-24">
        <p className="reveal max-w-[34ch] text-2xl leading-snug md:text-[1.9rem]" style={{ animationDelay: "60ms" }}>
          Twenty years of reading on strategy and leadership, kept to the ideas that still
          hold up.
        </p>
        <p className="reveal mt-6 max-w-[52ch] text-soft" style={{ animationDelay: "160ms" }}>
          For each one, a short prompt you can run on your own AI to put the idea to work on
          something you’re actually deciding. Take what’s useful.
        </p>
      </section>

      {/* The ideas */}
      <section className="wrap pb-20">
        <ol className="border-t border-line">
          {live.map((s) => (
            <li key={s.slug}>
              <Link href={`/skills/${s.slug}`} className="group block border-b border-line py-7">
                <h2 className="text-[1.5rem] leading-tight transition-colors group-hover:text-accent">
                  {s.title}
                </h2>
                <p className="meta mt-1.5">{s.author}</p>
                <p className="mt-3 max-w-[60ch] text-soft">{s.oneLiner}</p>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <Footer />
    </>
  );
}
