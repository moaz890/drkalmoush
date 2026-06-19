import type { SeoPage } from "../types";
import { faq, lt, section } from "./helpers";

export const gastricSleevePages: SeoPage[] = [
  {
    id: "gastric-sleeve",
    type: "service",
    cluster: "gastric-sleeve",
    slug: lt("عملية-تكميم-المعدة", "gastric-sleeve-surgery"),
    title: lt(
      "عملية تكميم المعدة بالمنظار | أ.د. عبد الفتاح قلموش",
      "Gastric Sleeve Surgery | Prof. Dr. Abd-Elfattah Kalmoush"
    ),
    metaDescription: lt(
      "عملية تكميم المعدة بالمنظار مع أ.د. عبد الفتاح قلموش — استشاري جراحات السمنة وعضو IFSO. تعرّف على الإجراء، المرشحين، التعافي، والمتابعة في القاهرة والزقازيق وههيا.",
      "Laparoscopic gastric sleeve with Prof. Dr. Abd-Elfattah Kalmoush — IFSO member bariatric consultant. Learn about the procedure, candidates, recovery and follow-up in Cairo, Zagazig and Hehya."
    ),
    h1: lt("عملية تكميم المعدة بالمنظار", "Laparoscopic Gastric Sleeve Surgery"),
    intro: lt(
      "تُعد عملية تكميم المعدة (Sleeve Gastrectomy) من أكثر جراحات السمنة انتشارًا في العالم والشرق الأوسط. يتم استئصال نحو 75–80% من المعدة بالمنظار، فيتحول شكلها إلى أنبوب رفيع يقلل الشهية وكمية الطعام المتناولة. يشرف أ.د. عبد الفتاح قلموش — أستاذ الجراحة العامة وعضو الاتحاد الدولي لجراحة السمنة (IFSO) — على تقييم كل حالة واختيار الإجراء الأنسب.",
      "Gastric sleeve surgery is one of the most common bariatric procedures worldwide. About 75–80% of the stomach is removed laparoscopically, creating a narrow tube that reduces appetite and portion size. Prof. Dr. Abd-Elfattah Kalmoush — professor of general surgery and IFSO member — evaluates each case individually."
    ),
    sections: [
      section(
        "كيف تُجرى عملية التكميم؟",
        "How is the sleeve procedure performed?",
        [
          [
            "تُجرى العملية بالمنظار عبر فتحات صغيرة في البطن. يُزال الجزء الأكبر من المعدة بما في ذلك المنطقة المسؤولة عن إفراز هرمون الجوع (الجريلين). تبقى معدة على شكل أنبوب بسعة تقارب 100–150 مل، مما يحد من كمية الطعام ويقلل إشارات الجوع.",
            "The procedure is performed laparoscopically through small abdominal incisions. The larger portion of the stomach — including the area that produces ghrelin (the hunger hormone) — is removed. A tube-shaped stomach of about 100–150 ml remains, limiting food intake and hunger signals.",
          ],
          [
            "مدة العملية عادةً من ساعة إلى ساعتين. يغادر كثير من المرضى المستشفى خلال يوم إلى يومين، مع عودة تدريجية للنشاط خلال أسبوعين.",
            "Surgery typically takes one to two hours. Many patients leave hospital within one to two days and return to light activity within about two weeks.",
          ],
        ]
      ),
      section(
        "من هم المرشحون لعملية التكميم؟",
        "Who is a candidate for gastric sleeve?",
        [
          [
            "المرشحون المعتادون: مؤشر كتلة جسم 40 أو أكثر، أو 35 أو أكثر مع أمراض مصاحبة مثل السكري من النوع الثاني أو ارتفاع ضغط الدم أو انقطاع النفس أثناء النوم أو آلام المفاصل. يجب أن يكون المريض قد جرّب برامج غذائية ورياضية منظمة دون نجاح مستدام.",
            "Typical candidates have a BMI of 40+, or 35+ with comorbidities such as type 2 diabetes, hypertension, sleep apnea or joint pain. Structured diet and exercise programmes should have been attempted without sustained success.",
          ],
        ]
      ),
      section(
        "الفوائد المتوقعة",
        "Expected benefits",
        [
          [
            "فقدان 60–70% من الوزن الزائد خلال 12–18 شهرًا في المتوسط. تحسن ملحوظ في السكري والضغط ودهون الدم عند كثير من المرضى. لا تتضمن العملية تحويل مسار الأمعاء أو زرع أجهزة دائمة.",
            "Average excess weight loss of 60–70% within 12–18 months. Significant improvement in diabetes, blood pressure and lipids for many patients. No intestinal bypass or permanent implanted device is required.",
          ],
        ]
      ),
      section(
        "المتابعة بعد العملية",
        "Post-operative follow-up",
        [
          [
            "النجاح يعتمد على الالتزام بنظام غذائي بروتيني منخفض السكريات، مكملات الفيتامينات والمعادن، ومواعيد المتابعة الدورية. يوفر أ.د. قلموش خطة متابعة شاملة تشمل أخصائي التغذية والفحوصات الدورية.",
            "Success depends on a protein-forward, low-sugar diet, vitamin and mineral supplements, and regular follow-up visits. Prof. Kalmoush provides structured follow-up including nutrition support and periodic labs.",
          ],
        ]
      ),
    ],
    faqs: [
      faq(
        "هل عملية التكميم آمنة؟",
        "Is gastric sleeve safe?",
        "نعم، عند إجرائها لدى جراح متخصص في بيئة مستشفى مجهزة. المخاطر تشمل النزيف والتسرب والجلطات — ويتم تقليلها بالتقييم المسبق والبروتوكولات المعيارية.",
        "Yes, when performed by a specialist bariatric surgeon in an equipped hospital. Risks include bleeding, leak and clots — minimised through pre-operative assessment and standard protocols."
      ),
      faq(
        "كم تستغرق فترة التعافي؟",
        "How long is recovery?",
        "معظم المرضى يعودون للعمل الخفيف خلال أسبوعين. يُنصح بتجنب الرفع الثقيل والرياضة الشاقة لمدة 4–6 أسابيع.",
        "Most patients return to light work within two weeks. Heavy lifting and strenuous exercise should be avoided for 4–6 weeks."
      ),
    ],
    relatedPageIds: [
      "gastric-sleeve-price",
      "sleeve-vs-bypass",
      "weight-loss-after-sleeve",
      "weight-regain-after-sleeve",
      "bariatric-surgery",
    ],
    sitemapPriority: 0.95,
  },
  {
    id: "gastric-sleeve-price",
    type: "commercial",
    cluster: "gastric-sleeve",
    slug: lt("سعر-عملية-تكميم-المعدة", "gastric-sleeve-price-egypt"),
    title: lt(
      "سعر عملية تكميم المعدة في مصر 2026 | أ.د. قلموش",
      "Gastric Sleeve Price in Egypt 2026 | Prof. Kalmoush"
    ),
    metaDescription: lt(
      "تعرف على عوامل تحديد سعر عملية تكميم المعدة في مصر: خبرة الجراح، المستشفى، نوع التقنية، والمتابعة. استشارة مع أ.د. عبد الفتاح قلموش للحصول على عرض سعر مخصص.",
      "Learn what determines gastric sleeve cost in Egypt: surgeon experience, hospital, technique and follow-up. Book a consultation with Prof. Abd-Elfattah Kalmoush for a personalised quote."
    ),
    h1: lt("سعر عملية تكميم المعدة في مصر", "Gastric Sleeve Surgery Cost in Egypt"),
    intro: lt(
      "لا يوجد سعر ثابت لعملية تكميم المعدة — التكلفة تتأثر بعدة عوامل تشمل خبرة الجراح، مستوى المستشفى، نوع التقنية، الفحوصات المسبقة، مدة الإقامة، والمتابعة بعد العملية. في مصر، تتراوح الأسعار في المراكز المتخصصة عادةً بين 45,000 و120,000 جنيه حسب الباقة والخدمات المشمولة.",
      "There is no fixed price for gastric sleeve surgery. Cost depends on surgeon experience, hospital level, technique, pre-operative tests, length of stay and follow-up. In Egypt, specialised centres typically range from EGP 45,000 to 120,000 depending on the package."
    ),
    sections: [
      section(
        "ما الذي يحدد سعر التكميم؟",
        "What determines sleeve surgery cost?",
        [
          [
            "خبرة الجراح وعضوياته الدولية (مثل IFSO). مستوى المستشفى وتجهيز غرف العمليات ووحدة العناية. نوع التقنية: تكميم بالمنظار، تكميم دقيق، أو تكميم معدل. الفحوصات قبل العملية: منظار، تحاليل، تخطيط قلب. مدة الإقامة والأدوية والمتابعة الغذائية.",
            "Surgeon experience and international memberships (e.g. IFSO). Hospital level, operating theatre and ICU facilities. Technique: standard laparoscopic, precision sleeve or modified sleeve. Pre-op workup: endoscopy, labs, cardiac workup. Length of stay, medications and nutritional follow-up.",
          ],
        ]
      ),
      section(
        "نصائح للحصول على أفضل قيمة",
        "Tips for best value",
        [
          [
            "اطلب عرض سعر تفصيلي يوضح ما يشمله السعر. لا تختار الأرخص دون التأكد من خبرة الجراح وجودة المستشفى. اسأل عن خطة المتابعة بعد العملية — المتابعة الجيدة توفر تكاليف المضاعفات على المدى الطويل.",
            "Request a detailed quote showing what is included. Do not choose the cheapest option without verifying surgeon experience and hospital quality. Ask about the post-operative follow-up plan — good follow-up saves complication costs long-term.",
          ],
        ]
      ),
      section(
        "كيف تحصل على عرض سعر مخصص؟",
        "How to get a personalised quote",
        [
          [
            "تواصل مع عيادات أ.د. عبد الفتاح قلموش في المقطم (القاهرة) أو الزقازيق أو ههيا عبر واتساب أو الهاتف. سيتم تقييم حالتك وتحديد الفحوصات المطلوبة ثم تقديم عرض سعر شفاف يناسب حالتك.",
            "Contact Prof. Kalmoush's clinics in Mokattam (Cairo), Zagazig or Hehya via WhatsApp or phone. Your case will be assessed, required tests identified, and a transparent quote provided.",
          ],
        ]
      ),
    ],
    faqs: [
      faq(
        "هل يشمل السعر المتابعة بعد العملية؟",
        "Does the price include follow-up?",
        "يعتمد على الباقة المختارة. اسأل صراحةً عما يشمله العرض: عدد الزيارات، التحاليل، واستشارات التغذية.",
        "It depends on the package chosen. Ask explicitly what is included: number of visits, labs and nutrition consultations."
      ),
      faq(
        "هل يتوفر تقسيط؟",
        "Is instalment payment available?",
        "بعض المستشفيات والمراكز تقدم خطط تقسيط. استفسر عند حجز الاستشارة.",
        "Some hospitals and centres offer instalment plans. Ask when booking your consultation."
      ),
    ],
    relatedPageIds: ["gastric-sleeve", "sleeve-vs-bypass", "bariatric-surgery"],
    sitemapPriority: 0.9,
  },
  {
    id: "weight-loss-after-sleeve",
    type: "faq",
    cluster: "gastric-sleeve",
    slug: lt("كم-كيلو-ينزل-بعد-التكميم", "how-much-weight-loss-after-sleeve"),
    title: lt(
      "كم كيلو ينزل بعد التكميم؟ | دليل فقدان الوزن",
      "How Much Weight Do You Lose After Sleeve? | Weight Loss Guide"
    ),
    metaDescription: lt(
      "كم كيلو ينزل المريض بعد عملية تكميم المعدة؟ تعرّف على المراحل الزمنية، النسب المتوقعة، والعوامل المؤثرة مع أ.د. عبد الفتاح قلموش.",
      "How many kilograms do patients lose after gastric sleeve? Learn about timelines, expected percentages and influencing factors with Prof. Abd-Elfattah Kalmoush."
    ),
    h1: lt("كم كيلو ينزل بعد عملية التكميم؟", "How Much Weight Do You Lose After Gastric Sleeve?"),
    intro: lt(
      "يختلف فقدان الوزن من مريض لآخر، لكن المتوسط العام هو فقدان 60–70% من الوزن الزائد خلال 12–18 شهرًا. إذا كان وزنك الزائد 40 كجم مثلاً، قد تفقد نحو 24–28 كجم في السنة الأولى مع الالتزام بالنظام الغذائي والمتابعة.",
      "Weight loss varies between patients, but the general average is 60–70% of excess weight within 12–18 months. If your excess weight is 40 kg, you might lose about 24–28 kg in the first year with diet adherence and follow-up."
    ),
    sections: [
      section(
        "مراحل فقدان الوزن بعد التكميم",
        "Weight loss phases after sleeve",
        [
          [
            "الشهر الأول: 5–10 كجم (سريع بسبب السوائل والتغير الغذائي). الأشهر 2–6: أسرع مرحلة فقدان (2–4 كجم شهريًا). الشهر 6–12: يتباطأ الفقدان تدريجيًا. بعد السنة: الوصول للوزن المستقر مع متابعة غذائية.",
            "Month 1: 5–10 kg (rapid due to fluids and dietary change). Months 2–6: fastest loss phase (2–4 kg per month). Months 6–12: gradual slowdown. After year 1: stabilisation with nutritional follow-up.",
          ],
        ]
      ),
      section(
        "عوامل تؤثر على النتيجة",
        "Factors affecting outcomes",
        [
          [
            "الالتزام بالنظام الغذائي والبروتين. ممارسة النشاط البدني تدريجيًا. المتابعة الطبية والتغذوية. العمر والأمراض المصاحبة. نوع الإجراء وتقنية الجراح.",
            "Diet and protein adherence. Gradual physical activity. Medical and nutritional follow-up. Age and comorbidities. Procedure type and surgical technique.",
          ],
        ]
      ),
    ],
    faqs: [
      faq(
        "متى يبدأ نزول الوزن؟",
        "When does weight loss start?",
        "يبدأ فورًا بعد العملية، مع أسرع معدل في الأسابيع والأشهر الأولى.",
        "Immediately after surgery, with the fastest rate in the first weeks and months."
      ),
    ],
    relatedPageIds: ["gastric-sleeve", "weight-regain-after-sleeve", "gastric-sleeve-price"],
    sitemapPriority: 0.85,
  },
  {
    id: "weight-regain-after-sleeve",
    type: "faq",
    cluster: "gastric-sleeve",
    slug: lt("هل-يرجع-الوزن-بعد-التكميم", "weight-regain-after-gastric-sleeve"),
    title: lt(
      "هل يرجع الوزن بعد التكميم؟ | الوقاية وإعادة التكميم",
      "Does Weight Come Back After Sleeve? | Prevention & Revision"
    ),
    metaDescription: lt(
      "هل يرجع الوزن بعد عملية تكميم المعدة؟ تعرّف على أسباب استعادة الوزن، كيفية الوقاية، وخيارات جراحة المراجعة مع أ.د. قلموش.",
      "Can weight return after gastric sleeve? Learn about causes of regain, prevention strategies and revision options with Prof. Kalmoush."
    ),
    h1: lt("هل يرجع الوزن بعد عملية التكميم؟", "Does Weight Regain Happen After Gastric Sleeve?"),
    intro: lt(
      "نعم، قد يستعيد بعض المرضى جزءًا من الوزن بعد 2–5 سنوات — لكن هذا ليس حتميًا. أسباب استعادة الوزن تشمل تمدد المعدة، العادات الغذائية السيئة، قلة النشاط، والأمراض النفسية غير المعالجة. الوقاية والمتابعة المبكرة أهم من جراحة المراجعة.",
      "Yes, some patients may regain partial weight after 2–5 years — but this is not inevitable. Causes include stomach stretching, poor eating habits, inactivity and untreated psychological factors. Prevention and early follow-up matter more than revision surgery."
    ),
    sections: [
      section(
        "أسباب استعادة الوزن",
        "Causes of weight regain",
        [
          [
            "تمدد جيب المعدة مع مرور الوقت. تناول سكريات وسائلات عالية السعرات. قلة البروتين والنشاط البدني. توقف المكملات الغذائية. اضطرابات أكل غير معالجة.",
            "Pouch stretching over time. Consuming high-calorie liquids and sugars. Low protein intake and inactivity. Stopping supplements. Untreated eating disorders.",
          ],
        ]
      ),
      section(
        "كيف تمنع استعادة الوزن؟",
        "How to prevent weight regain",
        [
          [
            "الالتزام بمواعيد المتابعة كل 3–6 أشهر. تناول البروتين أولًا في كل وجبة. تجنب الشرب مع الأكل والسكريات. ممارسة رياضة منتظمة. استشارة أخصائي تغذية عند أي زيادة.",
            "Attend follow-up every 3–6 months. Eat protein first at every meal. Avoid drinking with meals and limit sugars. Exercise regularly. Consult a nutritionist at any weight increase.",
          ],
        ]
      ),
      section(
        "خيارات جراحة المراجعة",
        "Revision surgery options",
        [
          [
            "عند فشل التكميم الأول، قد يُنصح بتحويل المسار أو التكميم المعدل أو إعادة التكميم. يقيّم أ.د. قلموش كل حالة ويحدد الإجراء الأنسب.",
            "When the initial sleeve fails, conversion to bypass, modified sleeve or re-sleeve may be recommended. Prof. Kalmoush evaluates each case individually.",
          ],
        ]
      ),
    ],
    faqs: [
      faq(
        "ما نسبة المرضى الذين يستعيدون الوزن؟",
        "What percentage regain weight?",
        "تقديرات تتراوح بين 15–30% قد يستعيدون وزنًا كبيرًا. المتابعة المنتظمة تقلل هذا الخطر.",
        "Estimates suggest 15–30% may regain significant weight. Regular follow-up reduces this risk."
      ),
    ],
    relatedPageIds: ["gastric-sleeve", "revision-bariatric", "weight-loss-after-sleeve"],
    sitemapPriority: 0.85,
  },
  {
    id: "sleeve-risks",
    type: "faq",
    cluster: "gastric-sleeve",
    slug: lt("أضرار-عملية-التكميم", "gastric-sleeve-risks-and-side-effects"),
    title: lt(
      "أضرار عملية التكميم ومضاعفاتها | دليل شامل",
      "Gastric Sleeve Risks & Side Effects | Complete Guide"
    ),
    metaDescription: lt(
      "تعرف على أضرار ومضاعفات عملية تكميم المعدة المحتملة: التسرب، النزيف، نقص الفيتامينات، وكيفية تقليل المخاطر مع جراح متخصص.",
      "Learn about potential gastric sleeve risks and complications: leak, bleeding, vitamin deficiency, and how a specialist surgeon reduces them."
    ),
    h1: lt("أضرار ومضاعفات عملية التكميم", "Gastric Sleeve Risks and Complications"),
    intro: lt(
      "عملية تكميم المعدة آمنة نسبيًا عند إجرائها لدى جراح متخصص، لكن كأي عملية جراحية كبرى لها مخاطر. أهم المضاعفات المحتملة: تسرب من خط الدباسة، نزيف، جلطات، نقص فيتامينات، وارتجاع معدي. يتم تقليل هذه المخاطر بالتقييم الشامل والبروتوكولات المعيارية.",
      "Gastric sleeve is relatively safe with a specialist surgeon, but like any major surgery it carries risks. Key potential complications include staple-line leak, bleeding, clots, vitamin deficiency and reflux. Comprehensive assessment and standard protocols minimise these risks."
    ),
    sections: [
      section(
        "مضاعفات مبكرة (خلال 30 يومًا)",
        "Early complications (within 30 days)",
        [
          [
            "تسرب من خط الدباسة (نادر لكنه خطير). نزيف داخلي. جلطات وريدية. عدوى الجرح. يتم الكشف المبكر عبر المتابعة والتصوير عند الحاجة.",
            "Staple-line leak (rare but serious). Internal bleeding. Venous clots. Wound infection. Early detection via follow-up and imaging when needed.",
          ],
        ]
      ),
      section(
        "مضاعفات متأخرة",
        "Late complications",
        [
          [
            "نقص فيتامين B12 والحديد والكالسيوم. ارتجاع معدي مريئي. تمدد المعدة واستعادة الوزن. حصوات مرارة. المكملات والمتابعة الدورية تمنع معظم هذه المشاكل.",
            "B12, iron and calcium deficiency. Gastro-oesophageal reflux. Stomach stretching and weight regain. Gallstones. Supplements and regular follow-up prevent most issues.",
          ],
        ]
      ),
    ],
    faqs: [
      faq(
        "هل التكميم يسبب العقم؟",
        "Does sleeve cause infertility?",
        "لا، بل قد يحسّن الخصوبة عند بعض المرضى بعد فقدان الوزن. يُنصح بتأجيل الحمل 12–18 شهرًا بعد العملية.",
        "No — it may actually improve fertility for some patients after weight loss. Pregnancy is typically advised 12–18 months post-surgery."
      ),
    ],
    relatedPageIds: ["gastric-sleeve", "weight-regain-after-sleeve", "revision-bariatric"],
    sitemapPriority: 0.8,
  },
];
