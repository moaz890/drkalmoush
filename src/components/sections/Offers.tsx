import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { buttonClassName } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { OFFER_IMAGES, WHATSAPP_URL } from "@/lib/constants";

export async function Offers() {
  const t = await getTranslations("offers");

  return (
    <section id="offers" className="scroll-mt-24 bg-white py-16 md:py-24">
      <ScrollReveal>
        <Container>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
          <div className="flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:snap-none [&::-webkit-scrollbar]:hidden">
            {OFFER_IMAGES.map((src, i) => {
              const n = i + 1;
              return (
                <article
                  key={src}
                  className="w-[min(100%,320px)] shrink-0 snap-center overflow-hidden rounded-2xl bg-slate-50 shadow-md ring-1 ring-brand-dark/5 transition hover:shadow-lg md:w-auto md:snap-none"
                >
                  <div className="relative aspect-[4/3] w-full bg-slate-100">
                    <Image
                      src={src}
                      alt={t("offerAlt", { n })}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 320px, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${buttonClassName("whatsapp")} w-full`}
                    >
                      {t("cta")}
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </ScrollReveal>
    </section>
  );
}
