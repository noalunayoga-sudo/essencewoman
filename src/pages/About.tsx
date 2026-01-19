import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import noaImage from "@/assets/noa-profile.jpg";
import coralImage from "@/assets/coral-profile.jpg";

const About = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `שלום, שמי ${formData.name}%0A%0Aאימייל: ${formData.email}%0Aטלפון: ${formData.phone}%0A%0A${formData.message}`;
    window.open(`https://wa.me/message/X3ASE2JKXDO7J1?text=${message}`, '_blank');
    
    toast({
      title: "הודעה נשלחה!",
      description: "נחזור אלייך בהקדם"
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary/30">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6 animate-fade-in">
            מי אנחנו?
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            שתי נשים שמאמינות בכוח של מרחב נשי אמיתי, ויוצרות חוויות שמחברות גוף, נפש ורוח
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="section-padding">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* נועה */}
            <div className="gradient-card rounded-3xl p-8 shadow-elevated">
              <div className="flex flex-col items-center text-center">
                <img
                  src={noaImage}
                  alt="נועה - מנחת הריטריט"
                  className="w-48 h-48 rounded-full object-cover shadow-soft mb-6 border-4 border-background"
                />
                
                <h2 className="font-display text-3xl text-foreground mb-4">
                  נועה
                </h2>
                
                <p className="font-body text-foreground/80 leading-relaxed">
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
                
                <h2 className="font-display text-3xl text-foreground mb-4">
                  קורל
                </h2>
                
                <p className="font-body text-foreground/80 leading-relaxed">
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
            <p className="font-body text-lg text-muted-foreground italic max-w-3xl mx-auto">
              הריטריטים שלנו נולדו מתוך הדרך שלנו, ומתוך רצון ליצור מרחב שמחזיק את כל האספקטים של חיינו כנשים.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-secondary/30">
        <div className="container max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              צרו קשר
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              יש לך שאלה? רוצה לדעת יותר? כתבי לנו
            </p>
          </div>

          <form onSubmit={handleSubmit} className="gradient-card rounded-3xl p-8 shadow-elevated space-y-6">
            <div>
              <label htmlFor="name" className="block font-body text-sm text-foreground mb-2">
                שם מלא
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="text-right"
                placeholder="השם שלך"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-body text-sm text-foreground mb-2">
                אימייל
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="text-right"
                placeholder="email@example.com"
                dir="ltr"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-body text-sm text-foreground mb-2">
                טלפון
              </label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="text-right"
                placeholder="050-0000000"
                dir="ltr"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-body text-sm text-foreground mb-2">
                הודעה
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="text-right min-h-32"
                placeholder="מה תרצי לשאול?"
              />
            </div>

            <Button type="submit" variant="default" size="lg" className="w-full">
              שלחי הודעה
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default About;
