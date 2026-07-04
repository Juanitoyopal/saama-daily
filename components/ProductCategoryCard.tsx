type ProductCategoryCardProps = {
  title: string;
  description: string;
  tone?: "olive" | "gold" | "coffee";
};

const toneStyles = {
  olive: "from-olive/85 via-olive/45 to-sand",
  gold: "from-gold/85 via-sand to-white",
  coffee: "from-coffee/85 via-sand to-linen"
};

export function ProductCategoryCard({
  title,
  description,
  tone = "olive"
}: ProductCategoryCardProps) {
  return (
    <article className="rounded-lg border border-ink/10 bg-white/70 p-4 shadow-soft">
      <div className={`mb-5 h-36 rounded-lg bg-gradient-to-br ${toneStyles[tone]}`} />
      <h3 className="text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-ink/68">{description}</p>
    </article>
  );
}
