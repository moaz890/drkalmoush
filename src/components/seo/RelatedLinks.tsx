import { Link } from "@/i18n/navigation";
import { getSiteUrl } from "@/lib/site";
import { seoPagePath } from "@/lib/seo/paths";
import type { SeoPage } from "@/lib/seo/types";

type Props = {
  pages: SeoPage[];
  locale: "ar" | "en";
  title: string;
  clusterLabel?: string;
};

export function RelatedLinks({ pages, locale, title, clusterLabel }: Props) {
  if (!pages.length) return null;

  return (
    <aside className="mt-12 rounded-2xl border border-brand-secondary/10 bg-white p-6 sm:p-8">
      <h2 className="text-lg font-medium text-brand-primary">{title}</h2>
      {clusterLabel ? (
        <p className="mt-1 text-sm text-brand-muted">{clusterLabel}</p>
      ) : null}
      <ul className="mt-4 space-y-2">
        {pages.map((page) => (
          <li key={page.id}>
            <a
              href={seoPagePath(page, locale)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent underline-offset-4 hover:underline"
            >
              <span aria-hidden>{locale === "ar" ? "←" : "→"}</span>
              {page.h1[locale]}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
