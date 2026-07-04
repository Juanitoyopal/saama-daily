import Link from "next/link";
import { CountrySelector } from "@/components/CountrySelector";
import { KitCard } from "@/components/KitCard";
import { ProductCategoryCard } from "@/components/ProductCategoryCard";
import { brand } from "@/data/brand";
import { learningTopics } from "@/data/learningTopics";
import { productCategories } from "@/data/productCategories";
import { wellnessKits } from "@/data/wellnessKits";

const brandPillars = [
  { number: "01", title: "Productos originales", text: "Una selección organizada de productos Gano Excel para Colombia y Estados Unidos." },
  { number: "02", title: "Compra por país", text: "Información clara sobre disponibilidad, precios, métodos de pago y tiempos de entrega." },
  { number: "03", title: "Acompañamiento humano", text: "Orientación personalizada para elegir una rutina práctica y resolver tus dudas." }
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/10 bg-ink text-linen">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(125deg,#151412_10%,#3c472f_68%,#8f6b4d_130%)]" />
        <div className="section-shell grid min-h-[720px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Bienestar funcional binacional</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.04] text-balance sm:text-6xl lg:text-7xl">
              {brand.name}
            </h1>
            <p className="mt-5 text-2xl font-medium text-linen sm:text-3xl">{brand.tagline}</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-linen/72 sm:text-lg">
              Elige tu país para ver productos disponibles, precios, métodos de pago,
              tiempos de entrega y acompañamiento personalizado.
            </p>
            <div className="mt-9 max-w-xl">
              <CountrySelector compact />
            </div>
          </div>

          <div className="relative hidden min-h-[500px] lg:block" aria-hidden="true">
            <div className="absolute inset-x-6 top-10 h-[390px] rounded-lg border border-linen/15 bg-gradient-to-br from-linen/15 via-linen/5 to-gold/20 shadow-2xl" />
            <div className="absolute left-0 top-40 w-64 rounded-lg border border-linen/15 bg-linen p-7 text-ink shadow-2xl">
              <p className="eyebrow">Rutina diaria</p>
              <p className="mt-4 text-2xl font-semibold">Bienestar que cabe en tu día.</p>
              <div className="mt-8 flex gap-2">
                <span className="h-2 flex-1 rounded-full bg-olive" />
                <span className="h-2 flex-1 rounded-full bg-gold" />
                <span className="h-2 flex-1 rounded-full bg-coffee" />
              </div>
            </div>
            <div className="absolute bottom-10 right-0 w-72 rounded-lg border border-linen/15 bg-olive-dark p-7 shadow-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Dos países</p>
              <p className="mt-4 text-xl font-semibold">Una experiencia cercana y organizada.</p>
              <p className="mt-3 text-sm leading-6 text-linen/65">Colombia · United States</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell" id="paises">
        <div className="mb-9 grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="eyebrow">Compra según tu país</p>
            <h2 className="section-heading">Tu experiencia comienza aquí.</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-ink/68 lg:justify-self-end">
            Cada mercado tiene disponibilidad, precios y procesos diferentes. Selecciona tu país
            para encontrar la información correcta desde el primer momento.
          </p>
        </div>
        <CountrySelector />
      </section>

      <section className="border-y border-ink/10 bg-white/58">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Qué es Saama Daily</p>
              <h2 className="section-heading">Bienestar funcional, explicado con claridad.</h2>
            </div>
            <div>
              <p className="text-base leading-8 text-ink/70 sm:text-lg">
                Saama Daily es una plataforma independiente que conecta productos Gano Excel
                originales con una experiencia de compra cálida, ordenada y personalizada.
                Está pensada para integrar hábitos de bienestar a la vida cotidiana sin presión,
                confusión ni promesas exageradas.
              </p>
            </div>
          </div>
          <div className="mt-12 grid border-y border-ink/10 md:grid-cols-3">
            {brandPillars.map((pillar) => (
              <article className="border-ink/10 py-7 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0" key={pillar.number}>
                <p className="text-xs font-semibold tracking-[0.2em] text-gold">{pillar.number}</p>
                <h3 className="mt-4 text-lg font-semibold text-ink">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/65">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Productos</p>
            <h2 className="section-heading">Opciones para distintos momentos de tu rutina.</h2>
          </div>
          <Link className="button-secondary" href="/productos">Explorar productos</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {productCategories.map((category) => <ProductCategoryCard key={category.title} {...category} />)}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-olive-dark text-linen">
        <div className="section-shell">
          <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Kits de bienestar</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-balance sm:text-4xl">
                Una manera sencilla de comenzar con orientación.
              </h2>
            </div>
            <Link className="button-secondary border-linen/20 bg-linen/10 text-linen hover:bg-linen/15" href="/kits">Ver kits</Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {wellnessKits.map((kit) => <KitCard key={kit.title} {...kit} />)}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow">Aprende</p>
            <h2 className="section-heading">Conoce mejor lo que incorporas a tu rutina.</h2>
            <p className="mt-5 leading-7 text-ink/68">Contenido introductorio y responsable sobre ingredientes, hábitos y preguntas comunes.</p>
            <Link className="button-primary mt-7" href="/aprende">Ir al centro educativo</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {learningTopics.slice(0, 4).map((topic, index) => (
              <article className="rounded-lg border border-ink/10 bg-white/72 p-6 shadow-soft" key={topic.title}>
                <p className="text-xs font-semibold tracking-[0.18em] text-gold">0{index + 1}</p>
                <h3 className="mt-5 text-xl font-semibold text-ink">{topic.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/65">{topic.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/58">
        <div className="section-shell grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border border-ink/10 bg-linen p-8 shadow-soft sm:p-10">
            <p className="eyebrow">Asesoría personalizada</p>
            <h2 className="mt-4 text-3xl font-semibold text-ink text-balance">Continuidad y orientación para tu compra recurrente.</h2>
            <p className="mt-5 leading-7 text-ink/68">Organiza tus productos y reposiciones con acompañamiento según la disponibilidad de tu país.</p>
            <Link className="button-primary mt-7" href="/asesoria-personalizada">Solicitar asesoría</Link>
          </article>
          <article className="rounded-lg border border-ink/10 bg-ink p-8 text-linen shadow-soft sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Emprende con nosotros</p>
            <h2 className="mt-4 text-3xl font-semibold text-balance">Una oportunidad presentada de forma profesional y responsable.</h2>
            <p className="mt-5 leading-7 text-linen/68">Conoce la actividad comercial independiente con información clara y sin promesas irreales.</p>
            <Link className="button-secondary mt-7 border-linen/20 bg-linen/10 text-linen hover:bg-linen/15" href="/emprende">Explorar la oportunidad</Link>
          </article>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid overflow-hidden rounded-lg border border-ink/10 bg-gradient-to-br from-sand/65 via-linen to-white shadow-soft lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="p-8 sm:p-10">
            <p className="eyebrow">Soporte</p>
            <h2 className="section-heading">No tienes que elegir a solas.</h2>
            <p className="mt-5 max-w-2xl leading-7 text-ink/68">
              Recibe ayuda sobre productos, país, disponibilidad, entrega, asesoría personalizada
              o la oportunidad de negocio.
            </p>
          </div>
          <div className="border-t border-ink/10 p-8 lg:border-l lg:border-t-0 lg:p-10">
            <Link className="button-primary w-full sm:w-auto" href="/soporte">Hablar con soporte</Link>
          </div>
        </div>
      </section>
    </>
  );
}
