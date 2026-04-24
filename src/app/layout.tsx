import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import { headers } from "next/headers";
import { routing } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-english",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Prof. Dr. Abd-Elfattah Kalmoush",
    template: "%s | Prof. Dr. Abd-Elfattah Kalmoush",
  },
  description:
    "Professor & consultant of bariatric, laparoscopic and GI surgery in Egypt.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const locale = headerList.get("x-next-intl-locale") ?? routing.defaultLocale;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${cairo.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
