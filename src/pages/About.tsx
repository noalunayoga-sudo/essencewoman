import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import noaImage from "@/assets/noa-profile.jpg";
import { Instagram } from "lucide-react";

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
      description: "אחזור אליך בהקדם"
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary/30">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6 animate-fade-in">
            קצת עליי
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            מאמינה בכוח של תנועה, נשימה וחיבור
          </p>
        </div>
      </section>

      {/* About Noa */}
      <section className="section-padding">
        <div className="container max-w-4xl mx-auto">
          <div className="gradient-card rounded-3xl p-8 md:p-12 shadow-elevated">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <img
                src={noaImage}
                alt="נועה לונה - מורה ליוגה"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-soft border-4 border-background flex-shrink-0"
              />
              
              <div className="text-center md:text-right">
                <h2 className="font-display text-4xl text-foreground mb-6">
                  נועה לונה
                </h2>
                
                <div className="font-body text-foreground/80 leading-relaxed space-y-4">
                  <p>
                    היי, קוראים לי נועה. אני אישה שנוגעת וננגעת, נעה ומשתנה כל הזמן.
                  </p>
                  <p>
                    אני מורה ותלמידה של היוגה כבר יותר מעשור. יוצרת תוכן ומנחת סדנאות גוף נפש.
                  </p>
                  <p>
                    מלווה תהליכים ברוח ההתמקדות בשילוב דימיון מודרך, סאונד הילינג וכלים נוספים מעולמות הרוח והמיינדפולנס.
                  </p>
                  <p>
                    הריטריטים שלי נולדו מתוך הדרך שלי, ומתוך רצון ליצור מרחב שמחזיק ומאפשר לכל מי שמגיע לעצור, לנשום ולהתחבר לעצמו.
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center md:justify-start gap-4 mt-6">
                  <a
                    href="https://www.instagram.com/noa_luna_yoga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Instagram size={20} />
                    <span className="font-body">@noa_luna_yoga</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESSENCE Collaboration Note */}
      <section className="py-8">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="font-body text-muted-foreground italic">
            ריטריט ESSENCE נוצר בשיתוף עם קורל, שותפה מיוחדת לפרויקט הנשי הזה.
          </p>
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
              יש לכם שאלה? רוצים לדעת יותר? כתבו לי
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
                placeholder="מה תרצו לשאול?"
              />
            </div>

            <Button type="submit" variant="default" size="lg" className="w-full">
              שלחו הודעה
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default About;
