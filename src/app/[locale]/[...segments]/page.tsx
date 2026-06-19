import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SeoPageContent } from "@/components/seo/SeoPageContent";
import { Container } from "@/components/ui/Container";
import { routing } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  ALL_LOCATION_PAGES,
  getAllLocationSlugs,
  getLocationBySegments,
} from "@/lib/seo/registry";

type Props = { params: Promise<{ locale: string; segments: string[] }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllLocationSlugs(locale as "ar" | "en").map((slug) => ({
      locale,
      segments: slug.split("/"),
    }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale, segments } = await params;
  const page = getLocationBySegments(segments, locale as "ar" | "en");
  if (!page) return { title: "Not Found" };

  const tc = await getTranslations({ locale, namespace: "common" });
  return buildPageMetadata(page, locale as "ar" | "en", tc("brandName"));
}

export default async function LocationSeoPage({ params }: Props) {
  const { locale, segments } = await params;
  setRequestLocale(locale);

  if (segments.length !== 2) notFound();

  const page = getLocationBySegments(segments, locale as "ar" | "en");
  if (!page) notFound();

  return (
    <>
      <Header />
      <Hero page="inner" />
      <main className="pb-20 pt-10 sm:pb-24 sm:pt-12">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SeoPageContent
              page={page}
              locale={locale as "ar" | "en"}
              isLocation
            />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export { ALL_LOCATION_PAGES };
