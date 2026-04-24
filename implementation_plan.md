# Dr. Abd-Elfattah Kalmoush — Clinic Website Implementation Plan

> **Goal:** A premium, bilingual (AR/EN) landing page inspired by [mohamednafe3.com](https://mohamednafe3.com) to present as a professional demo to the doctor.

---

## Doctor Profile

| Field | Detail |
|---|---|
| **Name** | Prof. Dr. Abd-Elfattah Kalmoush |
| **Arabic** | أ.د. عبد الفتاح قلموش |
| **Title** | Professor of General Surgery |
| **Specialty** | Consultant in Bariatric Surgery, Abdominal Wall, Hernia, Gastrointestinal & Hepatobiliary Surgery |
| **Position** | Head of Unit of Advanced Laparoscopic Surgery, Al-Azhar University Hospitals |
| **Research** | International Researcher in General Surgery, Bariatric & Obesity Surgery |

### Memberships & Professional Affiliations
- Member of the International Federation for the Surgery and Other Therapies for Obesity (IFSO)
- Member of the Egyptian Society for Bariatric Surgery (ESBS)
- Member of the Egyptian Society of Laparoscopic Surgeons (ESLS)

### Surgical Procedures
1. **Tummy Tuck** (شد البطن وإزالة الترهلات) — image: `tummy-tuck.png`
2. **Gastric Bypass** (تحويل المسار لعلاج السمنة) — image: `gasteric-bypass.png`
3. **Laparoscopic Diaphragmatic Hernia Repair** (إصلاح فتق الحجاب الحاجز بالمنظار) — image: `laparoscopic.png`

### Clinic Branches

| Branch | Address | Phone |
|---|---|---|
| **Mokattam, Cairo** | شارع 9 عمارات البترول أعلى حلويات الحلمية | 01023053320 |
| **Zagazig** | أول ش موقف المنصورة بعد كوبري العبور بجوار الصواف | 01033966769 |
| **Hehya** | بجوار مدرسة الصنايع بنين | 01033966745 |

### Contact
- **Phone / WhatsApp:** 01033966769
- **Maps:** [Hehya Branch](https://www.google.com/maps/place/...) · [Zagazig Branch](https://www.bing.com/maps/search?...)

### Assets (in `public/`)
- `hero.png` — Hero section background
- `logo.jpeg` — Clinic logo
- `doctor-positions.png` — Credentials & affiliations graphic
- `tummy-tuck.png`, `gasteric-bypass.png`, `laparoscopic.png` — Procedure images

---

## Existing Codebase

The project is already scaffolded with:
- **Next.js 16** (App Router) + **Tailwind CSS v4**
- **next-intl** v4 for i18n (locale routing exists, JSON files empty)
- **Framer Motion**, **react-icons**, **react-hook-form**, **zod**
- Locale files: `messages/ar.json`, `messages/en.json` (empty)
- Source structure: `src/app/[locale]/page.tsx`, `src/i18n/`, `src/middleware.ts`

---

## Section Map (inspired by mohamednafe3.com)

| # | Section | Key Elements |
|---|---|---|
| 1 | **Header / Navbar** | Two-row layout (info bar + nav bar), scroll-triggered compact mode, RTL/LTR auto-flip |
| 2 | **Hero** | Full-screen carousel (3 slides), doctor cutout images, dark overlay, vertical social links, auto-rotate 5s |
| 3 | **Highlights Strip** | 3 pastel-colored cards (expertise, techniques, achievements) below hero |
| 4 | **About / Credentials** | 3-column: surgery images + bio/credentials list + YouTube video embed |
| 5 | **Services** | Horizontal cards: icon + specialties text + surgery image + "Read More" dialog |
| 6 | **Clinic Hours & FAQ** | 2-column: Dark navy schedule sidebar + medical-branded FAQ accordion |
| 7 | **Testimonials** | Patient testimonials / experiences section |
| 8 | **Videos** | Video gallery of procedures & educational content |
| 9 | **Conferences & Workshops** | Conference appearances and workshop gallery |
| 10 | **Blog** | Blog posts / articles listing |
| 11 | **Clinics & Booking** | Detailed branch maps & full address info (Cairo, Zagazig, Hehya) |
| 12 | **Footer** | Logo, quick links, contact info, copyright |

---

## Phase 1 — Foundation & Theming

> Setup design tokens, bilingual infrastructure, shared components.

### 1.1 Design Tokens & Global Styles
- Extract brand colors from `logo.jpeg` and `doctor-positions.png` (dark navy, gold/cream accents).
- Configure Tailwind `@theme` with brand palette, typography scale.
- Load Google Fonts: **Cairo** (Arabic) + **Inter** (English).
- Global CSS: RTL/LTR utilities, smooth scrolling, selection colors.

### 1.2 Bilingual (i18n) Content
- Populate `messages/ar.json` with all Arabic content (procedures, bio, addresses, CTAs).
- Populate `messages/en.json` with English translations.
- Verify `next-intl` middleware routing (`/ar` default, `/en`).
- `dir="rtl"` for Arabic, `dir="ltr"` for English on `<html>`.

### 1.3 Shared UI Components
- `SectionHeading` — Title + subtitle + gold accent bar.
- `Button` — Primary (gold) / Secondary (outline) / WhatsApp (green) variants.
- `Container` — Max-width wrapper with responsive padding.
- `LanguageSwitcher` — AR ↔ EN toggle.

---

## Phase 2 — Header & Hero

### 2.1 Header / Navbar

> **Reference Design:** The navbar has TWO distinct states — a **full expanded state** (default/top of page) and a **compact scrolled state**. Both states must respect `dir="rtl"` for Arabic and `dir="ltr"` for English, meaning ALL element order must flip when the language changes.

#### 📐 State 1 — Full Navbar (Default, user at top of page)

The full navbar consists of **two rows** stacked vertically:

**Top Row (Info Bar):**
| Position (RTL) | Element | Details |
|---|---|---|
| **Far Right** | **Logo** | Large/prominent logo (`logo.jpeg`), visually dominant, ~60–80px height |
| **Center-Right** | **3 Clinic Locations** | Three clinic branches displayed side-by-side, each showing: branch name + short address. Separated by vertical dividers. |
| **Center-Left** | **WhatsApp Contact** | Phone number `+20 109 206 6240` with WhatsApp icon, styled as a clickable link |
| **Far Left** | **Language Switcher** | `English 🇬🇧` / `عربي 🇪🇬` toggle button with flag icon |

> In LTR (English) mode, the order is **mirrored**: Logo → Far Left, Locations → Center-Left, WhatsApp → Center-Right, Language Switcher → Far Right.

**Bottom Row (Navigation Bar):**
| Position (RTL) | Element | Details |
|---|---|---|
| **Right side** | **Nav Links** | Horizontal list: الرئيسية · عن الدكتور والسيرة الذاتية · +خدماتنا الطبية · تجارب المرضى · الفيديوهات · المؤتمرات والورش العملية · +المدونة · Workshop |
| **Far Left** | **2 CTA Buttons** | "حجز موعد" (Book Appointment) + "حجز استشارة أونلاين" (Book Online Consultation) — gold/brand-colored buttons |

> The `+` prefix on "خدماتنا الطبية" and "المدونة" indicates a dropdown/submenu for future use (render as a `+` icon or chevron next to the text for now).

**Visual styling for full navbar:**
- White/light background with a subtle bottom border
- Gold/brand accent on the bottom nav row (underline on active link)
- Logo should be clearly visible and large (not tiny)
- Clinic locations text should be small/medium (12–14px)
- Nav links should be bold, ~14px, dark navy color

#### 📐 State 2 — Compact Navbar (After scrolling past ~100px)

When the user scrolls down past a threshold (~100px), the full navbar **slides up and hides**. After a brief moment, a **new compact navbar** appears, **fixed/sticky** at the top:

**Single Row Layout:**
| Position (RTL) | Element | Details |
|---|---|---|
| **Far Right** | **Logo** | Smaller version of the logo (~40px height) |
| **Center** | **Nav Links** | Same links as bottom row in State 1, but in a more compact spacing |
| **Far Left** | **2 CTA Buttons** | Same "حجز موعد" + "حجز استشارة أونلاين" buttons |

> In LTR (English) mode, the order is **mirrored**: Logo → Far Left, Links → Center, CTAs → Far Right.

**Visual styling for compact navbar:**
- White background with subtle shadow (`shadow-sm`)
- Backdrop blur effect (`backdrop-blur`)
- Smooth slide-down entrance animation (translate-Y from -100% to 0)
- Fixed position `top-0`

#### 🔄 RTL / LTR Directionality — CRITICAL

> [!CAUTION]
> The current implementation does NOT properly flip element order when language changes. This must be fixed.

**Root cause & fix:**
- The `<html dir="rtl|ltr">` is already set correctly in `src/app/layout.tsx`.
- All CSS must use **logical properties** instead of physical ones:
  - ✅ `ms-4` (margin-inline-start) instead of ❌ `ml-4` (margin-left)
  - ✅ `me-4` (margin-inline-end) instead of ❌ `mr-4` (margin-right)
  - ✅ `ps-4` / `pe-4` instead of ❌ `pl-4` / `pr-4`
  - ✅ `start-0` / `end-0` instead of ❌ `left-0` / `right-0`
  - ✅ `text-start` / `text-end` instead of ❌ `text-left` / `text-right`
- Use `flex-row` (default) and let `dir` attribute handle ordering. Do NOT use explicit `flex-row-reverse` for RTL — the `dir` attribute on `<html>` handles this automatically.
- **Every** component (Header, Hero, etc.) must be audited for physical CSS properties and replaced with logical equivalents.

#### 📱 Mobile Menu (< md breakpoint)
- Both rows collapse into a hamburger menu icon.
- Slide-in drawer from the **end** side (right in RTL, left in LTR) — use `end-0` not `right-0`.
- Drawer contains: Logo, Language Switcher, all nav links vertically stacked, 2 CTA buttons at bottom.
- Overlay backdrop on click-outside to close.

#### 🧩 Updated Nav Links

Replace the old 5-link list with these links (matching the reference design):

| Key | Arabic Label | English Label | href |
|---|---|---|---|
| `home` | الرئيسية | Home | `#home` |
| `about` | عن الدكتور والسيرة الذاتية | About & CV | `#about` |
| `services` | خدماتنا الطبية | Our Services | `#services` |
| `testimonials` | تجارب المرضى | Testimonials | `#testimonials` |
| `videos` | الفيديوهات | Videos | `#videos` |
| `conferences` | المؤتمرات والورش العملية | Conferences & Workshops | `#conferences` |
| `blog` | المدونة | Blog | `#blog` |
| `workshop` | Workshop | Workshop | `#workshop` |

### 2.2 Hero Section

> **Reference Design:** Full-screen hero with a rotating carousel, doctor cutout image animated from bottom, text overlay with credentials, vertical social links sidebar, and dark navy overlay — NO white gradient.

#### 📐 Layout

```
┌─────────────────────────────────────────────────────────────────┐
│ [Social]  │                                              │      │
│  Links    │   Tagline (small gold text above title)      │      │
│  (vertical│   ─────────────────────────────────           │      │
│   list)   │   Large Bold Title Text                      │      │
│   FB      │   (2-3 lines, white, large font)             │      │
│   TikTok  │                                              │ Doctor│
│   Insta   │   Subtitle text (gold/cream)                 │ Image │
│   YT      │                                              │(cutout│
│           │   [احجز موعد الآن]  [حجز استشارة أونلاين]    │ PNG)  │
│           │                                              │      │
├─────────────────────── Carousel Dots ───────────────────────────┤
└─────────────────────────────────────────────────────────────────┘
```

#### 🖼️ Full-Screen & Background

- Height: `h-screen` (100vh) — takes the **full viewport height**, not half.
- Background: `hero.png` as a full-cover background image with `object-cover`.
- **Dark overlay:** A semi-transparent dark navy overlay (`bg-brand-secondary/80` or similar) on top of the background image. **NO white gradient at all** — remove the existing `from-brand-secondary/75 via-brand-secondary/55 to-white` gradient.

#### 🔄 Carousel (3 Slides, auto-rotate every 5 seconds)

The hero contains a **carousel** that cycles through 3 slides automatically every **5 seconds**. Each slide has:

| Slide | Doctor Image (cutout PNG) | Tagline / Title Text |
|---|---|---|
| **Slide 1** | `hero-1-removebg-preview.png` | **Tagline:** "نرسم الأمل من جديد... معالجة العيوب الخلقية تبدأ من هنا" · **Title:** "أستاذ جراحة عامة – كلية الطب جامعة الأزهر" · **Subtitle:** "رئيس وحدة جراحات المناظير المتقدمة – مستشفيات جامعة الأزهر" |
| **Slide 2** | `hero-2-removebg-preview.png` | **Tagline:** "خبرة دولية في جراحات السمنة والمناظير" · **Title:** "استشاري جراحات السمنة وجدار البطن والفتق" · **Subtitle:** "عضو الاتحاد الدولي لجراحة السمنة (IFSO)" |
| **Slide 3** | `hero-3-removebg-preview.png` | **Tagline:** "باحث دولي في الجراحة العامة وجراحات السمنة" · **Title:** "عضو الجمعية المصرية لجراحة السمنة (ESBS)" · **Subtitle:** "عضو الجمعية المصرية لجراحي المناظير (ESLS)" |

#### 🎞️ Slide Animation

- **Doctor cutout image:** When a slide becomes active, the doctor image enters from **below** the hero section (translate-Y from 100% to 0) with a smooth ease-out transition (~0.8s). The image should be positioned at the **start side** of the hero (right in RTL, left in LTR), partially overlapping the bottom edge.
- **Text content:** Fades in from the **end side** (left in RTL, right in LTR) with a slight delay after the image (~0.3s delay).
- **On slide exit:** Both image and text fade out before the next slide enters.
- Use Framer Motion `AnimatePresence` for smooth enter/exit transitions.

#### 📱 Social Links (Vertical Sidebar)

A **vertical list** of social media icons, positioned on the **end side** of the hero (left in RTL, right in LTR), centered vertically:

- Facebook icon
- TikTok icon
- Instagram icon
- YouTube icon

Style: Small circular icons (~36px), white/light color, with subtle hover scale effect. Use `react-icons` (FaFacebook, FaTiktok, FaInstagram, FaYoutube).

#### 🔘 Carousel Indicators

- Small dots at the bottom center of the hero section.
- Active dot = gold/brand color, larger. Inactive = white/transparent, smaller.
- Clicking a dot navigates to that slide.

#### 📲 CTA Buttons

- Two buttons at the bottom of the text area on every slide:
  - **"احجز موعد الآن"** (Book Now) — Primary gold button
  - **"حجز استشارة أونلاين"** (Book Online Consultation) — Outline/secondary button
- Both buttons persist across all slides (don't animate with slide transition).

### 2.3 Highlights Strip (Directly Below Hero)

> **Reference Design:** A horizontal strip of **3 pastel-colored cards** sitting flush below the hero section. Each card has: a colored icon at the top, a bold title, and a short description. The strip acts as a quick trust/expertise summary.

#### 📐 Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│                          White Background                            │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐      │
│  │   💊 (icon)      │  │   🏥 (icon)      │  │   🛡️ (icon)     │      │
│  │                  │  │                  │  │                  │      │
│  │  خبراء في المجال │  │ تقنيات جراحية   │  │ إنجازات طبية    │      │
│  │                  │  │   مبتكرة        │  │   عالمية        │      │
│  │  (description)   │  │  (description)   │  │  (description)   │      │
│  │                  │  │                  │  │                  │      │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘      │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

#### 🃏 The 3 Cards

| # | Icon | Background Color | Title (AR) | Title (EN) | Description (AR) | Description (EN) |
|---|---|---|---|---|---|---|
| 1 | Bariatric/weight icon (e.g. `GiWeightScale` from `react-icons/gi` or `FaWeight`) | **Light pink/rose** — `bg-[#fce4ec]` or `bg-rose-50` | خبراء جراحات السمنة | Bariatric Surgery Experts | استشاري متخصص في جراحات السمنة وتحويل المسار وتكميم المعدة بأحدث التقنيات العالمية | Specialized consultant in bariatric surgery, gastric bypass & sleeve gastrectomy using latest international techniques |
| 2 | Laparoscopic/surgical icon (e.g. `GiSurgicalKnife` or `FaStethoscope` from `react-icons`) | **Light olive/green** — `bg-[#f0f4c3]` or `bg-lime-50` | تقنيات مناظير متقدمة | Advanced Laparoscopic Techniques | رئيس وحدة جراحات المناظير المتقدمة بمستشفيات جامعة الأزهر، خبرة تفوق العقدين | Head of Advanced Laparoscopic Surgery Unit at Al-Azhar University Hospitals, over two decades of expertise |
| 3 | Medical shield/achievement icon (e.g. `FaAward` or `GiMedal` from `react-icons`) | **Light teal/blue** — `bg-[#e0f2f1]` or `bg-teal-50` | باحث دولي معتمد | Internationally Recognized Researcher | عضو الاتحاد الدولي لجراحة السمنة (IFSO) وباحث دولي في الجراحة العامة وجراحات السمنة | Member of IFSO & international researcher in general surgery and bariatric surgery |

#### 🎨 Card Styling — EXACT Specifications

**Card container:**
- `border-radius: 16px` (Tailwind: `rounded-2xl`)
- `padding: 32px 24px` (Tailwind: `px-6 py-8`)
- No border, no shadow — just the pastel background color
- `text-align: center` (Tailwind: `text-center`)
- Minimum height: ~200px so cards feel spacious
- `transition: transform 0.3s ease, box-shadow 0.3s ease` for hover effect

**Icon:**
- Size: `48px × 48px` (Tailwind: `text-5xl` or explicit `w-12 h-12`)
- Color: Matching but **darker** shade of the card background (e.g. pink card → dark rose icon `text-rose-600`, green card → `text-lime-700`, teal card → `text-teal-700`)
- Centered horizontally above the title
- Margin bottom: `mb-4`

**Title:**
- Font weight: `font-bold`
- Font size: `text-lg` (~18px)
- Color: `text-brand-dark` (dark navy)
- Margin bottom: `mb-3`

**Description:**
- Font size: `text-sm` (~14px)
- Color: `text-brand-muted` or `text-gray-600`
- Line height: `leading-relaxed`
- Max 2–3 lines of text

**Hover effect:**
- On hover: `transform: translateY(-4px)` + `box-shadow: 0 8px 24px rgba(0,0,0,0.08)`
- Smooth transition: `transition-all duration-300 ease-out`

#### 📏 Grid & Spacing

- **Container:** Same `Container` max-width wrapper as the rest of the site
- **Grid:** `grid grid-cols-1 md:grid-cols-3 gap-6`
- **Section padding:** `py-12 sm:py-16` — enough whitespace above and below
- **Section background:** Pure white (`bg-white`)
- On mobile (< md): Cards stack vertically, each full-width
- Cards should have **equal height** in the row — use `items-stretch` on the grid or make cards `h-full`

#### ✨ Entrance Animation

- Each card animates in on scroll with Framer Motion:
  - `initial={{ opacity: 0, y: 30 }}`
  - `whileInView={{ opacity: 1, y: 0 }}`
  - `viewport={{ once: true, amount: 0.3 }}`
  - Stagger: Card 1 delay `0s`, Card 2 delay `0.15s`, Card 3 delay `0.3s`
  - `transition={{ duration: 0.5, ease: "easeOut" }}`

---

## Phase 3 — About & Credentials (NEW DESIGN — replaces old About + Stats)

> **IMPORTANT:** Remove the existing `About.tsx` and `Stats` components entirely. Build this section from scratch as a single new `About.tsx` component.

> **Reference Design:** A 2-column section. Left column (RTL: right) has 2 surgery images stacked with a circular logo on the edge. Right column (RTL: left) has the doctor name label + heartbeat icon, a large headline, then below it a nested 2-sub-column row: bio/credentials on one side and YouTube video on the other.

### 📐 Overall Layout (2 Main Columns)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                                White Background                                 │
│                                                                                 │
│  ┌────────────────┐  ┌────────────────────────────────────────────────────────┐ │
│  │                │  │  أ.د. عبد الفتاح قلموش  ～⌇⌇～  (name + ECG icon)     │ │
│  │  surgery-1.png │  │                                                        │ │
│  │   (rounded)    │  │  خبرة عالمية في جراحات السمنة والمناظير               │ │
│  │                │  │  (LARGE HEADLINE — full width of this column)          │ │
│  │                │  │                                                        │ │
│  ├────────────────┤  │  ┌──────────────────────┐  ┌────────────────────────┐ │ │
│  │                │  │  │ [Logo - circular]     │  │                        │ │ │
│  │  surgery-2.png │  │  │ Bio paragraph...      │  │   YouTube Video        │ │ │
│  │   (rounded)    │  │  │                       │  │   (dark navy bg)       │ │ │
│  │                │  │  │ ✅ أستاذ جراحة عامة   │  │    ▶ play button       │ │ │
│  │                │  │  │ ✅ رئيس وحدة المناظير │  │                        │ │ │
│  │    [Logo       │  │  │ ✅ عضو IFSO           │  │                        │ │ │
│  │   overlapping  │  │  │ ✅ عضو ESBS & ESLS    │  │                        │ │ │
│  │     edge]      │  │  │                       │  │                        │ │ │
│  │                │  │  │ [المزيد] btn          │  │                        │ │ │
│  │                │  │  │ 📞 WhatsApp contact   │  │                        │ │ │
│  └────────────────┘  │  └──────────────────────┘  └────────────────────────┘ │ │
│                      └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

> In LTR (English), the entire layout mirrors automatically via `dir="ltr"`.

---

### 🏷️ Doctor Name Label + Heartbeat Icon

- Position: Top of the **content column** (not full section width), aligned to `end` (right in RTL)
- Layout: `flex items-center gap-2 justify-end` (the name and icon on the same line)
- Content: `أ.د. عبد الفتاح قلموش` / `Prof. Dr. Abd-Elfattah Kalmoush`
- Font: `text-sm font-semibold text-brand-accent` (gold/cream)
- **Heartbeat/ECG icon:** A small SVG heartbeat line icon (like `～⌇⌇～`) in red/brand-accent color, placed **after** the name. Use an inline SVG or an icon from `react-icons` (e.g. `GiHeartBeats` or `FaHeartbeat` from `react-icons`, colored `text-red-500`, size `text-lg`)
- Margin bottom: `mb-3`

### 📰 Section Headline

- Position: Inside the **content column**, full width of that column, above the nested sub-columns
- Content (AR): **"خبرة عالمية في جراحات السمنة والمناظير والجهاز الهضمي"**
- Content (EN): **"World-Class Expertise in Bariatric, Laparoscopic & GI Surgery"**
- Font: `text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight`
- Margin bottom: `mb-8 sm:mb-10`

---

### 🖼️ Column 1 — Surgery Images (RTL: right side, LTR: left side)

- **Width:** ~35% of section (`lg:col-span-4` in 12-col grid)
- **Layout:** `flex flex-col gap-4 relative`

**Image 1 (top):** `surgery-1.png`
**Image 2 (bottom):** `surgery-2.png`

- Each image:
  - `rounded-2xl overflow-hidden`
  - `object-cover w-full`
  - Height: roughly equal, ~240–280px each
  - Next.js `<Image />` with `width={400} height={280}` className `w-full h-auto rounded-2xl object-cover`
  - Shadow: `shadow-md`

**Circular Logo (overlapping):**
- `logo.jpeg` displayed as a circle overlapping the **bottom-end edge** of the images column (where it meets the content column)
- Size: `w-24 h-24` (96px)
- CSS: `absolute -end-12 bottom-10` (overlaps onto the content column by ~half its width)
- `rounded-full border-4 border-white shadow-lg`
- `z-10` to appear above other content

- Scroll animation: `initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}` (slides in from the start side)

---

### 📋 Column 2 — Content (RTL: left side, LTR: right side)

- **Width:** ~65% of section (`lg:col-span-8` in 12-col grid)
- Contains: Doctor name label → Headline → then a **nested 2-sub-column row**

#### Nested Sub-Columns (below the headline)

The content below the headline splits into **2 sub-columns**:

**Sub-Column A — Bio & Credentials (~55% of content column):**

**Bio Paragraph:**
- Content (AR): "أ.د. عبد الفتاح قلموش أستاذ الجراحة العامة بكلية الطب جامعة الأزهر، يُعد خبيرًا في جراحات السمنة والمناظير وجراحات جدار البطن والفتق والجهاز الهضمي والكبد والقنوات المرارية."
- Content (EN): "Prof. Dr. Abd-Elfattah Kalmoush, Professor of General Surgery at Al-Azhar University Faculty of Medicine, is an expert in bariatric surgery, laparoscopic procedures, abdominal wall & hernia surgery, and GI & hepatobiliary surgery."
- Font: `text-sm sm:text-base text-brand-muted leading-relaxed`
- Margin bottom: `mb-6`

**Credentials List (checkmark items):**

| # | Icon | Title (AR) | Title (EN) | Description (AR) | Description (EN) |
|---|---|---|---|---|---|
| 1 | ✅ `FaCheckCircle` `text-brand-accent` | أستاذ جراحة عامة | Professor of General Surgery | كلية الطب – جامعة الأزهر | Faculty of Medicine – Al-Azhar University |
| 2 | ✅ | رئيس وحدة المناظير المتقدمة | Head of Advanced Laparoscopic Unit | مستشفيات جامعة الأزهر | Al-Azhar University Hospitals |
| 3 | ✅ | عضو الاتحاد الدولي (IFSO) | IFSO Member | الاتحاد الدولي لجراحات السمنة | International Federation for Surgery of Obesity |
| 4 | ✅ | عضو ESBS & ESLS | ESBS & ESLS Member | الجمعية المصرية لجراحة السمنة وجراحي المناظير | Egyptian Society for Bariatric Surgery & Laparoscopic Surgeons |

- Each item: `flex items-start gap-3`
  - Icon: `text-brand-accent text-lg mt-1 flex-shrink-0`
  - Title: `font-bold text-brand-dark text-sm sm:text-base`
  - Description: `text-xs sm:text-sm text-brand-muted`
  - Spacing: `space-y-4`

**"المزيد" (More) Button:**
- `variant="outline"`, margin top `mt-6`
- Content: "المزيد" / "Read More"

**WhatsApp Contact Row:**
- `mt-6`, `flex items-center gap-3`
- WhatsApp icon: `FaWhatsapp text-green-500 text-2xl` inside a green circle bg
- Label: "للحجز والاستعلام" / "Booking & Inquiries" — `text-xs text-brand-muted`
- Phone: `+20 109 205 6240` — `text-base font-bold text-brand-dark dir="ltr"`
- Clickable: `<a href="https://wa.me/201092056240">`

**Sub-Column B — YouTube Video (~45% of content column):**

- **Dark navy background** container: `bg-brand-secondary rounded-2xl overflow-hidden`
- Aspect ratio: Tall/portrait-ish (similar to the reference — NOT standard 16:9, more like 3:4 or custom `aspect-[3/4]` since it shows stacked video thumbnails)
- Content: Embed YouTube video `https://youtu.be/j-g27rM3G4w`
  - **Thumbnail + play button overlay** for performance:
    1. YouTube auto-thumbnail as background
    2. Circular play button in center: `w-16 h-16 rounded-full bg-white/90` with `FaPlay text-brand-secondary text-xl`
    3. On click → replace with iframe `https://www.youtube.com/embed/j-g27rM3G4w?autoplay=1`
- Shadow: `shadow-xl`
- The sub-column layout: `grid grid-cols-1 lg:grid-cols-2 gap-6`

---

### 📏 Grid & Spacing

- **Outer container:** Same `Container` max-width wrapper
- **Main grid:** `grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start`
  - Images column: `lg:col-span-4`
  - Content column: `lg:col-span-8`
- **Nested sub-grid** (inside content column, below headline): `grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8`
- **Section padding:** `py-16 sm:py-20`
- **Section background:** `bg-white`
- **Section id:** `id="about"`

### 📱 Responsive (< lg breakpoint)

1. Images column goes full width, images side-by-side: `grid grid-cols-2 gap-4`
2. Content column goes full width below
3. Nested sub-columns stack: bio/credentials on top, video below
4. Circular logo moves to centered above bio paragraph instead of overlapping

### ✨ Entrance Animation

- Images column: `initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}` delay 0s
- Headline: `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}` delay 0.1s
- Bio sub-col: `initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}` delay 0.2s
- Video sub-col: `initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}` delay 0.3s
- All with `viewport={{ once: true, amount: 0.2 }}`

---

## Phase 4 — Services (NEW DESIGN — horizontal cards)

> **Reference Design:** A section with a centered header followed by large horizontal cards for each service. Each card has a clean white background, fixed height/layout, and high-quality surgery images.

### 📐 Section Header

- Content:
  - **أ.د. عبد الفتاح قلموش** (Gold color: `#B8860B` or `text-brand-accent`)
  - **Heartbeat Line Icon** (Pulse) placed beside the name. (Use `GiHeartBeats` or `FaHeartbeat` or an inline SVG heartbeat line).
  - **"خدماتنا الطبية"** (AR) / **"Our Medical Services"** (EN) (Large, dark navy, bold: `text-2xl sm:text-3xl`).
- Alignment: Centered horizontally.
- Spacing: `mb-12`.

### 🃏 Service Cards (Horizontal Layout)

Each card represents one surgery type and has the following horizontal structure (RTL, right to left):

1.  **Icon Wrapper (End side in RTL):**
    *   Circular background: `bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ms-6`.
    *   Icon: Related to surgery (e.g., `GiSurgicalKnife`, `FaUserMd`).
2.  **Title & Descriptive Text (Center-End):**
    *   Title: `text-xl font-bold text-brand-dark mb-2`.
    *   Description: "يتخصص الدكتور عبد الفتاح قلموش في إجراء [اسم العملية] بأحدث التقنيات الجراحية..."
    *   Max width for text area to allow image space.
3.  **Surgery Image (Center-Start):**
    *   Rounded image: `rounded-2xl overflow-hidden`.
    *   Assets: `tummy-tuck.png`, `gasteric-bypass.png`, `laparoscopic.png`.
    *   Size: `width={260} height={160}` (fixed size, aspect-video).
    *   Object-fit: `cover`.
4.  **Separator line (optional/subtle).**
5.  **"المزيد" (Read More) Button (Start side in RTL):**
    *   Outline button: `variant="outline" class="px-8 py-2"`.
    *   Alignment: Aligned to the start (left in RTL).

### 🛠️ Functionality — The "Read More" Dialog

- When the **"المزيد"** button is clicked, open a **Dialog/Modal** (using `@/components/ui/dialog` or similar).
- Dialog Content:
  *   Fetch detailed Arabic/English text from `info.md`.
  *   Show bullet points with details about the procedure, benefits, and recovery.
  *   Include a "Book Now" CTA inside the dialog.

### 🍱 The 3 Services Data

| # | Image Asset | Title (AR) | Title (EN) | Description Excerpt (AR) |
|---|---|---|---|---|
| 1 | `tummy-tuck.png` | شد البطن والترهلات | Tummy Tuck | عملية شدّ البطن وإزالة الترهلات هي حل طبي فعال لمساعدتك على الحصول على قوام متناسق. |
| 2 | `gasteric-bypass.png` | تحويل المسار | Gastric Bypass | تُعد عملية تحويل المسار من أشهر جراحات السمنة الحديثة لفقدان الوزن الزائد وتحسين السكري. |
| 3 | `laparoscopic.png` | فتق الحجاب الحاجز | Hiatal Hernia | إصلاح فتق الحجاب الحاجز بالمنظار للتخلص من أعراض ارتجاع المريء واستعادة جودة الحياة. |

### 📏 Styling & Animations

- **Section Background:** Subtle dots pattern or very light gradient (`bg-slate-50/50`).
- **Cards Styling:**
  *   `bg-white rounded-2xl shadow-sm border border-slate-100`.
  *   Spacing: `p-6 mb-6 last:mb-0`.
  *   Flex: `flex flex-col md:flex-row items-center`.
- **Responsive:**
  *   On Mobile: Change flex-row to flex-col. Image goes full width on top or bottom. Icon centeralized.
- **Animations:**
  *   Cards slide in from bottom with a staggered delay: `delay={index * 0.1s}`.

---

## Phase 5 — Clinic Hours & FAQ (NEW DESIGN — 2-column layout)

> **Reference Design:** A split section. Left column (RTL: right) is a dark navy box with clinic schedules and a gold book button. Right column (RTL: left) is a light area with medical-branded FAQ headers and an accordion.

### 📐 Overall Layout

- **Container:** Standard `Container` with full-width split.
- **Grid:** `grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-3xl shadow-xl`.
  - **Left Col (Hours):** `lg:col-span-5 bg-brand-secondary p-8 sm:p-12 text-white`.
  - **Right Col (FAQ):** `lg:col-span-7 bg-slate-50 p-8 sm:p-12`.

### 🕒 Left Column — Clinic Hours

- **Header Text:** `Zagazig Clinic Hours`, `Cairo Clinic Hours`, etc. (White, `text-2xl font-bold mb-6`).
- **Hours Box:**
  *   `border border-white/20 rounded-xl p-4 mb-8 flex justify-between items-center text-sm sm:text-base`.
  *   Content Example: `Sunday - Tuesday - Thursday` | `5:00 - 10:00 PM`.
- **Book Button:**
  *   Position: Bottom aligned to the end (left in RTL).
  *   Style: `bg-brand-accent hover:bg-brand-accent/90 text-brand-dark px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all`.
  *   Icon: `FaCalendarAlt`.
  *   Label: "حجز موعد بالكشف" / "Book An Appointment".

### ❓ Right Column — FAQ

- **Top Header:**
  *   `text-brand-accent tracking-widest text-xs font-bold uppercase mb-2`.
  *   Label: `ASK DR. ABD-ELFATTAH KALMOUSH`.
  *   Icon: Heartbeat line icon `FaHeartbeat` beside it.
- **Section Headline:**
  *   `text-3xl sm:text-4xl font-bold text-brand-dark mb-8`.
  *   Label: "أسئلة شائعة عن خدماتنا" / "Questions about our services".
- **Accordion Component:**
  *   Use `@/components/ui/accordion`.
  *   Style: Clean, white background for items, `+` icon for trigger.
  *   Content: 4-5 focused questions about Bariatric and Laparoscopic surgery (derived from `info.md`).

### 🍱 Sample FAQ Data

| # | Question (AR) | Question (EN) | Answer (AR) |
|---|---|---|---|
| 1 | ما هي عملية تحويل المسار؟ | What is Gastric Bypass? | تعتمد على تصغير المعدة وتغيير مسار الأمعاء لتقليل الوزن وتحسين السكر. |
| 2 | هل جراحة فتق الحجاب الحاجز آمنة؟ | Is Hiatal Hernia surgery safe? | نعم، تُجرى بالمنظار بفتحات صغيرة وألم أقل وفترة تعافي سريعة. |
| 3 | من هم المرشحون لجراحات السمنة؟ | Who are candidates for Bariatric surgery? | الأشخاص بمؤشر كتلة جسم 40+ أو 35+ مع أمراض مزمنة كالسكر والضغط. |

### 📏 Styling & Responsive

- On mobile: The dark sidebar stacks on top (or bottom depending on priority).
- Animation:
  *   Hours box slide from end: `initial={{ x: 50, opacity: 0 }}`.
  *   FAQ questions slide from bottom: `staggered children`.

---

---

## Phase 6 — Clinics, Contact & Footer

### 6.1 Clinics / Booking Section
- 3 branch cards side by side (stacked on mobile):
  - Branch name, full address, phone number.
  - "اتصل الآن" (Call) button + "واتساب" (WhatsApp) deep link.
- Embedded Google Map for Hehya branch, Bing Map for Zagazig branch.
- Large CTA banner: "احجز ميعاد زيارتك الآن".

### 6.2 Footer
- Dark navy background matching brand.
- Logo, quick nav links, contact info, copyright.
- Bilingual text.

---

## Phase 7 — Polish, SEO & Deployment

### 7.1 Animations & Micro-interactions
- Scroll-triggered entrance animations (Framer Motion).
- Smooth scroll navigation.
- Hover/focus effects on all interactive elements.

### 7.2 SEO
- `<title>` and `<meta description>` per locale.
- Open Graph & Twitter Card meta tags.
- Semantic HTML throughout.
- Image `alt` text in both languages.

### 7.3 Performance
- Next.js `<Image />` with `priority` on hero.
- Lazy-load below-the-fold images.
- Lighthouse audit targeting 90+.

### 7.4 Deployment
- Deploy to **Vercel** (free tier).
- Configure custom domain if available.
- Verify locale routing in production.

---

## Bilingual Strategy

| Concern | Approach |
|---|---|
| **Routing** | `/ar/…` (default) and `/en/…` via `next-intl` middleware |
| **Translations** | `messages/ar.json` + `messages/en.json` |
| **Direction** | `dir="rtl"` for Arabic, `dir="ltr"` for English |
| **Fonts** | Cairo (Arabic) + Inter (English) via `next/font/google` |
| **Switcher** | Persistent toggle in the header |
