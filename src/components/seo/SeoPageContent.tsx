import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { WHATSAPP_URL } from "@/lib/constants";
import { getSiteUrl } from "@/lib/site";
import { getRelatedPages } from "@/lib/seo/registry";
import {
  articleSchema,
  breadcrumbSchema,
  faqPageSchema,
  localBusinessSchema,
  medicalWebPageSchema,
} from "@/lib/seo/schema";
import type { LocationPage, LocaleText, SeoPage } from "@/lib/seo/types";
import { Breadcrumbs } from "./Breadcrumbs";
import { FaqSection } from "./FaqSection";
import { JsonLd } from "./JsonLd";
import { RelatedLinks } from "./RelatedLinks";

type Locale = "ar" | "en";

function pick(text: LocaleText, locale: Locale): string {
  return text[locale];
}

type Props = {
  page: SeoPage | LocationPage;
  locale: Locale;
  isLocation?: boolean;
};

export async function SeoPageContent({ page, locale, isLocation }: Props) {
  const t = await getTranslations({ locale, namespace: "seo" });
  const tc = await getTranslations({ locale, namespace: "common" });
  const siteName = tc("brandName");
  const base = getSiteUrl();

  const slug = page.slug[locale];
  const pageUrl = `${base}/${locale}/${slug}`;
  const related = getRelatedPages(page);

  const breadcrumbs = [
    { label: t("home"), href: "/" },
    ...(isLocation
      ? [{ label: t("locations") }]
      : [{ label: t("services") }]),
    { label: pick(page.h1, locale) },
  ];

  const schemaItems: Record<string, unknown>[] = [
    breadcrumbSchema([
      { name: t("home"), url: `${base}/${locale}` },
      ...(isLocation
        ? [{ name: t("locations"), url: `${base}/${locale}#faq` }]
        : [{ name: t("services"), url: `${base}/${locale}#services` }]),
      { name: pick(page.h1, locale), url: pageUrl },
    ]),
    medicalWebPageSchema(page, locale),
  ];

  if (page.faqs?.length) {
    schemaItems.push(faqPageSchema(page.faqs, locale));
  }

  if (!isLocation && (page.type === "article" || page.type === "faq")) {
    schemaItems.push(articleSchema(page as SeoPage, locale, siteName));
  }

  if (isLocation && "cityKey" in page) {
    schemaItems.push(localBusinessSchema(page.cityKey, locale));
  }

  const pageTypeKey = isLocation ? "location" : page.type;

  return (
    <>
      <JsonLd data={schemaItems} />
      <Breadcrumbs
        items={breadcrumbs.map((b, i) => ({
          label: b.label,
          href: "href" in b ? b.href : undefined,
        }))}
        ariaLabel={t("breadcrumbAria")}
      />

      <header className="border-b border-brand-secondary/15 pb-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
          {t(`pageType.${pageTypeKey}`)}
        </p>
        <h1 className="mt-4 text-3xl font-medium leading-tight text-brand-primary sm:text-4xl">
          {pick(page.h1, locale)}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-brand-muted">
          {pick(page.intro, locale)}
        </p>
      </header>

      <div className="prose-blog mt-10 space-y-10">
        {page.sections.map((section, i) => (
          <section key={i}>
            <h2 className="text-xl font-medium text-brand-primary sm:text-2xl">
              {pick(section.heading, locale)}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-brand-secondary">
              {section.paragraphs.map((p, j) => (
                <p key={j}>{pick(p, locale)}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {page.faqs ? (
        <FaqSection faqs={page.faqs} locale={locale} title={t("faqTitle")} />
      ) : null}

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-xl bg-brand-accent px-6 text-sm font-medium text-surface-ivory shadow-[0px_0px_0px_1px_var(--color-brand-accent)] transition-[filter] hover:brightness-95"
        >
          {t("bookConsultation")}
        </a>
        <Link
          href="/blog"
          className="inline-flex h-11 items-center justify-center rounded-xl border border-brand-secondary/20 px-6 text-sm font-medium text-brand-primary transition-colors hover:bg-surface-sand/40"
        >
          {t("readBlog")}
        </Link>
      </div>

      <RelatedLinks
        pages={related}
        locale={locale}
        title={t("relatedPages")}
        clusterLabel={t(`clusters.${page.cluster}`)}
      />

      <p className="mt-8 rounded-2xl border border-brand-secondary/10 bg-surface-sand/40 px-4 py-3 text-sm text-brand-muted">
        {t("disclaimer")}
      </p>
    </>
  );
}
