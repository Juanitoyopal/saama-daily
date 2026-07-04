import Link from "next/link";

export default function ClientePreferencialPage() {
  return (
    <section className="section-shell">
      <div className="max-w-3xl rounded-lg border border-ink/10 bg-white/80 p-7 shadow-soft">
        <p className="eyebrow">Cliente preferencial</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink text-balance">
          Asesoría personalizada
        </h1>
        <p className="mt-5 text-lg leading-8 text-ink/70">
          La experiencia de cliente preferencial ahora forma parte de nuestra
          asesoría personalizada.
        </p>
        <Link className="button-primary mt-8" href="/asesoria-personalizada">
          Ir a asesoría personalizada
        </Link>
      </div>
    </section>
  );
}
