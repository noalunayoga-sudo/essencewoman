import { Button } from "@/components/ui/button";

const FooterSection = () => {
  return (
    <footer className="section-padding bg-foreground text-background">
      <div className="container-narrow text-center">
        <h2 className="font-display text-4xl md:text-5xl mb-6">
          מוכנה לצאת למסע?
        </h2>
        
        <p className="font-body text-background/80 text-xl mb-8">
          יש לך שאלות? רוצה לשמוע עוד? דברי איתנו
        </p>

        <Button
          variant="whatsapp"
          size="xl"
          asChild
        >
          <a
            href="https://wa.me/message/X3ASE2JKXDO7J1"
            target="_blank"
            rel="noopener noreferrer"
          >
            שלחי לנו הודעה
          </a>
        </Button>

        <div className="mt-16 pt-8 border-t border-background/20">
          <p className="font-display text-3xl mb-4">ESSENCE</p>
          <p className="font-body text-background/60 text-sm">
            נוצר באהבה על ידי נועה וקורל © 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
