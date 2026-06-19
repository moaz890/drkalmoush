import type { LocationPage, SeoPage } from "./types";
import { balloonAndBariatricPages } from "./content/balloon-bariatric";
import { endoscopyPages } from "./content/endoscopy";
import { gastricBypassPages } from "./content/gastric-bypass";
import { gastricSleevePages } from "./content/gastric-sleeve";
import { locationPages } from "./content/locations";

export const ALL_SEO_PAGES: SeoPage[] = [
  ...gastricSleevePages,
  ...gastricBypassPages,
  ...balloonAndBariatricPages,
  ...endoscopyPages,
];

export const ALL_LOCATION_PAGES: LocationPage[] = locationPages;

const pageById = new Map<string, SeoPage>();
for (const page of ALL_SEO_PAGES) {
  pageById.set(page.id, page);
}

const slugIndex = new Map<string, SeoPage>();
for (const page of ALL_SEO_PAGES) {
  slugIndex.set(`ar:${page.slug.ar}`, page);
  slugIndex.set(`en:${page.slug.en}`, page);
}

const locationSlugIndex = new Map<string, LocationPage>();
for (const page of ALL_LOCATION_PAGES) {
  locationSlugIndex.set(`ar:${page.slug.ar}`, page);
  locationSlugIndex.set(`en:${page.slug.en}`, page);
}

export function getPageById(id: string): SeoPage | undefined {
  return pageById.get(id);
}

export function getPageBySlug(
  slug: string,
  locale: "ar" | "en"
): SeoPage | undefined {
  return slugIndex.get(`${locale}:${slug}`);
}

export function getLocationBySlug(
  slug: string,
  locale: "ar" | "en"
): LocationPage | undefined {
  return locationSlugIndex.get(`${locale}:${slug}`);
}

export function getLocationBySegments(
  segments: string[],
  locale: "ar" | "en"
): LocationPage | undefined {
  const combined = segments.join("/");
  return locationSlugIndex.get(`${locale}:${combined}`);
}

export function getAllPageSlugs(locale: "ar" | "en"): string[] {
  return ALL_SEO_PAGES.map((p) => p.slug[locale]);
}

export function getAllLocationSlugs(locale: "ar" | "en"): string[] {
  return ALL_LOCATION_PAGES.map((p) => p.slug[locale]);
}

export function getRelatedPages(page: SeoPage | LocationPage): SeoPage[] {
  return page.relatedPageIds
    .map((id) => pageById.get(id))
    .filter((p): p is SeoPage => p !== undefined);
}

export function getPagesByCluster(cluster: string): SeoPage[] {
  return ALL_SEO_PAGES.filter((p) => p.cluster === cluster);
}

export { pageById };
