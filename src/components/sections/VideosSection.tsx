"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ClinicalVideos } from "@/components/sections/ClinicalVideos";

const FEATURED_INDICES = [0, 1, 2] as const;

export function VideosSection() {
  const t = useTranslations("videosSection");

  return (
    <section id="videos" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
          className="mx-auto mb-10 sm:mb-14"
        />
        <ClinicalVideos indices={FEATURED_INDICES} />
        <div className="mt-10 flex justify-center">
          <Link
            href="/videos"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-surface-ivory px-6 text-sm font-medium text-brand-primary shadow-[0px_0px_0px_1px_var(--color-ring-warm)] transition-colors hover:bg-[#ffffff]"
          >
            {t("viewMore")}
          </Link>
        </div>
      </Container>
    </section>
  );
}
