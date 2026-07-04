import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalPurchaseDialog } from "@/components/ExternalPurchaseDialog";
import { productsColombia } from "@/data/products-colombia";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const moneyFormatter = new Intl.NumberFormat("es-CO", {
  currency: "COP",
  maximumFractionDigits: 0,
  style: "currency"
});

function formatMoney(value: number) {
  return moneyFormatter.format(value);
}

export function generateStaticParams() {
  return productsColombia.map((product) => ({
    slug: product.slug
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = productsColombia.find((item) => item.slug === slug);

  return {
    title: product ? `${product.name} - Saama Daily` : "Producto - Saama Daily"
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = productsColombia.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const optionalDetails = [
    product.ingredients ? ["Ingredientes", product.ingredients] : null,
    product.presentation ? ["Presentación", product.presentation] : null,
    product.usage ? ["Modo de uso", product.usage] : null,
    product.sanitaryRegistration ? ["Registro sanitario", product.sanitaryRegistration] : null,
    product.sanitaryNotification ? ["Notificación sanitaria", product.sanitaryNotification] : null
  ].filter(Boolean) as [string, string][];

  return (
    <>
      <section className="border-b border-ink/10 bg-white/50">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-square overflow-hidden rounded-lg border border-ink/10 bg-linen shadow-soft">
            <Image
              alt={product.name}
              className="object-contain p-8"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              src={product.image}
            />
          </div>

          <div>
            <p className="eyebrow">{product.commercialCategory}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink text-balance sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-5 text-lg leading-8 text-ink/70">{product.fullDescription}</p>

            <div className="mt-7 grid gap-3 rounded-lg border border-ink/10 bg-linen/80 p-5">
              <p className="flex justify-between gap-4 text-sm text-ink/70">
                <span>Precio cliente</span>
                <strong className="text-ink">{formatMoney(product.customerPrice)}</strong>
              </p>
              <p className="flex justify-between gap-4 text-sm text-ink/70">
                <span>Precio afiliado</span>
                <strong className="text-olive-dark">{formatMoney(product.affiliatePrice)}</strong>
              </p>
              <p className="text-sm font-semibold text-coffee">
                Ahorra {formatMoney(product.savings)} al afiliarte
              </p>
              <p className="text-xs leading-5 text-ink/60">{product.priceAccessNote}</p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ExternalPurchaseDialog />
              <Link className="button-secondary" href="/quiero-afiliarme">
                Quiero acceder al precio afiliado
              </Link>
              <Link className="button-secondary" href="/soporte">
                Solicitar asesoría
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-5 lg:grid-cols-3">
        <article className="rounded-lg border border-ink/10 bg-white/75 p-6 shadow-soft">
          <p className="eyebrow">Información comercial</p>
          <dl className="mt-5 grid gap-4 text-sm">
            <div>
              <dt className="font-semibold text-ink">Código</dt>
              <dd className="mt-1 text-ink/70">{product.code}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Categoría comercial</dt>
              <dd className="mt-1 text-ink/70">{product.commercialCategory}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Categoría regulatoria</dt>
              <dd className="mt-1 text-ink/70">{product.regulatoryCategory}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Disponibilidad</dt>
              <dd className="mt-1 text-ink/70">{product.availability}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">IVA</dt>
              <dd className="mt-1 text-ink/70">IVA incluido</dd>
            </div>
          </dl>
        </article>

        <article className="rounded-lg border border-ink/10 bg-linen/80 p-6 shadow-soft">
          <p className="eyebrow">Regulación y avisos</p>
          <div className="mt-5 grid gap-4 text-sm leading-6 text-ink/70">
            {optionalDetails.map(([label, value]) => (
              <div key={label}>
                <p className="font-semibold text-ink">{label}</p>
                <p className="mt-1">{value}</p>
              </div>
            ))}
            {product.dietarySupplementNotice ? <p>{product.dietarySupplementNotice}</p> : null}
            <p>
              La información presentada tiene fines educativos y comerciales. No
              sustituye valoración, diagnóstico ni tratamiento médico.
            </p>
          </div>
        </article>

        <article className="rounded-lg border border-ink/10 bg-ink p-6 text-linen shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Biblioteca educativa
          </p>
          <h2 className="mt-4 text-2xl font-semibold">Próximamente</h2>
          <p className="mt-4 text-sm leading-6 text-linen/70">
            Próximamente encontrarás información ampliada, explicada en lenguaje
            sencillo y acompañada de fuentes de consulta.
          </p>
        </article>
      </section>
    </>
  );
}
