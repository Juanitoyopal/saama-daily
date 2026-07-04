import { AffiliateWhatsappCTA } from "@/components/AffiliateWhatsappCTA";

const incomeForms = Array.from({ length: 12 }, (_, index) => ({
  title: `Forma ${index + 1} — Pendiente de desarrollo`,
  description:
    "Contenido pendiente de extracción y validación desde el Plan de Compensación."
}));

export default function TwelveIncomeFormsPage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-white/50">
        <div className="section-shell">
          <p className="eyebrow">Plan de compensación</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-ink text-balance sm:text-5xl">
            12 formas distintas de generar ingresos
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/70">
            En esta sección organizaremos, en lenguaje claro y educativo, las
            formas de generación de ingresos contempladas en el Plan de Compensación
            de Gano Excel.
          </p>
        </div>
      </section>

      <section className="section-shell">
        <div className="rounded-lg border border-gold/40 bg-olive-dark p-7 text-linen shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Biblioteca en construcción
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-linen/75">
            Esta biblioteca será construida a partir del documento Plan de
            Compensación ubicado en la carpeta DOCUMENTOS DE CREACION. No se
            publicará información no verificada.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {incomeForms.map((form) => (
            <article
              className="rounded-lg border border-ink/10 bg-white/80 p-6 shadow-soft"
              key={form.title}
            >
              <h2 className="text-lg font-semibold text-ink">{form.title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/70">
                {form.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <AffiliateWhatsappCTA variant="floating" />
    </>
  );
}
