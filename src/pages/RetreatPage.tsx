import { useParams, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { getRetreatById } from "@/data/retreats";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Check, Home, Utensils, Sparkles } from "lucide-react";

// Import existing sections for the main retreat
import IntroSection from "@/components/IntroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ScheduleSection from "@/components/ScheduleSection";
import AboutSection from "@/components/AboutSection";
import ForWhoSection from "@/components/ForWhoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";

// Sinai retreat specific components
const SinaiIntroSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container max-w-4xl mx-auto text-center">
      <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
        בואו תתפנקו
      </h2>
      
      <p className="font-display text-2xl text-primary mb-4 italic">
        4 ימים של כיף, חיבור אנושי ורגעים בלתי נשכחים
      </p>
      
      <p className="font-body text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
        יוגה מול הים, שנורקלינג, טיולים, ערבים קסומים, אנשים מדהימים, 
        ובעיקר - הרבה כיף ושקט מהשגרה. חופשה שמחזירה אתכם הביתה רעננים ומלאי אנרגיה.
      </p>

      <blockquote className="font-body text-foreground/80 text-lg border-r-4 border-primary pr-4 italic text-right max-w-2xl mx-auto">
        "כדי שתוכלו באמת להתמסר, להרפות ולהנות - דאגתי לכל המעטפת"
      </blockquote>
    </div>
  </section>
);

const SinaiScheduleSection = ({ schedule }: { schedule: { day: string; activities: string[] }[] }) => (
  <section className="section-padding">
    <div className="container max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
          לו״ז משוער
        </h2>
        <p className="font-body text-xl text-muted-foreground">
          4 ימים של תנועה, שקט וחיבור
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {schedule.map((day, index) => (
          <div key={index} className="gradient-card rounded-2xl p-6 shadow-elevated">
            <h3 className="font-display text-xl text-primary mb-4">{day.day}</h3>
            <ul className="space-y-2">
              {day.activities.map((activity, actIndex) => (
                <li key={actIndex} className="flex items-start gap-2 font-body text-foreground/80">
                  <span className="text-primary mt-1">•</span>
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SinaiIncludesSection = ({ includes }: { includes: string[] }) => (
  <section className="section-padding bg-secondary">
    <div className="container max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
          מה כולל?
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* הלינה */}
        <div className="gradient-card rounded-2xl p-6 shadow-elevated text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Home className="text-primary" size={32} />
          </div>
          <h3 className="font-display text-2xl text-foreground mb-4">הלינה</h3>
          <p className="font-body text-foreground/80">
            3 לילות בבקתות עץ יפיפיות על החוף, ממוזגות ועם מקלחת ושירותים בכל בקתה
          </p>
        </div>

        {/* האוכל */}
        <div className="gradient-card rounded-2xl p-6 shadow-elevated text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Utensils className="text-primary" size={32} />
          </div>
          <h3 className="font-display text-2xl text-foreground mb-4">האוכל</h3>
          <p className="font-body text-foreground/80">
            פריסת בוקר מתוקה עם פירות, עוגות, קפה ותה. בראנץ׳ מפנק ומזין. ארוחת ערב עשירה.
          </p>
        </div>

        {/* התהליך */}
        <div className="gradient-card rounded-2xl p-6 shadow-elevated text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="text-primary" size={32} />
          </div>
          <h3 className="font-display text-2xl text-foreground mb-4">התהליך</h3>
          <p className="font-body text-foreground/80">
            שיעורי יוגה, סדנאות, דיפ שוואסאנה, שנורקלינג, מדורה, ומתנה אישית לכל משתתף/ת
          </p>
        </div>
      </div>

      <div className="mt-12 gradient-card rounded-2xl p-6 shadow-elevated">
        <h3 className="font-display text-2xl text-foreground mb-4 text-center">עוד כלול בחבילה:</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {includes.map((item, index) => (
            <div key={index} className="flex items-center gap-3 font-body text-foreground/80">
              <Check className="text-primary flex-shrink-0" size={20} />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const SinaiLocationSection = () => (
  <section className="section-padding">
    <div className="container max-w-4xl mx-auto">
      <div className="gradient-card rounded-3xl p-8 md:p-12 shadow-elevated">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            מלדיב ביץ׳ - חוף אל מאחש
          </h2>
          <p className="font-body text-xl text-muted-foreground">
            הבית שלנו ל-4 ימים
          </p>
        </div>

        <div className="space-y-4 font-body text-foreground/80 text-lg leading-relaxed">
          <p>
            קאמפ מלדיב ביץ׳ ממוקם על חוף אל מאחש הקסום בסיני, עם נוף ישיר לים ולהרים.
          </p>
          <p>
            בקתות עץ יפיפיות על החוף - ממוזגות, עם מקלחת ושירותים פרטיים בכל בקתה.
          </p>
          <p>
            מרחב תרגול מושלם מול הים, אוכל מעולה, ואווירה שמזמינה להרפות ולהתחבר.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const SinaiPricingSection = ({ priceTiers, whatsappLink, cancellationPolicy }: { 
  priceTiers: { name: string; price: number; spots: number; spotsLeft: number; status: string }[];
  whatsappLink: string;
  cancellationPolicy?: string[];
}) => {
  // Find the first available tier (current price)
  const currentTierIndex = priceTiers.findIndex(tier => tier.status !== "sold-out");
  
  return (
    <section className="section-padding bg-secondary">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            מחירים והרשמה
          </h2>
          <p className="font-body text-xl text-muted-foreground">
            הבטיחו את מקומכם
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {priceTiers.map((tier, index) => {
            const isCurrent = index === currentTierIndex;
            const isSoldOut = tier.status === "sold-out";
            
            return (
              <div 
                key={index} 
                className={`gradient-card rounded-2xl p-6 shadow-elevated text-center relative ${
                  isSoldOut ? "opacity-60" : ""
                } ${isCurrent ? "ring-2 ring-primary scale-105" : ""}`}
              >
                {isCurrent && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm px-4 py-1 rounded-full font-medium">
                    המחיר הנוכחי
                  </div>
                )}
                <h3 className="font-display text-lg text-foreground mb-2 mt-2">{tier.name}</h3>
                <p className={`font-display text-4xl ${isCurrent ? "text-primary" : "text-foreground"}`}>₪{tier.price}</p>
                {isSoldOut && (
                  <p className="font-body text-sm text-muted-foreground mt-2">אזל</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mb-12">
          <Button variant="whatsapp" size="xl" asChild>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              לשריון מקום
            </a>
          </Button>
        </div>

        {cancellationPolicy && cancellationPolicy.length > 0 && (
          <div className="gradient-card rounded-2xl p-6 shadow-elevated">
            <h3 className="font-display text-xl text-foreground mb-4 text-center">מדיניות ביטול</h3>
            <ul className="space-y-2">
              {cancellationPolicy.map((policy, index) => (
                <li key={index} className="flex items-start gap-2 font-body text-foreground/80 text-sm">
                  <span className="text-primary mt-1">•</span>
                  {policy}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

import noaProfile from "@/assets/noa-profile.jpg";

const SinaiAboutSection = () => (
  <section className="section-padding">
    <div className="container max-w-4xl mx-auto">
      <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8 text-center">
        מי מנחה?
      </h2>
      
      <div className="gradient-card rounded-3xl p-8 shadow-elevated">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img 
            src={noaProfile} 
            alt="נועה מתתיהו" 
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
          <div className="text-center md:text-right">
            <h3 className="font-display text-3xl text-primary mb-2">נועה מתתיהו</h3>
            <p className="font-body text-sm text-muted-foreground mb-4 italic">
              Wellness & Lifestyle
            </p>
            <p className="font-body text-foreground/80 leading-relaxed">
              מחברת אנשים לעצמם ולאחרים מתוך מקום של רכות, שמחה וקבלה.
              <br /><br />
              מורה ותלמידה של היוגה כבר יותר מעשור. מנחה סדנאות, מלווה תהליכים, 
              ויוצרת מרחבים שמזמינים חיבור אמיתי לגוף ולנפש.
              <br /><br />
              בריטריט יצטרפו אלינו גם מנחים אורחים מיוחדים שיוסיפו עומק וגיוון לחוויה.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SinaiForWhoSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
          למי זה מתאים?
        </h2>
        <p className="font-body text-xl text-muted-foreground">
          הריטריט פתוח לכולם - נשים וגברים כאחד
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="gradient-card rounded-2xl p-6 shadow-elevated">
          <h3 className="font-display text-xl text-primary mb-4">מתאים לך אם...</h3>
          <ul className="space-y-3 font-body text-foreground/80">
            <li className="flex items-start gap-2">
              <Check className="text-primary flex-shrink-0 mt-1" size={18} />
              את/ה מחפש/ת חופשה שונה מהרגיל
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-primary flex-shrink-0 mt-1" size={18} />
              רוצה להתנתק באמת מהשגרה
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-primary flex-shrink-0 mt-1" size={18} />
              אוהב/ת יוגה או סקרן/ית להתנסות
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-primary flex-shrink-0 mt-1" size={18} />
              מחפש/ת חיבור אנושי אמיתי
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-primary flex-shrink-0 mt-1" size={18} />
              רוצה לחזור הביתה רענן/ה ומלא/ת אנרגיה
            </li>
          </ul>
        </div>

        <div className="gradient-card rounded-2xl p-6 shadow-elevated">
          <h3 className="font-display text-xl text-primary mb-4">לא צריך...</h3>
          <ul className="space-y-3 font-body text-foreground/80">
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              ניסיון קודם ביוגה
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              להיות גמיש/ה או ספורטיבי/ת
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              להגיע עם מישהו - אנשים מגיעים לבד ויוצאים עם חברים
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              לדעת לשנרקל - נלמד במקום!
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const SinaiTestimonialsSection = () => (
  <section className="section-padding">
    <div className="container max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
          מה אומרים עלינו
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="gradient-card rounded-2xl p-6 shadow-elevated">
          <p className="font-body text-foreground/80 italic mb-4 leading-relaxed">
            "חזרתי מהטיול עם המון אנרגיה וחברים חדשים. נועה יוצרת אווירה כזו נעימה ומקבלת, שאפשר פשוט להיות את עצמך."
          </p>
          <p className="font-display text-primary">- שירה</p>
        </div>

        <div className="gradient-card rounded-2xl p-6 shadow-elevated">
          <p className="font-body text-foreground/80 italic mb-4 leading-relaxed">
            "הייתי בהרבה טיולים מאורגנים, אבל זה היה משהו אחר לגמרי. השילוב של יוגה, טבע ואנשים מדהימים - פשוט מושלם."
          </p>
          <p className="font-display text-primary">- דני</p>
        </div>

        <div className="gradient-card rounded-2xl p-6 shadow-elevated">
          <p className="font-body text-foreground/80 italic mb-4 leading-relaxed">
            "באתי לבד וקצת חששתי, אבל תוך כמה שעות הרגשתי כאילו אני מכירה את כולם שנים. חוויה שאני ממליצה לכל אחד ואחת."
          </p>
          <p className="font-display text-primary">- מיכל</p>
        </div>

        <div className="gradient-card rounded-2xl p-6 shadow-elevated">
          <p className="font-body text-foreground/80 italic mb-4 leading-relaxed">
            "סיני הוא מקום מיוחד, אבל עם הקבוצה הזו והאנרגיה הזו - זה הפך לחוויה בלתי נשכחת. כבר נרשמתי לפעם הבאה!"
          </p>
          <p className="font-display text-primary">- יובל</p>
        </div>
      </div>
    </div>
  </section>
);

const RetreatPage = () => {
  const { id } = useParams<{ id: string }>();
  const retreat = id ? getRetreatById(id) : undefined;

  if (!retreat) {
    return <Navigate to="/" replace />;
  }

  // For the main ESSENCE retreat, show the full detailed page
  if (retreat.id === "essence-february-2026") {
    return (
      <Layout>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={retreat.image}
              alt={retreat.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background/95" />
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
            <h1 className="font-display text-6xl md:text-8xl font-semibold tracking-wide text-white mb-6 drop-shadow-lg">
              {retreat.title}
            </h1>
            
            <p className="font-body text-xl md:text-2xl text-white/95 mb-4 font-light drop-shadow-md">
              {retreat.subtitle}
            </p>

            <div className="flex flex-col items-center gap-4 mb-8">
              <p className="font-display text-2xl md:text-3xl text-white font-medium drop-shadow-md">
                יום שבת {retreat.date}
              </p>
              <p className="font-body text-lg text-white/80 drop-shadow-sm">
                {retreat.location}
              </p>
            </div>

            <Button variant="whatsapp" size="xl" asChild>
              <a
                href={retreat.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                להצטרפות
              </a>
            </Button>

            <p className="mt-8 text-white/90 font-body text-sm flex items-center justify-center gap-2 drop-shadow-sm">
              🌸 מספר המקומות מוגבל ל-{retreat.spots} נשים בלבד
            </p>
          </div>
        </section>

        <IntroSection />
        <FeaturesSection />
        <ScheduleSection />
        <AboutSection />
        <ForWhoSection />
        <TestimonialsSection />
        <PricingSection />

        {/* Final CTA */}
        <section className="section-padding bg-primary/10">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              מוכנה להצטרף?
            </h2>
            <p className="font-body text-xl text-muted-foreground mb-8">
              יש לך שאלות? רוצה לשמור מקום? דברי איתנו
            </p>
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href={retreat.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                להצטרפות
              </a>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  // For Sinai retreats, show dedicated page
  if (retreat.id === "sinai-yoga-march-2026" || retreat.id === "sinai-yoga-may-2026") {
    return (
      <Layout>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={retreat.image}
              alt={retreat.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background/95" />
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
            <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-wide text-white mb-6 drop-shadow-lg">
              {retreat.title}
            </h1>
            
            <p className="font-body text-xl md:text-2xl text-white/95 mb-4 font-light drop-shadow-md">
              {retreat.subtitle}
            </p>

            <div className="flex flex-col items-center gap-4 mb-8">
              <p className="font-display text-2xl md:text-3xl text-white font-medium drop-shadow-md">
                {retreat.dateRange}
              </p>
              <p className="font-body text-lg text-white/80 drop-shadow-sm">
                {retreat.location}
              </p>
            </div>

            <Button variant="whatsapp" size="xl" asChild>
              <a
                href={retreat.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                לשריון מקום
              </a>
            </Button>

            <p className="mt-8 text-white/90 font-body text-sm flex items-center justify-center gap-2 drop-shadow-sm">
              🌴 {retreat.spots} מקומות בלבד | לנשים וגברים
            </p>
          </div>
        </section>

        <SinaiIntroSection />
        
        {retreat.schedule && <SinaiScheduleSection schedule={retreat.schedule} />}
        
        {retreat.includes && <SinaiIncludesSection includes={retreat.includes} />}
        
        <SinaiLocationSection />
        
        <SinaiForWhoSection />
        
        <SinaiAboutSection />

        <SinaiTestimonialsSection />
        
        {retreat.priceTiers && (
          <SinaiPricingSection 
            priceTiers={retreat.priceTiers} 
            whatsappLink={retreat.whatsappLink}
            cancellationPolicy={retreat.cancellationPolicy}
          />
        )}

        {/* Final CTA */}
        <section className="section-padding bg-primary/10">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              מוכנים לצאת למסע?
            </h2>
            <p className="font-body text-xl text-muted-foreground mb-8">
              יש לכם שאלות? רוצים לשמור מקום? דברו איתי
            </p>
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href={retreat.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                שלחו לי הודעה
              </a>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  // For other retreats, show a generic detailed page
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={retreat.image}
            alt={retreat.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background/95" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-wide text-white mb-6 drop-shadow-lg">
            {retreat.title}
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-white/95 mb-8 font-light drop-shadow-md">
            {retreat.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar size={20} />
              <span className="font-body">{retreat.dateRange || retreat.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span className="font-body">{retreat.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} />
              <span className="font-body">{retreat.spots} משתתפים</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container max-w-4xl mx-auto">
          <div className="gradient-card rounded-3xl p-8 md:p-12 shadow-elevated">
            <h2 className="font-display text-3xl text-foreground mb-6">
              על הריטריט
            </h2>
            <p className="font-body text-lg text-foreground/80 leading-relaxed mb-8">
              {retreat.description}
            </p>

            <h3 className="font-display text-2xl text-foreground mb-4">
              מה כולל?
            </h3>
            <ul className="space-y-3 mb-8">
              {retreat.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-3 font-body text-foreground/80">
                  <Check className="text-primary" size={20} />
                  {highlight}
                </li>
              ))}
            </ul>

            {/* Pricing */}
            <div className="bg-primary/10 rounded-2xl p-6 text-center">
              <p className="font-body text-muted-foreground mb-2">מחיר</p>
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="font-display text-4xl text-primary">₪{retreat.price}</span>
                {retreat.originalPrice && (
                  <span className="font-body text-xl text-muted-foreground line-through">₪{retreat.originalPrice}</span>
                )}
              </div>
              <p className="font-body text-sm text-muted-foreground mb-6">
                {retreat.spotsLeft} מקומות פנויים מתוך {retreat.spots}
              </p>
              <Button variant="whatsapp" size="xl" asChild>
                <a
                  href={retreat.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  להרשמה
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RetreatPage;
