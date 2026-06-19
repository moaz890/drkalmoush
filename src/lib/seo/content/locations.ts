import type { LocationPage } from "../types";
import { faq, lt, section } from "./helpers";

export const locationPages: LocationPage[] = [
  {
    id: "cairo-gastric-sleeve",
    type: "location",
    cluster: "gastric-sleeve",
    cityKey: "mokattam",
    servicePageId: "gastric-sleeve",
    slug: lt("القاهرة/عملية-تكميم-المعدة", "cairo/gastric-sleeve-surgery"),
    title: lt(
      "عملية تكميم المعدة في القاهرة | أ.د. قلموش — المقطم",
      "Gastric Sleeve in Cairo | Prof. Kalmoush — Mokattam"
    ),
    metaDescription: lt(
      "عملية تكميم المعدة في القاهرة مع أ.د. عبد الفتاح قلموش. عيادة المقطم — استشاري جراحات السمنة وعضو IFSO. احجز استشارة.",
      "Gastric sleeve surgery in Cairo with Prof. Abd-Elfattah Kalmoush. Mokattam clinic — IFSO bariatric consultant. Book a consultation."
    ),
    h1: lt("عملية تكميم المعدة في القاهرة", "Gastric Sleeve Surgery in Cairo"),
    intro: lt(
      "عيادة أ.د. عبد الفتاح قلموش في المقطم — القاهرة — تقدم عملية تكميم المعدة بالمنظار بأحدث التقنيات. مواعيد العيادة: السبت والإثنين والأربعاء من 5 إلى 10 مساءً.",
      "Prof. Abd-Elfattah Kalmoush's Mokattam clinic in Cairo offers laparoscopic gastric sleeve with the latest techniques. Clinic hours: Saturday, Monday and Wednesday 5–10 PM."
    ),
    sections: [
      section(
        "موقع العيادة",
        "Clinic location",
        [
          [
            "المقطم — شارع 9 عمارات البترول أعلى حلويات الحلمية. هاتف: 01023053320. حجز عبر واتساب متاح.",
            "Mokattam — Street 9, Petroleum Buildings, above El-Helmia Sweets. Phone: 01023053320. WhatsApp booking available.",
          ],
        ]
      ),
      section(
        "لماذا تكميم المعدة في عيادتنا؟",
        "Why sleeve surgery at our clinic?",
        [
          [
            "أستاذ جراحة عامة — جامعة الأزهر. عضو IFSO وESBS. خبرة تفوق عقدين في جراحات السمنة. متابعة شاملة بعد العملية.",
            "Professor of surgery — Al-Azhar University. IFSO and ESBS member. Over two decades of bariatric experience. Comprehensive follow-up.",
          ],
        ]
      ),
    ],
    faqs: [
      faq(
        "ما مواعيد عيادة القاهرة؟",
        "What are Cairo clinic hours?",
        "السبت والإثنين والأربعاء من 5:00 إلى 10:00 مساءً.",
        "Saturday, Monday and Wednesday 5:00–10:00 PM."
      ),
    ],
    relatedPageIds: ["gastric-sleeve", "gastric-sleeve-price", "zagazig-bariatric", "bariatric-surgery"],
    sitemapPriority: 0.88,
  },
  {
    id: "cairo-gastric-bypass",
    type: "location",
    cluster: "gastric-bypass",
    cityKey: "mokattam",
    servicePageId: "gastric-bypass",
    slug: lt("القاهرة/تحويل-المسار", "cairo/gastric-bypass-surgery"),
    title: lt(
      "عملية تحويل المسار في القاهرة | أ.د. قلموش",
      "Gastric Bypass in Cairo | Prof. Kalmoush"
    ),
    metaDescription: lt(
      "عملية تحويل المسار في القاهرة مع أ.د. عبد الفتاح قلموش. عيادة المقطم — جراح سمنة وعضو IFSO.",
      "Gastric bypass in Cairo with Prof. Abd-Elfattah Kalmoush. Mokattam clinic — IFSO bariatric surgeon."
    ),
    h1: lt("عملية تحويل المسار في القاهرة", "Gastric Bypass in Cairo"),
    intro: lt(
      "عيادة المقطم في القاهرة تقدم عملية تحويل المسار بالمنظار للمرضى بسمنة مفرطة وسكري. أ.د. قلموش يشرف على التقييم والعملية والمتابعة.",
      "The Mokattam clinic in Cairo offers laparoscopic gastric bypass for morbid obesity and diabetes patients. Prof. Kalmoush oversees assessment, surgery and follow-up."
    ),
    sections: [
      section(
        "العيادة والمواعيد",
        "Clinic and hours",
        [
          [
            "المقطم — القاهرة. السبت والإثنين والأربعاء 5–10 مساءً.",
            "Mokattam — Cairo. Saturday, Monday and Wednesday 5–10 PM.",
          ],
        ]
      ),
    ],
    faqs: [],
    relatedPageIds: ["gastric-bypass", "cairo-gastric-sleeve", "sleeve-vs-bypass"],
    sitemapPriority: 0.85,
  },
  {
    id: "zagazig-bariatric",
    type: "location",
    cluster: "bariatric-surgery",
    cityKey: "zagazig",
    servicePageId: "bariatric-surgery",
    slug: lt("الزقازيق/جراحات-السمنة", "zagazig/bariatric-surgery"),
    title: lt(
      "جراحات السمنة في الزقازيق | أ.د. عبد الفتاح قلموش",
      "Bariatric Surgery in Zagazig | Prof. Abd-Elfattah Kalmoush"
    ),
    metaDescription: lt(
      "جراحات السمنة في الزقازيق: تكميم، تحويل مسار، وبالون. أ.د. قلموش — عيادة الزقازيق. احجز موعد.",
      "Bariatric surgery in Zagazig: sleeve, bypass and balloon. Prof. Kalmoush — Zagazig clinic. Book an appointment."
    ),
    h1: lt("جراحات السمنة في الزقازيق", "Bariatric Surgery in Zagazig"),
    intro: lt(
      "عيادة أ.د. عبد الفتاح قلموش في الزقازيق تخدم مرضى الشرقية والدلتا بجراحات السمنة الكاملة. مواعيد: الأحد والثلاثاء والخميس 5–10 مساءً.",
      "Prof. Kalmoush's Zagazig clinic serves Sharqia and Delta patients with full bariatric surgery services. Hours: Sunday, Tuesday and Thursday 5–10 PM."
    ),
    sections: [
      section(
        "موقع عيادة الزقازيق",
        "Zagazig clinic location",
        [
          [
            "أول شارع موقف المنصورة بعد كوبري العبور بجوار الصواف. هاتف: 01033966769.",
            "First street after Mansoura station (after Al-Obour bridge), beside El-Sawaf. Phone: 01033966769.",
          ],
        ]
      ),
      section(
        "الإجراءات المتاحة",
        "Available procedures",
        [
          [
            "تكميم المعدة. تحويل المسار. بالون المعدة. مناظير الجهاز الهضمي. جراحة المراجعة.",
            "Gastric sleeve. Gastric bypass. Gastric balloon. GI endoscopy. Revision surgery.",
          ],
        ]
      ),
    ],
    faqs: [
      faq(
        "ما مواعيد عيادة الزقازيق؟",
        "What are Zagazig clinic hours?",
        "الأحد والثلاثاء والخميس من 5:00 إلى 10:00 مساءً.",
        "Sunday, Tuesday and Thursday 5:00–10:00 PM."
      ),
    ],
    relatedPageIds: ["bariatric-surgery", "gastric-sleeve", "cairo-gastric-sleeve", "hehya-bariatric"],
    sitemapPriority: 0.86,
  },
  {
    id: "zagazig-gastric-sleeve",
    type: "location",
    cluster: "gastric-sleeve",
    cityKey: "zagazig",
    servicePageId: "gastric-sleeve",
    slug: lt("الزقازيق/عملية-تكميم-المعدة", "zagazig/gastric-sleeve-surgery"),
    title: lt(
      "عملية تكميم المعدة في الزقازيق | أ.د. قلموش",
      "Gastric Sleeve in Zagazig | Prof. Kalmoush"
    ),
    metaDescription: lt(
      "عملية تكميم المعدة في الزقازيق مع أ.د. عبد الفتاح قلموش. عيادة الزقازيق — جراح سمنة معتمد.",
      "Gastric sleeve in Zagazig with Prof. Abd-Elfattah Kalmoush. Zagazig clinic — certified bariatric surgeon."
    ),
    h1: lt("عملية تكميم المعدة في الزقازيق", "Gastric Sleeve in Zagazig"),
    intro: lt(
      "مرضى الزقازيق والشرقية يمكنهم إجراء تكميم المعدة مع أ.د. قلموش في عيادته المحلية قبل إحالة العملية للمستشفى.",
      "Zagazig and Sharqia patients can have gastric sleeve with Prof. Kalmoush at his local clinic before hospital referral for surgery."
    ),
    sections: [
      section(
        "العيادة",
        "The clinic",
        [
          [
            "الزقازيق — أول ش موقف المنصورة. الأحد والثلاثاء والخميس.",
            "Zagazig — first street after Mansoura station. Sunday, Tuesday and Thursday.",
          ],
        ]
      ),
    ],
    faqs: [],
    relatedPageIds: ["gastric-sleeve", "zagazig-bariatric", "cairo-gastric-sleeve"],
    sitemapPriority: 0.84,
  },
  {
    id: "hehya-bariatric",
    type: "location",
    cluster: "bariatric-surgery",
    cityKey: "hehya",
    servicePageId: "bariatric-surgery",
    slug: lt("ههيا/جراحات-السمنة", "hehya/bariatric-surgery"),
    title: lt(
      "جراحات السمنة في ههيا | أ.د. عبد الفتاح قلموش",
      "Bariatric Surgery in Hehya | Prof. Abd-Elfattah Kalmoush"
    ),
    metaDescription: lt(
      "جراحات السمنة في ههيا والشرقية مع أ.د. قلموش. عيادة ههيا — الجمعة 6–9 مساءً.",
      "Bariatric surgery in Hehya and Sharqia with Prof. Kalmoush. Hehya clinic — Friday 6–9 PM."
    ),
    h1: lt("جراحات السمنة في ههيا", "Bariatric Surgery in Hehya"),
    intro: lt(
      "عيادة ههيا تخدم مرضى المحافظات الشرقية باستشارات جراحات السمنة والمناظير. مواعيد العيادة: الجمعة من 6 إلى 9 مساءً.",
      "The Hehya clinic serves eastern governorate patients with bariatric and endoscopy consultations. Clinic hours: Friday 6–9 PM."
    ),
    sections: [
      section(
        "موقع العيادة",
        "Clinic location",
        [
          [
            "ههيا — بجوار مدرسة الصنايع بنين. هاتف: 01033966745.",
            "Hehya — next to the Industrial Boys School. Phone: 01033966745.",
          ],
        ]
      ),
    ],
    faqs: [],
    relatedPageIds: ["bariatric-surgery", "zagazig-bariatric", "gastric-sleeve"],
    sitemapPriority: 0.8,
  },
];
