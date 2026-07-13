"use client";

import { useMemo, useState } from "react";
import type { ProductColombia } from "@/data/products-colombia";
import { productCategoriesColombia } from "@/data/products-colombia";
import { ProductCard } from "./ProductCard";

type ProductCatalogColombiaProps = {
  products: ProductColombia[];
  initialCategory?: (typeof productCategoriesColombia)[number];
};

export function ProductCatalogColombia({ products, initialCategory = "Todos" }: ProductCatalogColombiaProps) {
  const [selectedCategory, setSelectedCategory] = useState<(typeof productCategoriesColombia)[number]>(initialCategory);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "Todos") {
      return products;
    }

    return products.filter((product) => product.commercialCategory === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <section className="section-shell">
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
        {productCategoriesColombia.map((category) => (
          <button
            aria-pressed={selectedCategory === category}
            className={`min-w-fit rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2 focus:ring-offset-linen ${
              selectedCategory === category
                ? "border-ink bg-ink text-linen"
                : "border-ink/15 bg-white/70 text-ink hover:border-olive/40"
            }`}
            key={category}
            onClick={() => setSelectedCategory(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
