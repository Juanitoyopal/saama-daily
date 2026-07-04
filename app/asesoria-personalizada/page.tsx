import { PersonalizedAdviceForm } from "@/components/PersonalizedAdviceForm";

export default function AsesoriaPersonalizadaPage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-white/50">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="eyebrow">Asesoría personalizada</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink text-balance sm:text-5xl">
              Recibe orientación para elegir tus productos
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/70">
              Cuéntanos qué productos te interesan, en qué país te encuentras y
              qué tipo de acompañamiento necesitas. Saama Daily organizará tu
              solicitud para brindarte una orientación clara antes de comprar o
              afiliarte.
            </p>
          </div>
          <div className="rounded-lg border border-ink/10 bg-linen/80 p-7 shadow-soft">
            <p className="eyebrow">Privacidad</p>
            <p className="mt-4 text-sm leading-7 text-ink/70">
              Usaremos la información suministrada únicamente para responder tu
              solicitud de orientación. No solicitamos datos médicos ni
              información sensible de salud.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <PersonalizedAdviceForm />
      </section>
    </>
  );
}
