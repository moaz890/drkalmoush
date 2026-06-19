import { ALL_LOCATION_PAGES, getPageById } from "@/lib/seo/registry";

/** Primary service pages linked from header, footer, and homepage */
export const PRIMARY_SERVICE_LINKS = [
  "gastric-sleeve",
  "gastric-bypass",
  "gastric-balloon",
  "bariatric-surgery",
  "endoscopy",
  "colonoscopy",
  "hiatal-hernia",
] as const;

export function getPrimaryServicePages() {
  return PRIMARY_SERVICE_LINKS.map((id) => getPageById(id)!).filter(Boolean);
}

function getPageOrLocation(id: string) {
  const page = getPageById(id);
  if (page) return page;
  return ALL_LOCATION_PAGES.find((p) => p.id === id);
}

/** High-value SEO links for footer */
export const FOOTER_SEO_LINKS = [
  "gastric-sleeve",
  "gastric-bypass",
  "gastric-balloon",
  "sleeve-vs-bypass",
  "gastric-sleeve-price",
  "endoscopy",
  "colonoscopy",
  "bariatric-surgery",
  "cairo-gastric-sleeve",
  "zagazig-bariatric",
] as const;

export function getFooterSeoLinks() {
  return FOOTER_SEO_LINKS.map((id) => getPageOrLocation(id)!).filter(Boolean);
}
