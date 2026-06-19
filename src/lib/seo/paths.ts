import type { LocationPage, SeoPage } from "./types";

type Locale = "ar" | "en";

export function seoPagePath(
  page: Pick<SeoPage | LocationPage, "slug">,
  locale: Locale
): string {
  return `/${locale}/${page.slug[locale]}`;
}
