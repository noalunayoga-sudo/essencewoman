import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Building2, Users, Target, Heart, Sparkles, Utensils, Mountain, Check } from "lucide-react";
import heroWellness from "@/assets/hero-wellness.jpg";

const CorporateEvents = () => {
  const benefits = [
    {
      icon: Heart,
      title: "הפחתת לחץ ושחיקה",
      description: "כלים מעשיים להתמודדות עם לחץ וחיזוק הרווחה הנפשית",
    },
    {
      icon: Users,
      title: "חיזוק הקשרים בצוות",
      description: "פעילויות שמעודדות תקשורת פתוחה ואמון בין חברי הצוות",
    },
    {
      icon: Target,
      title: "העלאת המוטיבציה",
      description: "חוויה מרעננת שמחזירה את העובדים לעבודה עם אנרגיה חדשה",
    },
    {
      icon: Sparkles,
      title: "יצירתיות וחשיבה חדשה",
      description: "סדנאות שפותחות את הראש ומעודדות חשיבה יצירתית",
    },
  ];

  const activities = [
    {
      icon: Sparkles,
      title: "יוגה ומיינדפולנס",
      items: ["שיעורי יוגה מותאמים לכל הרמות", "מדיטציה מודרכת", "סדנת נשימות והרפיה", "תרגילי מיינדפולנס למקום העבודה"],
    },
    {
      icon: Users,
      title: "סדנאות גיבוש",
      items: ["משחקי צוות ואתגרים", "סדנת תקשורת ואמפתיה", "פעילויות בניית אמון", "עבודת צוות יצירתית"],
    },
    {
      icon: Utensils,
      title: "אוכל וכיבוד",
      items: ["ארוחות בריאות ומזינות", "בראנץ׳ מפנק", "הפסקות קפה ונשנושים", "סדנת בישול בריא (אופציונלי)"],
    },
    {
      icon: Mountain,
      title: "פעילויות שטח",
      items: ["טיולים מודרכים בטבע", "פעילויות אתגריות", "יוגה בטבע", "מדיטציית הליכה"],
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroWellness}
            alt="ימי גיבוש לחברות"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background/95" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-wide text-white mb-6 drop-shadow-lg">
            ימי גיבוש ואירועי חברה
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-white/95 mb-8 font-light drop-shadow-md">
            חוויית Wellness שמחזקת את הצוות ומעלה את המוטיבציה
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
              <a href="tel:+972545752288">
                התקשרו אלינו
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Building2 className="text-primary" size={48} />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            השקיעו בצוות שלכם
          </h2>
          
          <p className="font-body text-xl text-muted-foreground mb-8 leading-relaxed">
            יום גיבוש הוא הזדמנות לעצור מהשגרה, לחזק את הקשרים בין חברי הצוות, 
            ולתת לעובדים כלים להתמודדות עם אתגרי היומיום.
            <br /><br />
            אני מתכננת עבורכם חוויה מותאמת - שילוב של יוגה, סדנאות גיבוש, 
            פעילויות שטח ואוכל טוב. הכל מותאם לצרכים ולאופי של הארגון שלכם.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              למה יום גיבוש Wellness?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="gradient-card rounded-2xl p-6 shadow-elevated text-center">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">{benefit.title}</h3>
                <p className="font-body text-sm text-foreground/70">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="section-padding bg-secondary">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              מה כולל יום הגיבוש?
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              בחרו את הפעילויות שמתאימות לכם
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="gradient-card rounded-2xl p-6 shadow-elevated">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <activity.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display text-xl text-foreground">{activity.title}</h3>
                </div>
                <ul className="space-y-2">
                  {activity.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 font-body text-foreground/80 text-sm">
                      <Check className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Format options */}
      <section className="section-padding">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              פורמטים לבחירה
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="gradient-card rounded-2xl p-6 shadow-elevated text-center">
              <h3 className="font-display text-xl text-primary mb-2">חצי יום</h3>
              <p className="font-body text-sm text-foreground/70 mb-4">3-4 שעות</p>
              <p className="font-body text-sm text-foreground/80">
                פעילות ממוקדת עם 1-2 סדנאות וכיבוד קל
              </p>
            </div>
            
            <div className="gradient-card rounded-2xl p-6 shadow-elevated text-center ring-2 ring-primary">
              <h3 className="font-display text-xl text-primary mb-2">יום שלם</h3>
              <p className="font-body text-sm text-foreground/70 mb-4">6-8 שעות</p>
              <p className="font-body text-sm text-foreground/80">
                חוויה מלאה עם מגוון פעילויות, ארוחות ושילוב שטח
              </p>
            </div>
            
            <div className="gradient-card rounded-2xl p-6 shadow-elevated text-center">
              <h3 className="font-display text-xl text-primary mb-2">ריטריט צוות</h3>
              <p className="font-body text-sm text-foreground/70 mb-4">1-3 ימים</p>
              <p className="font-body text-sm text-foreground/80">
                חוויה עמוקה עם לינה, סדנאות מעמיקות וזמן איכות
              </p>
            </div>
          </div>

          <p className="text-center font-body text-muted-foreground mt-8">
            המחיר נקבע לפי גודל הקבוצה, משך האירוע, המיקום והתכנים שתבחרו
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            בואו נבנה יחד את יום הגיבוש
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-8">
            ספרו לי על הארגון שלכם ומה אתם מחפשים, ואחזור עם הצעה מותאמת
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
              <a href="tel:+972545752288">
                התקשרו אלינו
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CorporateEvents;
