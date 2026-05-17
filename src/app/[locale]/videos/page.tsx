import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ClinicalVideos } from "@/components/sections/ClinicalVideos";
import { Container } from "@/components/ui/Container";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "videosPage" });
  const tc = await getTranslations({ locale, namespace: "common" });
  const base = getSiteUrl();

  const title = t("metaTitle");
  const description = t("metaDescription");

  return {
    title,
    description,
    alternates: {
      canonical: `${base}/${locale}/videos`,
      languages: {
        ar: `${base}/ar/videos`,
        en: `${base}/en/videos`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      url: `${base}/${locale}/videos`,
      siteName: tc("brandName"),
      title,
      description,
      images: [{ url: "/logo.jpeg", width: 512, height: 512, alt: tc("brandName") }],
    },
  };
}

export default async function VideosPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "videosPage" });

  return (
    <>
      <Header />
      <Hero page="inner" />
      <main className="pb-20 pt-10 sm:pb-24 sm:pt-12">
        <Container>
          <div className="mb-10 max-w-2xl sm:mb-14">
            <div className="mb-3 h-1.5 w-12 rounded-full bg-brand-accent" />
            <h1 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              {t("title")}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-brand-muted">{t("subtitle")}</p>
          </div>
          <ClinicalVideos />
        </Container>
      </main>
      <Footer />
    </>
  );
}
