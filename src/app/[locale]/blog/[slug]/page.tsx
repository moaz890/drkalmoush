import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSiteUrl } from "@/lib/site";
import { BLOG_SLUGS, type BlogSlug } from "@/lib/constants";
import { routing } from "@/i18n/routing";
import { getPageById } from "@/lib/seo/registry";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";

type Props = { params: Promise<{ locale: string; slug: string }> };

function isBlogSlug(s: string): s is BlogSlug {
  return (BLOG_SLUGS as readonly string[]).includes(s);
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    BLOG_SLUGS.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isBlogSlug(slug)) {
    return { title: "Blog" };
  }

  const t = await getTranslations({ locale, namespace: "blog" });
  const tc = await getTranslations({ locale, namespace: "common" });
  const base = getSiteUrl();
  const title = t(`articles.${slug}.title` as never);
  const description = t(`articles.${slug}.excerpt` as never);

  return {
    title,
    description,
    alternates: {
      canonical: `${base}/${locale}/blog/${slug}`,
      languages: {
        ar: `${base}/ar/blog/${slug}`,
        en: `${base}/en/blog/${slug}`,
        "x-default": `${base}/ar/blog/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      url: `${base}/${locale}/blog/${slug}`,
      siteName: tc("brandName"),
      title,
      description,
      images: [{ url: "/logo.jpeg", width: 512, height: 512, alt: tc("brandName") }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.jpeg"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!isBlogSlug(slug)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "blog" });
  const tc = await getTranslations({ locale, namespace: "common" });
  const articleMeta = t.raw(`articles.${slug}` as never) as {
    paragraphs: string[];
    relatedSeoPage?: string;
  };
  const paragraphs = articleMeta.paragraphs;
  const relatedSeoPageId = articleMeta.relatedSeoPage;

  if (!Array.isArray(paragraphs)) {
    notFound();
  }

  const base = getSiteUrl();
  const loc = locale as "ar" | "en";
  const title = t(`articles.${slug}.title` as never);
  const description = t(`articles.${slug}.excerpt` as never);
  const articleUrl = `${base}/${locale}/blog/${slug}`;

  const relatedSeoPage = relatedSeoPageId
    ? getPageById(relatedSeoPageId)
    : undefined;

  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: articleUrl,
    image: `${base}/logo.jpeg`,
    author: {
      "@type": "Physician",
      name: loc === "ar" ? "أ.د. عبد الفتاح قلموش" : "Prof. Dr. Abd-Elfattah Kalmoush",
    },
    publisher: {
      "@type": "Organization",
      name: tc("brandName"),
      logo: { "@type": "ImageObject", url: `${base}/logo.jpeg` },
    },
    inLanguage: loc === "ar" ? "ar" : "en",
  };

  return (
    <>
      <JsonLd
        data={[
          schemaArticle,
          breadcrumbSchema([
            { name: loc === "ar" ? "الرئيسية" : "Home", url: `${base}/${locale}` },
            { name: loc === "ar" ? "المدونة" : "Blog", url: `${base}/${locale}/blog` },
            { name: title, url: articleUrl },
          ]),
        ]}
      />
      <Header />
      <Hero page="inner" />
      <main className="pb-20 pt-10 sm:pb-24 sm:pt-12">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent underline-offset-4 hover:underline"
            >
              <span aria-hidden className="select-none">
                {locale === "ar" ? "→" : "←"}
              </span>
              {t("backToBlog")}
            </Link>

            <header className="mt-8 border-b border-brand-secondary/15 pb-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
                {t(`articles.${slug}.date` as never)} ·{" "}
                {t("readTime", { minutes: t(`articles.${slug}.readMinutes` as never) })}
              </p>
              <h1 className="mt-4 text-3xl font-medium leading-tight text-brand-primary sm:text-4xl">
                {title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-brand-muted">
                {description}
              </p>
            </header>

            <div className="prose-blog mt-10 space-y-5 text-base leading-relaxed text-brand-secondary">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <p className="mt-10 rounded-2xl border border-brand-secondary/10 bg-surface-sand/40 px-4 py-3 text-sm text-brand-muted">
              {t("disclaimer")}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {relatedSeoPage ? (
                <a
                  href={`/${locale}/${relatedSeoPage.slug[loc]}`}
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-brand-accent px-6 text-sm font-medium text-surface-ivory shadow-[0px_0px_0px_1px_var(--color-brand-accent)] transition-[filter] hover:brightness-95"
                >
                  {relatedSeoPage.h1[loc]}
                </a>
              ) : null}
              <Link
                href="/blog"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-brand-secondary/20 px-6 text-sm font-medium text-brand-primary transition-colors hover:bg-surface-sand/40"
              >
                {t("backToBlog")}
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
