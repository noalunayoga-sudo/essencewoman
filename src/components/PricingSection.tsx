import { Button } from "@/components/ui/button";
import healingImage from "@/assets/retreat-healing.jpg";

const PricingSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            ההשקעה שלך
          </h2>
          <p className="font-body text-xl text-muted-foreground">
            בחרי את המסלול שמתאים לך
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-elevated mb-12">
          <img
            src={healingImage}
            alt="הרפייה בריטריט"
            className="w-full h-72 object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="gradient-card rounded-3xl p-8 shadow-elevated text-center">
            <div className="inline-block bg-primary/10 text-primary font-body text-sm px-4 py-1 rounded-full mb-4">
              מומלץ
            </div>
            <h3 className="font-display text-2xl text-foreground mb-2">
              הרשמה מוקדמת
            </h3>
            <p className="font-body text-muted-foreground mb-6">עד 15/01/2026</p>
            <div className="font-display text-5xl text-primary mb-2">
              ₪450
            </div>
            <p className="font-body text-sm text-muted-foreground mb-6">במקום ₪520</p>
            <Button variant="whatsapp" size="lg" className="w-full" asChild>
              <a
                href="https://wa.me/message/X3ASE2JKXDO7J1"
                target="_blank"
                rel="noopener noreferrer"
              >
                להרשמה מוקדמת
              </a>
            </Button>
          </div>

          <div className="gradient-card rounded-3xl p-8 shadow-elevated text-center">
            <h3 className="font-display text-2xl text-foreground mb-2 mt-8">
              מחיר מלא
            </h3>
            <p className="font-body text-muted-foreground mb-6">מ-16/01/2026</p>
            <div className="font-display text-5xl text-foreground mb-8">
              ₪520
            </div>
            <Button variant="hero" size="lg" className="w-full" asChild>
              <a
                href="https://wa.me/message/X3ASE2JKXDO7J1"
                target="_blank"
                rel="noopener noreferrer"
              >
                להרשמה
              </a>
            </Button>
          </div>
        </div>

        <div className="bg-background/60 rounded-2xl p-8">
          <h3 className="font-display text-2xl text-foreground mb-6 text-center">
            מה כלול במחיר?
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <span className="text-2xl mb-2 block">🧘‍♀️</span>
              <p className="font-body text-foreground">כל הפעילויות והסדנאות</p>
            </div>
            <div className="p-4">
              <span className="text-2xl mb-2 block">🥗</span>
              <p className="font-body text-foreground">בראנץ' מפנק ונשנושים לאורך היום</p>
            </div>
            <div className="p-4">
              <span className="text-2xl mb-2 block">🎁</span>
              <p className="font-body text-foreground">מתנה מיוחדת לכל משתתפת</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-soft-pink/30 rounded-2xl p-8 text-center">
          <h4 className="font-display text-xl text-foreground mb-6">
            מדיניות ביטול
          </h4>
          <div className="font-body text-muted-foreground space-y-3">
            <div className="flex justify-center items-center gap-3">
              <span className="text-accent">✓</span>
              <p>עד שבועיים לפני האירוע - החזר מלא</p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span className="text-accent">✓</span>
              <p>עד שבוע לפני האירוע - החזר של 50%</p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span className="text-muted-foreground">•</span>
              <p>פחות משבוע לפני האירוע - ללא החזר</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
