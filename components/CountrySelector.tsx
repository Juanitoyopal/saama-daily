import Link from "next/link";
import { colombia, unitedStates } from "@/data/countries";

type CountrySelectorProps = {
  compact?: boolean;
};

export function CountrySelector({ compact = false }: CountrySelectorProps) {
  if (compact) {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        <Link className="button-primary w-full" href={colombia.path}>
          Comprar en Colombia
        </Link>
        <Link className="button-secondary w-full" href={unitedStates.path}>
          Buy in the United States
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Link
        className="country-card group border-olive/25 bg-gradient-to-br from-white via-linen to-olive/15"
        href={colombia.path}
      >
        <span className="flex items-center justify-between gap-4">
          <span className="eyebrow">{colombia.name}</span>
          <span className="country-code bg-olive text-white">{colombia.code}</span>
        </span>
        <span className="mt-8 block text-2xl font-semibold text-ink sm:text-3xl">Comprar en Colombia</span>
        <span className="mt-3 block max-w-md text-sm leading-6 text-ink/65 sm:text-base">
          {colombia.marketDescription}
        </span>
        <span className="mt-8 flex items-center justify-between border-t border-ink/10 pt-5 text-sm font-semibold text-olive-dark">
          Entrar a Colombia <span aria-hidden="true">→</span>
        </span>
      </Link>
      <Link
        className="country-card group border-gold/30 bg-gradient-to-br from-white via-linen to-gold/15"
        href={unitedStates.path}
      >
        <span className="flex items-center justify-between gap-4">
          <span className="eyebrow">{unitedStates.name}</span>
          <span className="country-code bg-ink text-linen">{unitedStates.code}</span>
        </span>
        <span className="mt-8 block text-2xl font-semibold text-ink sm:text-3xl">Buy in the United States</span>
        <span className="mt-3 block max-w-md text-sm leading-6 text-ink/65 sm:text-base">
          {unitedStates.marketDescription}
        </span>
        <span className="mt-8 flex items-center justify-between border-t border-ink/10 pt-5 text-sm font-semibold text-olive-dark">
          Enter United States <span aria-hidden="true">→</span>
        </span>
      </Link>
    </div>
  );
}
