import type { SeoPage } from "../types";
import { faq, lt, section } from "./helpers";

export const balloonAndBariatricPages: SeoPage[] = [
  {
    id: "gastric-balloon",
    type: "service",
    cluster: "gastric-balloon",
    slug: lt("بالون-المعدة", "gastric-balloon"),
    title: lt(
      "بالون المعدة لإنقاص الوزن | أ.د. عبد الفتاح قلموش",
      "Gastric Balloon for Weight Loss | Prof. Abd-Elfattah Kalmoush"
    ),
    metaDescription: lt(
      "بالون المعدة — حل غير جراحي لإنقاص الوزن. يُزرع بالمنظار ويُزال بعد 6–12 شهر. عيادات أ.د. قلموش في القاهرة والزقازيق وههيا.",
      "Gastric balloon — non-surgical weight loss. Inserted endoscopically and removed after 6–12 months. Prof. Kalmoush clinics in Cairo, Zagazig and Hehya."
    ),
    h1: lt("بالون المعدة (Gastric Balloon)", "Gastric Balloon"),
    intro: lt(
      "بالون المعدة إجراء غير جراحي يُوضع داخل المعدة بالمنظار ليشغل مساحة ويقلل الشهية. مثالي للمرضى بمؤشر كتلة جسم 27–35 أو كخطوة تحضيرية قبل جراحة السمنة. يُزال بعد 6–12 شهرًا.",
      "The gastric balloon is a non-surgical procedure placed inside the stomach endoscopically to occupy space and reduce appetite. Ideal for BMI 27–35 or as preparation before bariatric surgery. Removed after 6–12 months."
    ),
    sections: [
      section(
        "كيف يُزرع بالون المعدة؟",
        "How is the balloon placed?",
        [
          [
            "يُدخل المنظار عبر الفم تحت تخدير. يُنفخ البالون بمحلول ملحي داخل المعدة. تستغرق العملية 20–30 دقيقة. يغادر المريض في نفس اليوم.",
            "The endoscope is inserted through the mouth under sedation. The balloon is inflated with saline inside the stomach. Takes 20–30 minutes. Patient goes home the same day.",
          ],
        ]
      ),
      section(
        "النتائج المتوقعة",
        "Expected results",
        [
          [
            "فقدان 10–15% من الوزن الكلي خلال 6 أشهر. يتطلب نظامًا غذائيًا ومتابعة. ليس بديلًا عن الجراحة في السمنة المفرطة.",
            "10–15% total body weight loss within 6 months. Requires diet and follow-up. Not a substitute for surgery in morbid obesity.",
          ],
        ]
      ),
    ],
    faqs: [
      faq(
        "هل بالون المعدة مؤلم؟",
        "Is the balloon painful?",
        "قد تشعر بغثيان أول 3–5 أيام. يصف الطبيب أدوية للتخفيف.",
        "Nausea is common for the first 3–5 days. Medication is prescribed for relief."
      ),
      faq(
        "ماذا يحدث بعد إزالة البالون؟",
        "What happens after balloon removal?",
        "يجب الاستمرار في النظام الغذائي وإلا قد يعود الوزن. بعض المرضى يلجأون للجراحة لاحقًا.",
        "Diet must continue or weight may return. Some patients proceed to surgery later."
      ),
    ],
    relatedPageIds: ["sleeve-vs-balloon", "bypass-vs-balloon", "bariatric-surgery"],
    sitemapPriority: 0.88,
  },
  {
    id: "sleeve-vs-balloon",
    type: "comparison",
    cluster: "gastric-balloon",
    slug: lt("التكميم-أم-البالون", "gastric-sleeve-vs-balloon"),
    title: lt(
      "التكميم أم بالون المعدة؟ | مقارنة شاملة",
      "Gastric Sleeve vs Balloon | Full Comparison"
    ),
    metaDescription: lt(
      "مقارنة بين تكميم المعدة وبالون المعدة: الفعالية، التكلفة، المدة، والمرشحون. استشارة مع أ.د. قلموش.",
      "Compare gastric sleeve vs balloon: effectiveness, cost, duration and candidates. Consult Prof. Kalmoush."
    ),
    h1: lt("التكميم أم بالون المعدة؟", "Gastric Sleeve vs Gastric Balloon?"),
    intro: lt(
      "التكميم جراحة دائمة بفقدان وزن كبير (60–70%). البالون حل مؤقت غير جراحي بفقدان معتدل (10–15%). اختيارك يعتمد على مؤشر كتلة الجسم وأهدافك واستعدادك للجراحة.",
      "Sleeve is permanent surgery with major loss (60–70%). Balloon is a temporary non-surgical option with moderate loss (10–15%). Your choice depends on BMI, goals and readiness for surgery."
    ),
    sections: [
      section(
        "متى يُفضل البالون؟",
        "When is balloon preferred?",
        [
          [
            "مؤشر كتلة جسم 27–35. رفض الجراحة. تحضير قبل عملية سمنة. تجربة أولى لإنقاص الوزن.",
            "BMI 27–35. Surgery refusal. Preparing for bariatric surgery. First weight-loss attempt.",
          ],
        ]
      ),
      section(
        "متى يُفضل التكميم؟",
        "When is sleeve preferred?",
        [
          [
            "مؤشر كتلة جسم 35+. سمنة مفرطة. حاجة لفقدان وزن دائم. فشل البالون أو الحميات.",
            "BMI 35+. Morbid obesity. Need for permanent loss. Failed balloon or diets.",
          ],
        ]
      ),
    ],
    faqs: [],
    relatedPageIds: ["gastric-sleeve", "gastric-balloon", "bypass-vs-balloon"],
    sitemapPriority: 0.82,
  },
  {
    id: "revision-bariatric",
    type: "service",
    cluster: "revision-surgery",
    slug: lt("جراحة-مراجعة-السمنة", "revision-bariatric-surgery"),
    title: lt(
      "جراحة مراجعة السمنة | أ.د. عبد الفتاح قلموش",
      "Revision Bariatric Surgery | Prof. Abd-Elfattah Kalmoush"
    ),
    metaDescription: lt(
      "جراحة مراجعة وتصحيح عمليات السمنة السابقة: إعادة تكميم، تحويل لتحويل مسار، وعلاج استعادة الوزن. أ.د. قلموش متخصص في جراحات المراجعة.",
      "Revision bariatric surgery: re-sleeve, conversion to bypass, and weight regain treatment. Prof. Kalmoush specialises in revision procedures."
    ),
    h1: lt("جراحة مراجعة السمنة (Revision Surgery)", "Revision Bariatric Surgery"),
    intro: lt(
      "جراحة المراجعة تُجرى عند فشل العملية الأولى أو استعادة الوزن أو حدوث مضاعفات. تشمل إعادة التكميم، التحويل لتحويل المسار، أو إصلاح تسربات الدباسة. تتطلب خبرة جراحية عالية — وهو تخصص أ.د. قلموش.",
      "Revision surgery is performed when the initial procedure fails, weight is regained or complications occur. Includes re-sleeve, conversion to bypass, or staple-line leak repair. Requires high surgical expertise — a specialty of Prof. Kalmoush."
    ),
    sections: [
      section(
        "متى تحتاج جراحة مراجعة؟",
        "When do you need revision?",
        [
          [
            "استعادة أكثر من 30% من الوزن المفقود. تمدد معدة شديد بعد التكميم. فشل تحويل المسار. مضاعفات كتسرب أو انسداد مزمن.",
            "Regaining more than 30% of lost weight. Severe pouch stretching after sleeve. Failed bypass. Complications such as chronic leak or obstruction.",
          ],
        ]
      ),
      section(
        "خيارات المراجعة",
        "Revision options",
        [
          [
            "Re-sleeve: إعادة تكميم المعدة المتمددة. Conversion: تحويل التكميم لتحويل مسار. Band removal: إزالة حزام المعدة القديم. Leak repair: إصلاح تسرب خط الدباسة.",
            "Re-sleeve: re-sleeve stretched stomach. Conversion: sleeve to bypass. Band removal: remove old gastric band. Leak repair: staple-line leak repair.",
          ],
        ]
      ),
    ],
    faqs: [
      faq(
        "هل جراحة المراجعة أكثر خطورة؟",
        "Is revision surgery riskier?",
        "نعم، لأنها تُجرى على أنسجة مُشكَّلة سابقًا. يتطلب جراحًا متخصصًا في المراجعات.",
        "Yes — it operates on previously altered tissue. Requires a surgeon experienced in revisions."
      ),
    ],
    relatedPageIds: ["gastric-sleeve", "gastric-bypass", "weight-regain-after-sleeve"],
    sitemapPriority: 0.8,
  },
  {
    id: "bariatric-surgery",
    type: "service",
    cluster: "bariatric-surgery",
    slug: lt("جراحات-السمنة", "bariatric-surgery"),
    title: lt(
      "جراحات السمنة في مصر | أ.د. عبد الفتاح قلموش",
      "Bariatric Surgery in Egypt | Prof. Abd-Elfattah Kalmoush"
    ),
    metaDescription: lt(
      "جراحات السمنة الشاملة: تكميم، تحويل مسار، بالون، ومراجعة. أ.د. قلموش — أستاذ جراحة وعضو IFSO. عيادات القاهرة والزقازيق وههيا.",
      "Comprehensive bariatric surgery: sleeve, bypass, balloon and revision. Prof. Kalmoush — professor of surgery and IFSO member. Cairo, Zagazig and Hehya clinics."
    ),
    h1: lt("جراحات السمنة", "Bariatric Surgery"),
    intro: lt(
      "جراحات السمنة (Bariatric Surgery) هي الإجراءات الجراحية المعتمدة علميًا لعلاج السمنة المفرطة والأمراض المصاحبة. يقدم أ.د. عبد الفتاح قلموش مجموعة كاملة من الإجراءات: التكميم، تحويل المسار، التحويل المصغر، بالون المعدة، وجراحات المراجعة.",
      "Bariatric surgery comprises scientifically validated procedures for morbid obesity and comorbidities. Prof. Abd-Elfattah Kalmoush offers the full range: sleeve, bypass, mini bypass, gastric balloon and revision surgery."
    ),
    sections: [
      section(
        "إجراءاتنا الجراحية",
        "Our procedures",
        [
          [
            "تكميم المعدة — الأكثر شيوعًا. تحويل المسار — للسكري والسمنة الشديدة. تحويل مسار مصغر — بديل أبسط. بالون المعدة — غير جراحي. جراحة المراجعة — تصحيح العمليات السابقة.",
            "Gastric sleeve — most common. Gastric bypass — for diabetes and severe obesity. Mini bypass — simpler alternative. Gastric balloon — non-surgical. Revision — correcting previous operations.",
          ],
        ]
      ),
      section(
        "لماذا أ.د. قلموش؟",
        "Why Prof. Kalmoush?",
        [
          [
            "أستاذ الجراحة العامة — جامعة الأزهر. رئيس وحدة المناظير المتقدمة. عضو IFSO وESBS وESLS. خبرة تفوق عقدين. متابعة شاملة بعد العملية.",
            "Professor of general surgery — Al-Azhar University. Head of advanced laparoscopy unit. IFSO, ESBS and ESLS member. Over two decades of experience. Comprehensive post-op follow-up.",
          ],
        ]
      ),
    ],
    faqs: [
      faq(
        "من هم المرشحون لجراحات السمنة؟",
        "Who qualifies for bariatric surgery?",
        "مؤشر كتلة جسم 40+ أو 35+ مع أمراض مصاحبة، بعد فشل الحميات المنظمة.",
        "BMI 40+ or 35+ with comorbidities, after failed structured diets."
      ),
    ],
    relatedPageIds: [
      "gastric-sleeve",
      "gastric-bypass",
      "gastric-balloon",
      "morbid-obesity",
      "patient-journey-bariatric",
    ],
    sitemapPriority: 0.94,
  },
  {
    id: "morbid-obesity",
    type: "service",
    cluster: "morbid-obesity",
    slug: lt("السمنة-المفرطة", "morbid-obesity-treatment"),
    title: lt(
      "علاج السمنة المفرطة | أ.د. عبد الفتاح قلموش",
      "Morbid Obesity Treatment | Prof. Abd-Elfattah Kalmoush"
    ),
    metaDescription: lt(
      "علاج السمنة المفرطة بالجراحة والمتابعة الشاملة. تعرّف على الأسباب، المخاطر، وخيارات العلاج مع أ.د. قلموش.",
      "Morbid obesity treatment with surgery and comprehensive follow-up. Learn causes, risks and treatment options with Prof. Kalmoush."
    ),
    h1: lt("علاج السمنة المفرطة", "Morbid Obesity Treatment"),
    intro: lt(
      "السمنة المفرطة (مؤشر كتلة جسم 40+) مرض مزمن يؤثر على كل أجهزة الجسم. تُسبب السكري وارتفاع الضغط وأمراض القلب وانقطاع النفس وآلام المفاصل. الجراحة أصبحت العلاج الأكثر فعالية عند فشل الحميات.",
      "Morbid obesity (BMI 40+) is a chronic disease affecting every organ system. It causes diabetes, hypertension, heart disease, sleep apnea and joint pain. Surgery has become the most effective treatment when diets fail."
    ),
    sections: [
      section(
        "مخاطر السمنة المفرطة",
        "Risks of morbid obesity",
        [
          [
            "السكري من النوع الثاني. أمراض القلب والشرايين. انقطاع النفس أثناء النوم. السكتة الدماغية. بعض أنواع السرطان. تقليل العمر المتوقع 10–15 سنة.",
            "Type 2 diabetes. Cardiovascular disease. Sleep apnea. Stroke. Certain cancers. Reduced life expectancy by 10–15 years.",
          ],
        ]
      ),
      section(
        "خيارات العلاج",
        "Treatment options",
        [
          [
            "الحمية والرياضة — الخطوة الأولى دائمًا. الأدوية — لبعض الحالات. الجراحة — الأكثر فعالية للسمنة المفرطة. المتابعة مدى الحياة ضرورية.",
            "Diet and exercise — always the first step. Medication — for some cases. Surgery — most effective for morbid obesity. Lifelong follow-up is essential.",
          ],
        ]
      ),
    ],
    faqs: [],
    relatedPageIds: ["bariatric-surgery", "gastric-sleeve", "diabetes-obesity", "sleep-apnea-obesity"],
    sitemapPriority: 0.85,
  },
  {
    id: "patient-journey-bariatric",
    type: "journey",
    cluster: "bariatric-surgery",
    slug: lt("رحلة-المريض-قبل-وبعد-جراحة-السمنة", "bariatric-surgery-patient-journey"),
    title: lt(
      "رحلة المريض قبل وبعد جراحة السمنة | دليل شامل",
      "Bariatric Surgery Patient Journey | Complete Guide"
    ),
    metaDescription: lt(
      "دليل رحلة المريض: من الاستشارة الأولى حتى المتابعة بعد جراحة السمنة. خطوة بخطوة مع أ.د. قلموش.",
      "Patient journey guide: from first consultation to post-bariatric follow-up. Step by step with Prof. Kalmoush."
    ),
    h1: lt("رحلة المريض قبل وبعد جراحة السمنة", "Bariatric Surgery Patient Journey"),
    intro: lt(
      "رحلة جراحة السمنة تبدأ بالاستشارة وتنتهي بمتابعة مدى الحياة. فهم كل مرحلة يزيد نجاح العملية ويقلل القلق.",
      "The bariatric journey starts with consultation and ends with lifelong follow-up. Understanding each stage improves outcomes and reduces anxiety."
    ),
    sections: [
      section(
        "المرحلة 1: الاستشارة والتقييم",
        "Stage 1: Consultation and assessment",
        [
          [
            "حجز موعد في العيادة. تقييم مؤشر كتلة الجسم والتاريخ المرضي. طلب فحوصات: تحاليل، منظار، تخطيط قلب. مناقشة الإجراءات المناسبة.",
            "Book a clinic appointment. BMI and medical history assessment. Request tests: labs, endoscopy, cardiac workup. Discuss suitable procedures.",
          ],
        ]
      ),
      section(
        "المرحلة 2: التحضير قبل العملية",
        "Stage 2: Pre-operative preparation",
        [
          [
            "حمية سائلة قبل أسبوعين. التوقف عن التدخين. تقييم نفسي وتغذوي. موافقة التأمين إن وُجد.",
            "Liquid diet two weeks before. Stop smoking. Psychological and nutritional assessment. Insurance approval if applicable.",
          ],
        ]
      ),
      section(
        "المرحلة 3: يوم العملية",
        "Stage 3: Surgery day",
        [
          [
            "تنويم في المستشفى. إجراء العملية بالمنظار (1–3 ساعات). إفاقة في العناية. الخروج خلال 1–3 أيام.",
            "Hospital admission. Laparoscopic procedure (1–3 hours). Recovery in ward. Discharge within 1–3 days.",
          ],
        ]
      ),
      section(
        "المرحلة 4: التعافي والمتابعة",
        "Stage 4: Recovery and follow-up",
        [
          [
            "أسبوع 1–2: سوائل وبروتين. شهر 1–3: أطعمة مهروسة. شهر 3+: طعام عادي بكميات صغيرة. متابعة كل 3–6 أشهر.",
            "Weeks 1–2: liquids and protein. Months 1–3: pureed foods. Month 3+: normal food in small portions. Follow-up every 3–6 months.",
          ],
        ]
      ),
    ],
    faqs: [],
    relatedPageIds: ["bariatric-surgery", "gastric-sleeve", "weight-loss-after-sleeve"],
    sitemapPriority: 0.78,
  },
  {
    id: "before-after-sleeve",
    type: "success",
    cluster: "gastric-sleeve",
    slug: lt("قبل-وبعد-عملية-التكميم", "gastric-sleeve-before-and-after"),
    title: lt(
      "قبل وبعد عملية التكميم | تجارب المرضى",
      "Before & After Gastric Sleeve | Patient Stories"
    ),
    metaDescription: lt(
      "نتائج عملية تكميم المعدة: قبل وبعد، تجارب مرضى حقيقيين، ونصائح للنجاح. عيادة أ.د. عبد الفتاح قلموش.",
      "Gastric sleeve results: before and after, real patient experiences and success tips. Prof. Abd-Elfattah Kalmoush clinic."
    ),
    h1: lt("قبل وبعد عملية التكميم", "Before & After Gastric Sleeve"),
    intro: lt(
      "نتائج تكميم المعدة تختلف لكن المتوسط هو فقدان 60–70% من الوزن الزائد. مرضانا في القاهرة والزقازيق وههيا حققوا تحولات ملحوظة في الوزن والصحة والثقة بالنفس.",
      "Sleeve results vary but average 60–70% excess weight loss. Our patients in Cairo, Zagazig and Hehya have achieved remarkable transformations in weight, health and confidence."
    ),
    sections: [
      section(
        "نتائج متوقعة حسب الوقت",
        "Expected results over time",
        [
          [
            "3 أشهر: 20–30% من الوزن الزائد. 6 أشهر: 40–50%. 12 شهرًا: 60–70%. 18 شهرًا: الوصول للوزن المستقر.",
            "3 months: 20–30% of excess weight. 6 months: 40–50%. 12 months: 60–70%. 18 months: weight stabilisation.",
          ],
        ]
      ),
      section(
        "تحسن الأمراض المصاحبة",
        "Comorbidity improvement",
        [
          [
            "تحسن السكري عند 60%+. انخفاض ضغط الدم. تحسن انقطاع النفس. تخفيف آلام المفاصل. زيادة النشاط والطاقة.",
            "Diabetes improvement in 60%+. Blood pressure reduction. Sleep apnea improvement. Joint pain relief. Increased energy and activity.",
          ],
        ]
      ),
    ],
    faqs: [],
    relatedPageIds: ["gastric-sleeve", "weight-loss-after-sleeve", "weight-regain-after-sleeve"],
    sitemapPriority: 0.75,
  },
];
