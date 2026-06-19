import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";
import type { LocaleText, LocationPage, SeoPage } from "./types";

type Locale = "ar" | "en";

function pick<T extends LocaleText>(text: T, locale: Locale): string {
  return text[locale];
}

export function buildPagePath(
  slug: string,
  locale: Locale
): string {
  return `/${locale}/${slug}`;
}

export function buildCanonicalUrl(slug: string, locale: Locale): string {
  return `${getSiteUrl()}${buildPagePath(slug, locale)}`;
}

export function buildAlternates(
  slugAr: string,
  slugEn: string,
  locale: Locale
): Metadata["alternates"] {
  const base = getSiteUrl();
  const slug = locale === "ar" ? slugAr : slugEn;
  return {
    canonical: `${base}/${locale}/${slug}`,
    languages: {
      ar: `${base}/ar/${slugAr}`,
      en: `${base}/en/${slugEn}`,
      "x-default": `${base}/ar/${slugAr}`,
    },
  };
}

export function buildPageMetadata(
  page: SeoPage | LocationPage,
  locale: Locale,
  siteName: string
): Metadata {
  const slug = page.slug[locale];
  const title = pick(page.title, locale);
  const description = pick(page.metaDescription, locale);
  const url = buildCanonicalUrl(slug, locale);

  return {
    title,
    description,
    alternates: buildAlternates(page.slug.ar, page.slug.en, locale),
    openGraph: {
      type: page.type === "article" ? "article" : "website",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_EG"],
      url,
      siteName,
      title,
      description,
      images: [
        {
          url: "/logo.jpeg",
          width: 512,
          height: 512,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.jpeg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
