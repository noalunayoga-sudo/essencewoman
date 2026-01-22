import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import RetreatCard from "@/components/RetreatCard";
import { Button } from "@/components/ui/button";
import { getUpcomingRetreats } from "@/data/retreats";
import { Heart, Building2 } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import womenConnection from "@/assets/women-connection.jpg";
import heroWellness from "@/assets/hero-wellness.jpg";

const Home = () => {
  const upcomingRetreats = getUpcomingRetreats();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="יוגה וריטריטים"
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-display text-6xl md:text-8xl font-semibold tracking-wide text-white mb-6 drop-shadow-lg">
            Noa Luna
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-white/95 mb-8 font-light drop-shadow-md max-w-2xl mx-auto">
            ריטריטים וחופשות יוגה בארץ ובעולם.
            <br />
            מרחב לעצור, לנשום ולהתחבר.
          </p>

          <Button variant="hero" size="xl" asChild>
            <a href="#retreats">
              לריטריטים הקרובים
            </a>
          </Button>
        </div>
      </section>

      {/* Upcoming Retreats Section */}
      <section id="retreats" className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              ריטריטים קרובים
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              בחרו את החוויה הבאה שלכם
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {upcomingRetreats.map((retreat) => (
              <RetreatCard key={retreat.id} retreat={retreat} />
            ))}
          </div>
        </div>
      </section>

      {/* Private & Corporate Events Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              אירועים פרטיים ועסקיים
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              יום כיף מותאם אישית לכל אירוע
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Private Events Card */}
            <Link to="/private-events" className="group">
              <div className="gradient-card rounded-3xl overflow-hidden shadow-elevated hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={womenConnection}
                    alt="יום כיף לרווקות"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 right-4 left-4">
                    <div className="flex items-center gap-2 text-white">
                      <Heart size={24} />
                      <h3 className="font-display text-2xl drop-shadow-lg">
                        יום כיף לרווקות ואירועים פרטיים
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-body text-foreground/80 mb-4">
                    מסיבות רווקות, ימי הולדת, יום כיף לחברות - חוויה מפנקת ובלתי נשכחת
                  </p>
                  <span className="font-body text-primary font-medium group-hover:underline">
                    לפרטים נוספים ←
                  </span>
                </div>
              </div>
            </Link>

            {/* Corporate Events Card */}
            <Link to="/corporate-events" className="group">
              <div className="gradient-card rounded-3xl overflow-hidden shadow-elevated hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={heroWellness}
                    alt="ימי גיבוש לחברות"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 right-4 left-4">
                    <div className="flex items-center gap-2 text-white">
                      <Building2 size={24} />
                      <h3 className="font-display text-2xl drop-shadow-lg">
                        ימי גיבוש ואירועי חברה
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-body text-foreground/80 mb-4">
                    יום גיבוש Wellness לצוות - יוגה, סדנאות, פעילויות שטח ואוכל טוב
                  </p>
                  <span className="font-body text-primary font-medium group-hover:underline">
                    לפרטים נוספים ←
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            מי אני?
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-8">
            קוראים לי נועה. אני מורה ותלמידה של היוגה כבר יותר מעשור.
            <br />
            מנחה סדנאות ויוצרת חוויות שמחברות גוף, נפש ורוח.
          </p>
          <Button variant="soft" size="lg" asChild>
            <a href="/about">
              קראו עוד עליי
            </a>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            יש שאלות?
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-8">
            אשמח לדבר ולעזור לכם לבחור את הריטריט המתאים
          </p>
          <Button variant="whatsapp" size="xl" asChild>
            <a
              href="https://wa.me/message/X3ASE2JKXDO7J1"
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
};

export default Home;
