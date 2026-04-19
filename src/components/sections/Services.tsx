import { getTranslations } from "next-intl/server";
import {
  FaBriefcaseMedical,
  FaFlask,
  FaScissors,
  FaStethoscope,
  FaSuitcaseMedical,
  FaTablets,
} from "react-icons/fa6";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const serviceOrder = [
  "surgeries",
  "examinations",
  "ultrasound",
  "lab",
  "grooming",
  "pharmacy",
] as const;

const icons = {
  surgeries: FaSuitcaseMedical,
  examinations: FaStethoscope,
  ultrasound: FaBriefcaseMedical,
  lab: FaFlask,
  grooming: FaScissors,
  pharmacy: FaTablets,
};

export async function Services() {
  const t = await getTranslations("services");

  return (
    <section id="services" className="scroll-mt-24 py-16 md:py-24">
      <ScrollReveal>
        <Container>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceOrder.map((key) => {
              const Icon = icons[key];
              return (
                <li key={key}>
                  <article className="group h-full rounded-2xl border border-brand-dark/5 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/10">
                    <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-brand-secondary/20 to-brand-primary/15 p-3 text-brand-primary transition group-hover:scale-105">
                      <Icon className="h-7 w-7" aria-hidden />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-dark">
                      {t(`items.${key}.title`)}
                    </h3>
                    <p className="mt-2 text-brand-muted">
                      {t(`items.${key}.description`)}
                    </p>
                  </article>
                </li>
              );
            })}
          </ul>
        </Container>
      </ScrollReveal>
    </section>
  );
}
