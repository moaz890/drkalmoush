import { Link } from "@/i18n/navigation";

type Crumb = { label: string; href?: string };

type Props = {
  items: Crumb[];
  ariaLabel: string;
};

export function Breadcrumbs({ items, ariaLabel }: Props) {
  return (
    <nav aria-label={ariaLabel} className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-brand-muted">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 ? (
              <span aria-hidden className="text-brand-secondary/40">
                /
              </span>
            ) : null}
            {item.href ? (
              <Link
                href={item.href}
                className="font-medium text-brand-accent underline-offset-4 hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-brand-secondary">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
