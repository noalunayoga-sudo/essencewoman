import { useParams, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { getRetreatById } from "@/data/retreats";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Check } from "lucide-react";

// Import existing sections for the main retreat
import IntroSection from "@/components/IntroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ScheduleSection from "@/components/ScheduleSection";
import AboutSection from "@/components/AboutSection";
import ForWhoSection from "@/components/ForWhoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";

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
              <span className="font-body">{retreat.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span className="font-body">{retreat.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} />
              <span className="font-body">{retreat.spots} משתתפות</span>
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

      {/* About Section */}
      <AboutSection />
    </Layout>
  );
};

export default RetreatPage;
