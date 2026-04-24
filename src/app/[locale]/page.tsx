import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { HighlightsStrip } from "@/components/sections/HighlightsStrip";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const tc = await getTranslations({ locale, namespace: "common" });
  const base = getSiteUrl();
  const title = t("title");
  const description = t("description");

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ar: `${base}/ar`,
        en: `${base}/en`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_EG"],
      url: `${base}/${locale}`,
      siteName: tc("brandName"),
      title,
      description,
      images: [
        {
          url: "/logo.jpeg",
          width: 512,
          height: 512,
          alt: tc("brandName"),
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

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <HighlightsStrip />
        <About />
        <Services />
        {/* Phase 4+ sections next */}
      </main>
    </>
  );
}
