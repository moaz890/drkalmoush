import type { SeoPage } from "../types";
import { faq, lt, section } from "./helpers";

export const endoscopyPages: SeoPage[] = [
  {
    id: "endoscopy",
    type: "service",
    cluster: "endoscopy",
    slug: lt("مناظير-الجهاز-الهضمي", "gastrointestinal-endoscopy"),
    title: lt(
      "مناظير الجهاز الهضمي | أ.د. عبد الفتاح قلموش",
      "Gastrointestinal Endoscopy | Prof. Abd-Elfattah Kalmoush"
    ),
    metaDescription: lt(
      "مناظير الجهاز الهضمي التشخيصية والعلاجية: منظار معدة، منظار قولون، ومنظار مرن. أ.د. قلموش — استشاري جراحات الجهاز الهضمي.",
      "Diagnostic and therapeutic GI endoscopy: gastroscopy, colonoscopy and flexible endoscopy. Prof. Kalmoush — GI surgery consultant."
    ),
    h1: lt("مناظير الجهاز الهضمي", "Gastrointestinal Endoscopy"),
    intro: lt(
      "المناظير التشخيصية والعلاجية أداة أساسية في طب الجهاز الهضمي. يستخدمها أ.د. عبد الفتاح قلموش لتشخيص وعلاج أمراض المعدة والأمعاء والقولون والمرارة بدقة وبتدخل minimal.",
      "Diagnostic and therapeutic endoscopy is fundamental in GI medicine. Prof. Abd-Elfattah Kalmoush uses it to diagnose and treat stomach, intestinal, colon and biliary conditions with precision and minimal intervention."
    ),
    sections: [
      section(
        "أنواع المناظير",
        "Types of endoscopy",
        [
          [
            "منظار المعدة (Gastroscopy): فحص المريء والمعدة والاثني عشر. منظار القولون (Colonoscopy): فحص القولون بالكامل. منظار المرارة (ERCP): تشخيص وعلاج قنوات المرارة.",
            "Gastroscopy: examines oesophagus, stomach and duodenum. Colonoscopy: full colon examination. ERCP: biliary duct diagnosis and treatment.",
          ],
        ]
      ),
      section(
        "متى تحتاج منظارًا؟",
        "When do you need endoscopy?",
        [
          [
            "ألم بطن مزمن. نزيف أو براز أسود. صعوبة بلع. حرقة مستمرة لا تستجيب للأدوية. تغير عادات الأمعاء. فحص دوري بعد سن 45.",
            "Chronic abdominal pain. Bleeding or black stools. Difficulty swallowing. Persistent heartburn unresponsive to medication. Bowel habit changes. Screening after age 45.",
          ],
        ]
      ),
    ],
    faqs: [
      faq(
        "هل المنظار مؤلم؟",
        "Is endoscopy painful?",
        "يُجرى تحت تخدير أو مخدر موضعي. معظم المرضى لا يشعرون بألم.",
        "Performed under sedation or local anaesthetic. Most patients feel no pain."
      ),
    ],
    relatedPageIds: ["upper-endoscopy", "colonoscopy", "gerd", "hiatal-hernia"],
    sitemapPriority: 0.9,
  },
  {
    id: "upper-endoscopy",
    type: "service",
    cluster: "endoscopy",
    slug: lt("منظار-المعدة", "upper-gi-endoscopy"),
    title: lt(
      "منظار المعدة (Gastroscopy) | أ.د. قلموش",
      "Upper GI Endoscopy (Gastroscopy) | Prof. Kalmoush"
    ),
    metaDescription: lt(
      "منظار المعدة لتشخيص الحرقة والقرحة والتهاب المعدة وفتق الحجاب الحاجز. أ.د. عبد الفتاح قلموش — عيادات القاهرة والزقازيق وههيا.",
      "Gastroscopy for diagnosing heartburn, ulcers, gastritis and hiatal hernia. Prof. Abd-Elfattah Kalmoush — Cairo, Zagazig and Hehya clinics."
    ),
    h1: lt("منظار المعدة (Gastroscopy)", "Upper GI Endoscopy (Gastroscopy)"),
    intro: lt(
      "منظار المعدة يفحص المريء والمعدة والاثني عشر عبر منظار مرن يُدخل من الفم. يشخص الحرقة والقرحة والتهاب المعدة وفتق الحجاب الحاجز والأورام المبكرة.",
      "Gastroscopy examines the oesophagus, stomach and duodenum via a flexible scope inserted through the mouth. It diagnoses heartburn, ulcers, gastritis, hiatal hernia and early tumours."
    ),
    sections: [
      section(
        "التحضير لمنظار المعدة",
        "Preparing for gastroscopy",
        [
          [
            "صيام 6–8 ساعات قبل الإجراء. إخبار الطبيب بجميع الأدوية. مرافق للعودة بعد التخدير.",
            "Fast 6–8 hours before the procedure. Inform the doctor of all medications. Bring someone to accompany you home after sedation.",
          ],
        ]
      ),
      section(
        "ماذا يكتشف المنظار؟",
        "What does gastroscopy detect?",
        [
          [
            "التهاب المريء الارتجاعي. قرحة المعدة والاثني عشر. التهاب المعدة وجرثومة المعدة. فتق الحجاب الحاجز. زوائد وأورام مبكرة.",
            "Reflux oesophagitis. Stomach and duodenal ulcers. Gastritis and H. pylori. Hiatal hernia. Polyps and early tumours.",
          ],
        ]
      ),
    ],
    faqs: [
      faq(
        "كم تستغرق عملية المنظار؟",
        "How long does gastroscopy take?",
        "10–20 دقيقة عادةً. تستريح ساعة بعد التخدير.",
        "Usually 10–20 minutes. Rest for an hour after sedation."
      ),
    ],
    relatedPageIds: ["endoscopy", "gerd", "hiatal-hernia", "colonoscopy"],
    sitemapPriority: 0.88,
  },
  {
    id: "colonoscopy",
    type: "service",
    cluster: "colonoscopy",
    slug: lt("منظار-القولون", "colonoscopy"),
    title: lt(
      "منظار القولون (Colonoscopy) | أ.د. عبد الفتاح قلموش",
      "Colonoscopy | Prof. Abd-Elfattah Kalmoush"
    ),
    metaDescription: lt(
      "منظار القولون للكشف المبكر عن سرطان القولون وتشخيص أمراض الأمعاء. أ.د. قلموش — استشاري جراحات الجهاز الهضمي.",
      "Colonoscopy for early colon cancer detection and bowel disease diagnosis. Prof. Kalmoush — GI surgery consultant."
    ),
    h1: lt("منظار القولون (Colonoscopy)", "Colonoscopy"),
    intro: lt(
      "منظار القولون يفحص القولون بالكامل عبر منظار مرن. يكشف السرطان مبكرًا ويزيل الزوائد قبل تحولها لسرطان. يُنصح به لكل من تجاوز 45 عامًا أو بأعراض معوية.",
      "Colonoscopy examines the entire colon via a flexible scope. It detects cancer early and removes polyps before they become malignant. Recommended for everyone over 45 or with bowel symptoms."
    ),
    sections: [
      section(
        "أهمية الكشف المبكر",
        "Importance of early detection",
        [
          [
            "سرطان القولون من أكثر السرطانات قابلية للشفاء عند الكشف المبكر. الزوائد تُزال أثناء المنظار. فحص كل 5–10 سنوات بعد سن 45.",
            "Colon cancer is one of the most curable cancers when detected early. Polyps are removed during the procedure. Screening every 5–10 years after age 45.",
          ],
        ]
      ),
      section(
        "التحضير لمنظار القولون",
        "Colonoscopy preparation",
        [
          [
            "حمية صلبة ثم سوائل ليومين. محلول تفريغ القولون. صيام 6 ساعات قبل الإجراء. التزام التعليمات يضمن فحصًا دقيقًا.",
            "Solid diet then clear liquids for two days. Bowel prep solution. Fast 6 hours before procedure. Following instructions ensures accurate examination.",
          ],
        ]
      ),
    ],
    faqs: [
      faq(
        "هل منظار القولون خطير؟",
        "Is colonoscopy dangerous?",
        "آمن جدًا عند إجرائه لدى طبيب متخصص. مضاعفات نادرة: نزيف أو ثقب (أقل من 1%).",
        "Very safe with a specialist. Rare complications: bleeding or perforation (less than 1%)."
      ),
    ],
    relatedPageIds: ["colonoscopy-prep", "endoscopy", "upper-endoscopy"],
    sitemapPriority: 0.9,
  },
  {
    id: "colonoscopy-prep",
    type: "faq",
    cluster: "colonoscopy",
    slug: lt("التحضير-لمنظار-القولون", "colonoscopy-preparation"),
    title: lt(
      "التحضير لمنظار القولون | دليل خطوة بخطوة",
      "Colonoscopy Preparation | Step-by-Step Guide"
    ),
    metaDescription: lt(
      "كيف تتحضر لمنظار القولون؟ الحمية، محلول التفريغ، والتعليمات الكاملة قبل الإجراء.",
      "How to prepare for colonoscopy? Diet, bowel prep solution and complete pre-procedure instructions."
    ),
    h1: lt("التحضير لمنظار القولون", "Colonoscopy Preparation"),
    intro: lt(
      "التحضير الصحيح لمنظار القولون يحدد نجاح الفحص. قولون نظيف = فحص دقيق = كشف مبكر عن أي مشكلة.",
      "Proper colonoscopy preparation determines examination success. A clean colon = accurate exam = early detection of any problem."
    ),
    sections: [
      section(
        "يومان قبل المنظار",
        "Two days before",
        [
          [
            "تجنب البذور والحبوب الكاملة والخضروات الورقية. أكثر من السوائل. تجنب الحديد والأسبرين إذا طلب الطبيب.",
            "Avoid seeds, whole grains and leafy vegetables. Increase fluids. Avoid iron and aspirin if directed by doctor.",
          ],
        ]
      ),
      section(
        "يوم المنظار",
        "Day of procedure",
        [
          [
            "صيام تام 6 ساعات قبل الموعد. شرب محلول التفريغ حسب التعليمات. لا تتناول أي شيء ملون.",
            "Complete fast 6 hours before appointment. Drink prep solution as instructed. Avoid anything coloured.",
          ],
        ]
      ),
    ],
    faqs: [
      faq(
        "ماذا آكل بعد المنظار؟",
        "What to eat after colonoscopy?",
        "ابدأ بسوائل خفيفة ثم طعامًا لينًا. تجنب الأطعمة الحارة أول يوم.",
        "Start with light fluids then soft food. Avoid spicy food on the first day."
      ),
    ],
    relatedPageIds: ["colonoscopy", "endoscopy"],
    sitemapPriority: 0.78,
  },
  {
    id: "hiatal-hernia",
    type: "service",
    cluster: "hiatal-hernia",
    slug: lt("فتق-الحجاب-الحاجز", "hiatal-hernia-surgery"),
    title: lt(
      "فتق الحجاب الحاجز وعلاج الارتجاع | أ.د. قلموش",
      "Hiatal Hernia & Reflux Treatment | Prof. Kalmoush"
    ),
    metaDescription: lt(
      "إصلاح فتق الحجاب الحاجز بالمنظار لعلاج الارتجاع المزمن. أ.د. عبد الفتاح قلموش — خبرة في جراحات المناظير المتقدمة.",
      "Laparoscopic hiatal hernia repair for chronic reflux. Prof. Abd-Elfattah Kalmoush — advanced laparoscopy expertise."
    ),
    h1: lt("فتق الحجاب الحاجز وعلاج الارتجاع", "Hiatal Hernia & Reflux Treatment"),
    intro: lt(
      "فتق الحجاب الحاجز يحدث عندما ترتفع المعدة عبر الحجاب الحاجز مسببة ارتجاعًا مزمنًا. الإصلاح بالمنظار يعيد المعدة لمكانها ويضيق الفتحة ويحسّن صمام المريء.",
      "Hiatal hernia occurs when the stomach rises through the diaphragm causing chronic reflux. Laparoscopic repair returns the stomach to position, tightens the opening and improves the oesophageal valve."
    ),
    sections: [
      section(
        "أعراض فتق الحجاب الحاجز",
        "Symptoms of hiatal hernia",
        [
          [
            "حرقة مستمرة لا تستجيب للأدوية. ارتجاع حمضي. صعوبة بلع. ألم صدري يشبه القلب. سعال مزمن.",
            "Persistent heartburn unresponsive to medication. Acid reflux. Difficulty swallowing. Chest pain resembling cardiac pain. Chronic cough.",
          ],
        ]
      ),
      section(
        "الإصلاح بالمنظار",
        "Laparoscopic repair",
        [
          [
            "إعادة المعدة أسفل الحجاب. تضييق فتحة المريء. تعزيز الصمام (Nissen أو Toupet). فتحات صغيرة وتعافٍ سريع.",
            "Return stomach below diaphragm. Tighten oesophageal opening. Reinforce valve (Nissen or Toupet). Small incisions and fast recovery.",
          ],
        ]
      ),
    ],
    faqs: [
      faq(
        "هل كل فتق يحتاج جراحة؟",
        "Does every hernia need surgery?",
        "لا — الفتوق الصغيرة بدون أعراض قد تُراقب فقط. الجراحة عند الأعراض المستمرة.",
        "No — small asymptomatic hernias may be watched. Surgery for persistent symptoms."
      ),
    ],
    relatedPageIds: ["gerd", "upper-endoscopy", "endoscopy"],
    sitemapPriority: 0.85,
  },
  {
    id: "gerd",
    type: "service",
    cluster: "gerd",
    slug: lt("ارتجاع-المريء", "gerd-treatment"),
    title: lt(
      "علاج ارتجاع المريء (GERD) | أ.د. عبد الفتاح قلموش",
      "GERD Treatment | Prof. Abd-Elfattah Kalmoush"
    ),
    metaDescription: lt(
      "علاج ارتجاع المريء بالأدوية والمنظار والجراحة. أ.د. قلموش — متخصص في فتق الحجاب الحاجز وجراحات الجهاز الهضمي.",
      "GERD treatment with medication, endoscopy and surgery. Prof. Kalmoush — hiatal hernia and GI surgery specialist."
    ),
    h1: lt("علاج ارتجاع المريء (GERD)", "GERD (Acid Reflux) Treatment"),
    intro: lt(
      "ارتجاع المريء (GERD) مرض مزمن يحدث عندما يعود حمض المعدة للمريء. يُعالج أولًا بالأدوية وتعديل نمط الحياة. عند الفشل، يُنصح بمنظار المعدة وربما إصلاح فتق الحجاب الحاجز.",
      "GERD is a chronic condition where stomach acid flows back into the oesophagus. Initially treated with medication and lifestyle changes. When these fail, gastroscopy and possibly hiatal hernia repair are recommended."
    ),
    sections: [
      section(
        "العلاج غير الجراحي",
        "Non-surgical treatment",
        [
          [
            "مثبطات مضخة البروتون. تجنب الأطعمة المثيرة (قهوة، شوكولاتة، حمضيات). عدم الأكل قبل النوم بـ 3 ساعات. رفع رأس السرير.",
            "Proton pump inhibitors. Avoid trigger foods (coffee, chocolate, citrus). No eating 3 hours before bed. Elevate head of bed.",
          ],
        ]
      ),
      section(
        "متى نلجأ للجراحة؟",
        "When is surgery needed?",
        [
          [
            "فشل الأدوية لأكثر من 6 أشهر. فتق حجاب حاجز كبير. التهاب مريء شديد. رغبة في التوقف عن الأدوية مدى الحياة.",
            "Medication failure for more than 6 months. Large hiatal hernia. Severe oesophagitis. Desire to stop lifelong medication."
          ],
        ]
      ),
    ],
    faqs: [],
    relatedPageIds: ["hiatal-hernia", "upper-endoscopy", "endoscopy"],
    sitemapPriority: 0.82,
  },
  {
    id: "diabetes-obesity",
    type: "service",
    cluster: "diabetes-obesity",
    slug: lt("السكري-والسمنة", "diabetes-and-obesity-surgery"),
    title: lt(
      "السكري والسمنة | جراحة علاج السكري",
      "Diabetes & Obesity | Metabolic Surgery"
    ),
    metaDescription: lt(
      "جراحة السمنة لعلاج السكري من النوع الثاني: تحويل المسار والتكميم. شفاء السكري عند 60–80% من المرضى. أ.د. قلموش.",
      "Bariatric surgery for type 2 diabetes: bypass and sleeve. Diabetes remission in 60–80% of patients. Prof. Kalmoush."
    ),
    h1: lt("السكري والسمنة — جراحة علاجية", "Diabetes & Obesity — Metabolic Surgery"),
    intro: lt(
      "السمنة السبب الرئيسي للسكري من النوع الثاني. جراحة السمنة أصبحت علاجًا معتمدًا للسكري — وليس فقط لإنقاص الوزن. تحويل المسار يشفي السكري عند 80% من المرضى.",
      "Obesity is the leading cause of type 2 diabetes. Bariatric surgery is now an established diabetes treatment — not just for weight loss. Bypass achieves diabetes remission in ~80% of patients."
    ),
    sections: [
      section(
        "كيف تعالج الجراحة السكري؟",
        "How does surgery treat diabetes?",
        [
          [
            "تغيير هرمونات الأمعاء (incretins). تقليل مقاومة الأنسولين. فقدان الوزن يحسّن حساسية الأنسولين. تحويل المسار الأكثر فعالية للسكري.",
            "Altered gut hormones (incretins). Reduced insulin resistance. Weight loss improves insulin sensitivity. Bypass most effective for diabetes.",
          ],
        ]
      ),
    ],
    faqs: [
      faq(
        "هل يمكن إيقاف الأنسولين بعد الجراحة؟",
        "Can insulin be stopped after surgery?",
        "نعم عند كثير من المرضى خلال أسابيع إلى أشهر. تحت إشراف طبيب.",
        "Yes for many patients within weeks to months. Under medical supervision."
      ),
    ],
    relatedPageIds: ["gastric-bypass", "gastric-sleeve", "morbid-obesity"],
    sitemapPriority: 0.8,
  },
  {
    id: "sleep-apnea-obesity",
    type: "service",
    cluster: "sleep-apnea",
    slug: lt("انقطاع-التنفس-والسمنة", "sleep-apnea-and-obesity"),
    title: lt(
      "انقطاع التنفس أثناء النوم والسمنة | أ.د. قلموش",
      "Sleep Apnea & Obesity | Prof. Kalmoush"
    ),
    metaDescription: lt(
      "علاج انقطاع التنفس النومي المرتبط بالسمنة بجراحة إنقاص الوزن. تحسن ملحوظ بعد التكميم وتحويل المسار.",
      "Treating obesity-related sleep apnea with weight-loss surgery. Significant improvement after sleeve and bypass."
    ),
    h1: lt("انقطاع التنفس أثناء النوم والسمنة", "Sleep Apnea & Obesity"),
    intro: lt(
      "انقطاع التنفس أثناء النوم (Sleep Apnea) شائع جدًا عند مرضى السمنة. يتوقف التنفس مؤقتًا أثناء النوم مسببًا إرهاقًا وارتفاع ضغط. فقدان الوزن بجراحة السمنة يحسّن أو يشفي انقطاع التنفس عند 80% من المرضى.",
      "Sleep apnea is very common in obesity patients. Breathing temporarily stops during sleep causing fatigue and hypertension. Weight loss via bariatric surgery improves or resolves apnea in ~80% of patients."
    ),
    sections: [
      section(
        "العلاقة بين السمنة وانقطاع التنفس",
        "Obesity and sleep apnea link",
        [
          [
            "الدهون حول الرقبة تضغط على مجرى الهواء. السمنة تزيد مخاطر انقطاع التنفس 4 أضعاف. CPAP يخفف الأعراض لكن لا يعالج السبب.",
            "Neck fat compresses the airway. Obesity increases apnea risk 4-fold. CPAP relieves symptoms but doesn't treat the cause.",
          ],
        ]
      ),
      section(
        "جراحة السمنة كعلاج",
        "Bariatric surgery as treatment",
        [
          [
            "فقدان 50% من الوزن الزائد يحسّن انقطاع التنفس عند 80%+. التكميم وتحويل المسار فعالان. يُنصح بفحص نوم قبل وبعد الجراحة.",
            "Losing 50% of excess weight improves apnea in 80%+. Sleeve and bypass are effective. Sleep study recommended before and after surgery.",
          ],
        ]
      ),
    ],
    faqs: [],
    relatedPageIds: ["bariatric-surgery", "gastric-sleeve", "morbid-obesity"],
    sitemapPriority: 0.75,
  },
];
