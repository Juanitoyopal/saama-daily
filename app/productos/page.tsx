import Link from "next/link";
import { ProductCatalogColombia } from "@/components/ProductCatalogColombia";
import { colombia, unitedStates } from "@/data/countries";
import { productsColombia } from "@/data/products-colombia";

type ProductosPageProps = {
  searchParams?: Promise<{
    country?: string;
  }>;
};

export default async function ProductosPage({ searchParams }: ProductosPageProps) {
  const params = await searchParams;
  const country = params?.country?.toLowerCase();

  if (country === "co") {
    return (
      <>
        <section className="border-b border-ink/10 bg-white/50">
          <div className="section-shell">
            <p className="eyebrow">Catálogo Colombia</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-ink text-balance sm:text-5xl">
              Productos Gano Excel originales disponibles para compra en Colombia.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/70">
              Revisa precios cliente, precios afiliado, categorías y detalles de
              cada producto. La compra se completa en el micrositio oficial de
              Saama Daily dentro de Gano Excel Colombia.
            </p>
            <p className="mt-4 text-sm font-semibold text-coffee">
              {productsColombia.length} productos Colombia · Precios en COP · IVA incluido
            </p>
          </div>
        </section>
        <ProductCatalogColombia products={productsColombia} />
      </>
    );
  }

  if (country === "us") {
    return (
      <section className="section-shell">
        <p className="eyebrow">United States</p>
        <h1 className="section-heading">U.S. product catalog coming soon.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
          Saama Daily USA will have its own product catalog in a separate phase.
          Colombia products are not shown in the U.S. catalog.
        </p>
        <Link className="button-secondary mt-8" href="/usa">
          Back to United States
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="border-b border-ink/10 bg-white/50">
        <div className="section-shell">
          <p className="eyebrow">Productos</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-ink text-balance sm:text-5xl">
            Elige el catálogo según tu país.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
            Cada país tiene disponibilidad, precios y procesos de compra
            diferentes. Selecciona el mercado que quieres revisar.
          </p>
        </div>
      </section>

      <section className="section-shell grid gap-5 md:grid-cols-2">
        <article className="rounded-lg border border-ink/10 bg-white/75 p-7 shadow-soft">
          <p className="eyebrow">{colombia.name}</p>
          <h2 className="mt-4 text-2xl font-semibold text-ink">Catálogo disponible</h2>
          <p className="mt-3 text-sm leading-6 text-ink/70">
            Consulta los 19 productos Colombia con precios cliente y precios afiliado.
          </p>
          <Link className="button-primary mt-6" href="/productos?country=co">
            Ver catálogo Colombia
          </Link>
        </article>

        <article className="rounded-lg border border-ink/10 bg-linen/75 p-7 shadow-soft">
          <p className="eyebrow">{unitedStates.name}</p>
          <h2 className="mt-4 text-2xl font-semibold text-ink">Próximamente</h2>
          <p className="mt-3 text-sm leading-6 text-ink/70">
            El catálogo USA se desarrollará en una fase independiente.
          </p>
          <Link className="button-secondary mt-6" href="/usa">
            Ver página USA
          </Link>
        </article>
      </section>
    </>
  );
}
