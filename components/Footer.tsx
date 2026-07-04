import Link from "next/link";
import { brand } from "@/data/brand";
import { countries } from "@/data/countries";
import { legalLinks } from "@/data/legal";
import { navItems } from "@/data/navigation";
import { DisclaimerFooter } from "./DisclaimerFooter";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-linen">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.1fr_1.4fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">{brand.name}</p>
          <h2 className="mt-4 max-w-md text-3xl font-semibold text-balance">
            {brand.secondaryPhrase}
          </h2>
          <div className="mt-6">
            <DisclaimerFooter className="text-linen/62" />
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-linen">Explorar</p>
            <div className="mt-4 grid gap-3 text-sm text-linen/70">
              {navItems.map((item) => (
                <Link className="transition hover:text-linen" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-linen">País</p>
            <div className="mt-4 grid gap-3 text-sm text-linen/70">
              {countries.map((country) => (
                <Link className="transition hover:text-linen" href={country.path} key={country.code}>
                  {country.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-linen">Información legal</p>
            <div className="mt-4 grid gap-3 text-sm text-linen/70">
              {legalLinks.map((item) => (
                <Link className="transition hover:text-linen" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-linen/10 px-5 py-5 text-center text-xs text-linen/45">
        © {new Date().getFullYear()} {brand.name}. Plataforma independiente.
      </div>
    </footer>
  );
}
