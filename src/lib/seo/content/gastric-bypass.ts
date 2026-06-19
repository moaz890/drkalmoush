import type { SeoPage } from "../types";
import { faq, lt, section } from "./helpers";

export const gastricBypassPages: SeoPage[] = [
  {
    id: "gastric-bypass",
    type: "service",
    cluster: "gastric-bypass",
    slug: lt("عملية-تحويل-المسار", "gastric-bypass-surgery"),
    title: lt(
      "عملية تحويل المسار بالمنظار | أ.د. عبد الفتاح قلموش",
      "Gastric Bypass Surgery | Prof. Dr. Abd-Elfattah Kalmoush"
    ),
    metaDescription: lt(
      "عملية تحويل المسار (Roux-en-Y) مع أ.د. قلموش — جراح سمنة وعضو IFSO. فقدان وزن فعال وتحسن السكري. عيادات القاهرة والزقازيق وههيا.",
      "Roux-en-Y gastric bypass with Prof. Kalmoush — IFSO bariatric surgeon. Effective weight loss and diabetes improvement. Clinics in Cairo, Zagazig and Hehya."
    ),
    h1: lt("عملية تحويل المسار (Gastric Bypass)", "Gastric Bypass Surgery (Roux-en-Y)"),
    intro: lt(
      "تحويل المسار من أقدم وأكثر جراحات السمنة فعالية. يُصغَّر جيب المعدة ويُعاد توجيه الأمعاء لتقليل امتصاص السعرات. مثالي للمرضى بسكري من النوع الثاني أو من يعانون ارتجاعًا شديدًا. يُجري أ.د. قلموش العملية بالمنظار بخبرة تفوق عقدين.",
      "Gastric bypass is one of the oldest and most effective bariatric procedures. A small stomach pouch is created and the intestines are rerouted to reduce calorie absorption. Ideal for type 2 diabetes patients or those with severe reflux. Prof. Kalmoush performs it laparoscopically with over two decades of experience."
    ),
    sections: [
      section(
        "كيف تُجرى عملية تحويل المسار؟",
        "How is gastric bypass performed?",
        [
          [
            "يُنشأ جيب معدي صغير (30 مل تقريبًا) ويُفصل عن بقية المعدة. يُوصل الجيب مباشرة بالأمعاء الدقيقة مع تحويل مسار جزء من الأمعاء. يقلل ذلك من كمية الطعام والسعرات الممتصة.",
            "A small stomach pouch (~30 ml) is created and separated from the rest of the stomach. The pouch connects directly to the small intestine with part of the bowel bypassed, reducing food volume and calorie absorption.",
          ],
        ]
      ),
      section(
        "مزايا تحويل المسار",
        "Benefits of gastric bypass",
        [
          [
            "فقدان 70–80% من الوزن الزائد. تحسن أو شفاء السكري عند 80% من المرضى. فعال في حالات الارتجاع الشديد. نتائج طويلة المدى مدعومة بأدلة علمية.",
            "70–80% excess weight loss. Diabetes remission or improvement in ~80% of patients. Effective for severe reflux. Long-term outcomes supported by strong evidence.",
          ],
        ]
      ),
      section(
        "المرشحون والمتابعة",
        "Candidates and follow-up",
        [
          [
            "مؤشر كتلة جسم 40+ أو 35+ مع سكري أو ارتجاع. يتطلب التزامًا مدى الحياة بمكملات الفيتامينات والمعادن. متابعة دورية كل 3–6 أشهر.",
            "BMI 40+ or 35+ with diabetes or reflux. Requires lifelong vitamin and mineral supplementation. Follow-up every 3–6 months.",
          ],
        ]
      ),
    ],
    faqs: [
      faq(
        "هل تحويل المسار أفضل من التكميم؟",
        "Is bypass better than sleeve?",
        "يعتمد على حالتك — التكميم أبسط، وتحويل المسار أفضل للسكري والارتجاع. راجع صفحة المقارنة.",
        "Depends on your case — sleeve is simpler; bypass is better for diabetes and reflux. See our comparison page."
      ),
    ],
    relatedPageIds: [
      "gastric-bypass-price",
      "sleeve-vs-bypass",
      "mini-gastric-bypass",
      "bariatric-surgery",
    ],
    sitemapPriority: 0.93,
  },
  {
    id: "gastric-bypass-price",
    type: "commercial",
    cluster: "gastric-bypass",
    slug: lt("سعر-تحويل-المسار", "gastric-bypass-price-egypt"),
    title: lt(
      "سعر عملية تحويل المسار في مصر | أ.د. قلموش",
      "Gastric Bypass Price in Egypt | Prof. Kalmoush"
    ),
    metaDescription: lt(
      "تعرف على تكلفة عملية تحويل المسار في مصر والعوامل المؤثرة. استشارة مع أ.د. عبد الفتاح قلموش لعرض سعر مخصص.",
      "Learn about gastric bypass cost in Egypt and influencing factors. Consult Prof. Abd-Elfattah Kalmoush for a personalised quote."
    ),
    h1: lt("سعر عملية تحويل المسار في مصر", "Gastric Bypass Surgery Cost in Egypt"),
    intro: lt(
      "تكلفة تحويل المسار عادةً أعلى من التكميم لأنها عملية أكثر تعقيدًا. في مصر تتراوح بين 55,000 و130,000 جنيه حسب المستشفى والجراح والباقة. لا يوجد سعر ثابت — يُحدد بعد تقييم حالتك.",
      "Bypass cost is typically higher than sleeve due to greater complexity. In Egypt, prices range from EGP 55,000 to 130,000 depending on hospital, surgeon and package. No fixed price — determined after assessment."
    ),
    sections: [
      section(
        "عوامل التسعير",
        "Pricing factors",
        [
          [
            "تعقيد العملية ومدتها. خبرة الجراح. مستوى المستشفى. الفحوصات والتصوير المسبق. مدة الإقامة والمتابعة.",
            "Procedure complexity and duration. Surgeon experience. Hospital level. Pre-operative tests and imaging. Length of stay and follow-up.",
          ],
        ]
      ),
    ],
    faqs: [
      faq(
        "هل تحويل المسار أغلى من التكميم؟",
        "Is bypass more expensive than sleeve?",
        "نعم عادةً، لأنها عملية أطول وأكثر تعقيدًا.",
        "Yes, typically — it is a longer and more complex procedure."
      ),
    ],
    relatedPageIds: ["gastric-bypass", "sleeve-vs-bypass", "gastric-sleeve-price"],
    sitemapPriority: 0.88,
  },
  {
    id: "mini-gastric-bypass",
    type: "service",
    cluster: "mini-gastric-bypass",
    slug: lt("تحويل-المسار-المصغر", "mini-gastric-bypass"),
    title: lt(
      "تحويل المسار المصغر (MGB) | أ.د. قلموش",
      "Mini Gastric Bypass (MGB) | Prof. Kalmoush"
    ),
    metaDescription: lt(
      "تحويل المسار المصغر — بديل أبسط لتحويل المسار الكلاسيكي. تعرّف على الإجراء والمرشحين مع أ.د. عبد الفتاح قلموش.",
      "Mini gastric bypass — a simpler alternative to classic Roux-en-Y. Learn about the procedure and candidates with Prof. Abd-Elfattah Kalmoush."
    ),
    h1: lt("تحويل المسار المصغر (Mini Gastric Bypass)", "Mini Gastric Bypass (MGB)"),
    intro: lt(
      "تحويل المسار المصغر (MGB) يجمع بين تصغير المعدة وتحويل مسار أمعاء أقصر. أبسط من Roux-en-Y الكلاسيكي مع نتائج فقدان وزن ممتازة. يُناسب مرضى السمنة الذين يحتاجون فعالية أعلى من التكميم.",
      "Mini gastric bypass combines stomach reduction with a shorter intestinal bypass. Simpler than classic Roux-en-Y with excellent weight loss results. Suitable for obesity patients needing higher efficacy than sleeve alone."
    ),
    sections: [
      section(
        "الفرق عن تحويل المسار الكلاسيكي",
        "Difference from classic bypass",
        [
          [
            "أنبوب أمعاء واحد بدل اثنين. مدة عملية أقصر. تعافٍ أسرع. نتائج فقدان وزن مماثلة في كثير من الدراسات.",
            "Single intestinal limb instead of two. Shorter operation time. Faster recovery. Comparable weight loss in many studies.",
          ],
        ]
      ),
    ],
    faqs: [
      faq(
        "هل MGB آمن؟",
        "Is MGB safe?",
        "نعم عند إجرائه لدى جراح متمرس. يتطلب متابعة للوقاية من نقص الفيتامينات والارتجاع الصفراوي.",
        "Yes with an experienced surgeon. Requires follow-up to prevent vitamin deficiency and bile reflux."
      ),
    ],
    relatedPageIds: ["gastric-bypass", "sleeve-vs-bypass", "bariatric-surgery"],
    sitemapPriority: 0.82,
  },
  {
    id: "sleeve-vs-bypass",
    type: "comparison",
    cluster: "gastric-sleeve",
    slug: lt("الفرق-بين-التكميم-وتحويل-المسار", "gastric-sleeve-vs-bypass"),
    title: lt(
      "الفرق بين التكميم وتحويل المسار | أيهما أنسب لك؟",
      "Gastric Sleeve vs Bypass | Which Is Right for You?"
    ),
    metaDescription: lt(
      "مقارنة شاملة بين عملية تكميم المعدة وتحويل المسار: الفرق، المزايا، العيوب، والمرشحون. استشارة مع أ.د. قلموش لاختيار الإجراء الأنسب.",
      "Complete comparison of gastric sleeve vs bypass: differences, pros, cons and candidates. Consult Prof. Kalmoush to choose the right procedure."
    ),
    h1: lt("الفرق بين التكميم وتحويل المسار", "Gastric Sleeve vs Gastric Bypass"),
    intro: lt(
      "من أكثر الأسئلة شيوعًا: التكميم أم تحويل المسار؟ كلاهما فعال لكنهما مختلفان في الآلية والنتائج والمخاطر. التكميم أبسط ولا يغير مسار الأمعاء. تحويل المسار أكثر فعالية للسكري لكنه يتطلب مكملات مدى الحياة.",
      "One of the most common questions: sleeve or bypass? Both are effective but differ in mechanism, outcomes and risks. Sleeve is simpler with no intestinal rerouting. Bypass is more effective for diabetes but requires lifelong supplements."
    ),
    sections: [
      section(
        "جدول المقارنة",
        "Comparison table",
        [
          [
            "التكميم: استئصال 80% من المعدة | لا تحويل أمعاء | فقدان 60–70% | أقل مضاعفات تغذوية | أقل فعالية للسكري الشديد.",
            "Sleeve: removes 80% of stomach | no intestinal bypass | 60–70% EWL | fewer nutritional complications | less effective for severe diabetes.",
          ],
          [
            "تحويل المسار: جيب معدي + تحويل أمعاء | فقدان 70–80% | شفاء السكري عند 80% | مكملات مدى الحياة | أطول في التعافي.",
            "Bypass: stomach pouch + intestinal bypass | 70–80% EWL | ~80% diabetes remission | lifelong supplements | longer recovery.",
          ],
        ]
      ),
      section(
        "متى يُفضل التكميم؟",
        "When is sleeve preferred?",
        [
          [
            "مؤشر كتلة جسم 35–45 بدون سكري شديد. مريض يريد إجراءًا أبسط. لا ارتجاع مريئي شديد. أول عملية سمنة.",
            "BMI 35–45 without severe diabetes. Patient wants a simpler procedure. No severe oesophageal reflux. First bariatric operation.",
          ],
        ]
      ),
      section(
        "متى يُفضل تحويل المسار؟",
        "When is bypass preferred?",
        [
          [
            "سكري من النوع الثاني يحتاج علاج جذري. ارتجاع مريئي شديد. فشل التكميم السابق. مؤشر كتلة جسم فوق 45.",
            "Type 2 diabetes needing radical treatment. Severe reflux. Failed previous sleeve. BMI above 45.",
          ],
        ]
      ),
    ],
    faqs: [
      faq(
        "هل يمكن تحويل التكميم لتحويل مسار لاحقًا؟",
        "Can sleeve be converted to bypass later?",
        "نعم، جراحة المراجعة (Revision) ممكنة عند فشل التكميم أو استعادة الوزن.",
        "Yes — revision surgery is possible if sleeve fails or weight is regained."
      ),
    ],
    relatedPageIds: ["gastric-sleeve", "gastric-bypass", "bypass-vs-balloon", "revision-bariatric"],
    sitemapPriority: 0.92,
  },
  {
    id: "bypass-vs-balloon",
    type: "comparison",
    cluster: "gastric-balloon",
    slug: lt("تحويل-المسار-أم-البالون", "gastric-bypass-vs-balloon"),
    title: lt(
      "تحويل المسار أم بالون المعدة؟ | مقارنة",
      "Gastric Bypass vs Gastric Balloon | Comparison"
    ),
    metaDescription: lt(
      "مقارنة بين تحويل المسار وبالون المعدة: الفرق في الفعالية، التكلفة، والمرشحين. استشارة مع أ.د. قلموش.",
      "Compare gastric bypass vs gastric balloon: effectiveness, cost and candidates. Consult Prof. Kalmoush."
    ),
    h1: lt("تحويل المسار أم بالون المعدة؟", "Gastric Bypass vs Gastric Balloon?"),
    intro: lt(
      "تحويل المسار جراحة دائمة بفقدان وزن كبير. بالون المعدة إجراء مؤقت غير جراحي بفقدان وزن معتدل. البالون للمرضى بسمنة خفيفة أو كخطوة أولى. التحويل للسمنة المفرطة.",
      "Bypass is permanent surgery with major weight loss. The balloon is a temporary non-surgical option with moderate loss. Balloon suits mild obesity or as a first step. Bypass for morbid obesity."
    ),
    sections: [
      section(
        "المقارنة السريعة",
        "Quick comparison",
        [
          [
            "البالون: غير جراحي | مؤقت 6–12 شهر | فقدان 10–15% | أقل تكلفة | لا مضاعفات جراحية.",
            "Balloon: non-surgical | temporary 6–12 months | 10–15% loss | lower cost | no surgical complications.",
          ],
          [
            "تحويل المسار: جراحي دائم | فقدان 70–80% | تكلفة أعلى | مكملات مدى الحياة | فعال للسكري.",
            "Bypass: permanent surgery | 70–80% loss | higher cost | lifelong supplements | effective for diabetes.",
          ],
        ]
      ),
    ],
    faqs: [],
    relatedPageIds: ["gastric-bypass", "gastric-balloon", "sleeve-vs-balloon"],
    sitemapPriority: 0.8,
  },
];
