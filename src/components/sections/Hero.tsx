import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { buttonClassName } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WHATSAPP_URL } from "@/lib/constants";

export async function Hero() {
  const t = await getTranslations("hero");
  const tc = await getTranslations("common");

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-brand-secondary/15 via-white to-brand-primary/10"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgb(0 149 225 / 0.25), transparent 45%), radial-gradient(circle at 80% 60%, rgb(202 37 158 / 0.2), transparent 40%)",
        }}
      />
      <Container className="relative grid items-center gap-10 py-16 md:grid-cols-2 md:py-24 lg:py-28">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-secondary">
            {tc("brandName")}
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-brand-dark md:text-5xl lg:text-6xl">
            {t("headline")}
          </h1>
          <p className="mt-4 text-lg text-brand-muted md:text-xl">
            {t("tagline")}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClassName("primary")}
            >
              {t("primaryCta")}
            </a>
            <a href="#offers" className={buttonClassName("secondary")}>
              {t("secondaryCta")}
            </a>
          </div>
        </div>
        <div className="relative mx-auto flex max-w-md justify-center md:max-w-none">
          <div className="relative aspect-square w-full max-w-sm rounded-3xl bg-gradient-to-br from-white to-brand-secondary/20 p-6 shadow-brand ring-1 ring-brand-primary/10 md:max-w-md">
            <Image
              src="/logo.png"
              alt={tc("brandName")}
              width={400}
              height={400}
              className="h-full w-full object-contain"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
