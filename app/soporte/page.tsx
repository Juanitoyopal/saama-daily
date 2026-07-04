import Link from "next/link";

export default function SoportePage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-white/50">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Soporte</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-ink text-balance">
              Acompañamiento personalizado antes y después de comprar.
            </h1>
            <p className="mt-5 text-lg leading-8 text-ink/70">
              Resuelve dudas sobre país, disponibilidad, pagos, entrega, productos,
              asesoría personalizada o emprendimiento.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="button-primary" href="/colombia">Soporte Colombia</Link>
              <Link className="button-secondary" href="/usa">Support United States</Link>
              <Link className="button-secondary" href="/asesoria-personalizada">
                Asesoría personalizada
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-ink/10 bg-linen/85 p-8 shadow-soft">
            <p className="eyebrow">Canales</p>
            <div className="mt-6 grid gap-5">
              <div>
                <h2 className="font-semibold text-ink">WhatsApp</h2>
                <p className="mt-2 text-sm leading-6 text-ink/70">
                  Canal principal para orientación rápida y compra asistida.
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-ink">Acompañamiento por país</h2>
                <p className="mt-2 text-sm leading-6 text-ink/70">
                  Información separada para Colombia y Estados Unidos.
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-ink">Guía de rutina</h2>
                <p className="mt-2 text-sm leading-6 text-ink/70">
                  Recomendación inicial según hábitos, preferencias y disponibilidad.
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-ink">Asesoría personalizada</h2>
                <p className="mt-2 text-sm leading-6 text-ink/70">
                  Formulario organizado para solicitar orientación antes de comprar,
                  afiliarte o emprender.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
