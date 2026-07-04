import Link from "next/link";

export default function EmprendePage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-ink text-linen">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Emprende con nosotros</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-balance">
              Información clara para explorar una actividad comercial independiente.
            </h1>
            <p className="mt-5 text-lg leading-8 text-linen/72">
              Conoce cómo funciona la oportunidad, qué responsabilidades implica y cómo
              recibir acompañamiento profesional sin promesas irreales.
            </p>
            <Link className="button-secondary mt-8 border-linen/20 bg-linen/10 text-linen hover:bg-linen/15" href="/soporte">
              Solicitar información
            </Link>
          </div>
          <div className="h-80 rounded-lg bg-gradient-to-br from-gold via-coffee to-olive shadow-soft" />
        </div>
      </section>
      <section className="section-shell grid gap-5 md:grid-cols-3">
        {["Claridad", "Acompañamiento", "Construcción responsable"].map((item) => (
          <article className="rounded-lg border border-ink/10 bg-white/72 p-6 shadow-soft" key={item}>
            <h2 className="text-xl font-semibold text-ink">{item}</h2>
            <p className="mt-3 text-sm leading-6 text-ink/68">
              Un enfoque sobrio, educativo y profesional para entender la venta
              independiente y decidir con información suficiente.
            </p>
          </article>
        ))}
      </section>
    </>
  );
}
