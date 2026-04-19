import { getTranslations } from "next-intl/server";
import { FaBuilding, FaHeartPulse, FaShieldHeart } from "react-icons/fa6";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export async function About() {
  const t = await getTranslations("about");

  const items = [
    { icon: FaHeartPulse, label: t("diff1") },
    { icon: FaBuilding, label: t("diff2") },
    { icon: FaShieldHeart, label: t("diff3") },
  ];

  return (
    <section id="about" className="scroll-mt-24 bg-slate-50/80 py-16 md:py-24">
      <ScrollReveal>
        <Container>
          <SectionHeading title={t("title")} />
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-brand-dark/90">
              {t("body")}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-brand-secondary">
              <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-brand-secondary/20">
                {t("branchNasr")}
              </span>
              <span className="text-brand-muted">·</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-brand-secondary/20">
                {t("branchZaitoon")}
              </span>
            </div>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-3">
            {items.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-brand-dark/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-secondary/15 text-brand-secondary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <span className="font-medium text-brand-dark">{label}</span>
              </li>
            ))}
          </ul>
        </Container>
      </ScrollReveal>
    </section>
  );
}
