"use client";

import Image from "next/image";
import Link from "next/link";
import type { ProductColombia } from "@/data/products-colombia";
import { ExternalPurchaseDialog } from "./ExternalPurchaseDialog";

type ProductCardProps = {
  product: ProductColombia;
};

const moneyFormatter = new Intl.NumberFormat("es-CO", {
  currency: "COP",
  maximumFractionDigits: 0,
  style: "currency"
});

function formatMoney(value: number) {
  return moneyFormatter.format(value);
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-ink/10 bg-white/80 shadow-soft">
      <div className="relative aspect-square bg-linen">
        <Image
          alt={product.name}
          className="object-contain p-5"
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          src={product.image}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-coffee">
          {product.commercialCategory}
        </p>
        <h3 className="mt-3 text-xl font-semibold text-ink">{product.name}</h3>
        <p className="mt-3 text-sm leading-6 text-ink/70">{product.shortDescription}</p>

        <div className="mt-5 rounded-lg border border-ink/10 bg-linen/70 p-4">
          <div className="grid gap-3 text-sm">
            <p className="flex items-center justify-between gap-4 text-ink/70">
              <span>Precio cliente</span>
              <strong className="text-ink">{formatMoney(product.customerPrice)}</strong>
            </p>
            <p className="flex items-center justify-between gap-4 text-ink/70">
              <span>Precio afiliado</span>
              <strong className="text-olive-dark">{formatMoney(product.affiliatePrice)}</strong>
            </p>
          </div>
          <p className="mt-3 text-xs font-semibold text-coffee">
            Ahorra {formatMoney(product.savings)} al afiliarte
          </p>
        </div>

        <div className="mt-auto grid gap-3 pt-5">
          <Link className="button-secondary w-full" href={`/productos/${product.slug}`}>
            Ver producto
          </Link>
          <ExternalPurchaseDialog triggerClassName="button-primary w-full" />
          <Link className="text-center text-sm font-semibold text-olive-dark" href="/quiero-afiliarme">
            Quiero acceder al precio afiliado
          </Link>
        </div>
      </div>
    </article>
  );
}
