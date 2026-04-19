import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  TIKTOK_URL,
  WHATSAPP_URL,
} from "@/lib/constants";

const quickLinks = [
  { href: "#about", key: "about" as const },
  { href: "#services", key: "services" as const },
  { href: "#doctors", key: "doctors" as const },
  { href: "#offers", key: "offers" as const },
  { href: "#contact", key: "contact" as const },
] as const;

export async function Footer() {
  const t = await getTranslations("nav");
  const tf = await getTranslations("footer");
  const tc = await getTranslations("common");
  const tContact = await getTranslations("contact");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-dark/10 bg-brand-dark text-slate-200">
      <Container className="py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt={tc("brandName")}
                width={52}
                height={52}
                className="h-12 w-auto object-contain"
              />
              <span className="text-lg font-bold text-white">
                {tc("brandName")}
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-slate-400">
              {tf("tagline")}
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              {tf("quickLinks")}
            </h2>
            <ul className="mt-4 flex flex-col gap-2">
              {quickLinks.map(({ href, key }) => (
                <li key={key}>
                  <a
                    href={href}
                    className="text-slate-300 transition hover:text-white"
                  >
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t("contact")}
            </h2>
            <div className="mt-4 flex gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-secondary hover:text-white"
                aria-label={tContact("whatsapp")}
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-primary hover:text-white"
                aria-label={tContact("instagram")}
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#1877f2] hover:text-white"
                aria-label={tContact("facebook")}
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-brand-dark"
                aria-label={tContact("tiktok")}
              >
                <FaTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          © {year} {tc("brandName")}. {tf("rights")}
        </p>
      </Container>
    </footer>
  );
}
