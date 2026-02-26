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
    id: "sinai-yoga-march-2026",
    title: "חופשת יוגה בסיני הקסומה (מרץ)",
    subtitle: "חופש, תנועה וחיבור בסיני הקסומה",
    date: "26/03/2026",
    dateRange: "26-29/03/2026",
    location: "מלדיב ביץ׳, אל מאחש, סיני",
    price: 1880,
    spots: 30,
    spotsLeft: 30,
    image: sinaiImage,
    description: "סופ\"ש חלומי בסיני. מי שכבר היה בסיני יודע - שבסיני יש קסם שאין בשום מקום אחר בעולם. בואו לפגוש אנשים חדשים, לייצר חיבורים, לגלות דברים חדשים ולהינות מאיזון מושלם בין סדנאות ותוכן לבין זמן חופשי, שקט, מוזיקה וריקודים.",
    highlights: [
      "קאמפ מפנק על הים",
      "שיעורי יוגה, תנועה וחיבור לגוף",
      "סדנאות מדיטציה, מיינדפולנס, כתיבה ועוד",
      "הקסם של סיני - נופים קסומים של מדבר וים",
      "לינה מפנקת ואוכל מזין",
      "קבוצה של אנשים טובים וזמן לחיבורים",
      "כל מה שאתם צריכים כדי להרפות ולהתמסר לחוויה"
    ],
    whatsappLink: "https://wa.me/message/X3ASE2JKXDO7J1",
    status: "upcoming",
    forWomen: false,
    facilitators: ["נועה מתתיהו", "שירה שירה", "רותם ביתשם"],
    priceTiers: [
      { name: "Early Birds", price: 1880, spots: 10, spotsLeft: 10, status: "available" },
      { name: "Mid Flyers", price: 2180, spots: 10, spotsLeft: 10, status: "available" },
      { name: "Late Bloomers - מחיר מלא", price: 2380, spots: 10, spotsLeft: 10, status: "available" }
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
        day: "יום 2 - פתיחה וחיבור",
        activities: [
          "יוגה של בוקר",
          "קפה ונשנושים",
          "סדנאת פתיחה והיכרות",
          "בראנץ׳ מפנק",
          "זמן מנוחה",
          "אקרו יוגה",
          "קבלת שבת וניגונים",
          "ארוחת ערב מזינה"
        ]
      },
      {
        day: "יום 3 - עומק ומשחק",
        activities: [
          "יוגה של בוקר",
          "קפה ונשנושים",
          "סדנאת התמקדות",
          "בראנץ׳ מפנק",
          "זמן מנוחה ושנורקלים",
          "דיפ שוואסאנה",
          "ארוחת ערב מזינה",
          "הופעה חיה"
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
      "3 לילות ו־4 ימים במלדיב ביץ׳, חוף אל מאחש",
      "הסעה מהגבול וחזרה בשעה קבועה מראש",
      "כל המפגשים, התרגולים והפעילויות",
      "ליווי אישי במרחב קטן ואינטימי",
      "שתייה חמה, נשנושים וארוחות",
      "הסעות מהגבול ובחזרה",
      "מתנה אישית לכל משתתף",
      "חוויה בלתי נשכחת"
    ],
    cancellationPolicy: [
      "מקום בריטריט נשמר רק לאחר תשלום מקדמה על סך 500 ש״ח",
      "יתרת התשלום תוסדר עד שבוע לפני היציאה",
      "ביטול עד 7 ימים לפני הריטריט - תשלום מקדמה בלבד",
      "ביטול פחות מ-7 ימים לפני הריטריט - תשלום מלא",
      "ניתן להעביר את המקום למשתתפת אחרת בתיאום מראש",
      "במקרה של ביטול מצד המארגנים - יוחזר מלוא הסכום ששולם"
    ]
  },
  {
    id: "sinai-yoga-may-2026",
    title: "חופשת יוגה בסיני הקסומה (מאי)",
    subtitle: "חופש, תנועה וחיבור בסיני הקסומה",
    date: "21/05/2026",
    dateRange: "21-24/05/2026",
    location: "מלדיב ביץ׳, אל מאחש, סיני",
    price: 1880,
    spots: 30,
    spotsLeft: 30,
    image: sinaiImage,
    description: "סופ\"ש חלומי בסיני. מי שכבר היה בסיני יודע - שבסיני יש קסם שאין בשום מקום אחר בעולם. בואו לפגוש אנשים חדשים, לייצר חיבורים, לגלות דברים חדשים ולהינות מאיזון מושלם בין סדנאות ותוכן לבין זמן חופשי, שקט, מוזיקה וריקודים.",
    highlights: [
      "קאמפ מפנק על הים",
      "שיעורי יוגה, תנועה וחיבור לגוף",
      "סדנאות מדיטציה, מיינדפולנס, כתיבה ועוד",
      "הקסם של סיני - נופים קסומים של מדבר וים",
      "לינה מפנקת ואוכל מזין",
      "קבוצה של אנשים טובים וזמן לחיבורים",
      "כל מה שאתם צריכים כדי להרפות ולהתמסר לחוויה"
    ],
    whatsappLink: "https://wa.me/message/X3ASE2JKXDO7J1",
    status: "upcoming",
    forWomen: false,
    facilitators: ["נועה מתתיהו", "שירה שירה", "רותם ביתשם"],
    priceTiers: [
      { name: "Early Birds", price: 1880, spots: 10, spotsLeft: 10, status: "available" },
      { name: "Mid Flyers", price: 2180, spots: 10, spotsLeft: 10, status: "available" },
      { name: "Late Bloomers - מחיר מלא", price: 2380, spots: 10, spotsLeft: 10, status: "available" }
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
        day: "יום 2 - פתיחה וחיבור",
        activities: [
          "יוגה של בוקר",
          "קפה ונשנושים",
          "סדנאת פתיחה והיכרות",
          "בראנץ׳ מפנק",
          "זמן מנוחה",
          "אקרו יוגה",
          "קבלת שבת וניגונים",
          "ארוחת ערב מזינה"
        ]
      },
      {
        day: "יום 3 - עומק ומשחק",
        activities: [
          "יוגה של בוקר",
          "קפה ונשנושים",
          "סדנאת התמקדות",
          "בראנץ׳ מפנק",
          "זמן מנוחה ושנורקלים",
          "דיפ שוואסאנה",
          "ארוחת ערב מזינה",
          "הופעה חיה"
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
      "3 לילות ו־4 ימים במלדיב ביץ׳, חוף אל מאחש",
      "הסעה מהגבול וחזרה בשעה קבועה מראש",
      "כל המפגשים, התרגולים והפעילויות",
      "ליווי אישי במרחב קטן ואינטימי",
      "שתייה חמה, נשנושים וארוחות",
      "הסעות מהגבול ובחזרה",
      "מתנה אישית לכל משתתף",
      "חוויה בלתי נשכחת"
    ],
    cancellationPolicy: [
      "מקום בריטריט נשמר רק לאחר תשלום מקדמה על סך 500 ש״ח",
      "יתרת התשלום תוסדר עד שבוע לפני היציאה",
      "ביטול עד 7 ימים לפני הריטריט - תשלום מקדמה בלבד",
      "ביטול פחות מ-7 ימים לפני הריטריט - תשלום מלא",
      "ניתן להעביר את המקום למשתתפת אחרת בתיאום מראש",
      "במקרה של ביטול מצד המארגנים - יוחזר מלוא הסכום ששולם"
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
