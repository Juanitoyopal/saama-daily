"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/data/brand";
import { countries } from "@/data/countries";
import { navItems } from "@/data/navigation";

const mainNavItems = navItems.filter((item) => item.href !== "/soporte");
const countryLabels = {
  CO: { flag: "🇨🇴", label: "Colombia" },
  US: { flag: "🇺🇸", label: "United States" }
} as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-linen/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-8">
        <Link className="flex min-w-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive" href="/" onClick={closeMenu}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-sm font-semibold text-linen">
            SD
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold uppercase tracking-[0.2em] text-ink">{brand.name}</span>
            <span className="hidden truncate text-xs text-ink/60 sm:block">{brand.tagline}</span>
          </span>
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-4 text-sm font-medium text-ink/70 xl:flex">
          {mainNavItems.map((item) => (
            <Link
              aria-current={pathname === item.href ? "page" : undefined}
              className="rounded-sm transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <span className="hidden text-base xl:inline-flex" aria-hidden="true">
            🌐
          </span>
          {countries.map((country) => (
            <Link
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-ink/70 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive xl:inline-flex"
              href={country.path}
              key={country.code}
            >
              <span aria-hidden="true">{countryLabels[country.code].flag}</span>
              <span>{countryLabels[country.code].label}</span>
            </Link>
          ))}
          <Link className="button-primary hidden px-4 py-2 sm:inline-flex" href="/soporte" onClick={closeMenu}>
            Soporte
          </Link>
          <a
            aria-label="Ingresa a tu Back Office"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-white/75 text-ink transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive sm:inline-flex"
            href="https://colombia.ganoexcel.com/Login.aspx?ReturnUrl=%2f"
            rel="noopener noreferrer"
            target="_blank"
            title="Ingresa a tu Back Office"
          >
            <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M20 21a8 8 0 0 0-16 0" />
              <path d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
            </svg>
          </a>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-white/70 text-ink transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 focus-visible:ring-offset-linen xl:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            <span className="sr-only">{isMenuOpen ? "Cerrar menú" : "Abrir menú"}</span>
            <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
              <span className={`h-0.5 w-5 bg-current transition ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 bg-current transition ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-current transition ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <nav
          aria-label="Navegación móvil"
          className="border-t border-ink/10 bg-linen px-4 py-4 shadow-soft sm:px-8 xl:hidden"
          id="mobile-navigation"
        >
          <div className="mx-auto grid max-h-[calc(100vh-6rem)] max-w-6xl gap-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                aria-current={pathname === item.href ? "page" : undefined}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-ink/75 transition hover:bg-white hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive"
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <div className="my-2 border-t border-ink/10" />
            {countries.map((country) => (
              <Link
                className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold text-ink/75 transition hover:bg-white hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive"
                href={country.path}
                key={country.code}
                onClick={closeMenu}
              >
                <span>{countryLabels[country.code].flag} {countryLabels[country.code].label}</span>
                <span className="text-xs tracking-[0.14em] text-coffee">{country.code}</span>
              </Link>
            ))}
            <a
              className="mt-2 flex items-center justify-between rounded-lg border border-ink/10 bg-white/70 px-4 py-3 text-sm font-semibold text-ink/75 transition hover:bg-white hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive"
              href="https://colombia.ganoexcel.com/Login.aspx?ReturnUrl=%2f"
              onClick={closeMenu}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Ingresa a tu Back Office</span>
              <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M20 21a8 8 0 0 0-16 0" />
                <path d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
              </svg>
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
