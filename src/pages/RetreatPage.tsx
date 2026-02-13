import { useParams, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { getRetreatById } from "@/data/retreats";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Check, Home, Utensils, Sparkles } from "lucide-react";

// Sinai CTA Button component
const SinaiCTA = ({ href, text = "להצטרפות" }: { href: string; text?: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-gold hover:bg-gold-light text-foreground font-display text-xl px-10 py-4 rounded-full shadow-elevated transition-all duration-300 hover:scale-105"
  >
    {text}
  </a>
);

// Decorative leaf divider
const LeafDivider = () => (
  <div className="flex items-center justify-center py-4">
    <span className="text-teal text-3xl">🌿</span>
  </div>
);

// Sinai retreat specific components
const SinaiIntroSection = ({ whatsappLink }: { whatsappLink: string }) => (
  <section className="bg-teal py-8 md:py-12">
    <div className="container max-w-4xl mx-auto text-center">
      <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
        חופש, תנועה וחיבור בסיני הקסומה
      </h2>
    </div>
  </section>
);

const SinaiDescriptionSection = ({ whatsappLink }: { whatsappLink: string }) => (
  <section className="section-padding bg-cream">
    <div className="container max-w-3xl mx-auto text-center">
      <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
        מי שכבר היה בסיני יודע.
      </p>
      <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
        מי שעוד לא היה בסיני, אנחנו מקוות בשבילכם שאתם עתידים לגלות,
        שבסיני יש קסם שאין בשום מקום אחר בעולם.
      </p>
      <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed mb-10">
        אנחנו מזמינות אתכם.ן לחופשה של חופש, תנועה והרבה כיף.
        <br />
        בואו לפגוש אנשים חדשים, לייצר חיבורים, לגלות דברים חדשים וליהנות מאיזון מושלם בין סדנאות ותוכן לבין זמן חופשי, שקט, מוזיקה וריקודים.
      </p>

      <LeafDivider />

      <ul className="text-right space-y-4 font-body text-foreground/80 text-lg max-w-xl mx-auto mb-10">
        <li className="flex items-start gap-3"><span className="text-teal-dark mt-1">•</span>קאמפ מפנק שמתאים גם למזג אוויר קריר.</li>
        <li className="flex items-start gap-3"><span className="text-teal-dark mt-1">•</span>שיעורי יוגה, תנועה וחיבור לגוף.</li>
        <li className="flex items-start gap-3"><span className="text-teal-dark mt-1">•</span>סדנאות מדיטציה, מיינדפולנס, כתיבה ועוד..</li>
        <li className="flex items-start gap-3"><span className="text-teal-dark mt-1">•</span>הקסם של סיני - נופים קסומים של מדבר וים.</li>
        <li className="flex items-start gap-3"><span className="text-teal-dark mt-1">•</span>לינה מפנקת ואוכל מזין.</li>
        <li className="flex items-start gap-3"><span className="text-teal-dark mt-1">•</span>קבוצה של אנשים טובים וזמן לחיבורים.</li>
        <li className="flex items-start gap-3"><span className="text-teal-dark mt-1">•</span>כל מה שאתם צריכים כדי להרפות ולהתמסר לחוויה.</li>
      </ul>

      <SinaiCTA href={whatsappLink} text="אני בפנים" />
    </div>
  </section>
);

const SinaiScheduleSection = ({ schedule, whatsappLink }: { schedule: { day: string; activities: string[] }[]; whatsappLink: string }) => (
  <section className="section-padding">
    <div className="container max-w-4xl mx-auto">
      <div className="text-center mb-4">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
          איך נראים הימים שלנו?
        </h2>
      </div>

      <LeafDivider />

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {schedule.map((day, index) => (
          <div key={index} className="bg-cream rounded-2xl p-6 shadow-soft">
            <h3 className="font-display text-xl text-teal-dark mb-4 border-b border-teal/30 pb-3">{day.day}</h3>
            <ul className="space-y-2">
              {day.activities.map((activity, actIndex) => (
                <li key={actIndex} className="flex items-start gap-2 font-body text-foreground/80">
                  <span className="text-teal-dark mt-1">•</span>
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <SinaiCTA href={whatsappLink} text="אני בפנים" />
      </div>
    </div>
  </section>
);

const SinaiIncludesSection = ({ includes, whatsappLink }: { includes: string[]; whatsappLink: string }) => (
  <section className="section-padding bg-cream">
    <div className="container max-w-4xl mx-auto">
      <div className="text-center mb-4">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
          מה כלול בחופשה?
        </h2>
      </div>

      <LeafDivider />

      <p className="font-body text-lg text-foreground/70 text-center mb-10 italic">
        כדי שתוכלו באמת להתמסר, להרפות ולהנות, דאגנו לכל המעטפת:
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* התהליך */}
        <div className="bg-background rounded-2xl p-6 shadow-soft">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-teal-dark" size={28} />
            <h3 className="font-display text-2xl text-foreground">התהליך</h3>
          </div>
          <ul className="space-y-2 font-body text-foreground/80">
            <li>• טקס פתיחה וסיום</li>
            <li>• שיעורי יוגה</li>
            <li>• סדנאות מגוונות</li>
            <li>• זמן אישי להטמעה, מנוחה ושהייה בטבע</li>
          </ul>
        </div>

        {/* הלינה */}
        <div className="bg-background rounded-2xl p-6 shadow-soft">
          <div className="flex items-center gap-3 mb-4">
            <Home className="text-teal-dark" size={28} />
            <h3 className="font-display text-2xl text-foreground">הלינה</h3>
          </div>
          <ul className="space-y-2 font-body text-foreground/80">
            <li>• 3 לילות בקאמפ מפנק</li>
            <li>• בקתות עץ ממוזגות עם מקלחת ושירותים</li>
            <li>• חלל תרגול סגור וסלון עם אח</li>
          </ul>
        </div>

        {/* האוכל */}
        <div className="bg-background rounded-2xl p-6 shadow-soft">
          <div className="flex items-center gap-3 mb-4">
            <Utensils className="text-teal-dark" size={28} />
            <h3 className="font-display text-2xl text-foreground">האוכל</h3>
          </div>
          <ul className="space-y-2 font-body text-foreground/80">
            <li>• 2 ארוחות מלאות ביום</li>
            <li>• שתייה חמה, פירות ונשנושים כל היום</li>
            <li>• אוכל פשוט, מזין ומלא צבע</li>
          </ul>
        </div>

        {/* מה עוד */}
        <div className="bg-background rounded-2xl p-6 shadow-soft">
          <div className="flex items-center gap-3 mb-4">
            <Check className="text-teal-dark" size={28} />
            <h3 className="font-display text-2xl text-foreground">מה עוד</h3>
          </div>
          <ul className="space-y-2 font-body text-foreground/80">
            <li>• הסעות מהגבול ובחזרה</li>
            <li>• מתנה אישית לכל משתתף/ת</li>
            <li>• חוויה בלתי נשכחת</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10">
        <SinaiCTA href={whatsappLink} text="אני רוצה להצטרף" />
      </div>
    </div>
  </section>
);

const SinaiForWhoSection = ({ whatsappLink }: { whatsappLink: string }) => (
  <section className="section-padding">
    <div className="container max-w-3xl mx-auto">
      <div className="text-center mb-4">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
          למי זה מתאים?
        </h2>
      </div>

      <LeafDivider />

      <div className="bg-cream rounded-2xl p-8 shadow-soft mb-8">
        <p className="font-body text-lg text-foreground/80 leading-relaxed mb-6">
          הריטריט הזה מתאים לכל מי שרוצה לצאת לחופשה באווירה טובה — יוגה, ים, שקט, אנשים שכיף להיות לידם.
        </p>
        <ul className="space-y-3 font-body text-foreground/80 text-lg">
          <li className="flex items-start gap-3">
            <span className="text-teal-dark mt-1">•</span>
            לכל מי שבא להם חופש רגוע, פשוט וכיפי.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-dark mt-1">•</span>
            מי שרוצה לשלב יוגה, תנועה וסדנאות מגוונות באווירה קלילה.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-dark mt-1">•</span>
            התכנים מתאימים גם למי שאין לו ניסיון ביוגה.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-dark mt-1">•</span>
            מי שמרגיש שהגיע הזמן להתנתק מהיומיום ולהיטען באנרגיות חדשות.
          </li>
          <li className="flex items-start gap-3">
            <span className="text-teal-dark mt-1">•</span>
            מי שאוהב להכיר אנשים, לצחוק, וליהנות.
          </li>
        </ul>

        <p className="font-body text-lg text-foreground/70 mt-6 italic text-center">
          אם נשמע לך שזה בדיוק החופשה שאת.ה צריכ.ה — זה הזמן להצטרף אלינו.
        </p>
      </div>

      <div className="text-center">
        <SinaiCTA href={whatsappLink} text="אני בפנים" />
      </div>
    </div>
  </section>
);

import noaProfile from "@/assets/noa-profile.jpg";

const SinaiAboutSection = () => (
  <section className="section-padding bg-cream">
    <div className="container max-w-4xl mx-auto">
      <div className="text-center mb-4">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
          מי אנחנו?
        </h2>
      </div>

      <LeafDivider />

      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        <img 
          src={noaProfile} 
          alt="נועה מתתיהו" 
          className="w-40 h-40 rounded-full object-cover shadow-lg flex-shrink-0"
        />
        <div className="text-center md:text-right">
          <h3 className="font-display text-2xl text-teal-dark mb-3">נועה מתתיהו</h3>
          <p className="font-body text-foreground/80 leading-relaxed">
            מורה ותלמידה של היוגה כבר יותר מעשור. יוצרת תוכן ומנחת סדנאות גוף נפש.
            מלווה תהליכים ברוח ההתמקדות בשילוב דימיון מודרך, סאונד הילינג וכלים נוספים מעולמות הרוח והמיינדפולנס.
            אוהבת אנשים, לרקוד, לצחוק ולגלות דברים חדשים.
          </p>
        </div>
      </div>

      <p className="font-body text-lg text-foreground/70 text-center italic leading-relaxed max-w-2xl mx-auto mb-8">
        אנחנו מזמינות אתכם להצטרף אלינו לחופשה של צחוק, אנשים טובים, מוזיקה טובה וריקודים לצד תנועה, תוכן איכותי וסדנאות מגוונות.
      </p>

      <div className="text-center">
        <SinaiCTA href="https://wa.me/message/X3ASE2JKXDO7J1" text="ספרו לי עוד" />
      </div>
    </div>
  </section>
);

const SinaiPricingSection = ({ priceTiers, whatsappLink, cancellationPolicy }: { 
  priceTiers: { name: string; price: number; spots: number; spotsLeft: number; status: string }[];
  whatsappLink: string;
  cancellationPolicy?: string[];
}) => {
  const currentTierIndex = priceTiers.findIndex(tier => tier.status !== "sold-out");
  
  return (
    <section className="section-padding">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
            ההשקעה שלך
          </h2>
        </div>

        <LeafDivider />

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {priceTiers.map((tier, index) => {
            const isCurrent = index === currentTierIndex;
            const isSoldOut = tier.status === "sold-out";
            
            return (
              <div 
                key={index} 
                className={`bg-cream rounded-2xl p-6 shadow-soft text-center relative transition-all duration-300 ${
                  isSoldOut ? "opacity-60" : ""
                } ${isCurrent ? "ring-2 ring-gold scale-105 shadow-elevated" : ""}`}
              >
                {isCurrent && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-foreground text-sm px-4 py-1 rounded-full font-medium font-body">
                    המחיר הנוכחי
                  </div>
                )}
                <h3 className="font-display text-lg text-foreground mb-2 mt-2">{tier.name}</h3>
                <p className={`font-display text-4xl ${isCurrent ? "text-teal-dark" : "text-foreground"}`}>₪{tier.price}</p>
                {isSoldOut && (
                  <p className="font-body text-sm text-muted-foreground mt-2">אזל</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-cream rounded-2xl p-6 shadow-soft mb-8">
          <h3 className="font-display text-xl text-foreground mb-4 text-center">המחיר כולל:</h3>
          <ul className="space-y-2 font-body text-foreground/80 max-w-lg mx-auto">
            <li>• 3 לילות ו-4 ימים בקאמפ מלדיב ביץ׳</li>
            <li>• הסעה מהגבול וחזרה</li>
            <li>• כל המפגשים, התרגולים והפעילויות</li>
            <li>• ליווי אישי במרחב קטן ואינטימי</li>
            <li>• 2 ארוחות + נשנושים לאורך היום</li>
          </ul>
          <p className="font-body text-sm text-muted-foreground text-center mt-4">
            (מעבר גבול וביטוח נסיעות אינם כלולים במחיר)
          </p>
        </div>

        {cancellationPolicy && cancellationPolicy.length > 0 && (
          <div className="bg-cream rounded-2xl p-6 shadow-soft mb-8">
            <h3 className="font-display text-lg text-foreground mb-3 text-center">מדיניות ביטול</h3>
            <ul className="space-y-2 max-w-lg mx-auto">
              {cancellationPolicy.map((policy, index) => (
                <li key={index} className="flex items-start gap-2 font-body text-foreground/80 text-sm">
                  <span className="text-teal-dark mt-1">•</span>
                  {policy}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="text-center">
          <SinaiCTA href={whatsappLink} text="תרשמו אותי" />
        </div>
      </div>
    </section>
  );
};

const SinaiTestimonialsSection = () => (
  <section className="section-padding bg-cream">
    <div className="container max-w-4xl mx-auto">
      <div className="text-center mb-4">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
          מה אומרים עלינו
        </h2>
      </div>

      <LeafDivider />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-background rounded-2xl p-6 shadow-soft">
          <p className="font-body text-foreground/80 italic mb-4 leading-relaxed">
            "חזרתי מהטיול עם המון אנרגיה וחברים חדשים. נועה יוצרת אווירה כזו נעימה ומקבלת, שאפשר פשוט להיות את עצמך."
          </p>
          <p className="font-display text-teal-dark">- שירה</p>
        </div>

        <div className="bg-background rounded-2xl p-6 shadow-soft">
          <p className="font-body text-foreground/80 italic mb-4 leading-relaxed">
            "הייתי בהרבה טיולים מאורגנים, אבל זה היה משהו אחר לגמרי. השילוב של יוגה, טבע ואנשים מדהימים - פשוט מושלם."
          </p>
          <p className="font-display text-teal-dark">- דני</p>
        </div>

        <div className="bg-background rounded-2xl p-6 shadow-soft">
          <p className="font-body text-foreground/80 italic mb-4 leading-relaxed">
            "באתי לבד וקצת חששתי, אבל תוך כמה שעות הרגשתי כאילו אני מכירה את כולם שנים. חוויה שאני ממליצה לכל אחד ואחת."
          </p>
          <p className="font-display text-teal-dark">- מיכל</p>
        </div>

        <div className="bg-background rounded-2xl p-6 shadow-soft">
          <p className="font-body text-foreground/80 italic mb-4 leading-relaxed">
            "סיני הוא מקום מיוחד, אבל עם הקבוצה הזו והאנרגיה הזו - זה הפך לחוויה בלתי נשכחת. כבר נרשמתי לפעם הבאה!"
          </p>
          <p className="font-display text-teal-dark">- יובל</p>
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

  // For Sinai retreats, show dedicated page
  if (retreat.id === "sinai-yoga-march-2026" || retreat.id === "sinai-yoga-may-2026") {
    return (
      <Layout>
        {/* Hero - Full screen */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={retreat.image}
              alt={retreat.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
            <h1 className="font-display text-6xl md:text-8xl font-bold tracking-wide text-white mb-4 drop-shadow-lg">
              חופשת יוגה
            </h1>
            
            <p className="font-body text-xl md:text-2xl text-white/90 mb-8 font-light drop-shadow-md">
              {retreat.subtitle}
            </p>

            <div className="mb-10">
              <SinaiCTA href={retreat.whatsappLink} text="להצטרפות" />
            </div>

            <div className="flex flex-col items-center gap-2">
              <p className="font-display text-xl md:text-2xl text-white font-medium drop-shadow-md">
                {retreat.dateRange}
              </p>
              <p className="font-body text-lg text-white/80 drop-shadow-sm">
                {retreat.location}
              </p>
            </div>
          </div>
        </section>

        <SinaiIntroSection whatsappLink={retreat.whatsappLink} />
        
        <SinaiDescriptionSection whatsappLink={retreat.whatsappLink} />
        
        {retreat.schedule && <SinaiScheduleSection schedule={retreat.schedule} whatsappLink={retreat.whatsappLink} />}
        
        {retreat.includes && <SinaiIncludesSection includes={retreat.includes} whatsappLink={retreat.whatsappLink} />}
        
        <SinaiForWhoSection whatsappLink={retreat.whatsappLink} />
        
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
        <section className="section-padding bg-teal">
          <div className="container max-w-3xl mx-auto text-center">
            <p className="font-body text-lg md:text-xl text-white leading-relaxed mb-6">
              אנחנו מזמינות אתכם להצטרף אלינו.
              <br />
              בואו לתת לעצמכם רגע חופש אמיתי, להניח את השגרה בצד ולהיטען מחדש.
            </p>
            <p className="font-body text-lg text-white/90 mb-8 leading-relaxed">
              להכיר אנשים טובים, לייצר חיבורים חדשים, וליהנות מאיזון מושלם בין תנועה ותוכן, לבין ים, שקט, מוזיקה, ריקודים וזמן לעצמכם.
            </p>
            <p className="font-body text-white/80 italic mb-8">
              אם זה מדבר אליך, זה יותר פשוט ממה שאת.ה חושב.ת — פשוט בוא.י 💙
            </p>
            <SinaiCTA href={retreat.whatsappLink} text="אני איתכם" />
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
            {retreat.spots > 0 && (
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span className="font-body">{retreat.spots} משתתפים</span>
              </div>
            )}
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

            {/* Pricing - only show if not coming soon */}
            {retreat.price > 0 && (
              <div className="bg-primary/10 rounded-2xl p-6 text-center">
                <p className="font-body text-muted-foreground mb-2">מחיר</p>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="font-display text-4xl text-primary">₪{retreat.price}</span>
                  {retreat.originalPrice && (
                    <span className="font-body text-xl text-muted-foreground line-through">₪{retreat.originalPrice}</span>
                  )}
                </div>
                {retreat.spots > 0 && (
                  <p className="font-body text-sm text-muted-foreground mb-6">
                    {retreat.spotsLeft} מקומות פנויים מתוך {retreat.spots}
                  </p>
                )}
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
            )}
            
            {/* Coming soon CTA */}
            {retreat.price === 0 && (
              <div className="bg-primary/10 rounded-2xl p-6 text-center">
                <p className="font-display text-2xl text-primary mb-4">פרטים מלאים בקרוב</p>
                <p className="font-body text-muted-foreground mb-6">
                  רוצים לשמוע ראשונים? השאירו פרטים ונעדכן אתכם
                </p>
                <Button variant="whatsapp" size="xl" asChild>
                  <a
                    href={retreat.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    עדכנו אותי
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RetreatPage;
