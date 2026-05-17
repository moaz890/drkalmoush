export const PHONE_PRIMARY_DISPLAY = "01092066240";
export const PHONE_PRIMARY_TEL = "+201092066240";

export const WHATSAPP_DISPLAY = "+20 109 206 6240";
export const WHATSAPP_URL = "https://wa.me/201092066240";

export const BRANCHES = [
  {
    key: "mokattam",
    nameAr: "المقطم - القاهرة",
    nameEn: "Mokattam, Cairo",
    addressAr: "شارع 9 عمارات البترول أعلى حلويات الحلمية",
    addressEn: "Street 9, Petroleum Buildings, above El-Helmia Sweets",
    phoneDisplay: "01023053320",
    phoneTel: "+201023053320",
  },
  {
    key: "zagazig",
    nameAr: "الزقازيق",
    nameEn: "Zagazig",
    addressAr: "أول ش موقف المنصورة بعد كوبري العبور بجوار الصواف",
    addressEn:
      "First street after Mansoura station (after Al-Obour bridge), beside El-Sawaf",
    phoneDisplay: "01033966769",
    phoneTel: "+201033966769",
  },
  {
    key: "hehya",
    nameAr: "ههيا",
    nameEn: "Hehya",
    addressAr: "بجوار مدرسة الصنايع بنين",
    addressEn: "Next to the Industrial Boys School",
    phoneDisplay: "01033966745",
    phoneTel: "+201033966745",
  },
] as const;

export const MAPS = {
  mokattam: "https://maps.app.goo.gl/ibtunv6rE1UnxXz86",
  hehya:
    "https://www.google.com/maps/place/%D9%85%D8%B1%D9%83%D8%B2+%D8%A7%D9%84%D8%B7%D9%8A%D8%A8+%D9%84%D9%84%D8%AC%D8%B1%D8%A7%D8%AD%D8%A9+%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9+%D9%88%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%B8%D9%8A%D8%B1+%D8%A7%D9%84%D8%AC%D8%B1%D8%A7%D8%AD%D9%8A%D8%A9%E2%80%AD/@30.6690366,31.5906534,18.04z/data=!4m15!1m8!3m7!1s0x14f7f52373e67c9d:0x453a60c07ffe674!2z2YfZh9mK2KfYjCDZhdix2YPYsiDZh9mH2YrYp9iMINmF2K3Yp9mB2LjYqSDYp9mE2LTYsdmC2YrYqQ!3b1!8m2!3d30.6719395!4d31.5913577!16s%2Fm%2F0gy1lq5!3m5!1s0x14f7f5006f988981:0x6750a1191cb99b5a!8m2!3d30.6681191!4d31.5900288!16s%2Fg%2F11ym759mhz?entry=ttu&g_ep=EgoyMDI2MDQyMS4wIKXMDSoASAFQAw%3D%3D",
  zagazig:
    "https://www.bing.com/maps/search?v=2&pc=FACEBK&mid=8100&mkt=en-US&FORM=FBKPL1&q=%D8%A7%D9%88%D9%84+%D8%B4+%D9%85%D9%88%D9%82%D9%81+%D8%A7%D9%84%D9%85%D9%86%D8%B5%D9%88%D8%B1%D8%A9+%D8%A8%D8%B9%D8%AF+%D9%83%D9%88%D8%A8%D8%B1%D9%8A+%D8%A7%D9%84%D8%B9%D8%A8%D9%88%D8%B1+%D8%A8%D8%AC%D9%88%D8%A7%D8%B1+%D8%A7%D9%84%D8%B5%D9%88%D8%A7%D9%81+%2C+Zagazig%2C+Egypt&cp=30.579828%7E31.496586&lvl=21&style=r",
} as const;

/** TODO: replace with real social profiles when available */
export const SOCIALS = {
  facebook: "https://www.facebook.com/profile.php?id=100087022950616",
  tiktok: "https://www.tiktok.com/",
  instagram: "https://www.instagram.com/dr.abdelfattahmorsi",
  youtube: "https://www.youtube.com/@abd-elfattahkalmoush9985",
} as const;

/** Featured clinic YouTube shorts/clips — order matches `videosSection.items` titles in messages */
export const YOUTUBE_CLINIC_VIDEOS = [
  {
    id: "tmztvUB7eBU",
    watchUrl: "https://youtu.be/tmztvUB7eBU?si=6gtxFEG5Y1m7qsk8",
  },
  {
    id: "mZVPE5GoHdE",
    watchUrl: "https://youtu.be/mZVPE5GoHdE?si=-0uVT7xzpPQeqOaw",
  },
  {
    id: "a95SNLfy2Cg",
    watchUrl: "https://youtu.be/a95SNLfy2Cg?si=bbMNZDXC_wFJ9V5u",
  },
  {
    id: "OvW4W97XD1o",
    watchUrl: "https://youtu.be/OvW4W97XD1o?si=dx7B3uA4cNMfnmTO",
  },
  {
    id: "csWPaSl_OQk",
    watchUrl: "https://youtu.be/csWPaSl_OQk?si=_MmWiEM7Q7AhPKK-",
  },
  {
    id: "CQdkGuMZuFM",
    watchUrl: "https://youtu.be/CQdkGuMZuFM?si=Qc65aw7jw2fu4CIo",
  },
] as const;

export const BLOG_SLUGS = [
  "bariatric-surgery-options",
  "laparoscopic-surgery-modern-care",
  "hiatal-hernia-reflux-relief",
] as const;

export type BlogSlug = (typeof BLOG_SLUGS)[number];
