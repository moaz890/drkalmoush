import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { BLOG_SLUGS } from "@/lib/constants";
import { ALL_LOCATION_PAGES, ALL_SEO_PAGES } from "@/lib/seo/registry";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  const home = routing.locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: locale === routing.defaultLocale ? 1 : 0.9,
  }));

  const videos = routing.locales.map((locale) => ({
    url: `${base}/${locale}/videos`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const services = routing.locales.map((locale) => ({
    url: `${base}/${locale}/services`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.88,
  }));

  const blogIndex = routing.locales.map((locale) => ({
    url: `${base}/${locale}/blog`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.72,
  }));

  const blogPosts = routing.locales.flatMap((locale) =>
    BLOG_SLUGS.map((slug) => ({
      url: `${base}/${locale}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    }))
  );

  const seoPages = routing.locales.flatMap((locale) =>
    ALL_SEO_PAGES.map((page) => ({
      url: `${base}/${locale}/${page.slug[locale as "ar" | "en"]}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page.sitemapPriority,
    }))
  );

  const locationPages = routing.locales.flatMap((locale) =>
    ALL_LOCATION_PAGES.map((page) => ({
      url: `${base}/${locale}/${page.slug[locale as "ar" | "en"]}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page.sitemapPriority,
    }))
  );

  return [...home, ...videos, ...services, ...blogIndex, ...blogPosts, ...seoPages, ...locationPages];
}
