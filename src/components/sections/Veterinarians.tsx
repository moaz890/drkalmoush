"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function Veterinarians() {
  const t = useTranslations("doctors");

  const doctors = [
    {
      key: "mark" as const,
      image: "/markeskandar.png",
      altKey: "mark",
    },
    {
      key: "tarek" as const,
      image: "/tarekghobashy.png",
      altKey: "tarek",
    },
  ];

  return (
    <section
      id="doctors"
      className="scroll-mt-24 bg-gradient-to-b from-slate-50 to-white py-16 md:py-24"
    >
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="grid gap-8 md:grid-cols-2">
          {doctors.map(({ key, image, altKey }, index) => (
            <motion.article
              key={key}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-brand-dark/5"
            >
              <div className="grid gap-6 p-6 sm:grid-cols-[160px_1fr] sm:items-center">
                <div className="relative mx-auto aspect-[4/5] w-full max-w-[200px] overflow-hidden rounded-2xl bg-slate-100 sm:mx-0 sm:max-w-none">
                  <Image
                    src={image}
                    alt={t(`${altKey}.name`)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 200px, 160px"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark md:text-2xl">
                    {t(`${key}.name`)}
                  </h3>
                  <p className="mt-2 text-brand-muted">{t(`${key}.role`)}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
