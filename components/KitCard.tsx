type KitCardProps = {
  title: string;
  subtitle: string;
  items: string[];
};

export function KitCard({ title, subtitle, items }: KitCardProps) {
  return (
    <article className="rounded-lg border border-ink/10 bg-linen/80 p-6 shadow-soft">
      <div className="mb-6 h-2 w-20 rounded-full bg-gradient-to-r from-gold via-coffee to-olive" />
      <h3 className="text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-ink/68">{subtitle}</p>
      <ul className="mt-6 space-y-3 text-sm text-ink/72">
        {items.map((item) => (
          <li className="flex gap-3" key={item}>
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
