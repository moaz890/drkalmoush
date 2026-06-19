import { getPageById } from "./registry";
import type { SeoPage } from "./types";

export type ServiceMenuGroup = {
  id: "bariatric" | "endoscopy" | "guides";
  pageIds: string[];
};

export const SERVICE_MENU_GROUPS: ServiceMenuGroup[] = [
  {
    id: "bariatric",
    pageIds: [
      "bariatric-surgery",
      "gastric-sleeve",
      "gastric-bypass",
      "mini-gastric-bypass",
      "gastric-balloon",
      "revision-bariatric",
      "morbid-obesity",
      "diabetes-obesity",
      "sleep-apnea-obesity",
    ],
  },
  {
    id: "endoscopy",
    pageIds: [
      "endoscopy",
      "upper-endoscopy",
      "colonoscopy",
      "hiatal-hernia",
      "gerd",
      "colonoscopy-prep",
    ],
  },
  {
    id: "guides",
    pageIds: [
      "gastric-sleeve-price",
      "gastric-bypass-price",
      "sleeve-vs-bypass",
      "sleeve-vs-balloon",
      "bypass-vs-balloon",
      "weight-loss-after-sleeve",
      "weight-regain-after-sleeve",
      "sleeve-risks",
      "patient-journey-bariatric",
      "before-after-sleeve",
    ],
  },
];

export function getServiceMenuGroups() {
  return SERVICE_MENU_GROUPS.map((group) => ({
    ...group,
    pages: group.pageIds
      .map((id) => getPageById(id))
      .filter((p): p is SeoPage => p !== undefined),
  })).filter((g) => g.pages.length > 0);
}
