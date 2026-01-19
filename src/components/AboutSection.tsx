import { Button } from "@/components/ui/button";
import noaImage from "@/assets/noa-profile.jpg";
import coralImage from "@/assets/coral-profile.jpg";

const AboutSection = () => {
  return (
    <section className="section-padding">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            מי אנחנו?
          </h2>
          <p className="font-body text-xl text-muted-foreground">
            היוצרות מאחורי הריטריט
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* נועה */}
          <div className="gradient-card rounded-3xl p-8 shadow-elevated">
            <div className="flex flex-col items-center text-center">
              <img
                src={noaImage}
                alt="נועה - מנחת הריטריט"
                className="w-48 h-48 rounded-full object-cover shadow-soft mb-6 border-4 border-background"
              />
              
              <h3 className="font-display text-3xl text-foreground mb-4">
                נועה
              </h3>
              
              <p className="font-body text-foreground/80 leading-relaxed mb-6">
                היי, קוראים לי נועה. אני אישה שנוגעת וננגעת, נעה ומשתנה כל הזמן.
                <br /><br />
                אני מורה ותלמידה של היוגה כבר יותר מעשור. יוצרת תוכן ומנחת סדנאות גוף נפש.
                <br /><br />
                מלווה תהליכים ברוח ההתמקדות בשילוב דימיון מודרך, סאונד הילינג וכלים נוספים מעולמות הרוח והמיינדפולנס.
              </p>
            </div>
          </div>

          {/* קורל */}
          <div className="gradient-card rounded-3xl p-8 shadow-elevated">
            <div className="flex flex-col items-center text-center">
              <img
                src={coralImage}
                alt="קורל - יוצרת הריטריט"
                className="w-48 h-48 rounded-full object-cover object-top shadow-soft mb-6 border-4 border-background"
              />
              
              <h3 className="font-display text-3xl text-foreground mb-4">
                קורל
              </h3>
              
              <p className="font-body text-foreground/80 leading-relaxed mb-6">
                היי, קוראים לי קורל. בעשר שנים האחרונות אני עוסקת בהפקת אירועים.
                <br /><br />
                אני מאמינה שגוף ונפש קשורים אחד בשני ויש קשר הדוק בין המצב הפיזי למצב הנפשי.
                <br /><br />
                באה מהעולם של ההייטק ועוזרת להנגיש את עולם הוולנס לכולן. ביחד עם נועה, אנחנו מתרכזות באירועים וזמן שמתעסק בשניים - גוף ונפש.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-lg text-muted-foreground mb-6 italic">
            הריטריט הזה נולד מתוך הדרך שלנו, ומתוך רצון ליצור מרחב שמחזיק את כל האספקטים של חיינו כנשים.
          </p>
          
          <Button variant="soft" size="lg" asChild>
            <a
              href="https://wa.me/message/X3ASE2JKXDO7J1"
              target="_blank"
              rel="noopener noreferrer"
            >
              ספרו לי עוד
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
