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
  ALL_SEO_PAGES,
  getAllLocationSlugs,
  getAllPageSlugs,
  getLocationBySegments,
  getPageBySlug,
} from "@/lib/seo/registry";

type Props = { params: Promise<{ locale: string; segments: string[] }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => {
    const loc = locale as "ar" | "en";
    const singleSegment = getAllPageSlugs(loc).map((slug) => ({
      locale,
      segments: [slug],
    }));
    const twoSegments = getAllLocationSlugs(loc).map((slug) => ({
      locale,
      segments: slug.split("/"),
    }));
    return [...singleSegment, ...twoSegments];
  });
}

export async function generateMetadata({ params }: Props) {
  const { locale, segments } = await params;
  const loc = locale as "ar" | "en";

  if (segments.length === 1) {
    const page = getPageBySlug(segments[0], loc);
    if (!page) return { title: "Not Found" };
    const tc = await getTranslations({ locale, namespace: "common" });
    return buildPageMetadata(page, loc, tc("brandName"));
  }

  if (segments.length === 2) {
    const page = getLocationBySegments(segments, loc);
    if (!page) return { title: "Not Found" };
    const tc = await getTranslations({ locale, namespace: "common" });
    return buildPageMetadata(page, loc, tc("brandName"));
  }

  return { title: "Not Found" };
}

export default async function SeoCatchAllPage({ params }: Props) {
  const { locale, segments } = await params;
  setRequestLocale(locale);
  const loc = locale as "ar" | "en";

  if (segments.length === 1) {
    const page = getPageBySlug(segments[0], loc);
    if (!page) notFound();

    return (
      <>
        <Header />
        <Hero page="inner" />
        <main className="pb-20 pt-10 sm:pb-24 sm:pt-12">
          <Container>
            <div className="mx-auto max-w-3xl">
              <SeoPageContent page={page} locale={loc} />
            </div>
          </Container>
        </main>
        <Footer />
      </>
    );
  }

  if (segments.length === 2) {
    const page = getLocationBySegments(segments, loc);
    if (!page) notFound();

    return (
      <>
        <Header />
        <Hero page="inner" />
        <main className="pb-20 pt-10 sm:pb-24 sm:pt-12">
          <Container>
            <div className="mx-auto max-w-3xl">
              <SeoPageContent page={page} locale={loc} isLocation />
            </div>
          </Container>
        </main>
        <Footer />
      </>
    );
  }

  notFound();
}

export { ALL_SEO_PAGES, ALL_LOCATION_PAGES };
