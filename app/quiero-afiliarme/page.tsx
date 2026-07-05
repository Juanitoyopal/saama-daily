import Link from "next/link";
import { AffiliateWhatsappCTA } from "@/components/AffiliateWhatsappCTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const clientPriceItems = [
  "Compra directa en el canal oficial.",
  "No requiere afiliación.",
  "Acceso normal al catálogo.",
  "Compra en micrositio oficial."
];

const affiliatePriceItems = [
  "Requiere afiliación.",
  "Permite acceder a un precio más económico.",
  "Puede ser una puerta de entrada para conocer la oportunidad comercial.",
  "Requiere orientación personalizada antes de tomar la decisión."
];

const benefits = [
  "Acceso a precio afiliado.",
  "Posibilidad de comprar productos con mejor precio.",
  "Acompañamiento de Saama Daily.",
  "Aprendizaje sobre productos y rutinas.",
  "Posibilidad de convertirse en distribuidor autorizado de Gano Excel.",
  "Acceso a información sobre el plan de compensación."
];

const steps = [
  "Revisa el precio afiliado y los beneficios.",
  "Conoce la oportunidad de distribución autorizada.",
  "Solicita acompañamiento personalizado por WhatsApp."
];

export default function QuieroAfiliarmePage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-white/50">
        <div className="section-shell">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Emprende", href: "/emprende" },
              { label: "Afiliación" }
            ]}
          />
          <p className="eyebrow">Precio afiliado</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-ink text-balance sm:text-5xl">
            Accede al precio afiliado y conoce la oportunidad de distribuir Gano Excel
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/70">
            Afiliarte te permite acceder a un precio más económico en productos
            seleccionados y conocer la posibilidad de convertirte en distribuidor
            autorizado de Gano Excel, con acompañamiento personalizado de Saama Daily.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <AffiliateWhatsappCTA />
            <Link className="button-secondary" href="/productos?country=co">
              Ver catálogo Colombia
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-lg border border-ink/10 bg-white/80 p-7 shadow-soft">
            <p className="eyebrow">Precio cliente</p>
            <h2 className="mt-3 text-2xl font-semibold text-ink">
              Compra directa y sin afiliación
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-ink/70">
              {clientPriceItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-lg border border-gold/40 bg-olive-dark p-7 text-linen shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Precio afiliado
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              Precio más económico con orientación
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-linen/75">
              {affiliatePriceItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/55">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Beneficios de afiliarse</p>
            <h2 className="section-heading">
              Una decisión informada para comprar mejor y conocer la oportunidad
            </h2>
            <p className="mt-5 max-w-3xl leading-7 text-ink/70">
              Además de acceder a un precio más económico en los productos, la
              afiliación puede abrirte la posibilidad de convertirte en distribuidor
              autorizado de Gano Excel y conocer un plan de compensación con ingresos
              atractivos, basado en 12 formas distintas de generar ingresos.
            </p>
          </div>
          <ul className="grid gap-3 text-sm leading-6 text-ink/70 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li
                className="rounded-lg border border-ink/10 bg-linen/80 p-4"
                key={benefit}
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell">
        <Link
          href="/afiliacion/12-formas-de-generar-ingresos"
          className="saama-pulse-cta mx-auto flex max-w-3xl items-center justify-center rounded-lg border border-gold/60 bg-gradient-to-r from-olive-dark via-olive to-coffee px-6 py-7 text-center text-lg font-semibold uppercase tracking-[0.18em] text-linen shadow-soft transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-linen sm:text-2xl"
        >
          12 FORMAS DISTINTAS DE GENERAR INGRESOS
        </Link>
      </section>

      <section className="border-y border-ink/10 bg-white/60">
        <div className="section-shell">
          <p className="eyebrow">Pasos para recibir orientación</p>
          <h2 className="section-heading">Acompañamiento antes de decidir</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                className="rounded-lg border border-ink/10 bg-white/80 p-6 shadow-soft"
                key={step}
              >
                <span className="country-code bg-gold text-ink">
                  {index + 1}
                </span>
                <p className="mt-5 text-sm leading-6 text-ink/70">{step}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <AffiliateWhatsappCTA />
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="rounded-lg border border-ink/10 bg-linen/80 p-6 shadow-soft">
          <p className="text-sm leading-7 text-ink/70">
            La información sobre afiliación y oportunidad comercial tiene fines
            informativos. Los ingresos dependen de múltiples factores, incluyendo
            dedicación, gestión comercial, cumplimiento de condiciones del plan de
            compensación y políticas vigentes de Gano Excel. No se garantizan
            resultados económicos.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white/55">
        <div className="section-shell">
          <p className="eyebrow">Continuar explorando</p>
          <h2 className="section-heading">Afiliación forma parte de Emprende</h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link className="button-primary" href="/emprende">
              Volver a Emprende
            </Link>
            <Link className="button-secondary" href="/productos?country=co">
              Ver catálogo Colombia
            </Link>
            <Link className="button-secondary" href="/afiliacion/12-formas-de-generar-ingresos">
              Conocer las 12 formas de generar ingresos
            </Link>
            <Link className="button-secondary" href="/asesoria-personalizada">
              Solicitar asesoría personalizada
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
