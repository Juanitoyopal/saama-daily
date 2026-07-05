import Link from "next/link";
import { AffiliateWhatsappCTA } from "@/components/AffiliateWhatsappCTA";

const pathways = [
  {
    title: "Precio afiliado",
    text: "La afiliación permite acceder a un precio más económico en productos seleccionados, con orientación antes de tomar una decisión.",
    href: "/quiero-afiliarme",
    label: "Conocer precio afiliado"
  },
  {
    title: "Distribuidor autorizado",
    text: "La afiliación puede abrir la posibilidad de conocer la actividad comercial como distribuidor autorizado de Gano Excel.",
    href: "/quiero-afiliarme",
    label: "Ver cómo afiliarme"
  },
  {
    title: "Asesoría personalizada",
    text: "Saama Daily organiza tu solicitud para explicar productos, afiliación y oportunidad comercial de forma clara y responsable.",
    href: "/asesoria-personalizada",
    label: "Solicitar asesoría personalizada"
  }
];

export default function EmprendePage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-ink text-linen">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Emprende
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              Emprende con Saama Daily y conoce la oportunidad Gano Excel
            </h1>
            <p className="mt-5 text-lg leading-8 text-linen/72">
              Explora cómo acceder al precio afiliado, conocer la oportunidad de
              distribución autorizada y recibir acompañamiento personalizado para
              entender el plan de compensación de Gano Excel.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="button-secondary border-linen/20 bg-linen/10 text-linen hover:bg-linen/15" href="/quiero-afiliarme">
                Quiero conocer cómo afiliarme
              </Link>
              <Link
                className="button-secondary border-linen/20 bg-transparent text-linen hover:bg-linen/10"
                href="/afiliacion/12-formas-de-generar-ingresos"
              >
                Ver 12 formas de generar ingresos
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-linen/15 bg-linen/10 p-7 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Acompañamiento
            </p>
            <p className="mt-4 text-sm leading-7 text-linen/75">
              La información se presenta con fines educativos y comerciales. No se
              garantizan resultados económicos; todo depende de condiciones del plan,
              gestión comercial, dedicación y políticas vigentes.
            </p>
            <div className="mt-6">
              <AffiliateWhatsappCTA />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-5 lg:grid-cols-3">
        {pathways.map((item) => (
          <article className="rounded-lg border border-ink/10 bg-white/80 p-6 shadow-soft" key={item.title}>
            <h2 className="text-xl font-semibold text-ink">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-ink/70">{item.text}</p>
            <Link className="button-secondary mt-6" href={item.href}>
              {item.label}
            </Link>
          </article>
        ))}
      </section>

      <section className="border-y border-ink/10 bg-white/55">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">Plan de compensación</p>
            <h2 className="section-heading">Una biblioteca para entender la oportunidad</h2>
            <p className="mt-5 max-w-3xl leading-7 text-ink/70">
              El Plan de Compensación de Gano Excel contempla distintas formas de
              generación de ingresos. Saama Daily las organiza en lenguaje claro para
              que puedas revisarlas antes de decidir.
            </p>
          </div>
          <Link
            className="saama-pulse-cta flex items-center justify-center rounded-lg border border-gold/60 bg-gradient-to-r from-olive-dark via-olive to-coffee px-6 py-7 text-center text-lg font-semibold uppercase tracking-[0.18em] text-linen shadow-soft transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-linen sm:text-2xl"
            href="/afiliacion/12-formas-de-generar-ingresos"
          >
            12 FORMAS DISTINTAS DE GENERAR INGRESOS
          </Link>
        </div>
      </section>

      <section className="section-shell">
        <div className="rounded-lg border border-ink/10 bg-linen/80 p-7 shadow-soft">
          <p className="eyebrow">Siguiente paso</p>
          <h2 className="mt-4 text-2xl font-semibold text-ink">
            Revisa productos, afiliación y asesoría en un solo camino
          </h2>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link className="button-primary" href="/quiero-afiliarme">
              Quiero conocer cómo afiliarme
            </Link>
            <Link className="button-secondary" href="/productos?country=co">
              Ver catálogo Colombia
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
