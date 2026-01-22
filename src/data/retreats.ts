import heroImage from "@/assets/hero-retreat.jpg";
import sinaiImage from "@/assets/sinai-retreat.jpg";

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
    id: "essence-february-2026",
    title: "ESSENCE",
    subtitle: "יום שלם של נשיות, תנועה, אוכל טוב וחיבור אמיתי",
    date: "07/02/2026",
    location: "תל-אביב",
    price: 720,
    originalPrice: 780,
    spots: 21,
    spotsLeft: 7,
    image: heroImage,
    description: "ריטריט יום שלם שמזמין אותך לעצור, לנשום, ולהתחבר לעצמך ולנשים נוספות. יום של יוגה, סדנאות, אוכל טוב ורגעים שישארו איתך.",
    highlights: [
      "סדנאות יוגה ותנועה",
      "מפגש עם הגוף והנפש",
      "ארוחות בריאות וטעימות",
      "מתנה מיוחדת לכל משתתפת"
    ],
    whatsappLink: "https://wa.me/message/X3ASE2JKXDO7J1",
    status: "upcoming",
    forWomen: true,
    facilitators: ["נועה", "קורל"],
    priceTiers: [
      { name: "7 הראשונות", price: 660, spots: 7, spotsLeft: 0, status: "sold-out" },
      { name: "7 הבאות", price: 720, spots: 7, spotsLeft: 7, status: "available" },
      { name: "7 האחרונות", price: 780, spots: 7, spotsLeft: 7, status: "available" }
    ]
  },
  {
    id: "sinai-yoga-march-2026",
    title: "חופשת יוגה בסיני הקסומה (מרץ)",
    subtitle: "יוגה, ים, מדבר ואנשים טובים",
    date: "18/03/2026",
    dateRange: "18-21/03/2026",
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
          "קבלת שבת וארוחת שישי",
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
    id: "sinai-yoga-may-2026",
    title: "חופשת יוגה בסיני הקסומה (מאי)",
    subtitle: "יוגה, ים, מדבר ואנשים טובים",
    date: "14/05/2026",
    dateRange: "14-17/05/2026",
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
  }
];

export const getRetreatById = (id: string): Retreat | undefined => {
  return retreats.find(retreat => retreat.id === id);
};

export const getUpcomingRetreats = (): Retreat[] => {
  return retreats.filter(retreat => retreat.status === "upcoming");
};
