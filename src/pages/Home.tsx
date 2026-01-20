import Layout from "@/components/Layout";
import RetreatCard from "@/components/RetreatCard";
import { Button } from "@/components/ui/button";
import { getUpcomingRetreats } from "@/data/retreats";
import heroImage from "@/assets/hero-home.jpg";

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
