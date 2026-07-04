import Link from "next/link";
import { learningTopics } from "@/data/learningTopics";

export default function AprendePage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-white/50">
        <div className="section-shell">
          <p className="eyebrow">Aprende</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-ink text-balance sm:text-5xl">
            Conocimiento sencillo para una rutina más consciente.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
            Explora ingredientes, hábitos y respuestas frecuentes con información introductoria,
            clara y responsable para tu vida diaria.
          </p>
        </div>
      </section>
      <section className="section-shell">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {learningTopics.map((topic, index) => (
            <article className="flex min-h-[300px] flex-col rounded-lg border border-ink/10 bg-white/72 p-6 shadow-soft" key={topic.title}>
              <div className="mb-8 flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-linen text-sm font-semibold text-olive-dark">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-coffee">Guía</span>
              </div>
              <h2 className="text-xl font-semibold text-ink">{topic.title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/68">{topic.description}</p>
              <Link className="mt-auto inline-flex pt-8 text-sm font-semibold text-olive-dark" href="/soporte">
                Consultar este tema →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
