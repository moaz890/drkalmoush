export type PageType =
  | "service"
  | "commercial"
  | "comparison"
  | "faq"
  | "article"
  | "journey"
  | "success";

export type ContentCluster =
  | "gastric-sleeve"
  | "gastric-bypass"
  | "mini-gastric-bypass"
  | "revision-surgery"
  | "gastric-balloon"
  | "bariatric-surgery"
  | "morbid-obesity"
  | "gerd"
  | "diabetes-obesity"
  | "sleep-apnea"
  | "endoscopy"
  | "colonoscopy"
  | "hiatal-hernia";

export type LocaleText = { ar: string; en: string };

export type FaqItem = { q: LocaleText; a: LocaleText };

export type ContentSection = {
  heading: LocaleText;
  paragraphs: LocaleText[];
};

export type SeoPage = {
  id: string;
  type: PageType;
  cluster: ContentCluster;
  slug: LocaleText;
  title: LocaleText;
  metaDescription: LocaleText;
  h1: LocaleText;
  intro: LocaleText;
  sections: ContentSection[];
  faqs?: FaqItem[];
  relatedPageIds: string[];
  sitemapPriority: number;
};

export type LocationPage = {
  id: string;
  type: "location";
  cluster: ContentCluster;
  cityKey: "mokattam" | "zagazig" | "hehya";
  servicePageId: string;
  slug: LocaleText;
  title: LocaleText;
  metaDescription: LocaleText;
  h1: LocaleText;
  intro: LocaleText;
  sections: ContentSection[];
  faqs?: FaqItem[];
  relatedPageIds: string[];
  sitemapPriority: number;
};
