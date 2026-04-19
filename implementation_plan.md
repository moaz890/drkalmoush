# Pet Vet Clinic — Implementation Plan

## Project Overview

A modern, bilingual (Arabic / English) landing page for **Pet Vet Clinic** — a comprehensive veterinary clinic with two branches in Nasr City and Zaitoon, Cairo. The site must feel premium, be fully responsive, and support RTL/LTR layout switching.

---

## Brand Identity & Assets

| Item | Detail |
|---|---|
| **Name** | Pet Vet Clinic |
| **Tagline** | Keeping your pets healthy and happy |
| **Arabic Bio** | عيادة بيطرية شاملة للحيوانات الاليفة بها جميع الخدمات البيطرية (عمليات – كشوفات – سونار – تحاليل – جرومنج) مع توافر جميع المستلزمات البيطرية والأدوية والاكل |
| **Colors** | Extracted from `public/logo.png` (3 brand colors) |
| **Branches** | Nasr City · Zaitoon |
| **Doctors** | Dr. Mark Eskandar · Dr. Tarek Ghobashy |
| **Call** | 012 24289070 |
| **WhatsApp** | +20 10 28012414 |
| **Email** | marceskanderattallah@gmail.com |
| **Instagram** | [@tarek_ghobashy](https://www.instagram.com/tarek_ghobashy) |
| **TikTok** | [@tarek3369](https://www.tiktok.com/@tarek3369) |

### Assets Map

- `public/logo.png` — Clinic logo
- `public/markeskandar.png` — Dr. Mark Eskandar photo
- `public/tarekghobashy.png` — Dr. Tarek Ghobashy photo
- `public/offer-1.png`, `offer-2.png`, `offer-3.png` — Promotional offers
- `public/patient-1.png`, `patient-2.png`, `patient-3.png` — Happy patients gallery

---

## Phase 1 — Project Setup & Theming

> Foundation: tooling, folder structure, bilingual infrastructure, and design tokens.

### 1.1 Initialize Project
- Scaffold with **Next.js** (App Router) + **Tailwind CSS**.
- Install `next-intl` for internationalization (i18n).
- Configure ESLint, Prettier.

### 1.2 Bilingual (i18n) Setup
- Create locale files: `messages/ar.json` and `messages/en.json`.
- Configure `next-intl` middleware for locale routing (`/ar`, `/en`).
- Set default locale to **Arabic (`ar`)**.
- Add `dir="rtl"` / `dir="ltr"` switching on `<html>` tag based on active locale.

### 1.3 Design Tokens & Global Styles
- Extract 3 brand colors from `logo.png` and define as CSS custom properties.
- Configure Tailwind `theme.extend` with brand colors, fonts (Google Font — e.g. Cairo for Arabic, Inter for English).
- Create global CSS: resets, typography scale, RTL/LTR utilities.

### 1.4 Shared UI Components
- **LanguageSwitcher** — Toggle between AR / EN.
- **Button** — Primary / Secondary / WhatsApp CTA variants.
- **SectionHeading** — Reusable heading with underline accent.
- **Container** — Max-width wrapper with responsive padding.

---

## Phase 2 — Header, Hero & About

> First visual impression and clinic introduction.

### 2.1 Header / Navbar
- Clinic logo on one side, nav links on the other.
- Navigation items: Home, About, Services, Doctors, Offers, Gallery, Contact.
- **LanguageSwitcher** button (AR ↔ EN).
- Mobile hamburger menu.
- Sticky on scroll with subtle background blur.

### 2.2 Hero Section
- Large welcoming visual with brand colors/gradients.
- Headline & tagline (bilingual from locale files).
- Primary CTA: "Book Now" → scrolls to Contact or opens WhatsApp link.
- Secondary CTA: "View Offers" → scrolls to Offers section.

### 2.3 About Us Section
- Bilingual clinic bio paragraph.
- Mention of two branches (Nasr City & Zaitoon).
- Optional: small icon list reinforcing key differentiators (e.g., 24/7, experienced team).

---

## Phase 3 — Services & Veterinarians

> Showcase expertise and build trust.

### 3.1 Services Section
Card grid (2–3 columns desktop, 1 column mobile) for each service:

| # | Service (EN) | Service (AR) |
|---|---|---|
| 1 | Surgeries | عمليات |
| 2 | Examinations | كشوفات |
| 3 | Ultrasound | سونار |
| 4 | Lab Tests | تحاليل |
| 5 | Grooming | جرومنج |
| 6 | Pharmacy & Supplies | مستلزمات وأدوية وأكل |

- Each card: icon/illustration, title, short description (all bilingual).
- Hover micro-animation (scale + shadow).

### 3.2 Our Veterinarians Section
- Side-by-side (or stacked on mobile) doctor profile cards.
- **Dr. Mark Eskandar** — photo from `markeskandar.png`, name, brief role text.
- **Dr. Tarek Ghobashy** — photo from `tarekghobashy.png`, name, brief role text.
- Subtle entrance animation on scroll.

---

## Phase 4 — Offers, Gallery & Testimonials

> Social proof and engagement.

### 4.1 Special Offers Section
- Carousel or responsive grid displaying `offer-1.png`, `offer-2.png`, `offer-3.png`.
- Each offer card with a CTA linking to WhatsApp for booking.
- Bilingual section heading.

### 4.2 Happy Patients Gallery
- Image gallery using `patient-1.png`, `patient-2.png`, `patient-3.png`.
- Lightbox or modal view on click.
- Warm heading: "Our Happy Patients" / "مرضانا السعداء".

---

## Phase 5 — Contact, Footer & Map

> Drive conversions and provide all contact details.

### 5.1 Contact Section
- Two-column layout: contact info on one side, embedded map on the other.
- **Contact channels** with icons:
  - 📞 Call: `012 24289070`
  - 💬 WhatsApp: `+20 10 28012414` (deep link `https://wa.me/201028012414`)
  - 📧 Email: `marceskanderattallah@gmail.com`
  - 📸 Instagram link
  - 🎵 TikTok link
- **Branch tabs** or cards: Nasr City address · Zaitoon address.
- Embedded map for Nasr City branch (Google Maps embed or Bing Maps iframe).

### 5.2 Footer
- Clinic logo, copyright, quick-links, social media icons.
- Bilingual text.

---

## Phase 6 — Polish, SEO & Deployment

> Final optimization pass.

### 6.1 Animations & Micro-interactions
- Scroll-triggered entrance animations (Framer Motion or CSS `@keyframes`).
- Smooth scrolling between sections.
- Hover/focus effects on all interactive elements.

### 6.2 SEO
- `<title>` and `<meta description>` per locale.
- Open Graph & Twitter Card meta tags.
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`).
- Image `alt` text in both languages.
- `robots.txt` and `sitemap.xml`.

### 6.3 Performance
- Optimize images (Next.js `<Image />` with `priority` on hero).
- Lazy-load below-the-fold images.
- Lighthouse audit targeting 90+ on all metrics.

### 6.4 Deployment
- Deploy to **Vercel** (free tier).
- Configure custom domain (if available).
- Verify locale routing works in production.

---

## Bilingual Strategy Summary

| Concern | Approach |
|---|---|
| **Routing** | `/ar/…` (default) and `/en/…` via `next-intl` middleware |
| **Translations** | JSON locale files (`messages/ar.json`, `messages/en.json`) |
| **Direction** | `dir="rtl"` for Arabic, `dir="ltr"` for English on `<html>` |
| **Fonts** | Cairo (Arabic) + Inter (English) loaded via `next/font/google` |
| **Switcher** | Persistent language toggle in the header |

---

*Review this plan and let me know if you'd like to adjust any phase, add/remove sections, or provide any additional data (e.g., Zaitoon branch address, doctor bios, service descriptions).*
