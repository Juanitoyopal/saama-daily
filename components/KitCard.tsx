import Image from "next/image";

type KitCardProps = {
  title: string;
  subtitle: string;
  items: string[];
  originalValue: string;
  kitValue: string;
  savings: string;
  image: string;
  imageAlt: string;
};

export function KitCard({
  title,
  subtitle,
  items,
  originalValue,
  kitValue,
  savings,
  image,
  imageAlt
}: KitCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-ink/10 bg-linen text-ink shadow-soft">
      <div className="relative h-48 bg-white">
        <Image
          alt={imageAlt}
          className="object-contain p-6"
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          src={image}
        />
      </div>
      <div className="p-6">
        <div className="mb-5 h-2 w-20 rounded-full bg-gradient-to-r from-gold via-coffee to-olive" />
        <h3 className="text-xl font-semibold text-ink">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-ink/70">{subtitle}</p>

        <dl className="mt-5 grid gap-2 rounded-lg border border-ink/10 bg-white/70 p-4 text-sm">
          <div className="flex items-center justify-between gap-4">
            <dt className="text-ink/65">Valor sin descuento</dt>
            <dd className="font-semibold text-ink">{originalValue}</dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt className="text-ink/65">Valor kit con descuento</dt>
            <dd className="font-semibold text-olive">{kitValue}</dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt className="text-ink/65">Ahorro estimado</dt>
            <dd className="font-semibold text-coffee">{savings}</dd>
          </div>
        </dl>

        <ul className="mt-6 space-y-3 text-sm text-ink/72">
          {items.map((item) => (
            <li className="flex gap-3" key={item}>
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
