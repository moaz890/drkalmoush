import { BRANCHES, PHONE_PRIMARY_TEL, SOCIALS, WHATSAPP_URL } from "@/lib/constants";
import { getSiteUrl } from "@/lib/site";
import type { FaqItem, LocaleText, LocationPage, SeoPage } from "./types";

type Locale = "ar" | "en";

function pick(text: LocaleText, locale: Locale): string {
  return text[locale];
}

export function physicianSchema(locale: Locale) {
  const base = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: locale === "ar" ? "أ.د. عبد الفتاح قلموش" : "Prof. Dr. Abd-Elfattah Kalmoush",
    description:
      locale === "ar"
        ? "أستاذ الجراحة العامة واستشاري جراحات السمنة والمناظير وجراحات الجهاز الهضمي"
        : "Professor of General Surgery, bariatric, laparoscopic and GI surgery consultant",
    url: `${base}/${locale}`,
    image: `${base}/logo.jpeg`,
    telephone: PHONE_PRIMARY_TEL,
    medicalSpecialty: [
      "Bariatric Surgery",
      "Laparoscopic Surgery",
      "Gastroenterologic Surgery",
      "Endoscopy",
    ],
    memberOf: [
      { "@type": "Organization", name: "IFSO" },
      { "@type": "Organization", name: "ESBS" },
      { "@type": "Organization", name: "ESLS" },
    ],
    sameAs: [SOCIALS.facebook, SOCIALS.instagram, SOCIALS.youtube],
    worksFor: {
      "@type": "MedicalClinic",
      name: locale === "ar" ? "عيادة د. عبد الفتاح قلموش" : "Dr. Abd-Elfattah Kalmoush Clinic",
      url: base,
    },
  };
}

export function medicalClinicSchema(locale: Locale) {
  const base = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: locale === "ar" ? "عيادة د. عبد الفتاح قلموش" : "Dr. Abd-Elfattah Kalmoush Clinic",
    url: `${base}/${locale}`,
    image: `${base}/logo.jpeg`,
    telephone: PHONE_PRIMARY_TEL,
    medicalSpecialty: "Bariatric Surgery",
    availableService: [
      "Gastric Sleeve Surgery",
      "Gastric Bypass Surgery",
      "Gastric Balloon",
      "Endoscopy",
      "Colonoscopy",
      "Hiatal Hernia Repair",
    ],
    department: BRANCHES.map((b) => ({
      "@type": "MedicalClinic",
      name: locale === "ar" ? b.nameAr : b.nameEn,
      address: {
        "@type": "PostalAddress",
        streetAddress: locale === "ar" ? b.addressAr : b.addressEn,
        addressLocality: locale === "ar" ? b.nameAr : b.nameEn,
        addressCountry: "EG",
      },
      telephone: b.phoneTel,
    })),
    sameAs: [SOCIALS.facebook, SOCIALS.instagram, SOCIALS.youtube],
    potentialAction: {
      "@type": "ReserveAction",
      target: WHATSAPP_URL,
    },
  };
}

export function localBusinessSchema(
  branchKey: "mokattam" | "zagazig" | "hehya",
  locale: Locale
) {
  const base = getSiteUrl();
  const branch = BRANCHES.find((b) => b.key === branchKey)!;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${base}/#branch-${branchKey}`,
    name:
      locale === "ar"
        ? `عيادة د. قلموش — ${branch.nameAr}`
        : `Dr. Kalmoush Clinic — ${branch.nameEn}`,
    url: `${base}/${locale}`,
    telephone: branch.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: locale === "ar" ? branch.addressAr : branch.addressEn,
      addressLocality: locale === "ar" ? branch.nameAr : branch.nameEn,
      addressCountry: "EG",
    },
    geo: {
      "@type": "GeoCoordinates",
      addressCountry: "EG",
    },
    medicalSpecialty: "Bariatric Surgery",
    parentOrganization: {
      "@type": "MedicalClinic",
      name: locale === "ar" ? "عيادة د. عبد الفتاح قلموش" : "Dr. Abd-Elfattah Kalmoush Clinic",
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqPageSchema(faqs: FaqItem[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: pick(f.q, locale),
      acceptedAnswer: {
        "@type": "Answer",
        text: pick(f.a, locale),
      },
    })),
  };
}

export function articleSchema(
  page: SeoPage,
  locale: Locale,
  siteName: string
) {
  const base = getSiteUrl();
  const slug = page.slug[locale];
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pick(page.h1, locale),
    description: pick(page.metaDescription, locale),
    url: `${base}/${locale}/${slug}`,
    image: `${base}/logo.jpeg`,
    author: {
      "@type": "Physician",
      name: locale === "ar" ? "أ.د. عبد الفتاح قلموش" : "Prof. Dr. Abd-Elfattah Kalmoush",
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: `${base}/logo.jpeg`,
      },
    },
    inLanguage: locale === "ar" ? "ar" : "en",
    about: pick(page.h1, locale),
  };
}

export function medicalWebPageSchema(
  page: SeoPage | LocationPage,
  locale: Locale
) {
  const base = getSiteUrl();
  const slug = page.slug[locale];
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: pick(page.h1, locale),
    description: pick(page.metaDescription, locale),
    url: `${base}/${locale}/${slug}`,
    inLanguage: locale === "ar" ? "ar" : "en",
    about: {
      "@type": "MedicalProcedure",
      name: pick(page.h1, locale),
    },
    lastReviewed: new Date().toISOString().split("T")[0],
    reviewedBy: {
      "@type": "Physician",
      name: locale === "ar" ? "أ.د. عبد الفتاح قلموش" : "Prof. Dr. Abd-Elfattah Kalmoush",
    },
  };
}
