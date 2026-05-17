import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/site";
import { BLOG_SLUGS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const home = routing.locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === routing.defaultLocale ? 1 : 0.9,
  }));
  const videos = routing.locales.map((locale) => ({
    url: `${base}/${locale}/videos`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));
  const blogIndex = routing.locales.map((locale) => ({
    url: `${base}/${locale}/blog`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
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
  return [...home, ...videos, ...blogIndex, ...blogPosts];
}
