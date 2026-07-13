import Image from "next/image";
import Link from "next/link";

type ProductCategoryCardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  tone?: "olive" | "gold" | "coffee";
};

const toneStyles = {
  olive: "from-olive/20 via-sand/65 to-white",
  gold: "from-gold/25 via-sand/65 to-white",
  coffee: "from-coffee/20 via-sand/65 to-white"
};

export function ProductCategoryCard({
  title,
  description,
  href,
  image,
  imageAlt,
  tone = "olive"
}: ProductCategoryCardProps) {
  return (
    <Link
      className={`group block overflow-hidden rounded-lg border border-ink/10 bg-gradient-to-br ${toneStyles[tone]} shadow-soft transition hover:-translate-y-1 hover:border-olive/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 focus-visible:ring-offset-linen`}
      href={href}
    >
      <div className="relative h-48 overflow-hidden bg-white">
        <Image
          alt={imageAlt}
          className="object-contain p-6 transition duration-500 group-hover:scale-105"
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          src={image}
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-ink">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-ink/70">{description}</p>
        <span className="mt-5 inline-flex text-sm font-semibold text-olive">
          Explorar categoría
        </span>
      </div>
    </Link>
  );
}
