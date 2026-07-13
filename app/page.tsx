import Image from "next/image";
import Link from "next/link";
import { KitCard } from "@/components/KitCard";
import { ProductCategoryCard } from "@/components/ProductCategoryCard";
import { brand } from "@/data/brand";
import { learningTopics } from "@/data/learningTopics";
import { productCategories } from "@/data/productCategories";
import { wellnessKits } from "@/data/wellnessKits";

const brandPillars = [
  {
    number: "01",
    title: "Productos originales",
    text: "Una selección organizada de productos Gano Excel para acompañar tu bienestar diario con confianza, claridad y respaldo.",
    image: "/images/saama-daily/categorias/cafes.jpg",
    imageAlt: "Producto original Gano Excel"
  },
  {
    number: "02",
    title: "Elección guiada",
    text: "Te ayudamos a elegir los productos más adecuados según tu rutina, tus hábitos y lo que deseas fortalecer en tu día a día.",
    image: "/images/saama-daily/personas/sandra_foto_cumpleanos.jpg",
    imageAlt: "Sandra Milena Amaya Toro"
  },
  {
    number: "03",
    title: "Acompañamiento cercano",
    text: "Resolvemos tus dudas con atención humana, orientación personalizada y una experiencia de compra sencilla y segura.",
    image: "/images/saama-daily/categorias/cuidado-personal.jpg",
    imageAlt: "Producto de cuidado personal"
  }
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
            <p className="mt-6 max-w-2xl text-base leading-8 text-linen/75 sm:text-lg">
              Elige tu país para ver productos disponibles, precios, métodos de pago,
              tiempos de entrega y acompañamiento personalizado.
            </p>
          </div>

          <div className="relative hidden min-h-[500px] lg:block" aria-hidden="true">
            <div className="absolute inset-x-6 top-10 h-[390px] rounded-lg border border-linen/15 bg-gradient-to-br from-linen/15 via-linen/5 to-gold/20 shadow-2xl" />
            <div className="absolute left-0 top-40 w-72 rounded-lg border border-linen/15 bg-linen p-7 text-ink shadow-2xl">
              <p className="eyebrow">Rutina diaria</p>
              <p className="mt-4 text-2xl font-semibold">Bienestar que cabe en tu día.</p>
              <p className="mt-4 text-sm font-semibold text-coffee">Café · Energía · Equilibrio</p>
              <div className="mt-8 flex gap-2">
                <span className="h-2 flex-1 rounded-full bg-olive" />
                <span className="h-2 flex-1 rounded-full bg-gold" />
                <span className="h-2 flex-1 rounded-full bg-coffee" />
              </div>
            </div>
            <div className="absolute bottom-10 right-0 w-72 rounded-lg border border-linen/15 bg-olive-dark p-7 shadow-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">BIENESTAR DIARIO</p>
              <p className="mt-4 text-xl font-semibold">Productos funcionales para acompañar tu rutina.</p>
              <p className="mt-3 text-sm leading-6 text-linen/70">Cerca de ti, todos los días.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/60">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.75fr] lg:items-center">
            <div>
              <p className="eyebrow">SAAMA DAILY</p>
              <h2 className="section-heading">Bienestar funcional para acompañarte todos los días.</h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-ink/70 sm:text-lg">
                <p>
                  Saama Daily nace para acercarte a productos Gano Excel originales de una forma clara,
                  cálida y organizada. Creemos en el bienestar funcional como parte de la vida diaria:
                  una taza de café, una bebida, un suplemento o un producto de cuidado personal pueden
                  convertirse en pequeños hábitos que acompañan tu energía, tu equilibrio y tu rutina.
                </p>
                <p>
                  Aquí no compras solo un producto. Recibes orientación, acompañamiento y una experiencia
                  pensada para ayudarte a elegir con confianza según tu país, tus hábitos y lo que quieres
                  integrar en tu día a día.
                </p>
              </div>
            </div>
            <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-ink/10 bg-linen shadow-soft">
              <Image
                alt="Sandra Milena Amaya Toro, administradora de Saama Daily"
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 100vw"
                src="/images/saama-daily/personas/sandra_foto_cumpleanos.jpg"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {brandPillars.map((pillar) => (
              <article className="overflow-hidden rounded-lg border border-ink/10 bg-linen shadow-soft" key={pillar.number}>
                <div className="relative h-40 bg-white">
                  <Image
                    alt={pillar.imageAlt}
                    className="object-cover"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    src={pillar.image}
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold tracking-[0.2em] text-gold">{pillar.number}</p>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/70">{pillar.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mb-9 max-w-3xl">
          <p className="eyebrow">Productos</p>
          <h2 className="section-heading">Bienestar funcional para cada momento de tu día.</h2>
          <p className="mt-5 text-base leading-8 text-ink/70 sm:text-lg">
            Explora productos Gano Excel seleccionados para acompañar tu rutina diaria,
            elaborados con ingredientes funcionales como Ganoderma lucidum y pensados para
            integrarse de forma sencilla a tus hábitos de bienestar.
          </p>
          <Link className="button-secondary mt-7" href="/productos">Explorar productos</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category) => <ProductCategoryCard key={category.title} {...category} />)}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-olive-dark text-linen">
        <div className="section-shell">
          <div className="mb-9 max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Kits de bienestar Saama Daily</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-balance sm:text-4xl">
              Una manera sencilla de comenzar tu rutina diaria.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-linen/75">
              <p>
                Creamos combinaciones sugeridas de productos funcionales para orientarte según tus
                hábitos, gustos y necesidades. Cada kit es una guía de inicio: conoce por qué puede
                funcionar para ti y luego recibes acompañamiento personalizado para confirmar tu
                selección por soporte.
              </p>
              <p>
                La compra de kits se realiza con orientación personalizada. Así podemos ayudarte a
                elegir los productos adecuados, verificar disponibilidad, cumplir el mínimo requerido
                de compra y activar tu beneficio como cliente preferencial.
              </p>
            </div>
            <Link className="button-secondary mt-7 border-linen/20 bg-linen/10 text-linen hover:bg-linen/15" href="/kits">
              Ver todos los Kits
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {wellnessKits.slice(0, 3).map((kit) => <KitCard key={kit.title} {...kit} />)}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow">Aprende</p>
            <h2 className="section-heading">Conoce mejor lo que incorporas a tu rutina.</h2>
            <p className="mt-5 leading-7 text-ink/70">Contenido introductorio y responsable sobre ingredientes, hábitos y preguntas comunes.</p>
            <Link className="button-primary mt-7" href="/aprende">Ir al centro educativo</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {learningTopics.slice(0, 4).map((topic, index) => (
              <article className="rounded-lg border border-ink/10 bg-white/70 p-6 shadow-soft" key={topic.title}>
                <p className="text-xs font-semibold tracking-[0.18em] text-gold">0{index + 1}</p>
                <h3 className="mt-5 text-xl font-semibold text-ink">{topic.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/65">{topic.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/60">
        <div className="section-shell grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border border-ink/10 bg-linen p-8 shadow-soft sm:p-10">
            <p className="eyebrow">Asesoría personalizada</p>
            <h2 className="mt-4 text-3xl font-semibold text-ink text-balance">Continuidad y orientación para tu compra recurrente.</h2>
            <p className="mt-5 leading-7 text-ink/70">Organiza tus productos y reposiciones con acompañamiento según la disponibilidad de tu país.</p>
            <Link className="button-primary mt-7" href="/asesoria-personalizada">Solicitar asesoría</Link>
          </article>
          <article className="rounded-lg border border-ink/10 bg-ink p-8 text-linen shadow-soft sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Emprende con nosotros</p>
            <h2 className="mt-4 text-3xl font-semibold text-balance">Una oportunidad presentada de forma profesional y responsable.</h2>
            <p className="mt-5 leading-7 text-linen/70">Conoce la actividad comercial independiente con información clara y sin promesas irreales.</p>
            <Link className="button-secondary mt-7 border-linen/20 bg-linen/10 text-linen hover:bg-linen/15" href="/emprende">Explorar la oportunidad</Link>
          </article>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid overflow-hidden rounded-lg border border-ink/10 bg-gradient-to-br from-sand/65 via-linen to-white shadow-soft lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="p-8 sm:p-10">
            <p className="eyebrow">Soporte</p>
            <h2 className="section-heading">No tienes que elegir a solas.</h2>
            <p className="mt-5 max-w-2xl leading-7 text-ink/70">
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
