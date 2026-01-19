import { Button } from "@/components/ui/button";
import brunchImage from "@/assets/brunch.jpg";

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

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="gradient-card rounded-3xl p-8 shadow-elevated text-center">
            <h3 className="font-display text-2xl text-foreground mb-2">
              הרשמה מוקדמת
            </h3>
            <p className="font-body text-muted-foreground mb-6">עד 15/01/2026</p>
            <div className="font-display text-5xl text-primary mb-6">
              ₪450
            </div>
            <Button variant="whatsapp" size="lg" className="w-full" asChild>
              <a
                href="https://wa.me/message/X3ASE2JKXDO7J1"
                target="_blank"
                rel="noopener noreferrer"
              >
                להרשמה
              </a>
            </Button>
          </div>

          <div className="gradient-card rounded-3xl p-8 shadow-elevated text-center border-2 border-primary/20">
            <h3 className="font-display text-2xl text-foreground mb-2">
              מחיר מלא
            </h3>
            <p className="font-body text-muted-foreground mb-6">מ-16/01/2026</p>
            <div className="font-display text-5xl text-foreground mb-6">
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

        <div className="rounded-2xl overflow-hidden shadow-elevated mb-8">
          <img
            src={brunchImage}
            alt="בראנץ' מפנק"
            className="w-full h-64 object-cover"
          />
        </div>

        <div className="bg-background/60 rounded-2xl p-8 text-center">
          <h3 className="font-display text-2xl text-foreground mb-4">
            מה כלול במחיר?
          </h3>
          <p className="font-body text-muted-foreground leading-relaxed">
            כל הפעילויות והסדנאות • בראנץ' מפנק ונשנושים לאורך היום • מתנה מיוחדת לכל משתתפת
          </p>
        </div>

        <div className="mt-8 text-center">
          <h4 className="font-display text-xl text-foreground mb-4">
            מדיניות ביטול
          </h4>
          <div className="font-body text-sm text-muted-foreground space-y-1">
            <p>עד שבועיים לפני האירוע - החזר מלא</p>
            <p>עד שבוע לפני האירוע - החזר של 50%</p>
            <p>פחות משבוע לפני האירוע - ללא החזר</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
