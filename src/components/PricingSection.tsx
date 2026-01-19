import { Calendar, MapPin, Gift, Check } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
            ההשקעה שלך
          </h2>
          <div className="flex items-center justify-center gap-6 text-muted-foreground font-body">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>יום שבת 07/02/2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>תל-אביב (המיקום יימסר לנרשמות)</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards - RTL order */}
        <div className="grid md:grid-cols-3 gap-6 mb-12" dir="rtl">
          {/* First 7 - Sold Out (Right) */}
          <div className="bg-background rounded-2xl p-8 text-center relative">
            <div className="absolute top-4 left-4">
              <span className="bg-muted text-muted-foreground font-body text-sm px-4 py-1 rounded-full">
                אזל
              </span>
            </div>
            <p className="font-body text-muted-foreground mb-2 mt-4">מדרגה ראשונה</p>
            <h3 className="font-body text-lg text-muted-foreground mb-4 line-through">
              7 נשים ראשונות
            </h3>
            <div className="font-display text-5xl md:text-6xl text-muted-foreground line-through">
              ₪660
            </div>
          </div>

          {/* Next 7 - Current Price (Middle) */}
          <div className="bg-primary rounded-2xl p-8 text-center relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-accent text-accent-foreground font-body text-sm px-4 py-1 rounded-full whitespace-nowrap">
                המחיר הנוכחי
              </span>
            </div>
            <p className="font-body text-primary-foreground/80 mb-2 mt-4">מדרגה שנייה</p>
            <h3 className="font-body text-lg text-primary-foreground mb-4">
              7 נשים נוספות
            </h3>
            <div className="font-display text-5xl md:text-6xl text-primary-foreground">
              ₪720
            </div>
          </div>

          {/* Last 7 (Left) */}
          <div className="bg-background rounded-2xl p-8 text-center">
            <p className="font-body text-muted-foreground mb-2 mt-4">מדרגה שלישית</p>
            <h3 className="font-body text-lg text-foreground mb-4">
              7 נשים אחרונות
            </h3>
            <div className="font-display text-5xl md:text-6xl text-primary">
              ₪780
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-background/60 rounded-2xl p-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <h3 className="font-display text-2xl text-foreground">המחיר כולל:</h3>
            <Gift className="w-6 h-6 text-primary" />
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto" dir="rtl">
            <div className="flex items-center gap-3 justify-end">
              <span className="font-body text-foreground">כל התכנים והסדנאות</span>
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
            </div>
            <div className="flex items-center gap-3 justify-end">
              <span className="font-body text-foreground">תה, קפה ונשנושים לאורך כל היום</span>
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
            </div>
            <div className="flex items-center gap-3 justify-end">
              <span className="font-body text-foreground">בראנץ' מפנק</span>
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
            </div>
            <div className="flex items-center gap-3 justify-end">
              <span className="font-body text-foreground">מתנה שווה לכל משתתפת</span>
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
            </div>
          </div>
        </div>

        {/* Registration Button */}
        <div className="text-center mt-10">
          <a
            href="https://wa.me/message/X3ASE2JKXDO7J1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-body text-lg px-8 py-4 rounded-full transition-colors shadow-lg"
          >
            להרשמה בוואטסאפ
          </a>
        </div>

        {/* Cancellation Policy */}
        <div className="mt-12 bg-soft-pink/30 rounded-2xl p-8 text-center">
          <h4 className="font-display text-xl text-foreground mb-6">
            מדיניות ביטול
          </h4>
          <div className="font-body text-muted-foreground space-y-3">
            <div className="flex justify-center items-center gap-3">
              <span className="text-primary">✓</span>
              <p>עד שבועיים לפני האירוע - החזר מלא</p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <span className="text-primary">✓</span>
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
