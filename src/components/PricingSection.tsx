import { Button } from "@/components/ui/button";

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

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* First 7 - Sold Out */}
          <div className="gradient-card rounded-3xl p-8 shadow-elevated text-center opacity-60">
            <div className="inline-block bg-muted text-muted-foreground font-body text-sm px-4 py-1 rounded-full mb-4">
              אזל
            </div>
            <h3 className="font-display text-2xl text-foreground mb-2">
              7 ראשונות
            </h3>
            <p className="font-body text-muted-foreground mb-6">נמכר</p>
            <div className="font-display text-5xl text-muted-foreground mb-8 line-through">
              ₪660
            </div>
            <Button variant="hero" size="lg" className="w-full" disabled>
              אזל המלאי
            </Button>
          </div>

          {/* Next 7 - Current Price */}
          <div className="gradient-card rounded-3xl p-8 shadow-elevated text-center ring-2 ring-primary">
            <div className="inline-block bg-primary/10 text-primary font-body text-sm px-4 py-1 rounded-full mb-4">
              המחיר הנוכחי
            </div>
            <h3 className="font-display text-2xl text-foreground mb-2">
              7 הבאות
            </h3>
            <p className="font-body text-muted-foreground mb-6">הזדמנות אחרונה במחיר זה</p>
            <div className="font-display text-5xl text-primary mb-8">
              ₪720
            </div>
            <Button variant="whatsapp" size="lg" className="w-full" asChild>
              <a
                href="https://wa.me/message/X3ASE2JKXDO7J1"
                target="_blank"
                rel="noopener noreferrer"
              >
                להרשמה עכשיו
              </a>
            </Button>
          </div>

          {/* Last 7 */}
          <div className="gradient-card rounded-3xl p-8 shadow-elevated text-center">
            <h3 className="font-display text-2xl text-foreground mb-2 mt-8">
              7 אחרונות
            </h3>
            <p className="font-body text-muted-foreground mb-6">מחיר מלא</p>
            <div className="font-display text-5xl text-foreground mb-8">
              ₪780
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
