import Layout from "@/components/Layout";
import RetreatCard from "@/components/RetreatCard";
import { Button } from "@/components/ui/button";
import { getUpcomingRetreats } from "@/data/retreats";
import heroImage from "@/assets/hero-retreat.jpg";

const Home = () => {
  const upcomingRetreats = getUpcomingRetreats();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="נשים בריטריט"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-display text-6xl md:text-8xl font-semibold tracking-wide text-white mb-6 drop-shadow-lg">
            ESSENCE
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-white/95 mb-8 font-light drop-shadow-md max-w-2xl mx-auto">
            ריטריטים לנשים המשלבים יוגה, תנועה, אוכל טוב וחיבור אמיתי. 
            <br />
            מרחב בטוח לעצור, לנשום ולהתחבר.
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
              בחרי את החוויה הבאה שלך
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
            מי אנחנו?
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-8">
            נועה וקורל, שתי נשים שמאמינות בכוח של מרחב נשי אמיתי.
            <br />
            יחד אנחנו יוצרות חוויות שמשלבות גוף, נפש ורוח.
          </p>
          <Button variant="soft" size="lg" asChild>
            <a href="/about">
              קראי עוד עלינו
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
            נשמח לדבר איתך ולעזור לך לבחור את הריטריט המתאים
          </p>
          <Button variant="whatsapp" size="xl" asChild>
            <a
              href="https://wa.me/message/X3ASE2JKXDO7J1"
              target="_blank"
              rel="noopener noreferrer"
            >
              שלחי לנו הודעה
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
