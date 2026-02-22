import sinaiImage from "@/assets/sinai-retreat.jpg";
import indiaImage from "@/assets/india-retreat.jpg";

export interface PriceTier {
  name: string;
  price: number;
  spots: number;
  spotsLeft: number;
  status: "available" | "sold-out";
}

export interface Retreat {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  dateRange?: string;
  location: string;
  price: number;
  originalPrice?: number;
  spots: number;
  spotsLeft: number;
  image: string;
  description: string;
  highlights: string[];
  whatsappLink: string;
  status: "upcoming" | "sold-out" | "past";
  forWomen?: boolean;
  priceTiers?: PriceTier[];
  schedule?: {
    day: string;
    activities: string[];
  }[];
  includes?: string[];
  cancellationPolicy?: string[];
  facilitators?: string[];
}

export const retreats: Retreat[] = [
  {
    id: "sinai-yoga-january-2026",
    title: "חופשת יוגה בסיני הקסומה (בינואר)",
    subtitle: "חופש, תנועה וחיבור בסיני הקסומה",
    date: "1/01/2026",
    dateRange: "1-4/01/2026",
    location: "נחיל אין, נואיבה",
    price: 1850,
    spots: 30,
    spotsLeft: 30,
    image: sinaiImage,
    description: "סופ'ש סילבסטר חלומי בסיני. 4 ימים של חופש, תנועה, יוגה, סדנאות, ים, מדבר וחיבור עם אנשים טובים.",
    highlights: [
      "קאמפ מפנק שמתאים גם למזג אוויר קריר",
      "שיעורי יוגה, תנועה וחיבור לגוף",
      "סדנאות מדיטציה, מיינדפולנס, כתיבה ועוד",
      "הקסם של סיני - נופים קסומים של מדבר וים",
      "לינה מפנקת ואוכל מזין"
    ],
    whatsappLink: "https://wa.me/message/XLOCDECHKMAFD1",
    status: "upcoming",
    forWomen: false,
    facilitators: ["נועה מתתיהו", "עינב פרידמן"],
    priceTiers: [
      { name: "Early Birds - עד 13.12", price: 1850, spots: 10, spotsLeft: 10, status: "available" },
      { name: "Mid Flyers - עד 20.12", price: 2150, spots: 10, spotsLeft: 10, status: "available" },
      { name: "Late Bloomers - מחיר מלא", price: 2550, spots: 10, spotsLeft: 10, status: "available" }
    ],
    schedule: [
      {
        day: "יום 1 - הגעה, התכנסות ופתיחה",
        activities: [
          "התארגנות בחדרים והיכרות ראשונית",
          "מעגל פתיחה",
          "תרגול יוגה עדין",
          "ארוחת ערב מזינה"
        ]
      },
      {
        day: "יום 2 - תנועה וחזון",
        activities: [
          "יוגה של בוקר",
          "ארוחת בוקר מפנקת",
          "סדנאת מיינדפולנס",
          "זמן מנוחה",
          "סדנאת חזון לשנה החדשה",
          "ארוחת ערב מזינה"
        ]
      },
      {
        day: "יום 3 - תנועה ומשחק",
        activities: [
          "יוגה של בוקר",
          "ארוחת בוקר מפנקת",
          "זמן מנוחה",
          "טיול שקיעה",
          "סדנאת מובמנט",
          "ארוחת ערב מזינה",
          "מסיבה"
        ]
      },
      {
        day: "יום 4 - סיכום, אינטגרציה וחזרה הביתה",
        activities: [
          "יוגה של בוקר",
          "ארוחת בוקר מפנקת",
          "מעגל סיום",
          "פרידות ויציאה הביתה"
        ]
      }
    ],
    includes: [
      "3 לילות בקאמפ מפנק בנחיל אין, נואיבה",
      "חדרים נעימים (פרטיים / משותפים)",
      "חלל תרגול סגור וסלון עם אח",
      "2 ארוחות צמחוניות מלאות",
      "שתייה חמה, פירות ונשנושים כל היום",
      "אוכל פשוט, מזין ומלא צבע",
      "הסעות מהגבול וחזרה",
      "מתנה אישית לכל משתתף"
    ],
    cancellationPolicy: [
      "הרשמה: מקום נשמר רק לאחר תשלום מקדמה של 500 ש״ח",
      "ביטול עד 7 ימים לפני הריטריט - החזר של תשלום המקדמה בלבד",
      "ביטול פחות מ־7 ימים לפני הריטריט - תשלום מלא",
      "ניתן להעביר את המקום למשתתפת אחרת בתיאום מראש",
      "במקרה של ביטול מצד המארגנים - החזר מלוא הסכום"
    ]
  },
  {
    id: "sinai-yoga-may-2026",
    title: "חופשת יוגה בסיני הקסומה (מאי)",
    subtitle: "יוגה, ים, מדבר ואנשים טובים",
    date: "21/05/2026",
    dateRange: "21-24/05/2026",
    location: "קאמפ מלדיב ביץ׳, אל מאחש, סיני",
    price: 1880,
    spots: 30,
    spotsLeft: 30,
    image: sinaiImage,
    description: "חופשת יוגה בלתי נשכחת בסיני הקסום. 4 ימים של תרגול, טיולים, שנורקלינג ושקט במדבר. מתאים לכולם - נשים וגברים כאחד.",
    highlights: [
      "שיעורי יוגה יומיים",
      "מדיטציה וסאונד הילינג",
      "טיול שקיעה במדבר",
      "שנורקלינג בים סוף",
      "לינה בבקתות מפנקות"
    ],
    whatsappLink: "https://wa.me/message/X3ASE2JKXDO7J1",
    status: "upcoming",
    forWomen: false,
    facilitators: ["נועה לונה", "מנחים אורחים"],
    priceTiers: [
      { name: "10 הראשונים (Early Bird)", price: 1880, spots: 10, spotsLeft: 10, status: "available" },
      { name: "10 הבאים", price: 2180, spots: 10, spotsLeft: 10, status: "available" },
      { name: "10 האחרונים", price: 2380, spots: 10, spotsLeft: 10, status: "available" }
    ],
    schedule: [
      {
        day: "יום 1 - הגעה והתכנסות",
        activities: [
          "התארגנות בחדרים והיכרות ראשונית",
          "תרגול יוגה עדין",
          "ארוחת ערב מזינה",
          "מעגל פתיחה"
        ]
      },
      {
        day: "יום 2 - תנועה ומיינדפולנס",
        activities: [
          "יוגה של בוקר",
          "קפה, תה ונשנושים",
          "סדנת מיינדפולנס",
          "בראנץ׳ מפנק",
          "זמן חופשי",
          "דיפ שוואסאנה",
          "ארוחת ערב"
        ]
      },
      {
        day: "יום 3 - אנרגיה וחגיגה",
        activities: [
          "יוגה של בוקר",
          "קפה, תה ונשנושים",
          "סדנת התמקדות",
          "שנורקלינג",
          "זמן חופשי",
          "ארוחת ערב חגיגית",
          "מדורה"
        ]
      },
      {
        day: "יום 4 - סיום ואינטגרציה",
        activities: [
          "יוגה של בוקר",
          "ארוחת בוקר מפנקת",
          "סדנת סיום",
          "פרידות ויציאה הביתה"
        ]
      }
    ],
    includes: [
      "3 לילות בקאמפ מלדיב ביץ׳ (בקתות מפנקות)",
      "הסעות מהגבול ובחזרה",
      "פריסת בוקר מתוקה עם פירות, עוגות, קפה ותה",
      "בראנץ׳ מפנק ומזין",
      "ארוחת ערב עשירה",
      "כל שיעורי היוגה והסדנאות",
      "מתנה אישית לכל משתתף/ת"
    ],
    cancellationPolicy: [
      "ביטול עד 7 ימים לפני הריטריט – תשלום מקדמה בלבד",
      "ביטול פחות מ-7 ימים לפני הריטריט – תשלום מלא",
      "ניתן להעביר את המקום למשתתף/ת אחר/ת בתיאום מראש"
    ]
  },
  {
    id: "india-yoga-april-2026",
    title: "חופשת יוגה בהודו",
    subtitle: "לגלות את הקסם של הודו",
    date: "אפריל 2026",
    location: "הודו",
    price: 0,
    spots: 0,
    spotsLeft: 0,
    image: indiaImage,
    description: "חופשת יוגה בהודו - תאריכים מדויקים ופרטים מלאים בקרוב. הירשמו לרשימת ההמתנה כדי לקבל עדכון ראשונים!",
    highlights: [
      "תאריכים ופרטים מלאים בקרוב"
    ],
    whatsappLink: "https://wa.me/message/X3ASE2JKXDO7J1",
    status: "upcoming",
    forWomen: false,
    facilitators: ["נועה לונה"]
  }
];

export const getRetreatById = (id: string): Retreat | undefined => {
  return retreats.find(retreat => retreat.id === id);
};

export const getUpcomingRetreats = (): Retreat[] => {
  return retreats.filter(retreat => retreat.status === "upcoming");
};
