import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-retreat.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="נשים בריטריט"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="font-display text-6xl md:text-8xl font-semibold tracking-wide text-foreground mb-6">
          ESSENCE
        </h1>
        
        <p className="font-body text-xl md:text-2xl text-foreground/90 mb-4 font-light">
          יום שלם של נשיות, תנועה, אוכל טוב וחיבור אמיתי
        </p>

        <div className="flex flex-col items-center gap-4 mb-8">
          <p className="font-display text-2xl md:text-3xl text-foreground font-medium">
            יום שבת 07/02/2026
          </p>
          <p className="font-body text-lg text-muted-foreground">
            תל-אביב
          </p>
        </div>

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
            להצטרפות
          </a>
        </Button>

        <p className="mt-8 text-primary font-body text-sm flex items-center justify-center gap-2">
          🌸 מספר המקומות מוגבל ל-21 נשים בלבד
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
