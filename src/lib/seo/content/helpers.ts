import type { LocaleText } from "../types";

export function lt(ar: string, en: string): LocaleText {
  return { ar, en };
}

export function section(
  headingAr: string,
  headingEn: string,
  paragraphs: [string, string][]
) {
  return {
    heading: lt(headingAr, headingEn),
    paragraphs: paragraphs.map(([ar, en]) => lt(ar, en)),
  };
}

export function faq(qAr: string, qEn: string, aAr: string, aEn: string) {
  return { q: lt(qAr, qEn), a: lt(aAr, aEn) };
}
