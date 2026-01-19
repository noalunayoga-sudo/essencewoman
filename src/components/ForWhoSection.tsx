import { Button } from "@/components/ui/button";

const points = [
  "לכל מי שמבקשת עבור עצמה קצת זמן של שקט, לצאת מהשגרה, להרפות",
  "לכל מי שרוצה להעמיק את ההיכרות שלה עם עצמה ועם האינטואיציה שלה",
  "לכל מי שמכירה את החשיבות של הקשבה לגוף",
  "לכל מי שמבקשת צמיחה רכה, ללא מאמץ",
  "לכל מי שרוצה ללמוד לנהל מערכות יחסים ברכות ובהרמוניה",
  "למי שיש לה ניסיון ולמי שעדיין אין לה ניסיון אבל יש בה סקרנות",
];

const ForWhoSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow text-center">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
          למי זה מתאים?
        </h2>
        <p className="font-body text-xl text-muted-foreground mb-12">
          הריטריט הזה מתאים לכל אישה באשר היא
        </p>

        <div className="space-y-4 text-right mb-12">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-background/60 rounded-xl p-4"
            >
              <span className="text-primary text-xl flex-shrink-0">✦</span>
              <p className="font-body text-foreground/90 text-lg">{point}</p>
            </div>
          ))}
        </div>

        <p className="font-display text-2xl text-primary mb-8 italic">
          ובעיקר, אם משהו בתוכך אומר כן - כנראה שזה המקום בשבילך
        </p>

        <Button variant="hero" size="xl" asChild>
          <a
            href="https://wa.me/message/X3ASE2JKXDO7J1"
            target="_blank"
            rel="noopener noreferrer"
          >
            אני בפנים
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ForWhoSection;
