import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Users, Music, Utensils, Gift, Check } from "lucide-react";
import womenConnection from "@/assets/women-connection.jpg";

const PrivateEvents = () => {
  const packages = [
    {
      name: "חבילת בייסיק",
      duration: "2-3 שעות",
      includes: [
        "שיעור יוגה מותאם לקבוצה",
        "מדיטציה מודרכת",
        "כיבוד קל",
      ],
      ideal: "למסיבות קטנות ואינטימיות",
    },
    {
      name: "חבילת פרימיום",
      duration: "4-5 שעות",
      includes: [
        "שיעור יוגה + תנועה",
        "סדנה לבחירה (נשימות, יצירה, תנועה חופשית ועוד)",
        "ארוחה/בראנץ׳ מפנק",
        "מתנה לכלה/חוגגת",
      ],
      ideal: "ליום כיף מפנק ומלא",
      featured: true,
    },
    {
      name: "חבילת VIP",
      duration: "יום שלם",
      includes: [
        "כל מה שבפרימיום",
        "סדנה נוספת לבחירה",
        "צילום מקצועי",
        "DJ / מוזיקה חיה",
        "קישוטים ועיצוב המרחב",
        "הפתעות נוספות",
      ],
      ideal: "לחוויה בלתי נשכחת",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={womenConnection}
            alt="יום כיף לרווקות"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background/95" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-wide text-white mb-6 drop-shadow-lg">
            יום כיף לרווקות ואירועים פרטיים
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-white/95 mb-8 font-light drop-shadow-md">
            מסיבת רווקות, ימי הולדת, ימי כיף לחברות - חוויה שתזכרו לתמיד
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href="https://wa.me/message/X3ASE2JKXDO7J1"
                target="_blank"
                rel="noopener noreferrer"
              >
                שלחו הודעה בוואטסאפ
              </a>
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white/20" asChild>
              <a href="tel:+972000000000">
                התקשרו אלינו
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            חגיגה שלכן, בדרך שלכן
          </h2>
          
          <p className="font-body text-xl text-muted-foreground mb-8 leading-relaxed">
            רוצות לפנק את החברה הכי טובה? לחגוג יום הולדת בסטייל? 
            או סתם יום כיף עם החברות?
            <br /><br />
            אני יוצרת עבורכן חוויה מותאמת אישית - משילוב של יוגה, תנועה, 
            סדנאות מפנקות, אוכל טוב והרבה צחוקים.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 font-body text-foreground/80">
              <Heart className="text-primary" size={20} />
              <span>מסיבות רווקות</span>
            </div>
            <div className="flex items-center gap-2 font-body text-foreground/80">
              <Gift className="text-primary" size={20} />
              <span>ימי הולדת</span>
            </div>
            <div className="flex items-center gap-2 font-body text-foreground/80">
              <Users className="text-primary" size={20} />
              <span>יום כיף לחברות</span>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              חבילות לבחירה
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              כל חבילה ניתנת להתאמה אישית
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`gradient-card rounded-2xl p-6 shadow-elevated relative ${
                  pkg.featured ? "ring-2 ring-primary scale-105" : ""
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm px-4 py-1 rounded-full font-medium">
                    הכי פופולרי
                  </div>
                )}
                
                <h3 className="font-display text-2xl text-foreground mb-2 mt-2">{pkg.name}</h3>
                <p className="font-body text-sm text-muted-foreground mb-4">{pkg.duration}</p>
                
                <ul className="space-y-2 mb-6">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 font-body text-foreground/80 text-sm">
                      <Check className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <p className="font-body text-xs text-muted-foreground italic">
                  {pkg.ideal}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center font-body text-muted-foreground mt-8">
            המחיר נקבע לפי גודל הקבוצה, משך האירוע והתכנים שתבחרו
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              מה אפשר להוסיף?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="gradient-card rounded-2xl p-6 shadow-elevated text-center">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">סדנאות</h3>
              <p className="font-body text-sm text-foreground/70">
                נשימות, מדיטציה, יצירה, תנועה חופשית
              </p>
            </div>

            <div className="gradient-card rounded-2xl p-6 shadow-elevated text-center">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">כיבוד ואוכל</h3>
              <p className="font-body text-sm text-foreground/70">
                בראנץ׳, ארוחות, שתייה, עוגות
              </p>
            </div>

            <div className="gradient-card rounded-2xl p-6 shadow-elevated text-center">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">מוזיקה</h3>
              <p className="font-body text-sm text-foreground/70">
                DJ, מוזיקה חיה, פלייליסט מותאם
              </p>
            </div>

            <div className="gradient-card rounded-2xl p-6 shadow-elevated text-center">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">מתנות</h3>
              <p className="font-body text-sm text-foreground/70">
                מתנה לחוגגת, שקיות מתנה לכולן
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            בואו נתכנן יחד
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-8">
            ספרו לי על האירוע שלכן ואחזור עם הצעה מותאמת אישית
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href="https://wa.me/message/X3ASE2JKXDO7J1"
                target="_blank"
                rel="noopener noreferrer"
              >
                שלחו הודעה בוואטסאפ
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="tel:+972000000000">
                התקשרו אלינו
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivateEvents;
