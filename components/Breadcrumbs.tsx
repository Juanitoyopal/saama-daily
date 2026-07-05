import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Ruta de navegación" className="mb-8 text-sm text-ink/60">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li className="flex items-center gap-2" key={item.label}>
              {item.href && !isLast ? (
                <Link
                  className="font-semibold text-olive-dark transition hover:text-ink focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2 focus:ring-offset-linen"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined}>{item.label}</span>
              )}
              {!isLast ? <span aria-hidden="true" className="text-ink/30">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
