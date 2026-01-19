import heroImage from "@/assets/hero-retreat.jpg";
import healingImage from "@/assets/retreat-healing.jpg";

export interface Retreat {
  id: string;
  title: string;
  subtitle: string;
  date: string;
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
    status: "upcoming"
  },
  {
    id: "healing-circle-march-2026",
    title: "מעגל ריפוי",
    subtitle: "מסע פנימי של ריפוי וחיבור לאנרגיה הנשית",
    date: "21/03/2026",
    location: "הרצליה",
    price: 650,
    spots: 15,
    spotsLeft: 15,
    image: healingImage,
    description: "מעגל נשים אינטימי המשלב טכניקות ריפוי, מדיטציה מונחית וסאונד הילינג. חוויה עמוקה שמחברת אותך לכוח הפנימי שלך.",
    highlights: [
      "סאונד הילינג",
      "מדיטציה מונחית",
      "מעגל שיתוף",
      "תה וכיבוד קל"
    ],
    whatsappLink: "https://wa.me/message/X3ASE2JKXDO7J1",
    status: "upcoming"
  }
];

export const getRetreatById = (id: string): Retreat | undefined => {
  return retreats.find(retreat => retreat.id === id);
};

export const getUpcomingRetreats = (): Retreat[] => {
  return retreats.filter(retreat => retreat.status === "upcoming");
};
