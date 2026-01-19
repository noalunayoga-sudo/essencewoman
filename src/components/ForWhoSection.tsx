import { Button } from "@/components/ui/button";
import womenImage from "@/assets/women-connection.jpg";

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
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            למי זה מתאים?
          </h2>
          <p className="font-body text-xl text-muted-foreground">
            הריטריט הזה מתאים לכל אישה באשר היא
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src={womenImage}
              alt="נשים מתחברות בריטריט"
              className="rounded-2xl shadow-elevated w-full aspect-[4/3] object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <div className="space-y-4 text-right mb-8">
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

            <p className="font-display text-xl text-primary mb-6 italic text-center md:text-right">
              ובעיקר, אם משהו בתוכך אומר כן - כנראה שזה המקום בשבילך
            </p>

            <div className="text-center md:text-right">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
