import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getSiteUrl } from "@/lib/site";
import { BLOG_SLUGS } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const tc = await getTranslations({ locale, namespace: "common" });
  const base = getSiteUrl();
  const title = t("metaTitle");
  const description = t("metaDescription");

  return {
    title,
    description,
    alternates: {
      canonical: `${base}/${locale}/blog`,
      languages: {
        ar: `${base}/ar/blog`,
        en: `${base}/en/blog`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      url: `${base}/${locale}/blog`,
      siteName: tc("brandName"),
      title,
      description,
      images: [{ url: "/logo.jpeg", width: 512, height: 512, alt: tc("brandName") }],
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "blog" });

  return (
    <>
      <Header />
      <Hero page="inner" />
      <main className="pb-20 pt-10 sm:pb-24 sm:pt-12">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <h1 className="text-3xl font-medium leading-tight text-brand-primary sm:text-4xl">
              {t("listTitle")}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-brand-muted sm:text-lg">
              {t("listSubtitle")}
            </p>
          </div>

          <ul className="mx-auto grid max-w-4xl gap-8">
            {BLOG_SLUGS.map((slug) => (
              <li key={slug}>
                <article className="rounded-3xl bg-surface-ivory p-8 shadow-[var(--shadow-whisper)] ring-1 ring-brand-secondary/10 sm:p-10">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
                    {t(`articles.${slug}.date` as never)} ·{" "}
                    {t("readTime", { minutes: t(`articles.${slug}.readMinutes` as never) })}
                  </p>
                  <h3 className="mt-3 text-2xl font-medium text-brand-primary sm:text-3xl">
                    {t(`articles.${slug}.title` as never)}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-brand-muted">
                    {t(`articles.${slug}.excerpt` as never)}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={`/blog/${slug}`}
                      className="inline-flex text-sm font-semibold text-brand-accent underline-offset-4 hover:underline"
                    >
                      {t("readArticle")}
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </main>
      <Footer />
    </>
  );
}
