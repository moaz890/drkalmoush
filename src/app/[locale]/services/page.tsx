import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { WHATSAPP_URL } from "@/lib/constants";
import { getSiteUrl } from "@/lib/site";
import { seoPagePath } from "@/lib/seo/paths";
import { getServiceMenuGroups } from "@/lib/seo/service-menu";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "servicesPage" });
  const tc = await getTranslations({ locale, namespace: "common" });
  const base = getSiteUrl();

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `${base}/${locale}/services`,
      languages: {
        ar: `${base}/ar/services`,
        en: `${base}/en/services`,
        "x-default": `${base}/ar/services`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      url: `${base}/${locale}/services`,
      siteName: tc("brandName"),
      title: t("metaTitle"),
      description: t("metaDescription"),
      images: [{ url: "/logo.jpeg", width: 512, height: 512, alt: tc("brandName") }],
    },
    robots: { index: true, follow: true },
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as "ar" | "en";

  const t = await getTranslations({ locale, namespace: "servicesPage" });
  const groups = getServiceMenuGroups();

  return (
    <>
      <Header />
      <Hero page="inner" />
      <main className="pb-20 pt-10 sm:pb-24 sm:pt-12">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <h1 className="text-3xl font-medium leading-tight text-brand-primary sm:text-4xl">
              {t("title")}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-brand-muted sm:text-lg">
              {t("subtitle")}
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-10">
            {groups.map((group) => (
              <section
                key={group.id}
                className="rounded-3xl bg-surface-ivory p-8 shadow-[var(--shadow-whisper)] ring-1 ring-brand-secondary/10 sm:p-10"
              >
                <h2 className="text-xl font-medium text-brand-primary sm:text-2xl">
                  {t(`groups.${group.id}`)}
                </h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {group.pages.map((page) => (
                    <li key={page.id}>
                      <a
                        href={seoPagePath(page, loc)}
                        className="group flex items-start gap-2 rounded-xl border border-brand-secondary/10 bg-white px-4 py-3 transition-colors hover:border-brand-accent/30 hover:bg-surface-sand/40"
                      >
                        <span
                          aria-hidden
                          className="mt-1 text-brand-accent transition-transform group-hover:translate-x-0.5"
                        >
                          {loc === "ar" ? "←" : "→"}
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-brand-primary group-hover:text-brand-accent">
                            {page.h1[loc]}
                          </span>
                          <span className="mt-1 block text-xs leading-relaxed text-brand-muted line-clamp-2">
                            {page.metaDescription[loc]}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-5xl text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-brand-accent px-6 text-sm font-medium text-surface-ivory shadow-[0px_0px_0px_1px_var(--color-brand-accent)] transition-[filter] hover:brightness-95"
            >
              {t("bookConsultation")}
            </a>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
