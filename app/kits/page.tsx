import { KitCard } from "@/components/KitCard";
import { wellnessKits } from "@/data/wellnessKits";

export default function KitsPage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-olive-dark text-linen">
        <div className="section-shell">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Kits de bienestar</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight text-balance">
            Kits pensados para empezar, sostener y organizar tu bienestar.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-linen/72">
            Opciones iniciales para distintos estilos de vida, con guía de compra y
            acompañamiento según disponibilidad en Colombia o Estados Unidos.
          </p>
        </div>
      </section>
      <section className="section-shell">
        <div className="grid gap-5 md:grid-cols-3">
          {wellnessKits.map((kit) => (
            <KitCard key={kit.title} {...kit} />
          ))}
        </div>
      </section>
    </>
  );
}
