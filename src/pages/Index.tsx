import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ScheduleSection from "@/components/ScheduleSection";
import AboutSection from "@/components/AboutSection";
import ForWhoSection from "@/components/ForWhoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <FeaturesSection />
      <ScheduleSection />
      <AboutSection />
      <ForWhoSection />
      <TestimonialsSection />
      <PricingSection />
      <FooterSection />
    </main>
  );
};

export default Index;
