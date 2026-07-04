import Link from "next/link";
import type { Country } from "@/data/countries";

type CountryMarketPageProps = {
  country: Country;
};

const sectionCopy = {
  es: {
    overviewEyebrow: "Compra local",
    overviewTitle: "Una experiencia clara para comprar en Colombia.",
    paymentEyebrow: "Compra y disponibilidad",
    paymentTitle: "Antes de confirmar tu pedido",
    deliveryEyebrow: "Envíos",
    deliveryTitle: "Información para recibir tus productos",
    supportEyebrow: "Acompañamiento",
    supportTitle: "Soporte durante toda tu experiencia",
    noticeLabel: "Aviso responsable",
    finalEyebrow: "Tu siguiente paso",
    finalTitle: "Explora las opciones disponibles para Colombia.",
    finalDescription:
      "Revisa las categorías o solicita orientación antes de elegir tu rutina."
  },
  en: {
    overviewEyebrow: "Local shopping",
    overviewTitle: "A clear way to shop in the United States.",
    paymentEyebrow: "Purchase and availability",
    paymentTitle: "Before confirming your order",
    deliveryEyebrow: "Delivery",
    deliveryTitle: "Information about receiving your products",
    supportEyebrow: "Guidance",
    supportTitle: "Support throughout your experience",
    noticeLabel: "Responsible notice",
    finalEyebrow: "Your next step",
    finalTitle: "Explore the options available in the United States.",
    finalDescription:
      "Review product categories or request guidance before choosing your routine."
  }
} as const;

function InformationList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map((item) => (
        <li className="flex gap-3 text-sm leading-6 text-ink/70" key={item}>
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CountryMarketPage({ country }: CountryMarketPageProps) {
  const copy = country.code === "CO" ? sectionCopy.es : sectionCopy.en;

  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/10 bg-white/50">
        <div className="section-shell grid min-h-[620px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">{country.heroEyebrow}</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-ink text-balance sm:text-5xl lg:text-6xl">
              {country.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ink/70 sm:text-lg">
              {country.heroDescription}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link className="button-primary" href={country.primaryCtaHref}>
                {country.primaryCtaLabel}
              </Link>
              <Link className="button-secondary" href={country.secondaryCtaHref}>
                {country.secondaryCtaLabel}
              </Link>
            </div>
          </div>

          <div className="relative min-h-[360px]" aria-hidden="true">
            <div className="absolute inset-0 rounded-lg border border-ink/10 bg-gradient-to-br from-sand/70 via-linen to-olive/25 shadow-soft" />
            <div className="absolute left-6 top-7 rounded-full bg-ink px-4 py-2 text-xs font-semibold tracking-[0.16em] text-linen">
              {country.code} · {country.currency}
            </div>
            <div className="absolute bottom-7 left-6 right-6 rounded-lg border border-white/60 bg-white/80 p-6 shadow-soft backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coffee">
                {country.name}
              </p>
              <p className="mt-3 text-xl font-semibold text-ink">{country.marketDescription}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mb-9 max-w-3xl">
          <p className="eyebrow">{copy.overviewEyebrow}</p>
          <h2 className="section-heading">{copy.overviewTitle}</h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-lg border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {country.highlights.map((highlight, index) => (
            <article className="min-h-36 bg-linen p-6" key={highlight}>
              <p className="text-xs font-semibold tracking-[0.18em] text-gold">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 text-lg font-semibold leading-6 text-ink">{highlight}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/60">
        <div className="section-shell grid gap-5 lg:grid-cols-3">
          <article className="rounded-lg border border-ink/10 bg-linen/80 p-7 shadow-soft">
            <p className="eyebrow">{copy.paymentEyebrow}</p>
            <h2 className="mt-4 text-2xl font-semibold text-ink">{copy.paymentTitle}</h2>
            <InformationList items={country.paymentInfo} />
          </article>
          <article className="rounded-lg border border-ink/10 bg-white/80 p-7 shadow-soft">
            <p className="eyebrow">{copy.deliveryEyebrow}</p>
            <h2 className="mt-4 text-2xl font-semibold text-ink">{copy.deliveryTitle}</h2>
            <InformationList items={country.deliveryInfo} />
          </article>
          <article className="rounded-lg border border-ink/10 bg-ink p-7 text-linen shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">{copy.supportEyebrow}</p>
            <h2 className="mt-4 text-2xl font-semibold">{copy.supportTitle}</h2>
            <ul className="mt-6 space-y-4">
              {country.supportInfo.map((item) => (
                <li className="flex gap-3 text-sm leading-6 text-linen/70" key={item}>
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-shell py-10 lg:py-12">
        <div className="flex gap-4 rounded-lg border border-gold/25 bg-gold/10 p-6 sm:p-8">
          <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold text-sm font-bold text-ink">i</span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coffee">{copy.noticeLabel}</p>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-ink/70">{country.notice}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-olive-dark text-linen">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">{copy.finalEyebrow}</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-balance sm:text-4xl">
              {copy.finalTitle}
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-linen/70">{copy.finalDescription}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link className="button-secondary border-linen/20 bg-linen text-ink hover:bg-white" href={country.primaryCtaHref}>
              {country.primaryCtaLabel}
            </Link>
            <Link className="button-secondary border-linen/20 bg-linen/10 text-linen hover:bg-linen/15" href={country.secondaryCtaHref}>
              {country.secondaryCtaLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
