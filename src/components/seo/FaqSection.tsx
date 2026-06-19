import { Accordion } from "@/components/ui/Accordion";
import type { FaqItem } from "@/lib/seo/types";

type Props = {
  faqs: FaqItem[];
  locale: "ar" | "en";
  title: string;
};

export function FaqSection({ faqs, locale, title }: Props) {
  if (!faqs.length) return null;

  return (
    <section className="mt-12 rounded-2xl border border-brand-secondary/10 bg-surface-sand/30 p-6 sm:p-8">
      <h2 className="text-xl font-medium text-brand-primary sm:text-2xl">{title}</h2>
      <div className="mt-6">
        <Accordion
          items={faqs.map((faq, i) => ({
            id: `faq-${i}`,
            title: faq.q[locale],
            content: <p>{faq.a[locale]}</p>,
          }))}
        />
      </div>
    </section>
  );
}
