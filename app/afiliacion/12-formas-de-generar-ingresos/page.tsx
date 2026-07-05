import Image from "next/image";
import Link from "next/link";
import { AffiliateWhatsappCTA } from "@/components/AffiliateWhatsappCTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { compensationPlanSource, incomeForms } from "@/data/compensationPlan";

export default function TwelveIncomeFormsPage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-white/50">
        <div className="section-shell">
          <Breadcrumbs
            items={[
              { label: "Inicio", href: "/" },
              { label: "Emprende", href: "/emprende" },
              { label: "Afiliación", href: "/quiero-afiliarme" },
              { label: "12 formas de generar ingresos" }
            ]}
          />
          <p className="eyebrow">Plan de compensación</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-ink text-balance sm:text-5xl">
            12 formas distintas de generar ingresos
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/70">
            Conoce, en lenguaje claro, las formas de generación de ingresos
            contempladas en el Plan de Compensación de Gano Excel.
          </p>
        </div>
      </section>

      <section className="section-shell">
        <div className="rounded-lg border border-gold/40 bg-olive-dark p-7 text-linen shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Aviso responsable
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-linen/75">
            La información presentada tiene fines educativos y comerciales. Los
            ingresos dependen de múltiples factores, incluyendo dedicación, gestión
            comercial, cumplimiento de condiciones del plan de compensación y
            políticas vigentes de Gano Excel. No se garantizan resultados económicos.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            Fuente: {compensationPlanSource}
          </p>
        </div>

        <div className="mt-8 grid gap-6">
          {incomeForms.map((form) => (
            <article
              className="grid gap-6 rounded-lg border border-ink/10 bg-white/80 p-5 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-7"
              key={form.id}
            >
              {form.image ? (
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-ink/10 bg-linen">
                  <Image
                    alt={`Imagen del Plan de Compensación para ${form.title}`}
                    className="object-contain p-2"
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    src={form.image}
                  />
                </div>
              ) : (
                <div className="grid aspect-[4/3] place-items-center rounded-lg border border-ink/10 bg-linen p-6 text-center text-sm text-ink/70">
                  Imagen no disponible para esta forma.
                </div>
              )}

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="country-code bg-ink text-linen">
                    {String(form.order).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-coffee">
                      {form.category} · {form.frequency}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-ink">{form.title}</h2>
                  </div>
                </div>
                <p className="mt-5 text-base font-semibold leading-7 text-ink">
                  {form.summary}
                </p>
                <p className="mt-4 text-sm leading-7 text-ink/70">
                  {form.description}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-coffee">
                  Fuente: Plan de Compensación
                </p>
                <div className="mt-6">
                  <AffiliateWhatsappCTA />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white/55">
        <div className="section-shell">
          <p className="eyebrow">Continuar explorando</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link className="button-primary" href="/emprende">
              Volver a Emprende
            </Link>
            <Link className="button-secondary" href="/quiero-afiliarme">
              Volver a Afiliación
            </Link>
            <Link className="button-secondary" href="/asesoria-personalizada">
              Solicitar asesoría personalizada
            </Link>
          </div>
        </div>
      </section>

      <AffiliateWhatsappCTA variant="floating" />
    </>
  );
}
