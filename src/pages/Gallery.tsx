import Layout from "@/components/Layout";
import healingSessionImage from "@/assets/gallery/healing-session.jpg";
import yogaSunsetDeck from "@/assets/gallery/yoga-sunset-deck.jpg";
import circleSunset from "@/assets/gallery/circle-sunset.jpg";
import handstandDuo from "@/assets/gallery/handstand-duo.jpg";
import groupCircle from "@/assets/gallery/group-circle.jpg";
import groupSupport from "@/assets/gallery/group-support.jpg";
import beachReflection from "@/assets/gallery/beach-reflection.jpg";
import swingSunset from "@/assets/gallery/swing-sunset.jpg";
import yogaWarrior from "@/assets/gallery/yoga-warrior.jpg";
import boatAdventure from "@/assets/gallery/boat-adventure.jpg";
import yogaStretch from "@/assets/gallery/yoga-stretch.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  span?: "wide" | "tall" | "normal";
}

const galleryImages: GalleryImage[] = [
  { src: yogaSunsetDeck, alt: "יוגה בשקיעה", span: "wide" },
  { src: beachReflection, alt: "רגע של שקט", span: "tall" },
  { src: handstandDuo, alt: "עמידת ידיים זוגית", span: "normal" },
  { src: healingSessionImage, alt: "טיפול ריפוי", span: "normal" },
  { src: circleSunset, alt: "מעגל שיתוף", span: "wide" },
  { src: groupCircle, alt: "חיבור קבוצתי", span: "normal" },
  { src: swingSunset, alt: "נדנדה בשקיעה", span: "tall" },
  { src: yogaWarrior, alt: "תנוחת לוחם", span: "normal" },
  { src: yogaStretch, alt: "יוגה", span: "tall" },
  { src: groupSupport, alt: "תמיכה קבוצתית", span: "normal" },
  { src: boatAdventure, alt: "הרפתקה בים", span: "normal" },
];

const Gallery = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary/30">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6 animate-fade-in">
            גלריה
          </h1>
          <p className="font-body text-xl text-muted-foreground">
            רגעים מהריטריטים שלנו
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl shadow-elevated group cursor-pointer ${
                  image.span === "wide" ? "md:col-span-2" : ""
                } ${image.span === "tall" ? "md:row-span-2" : ""}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    image.span === "tall" ? "h-full min-h-[400px]" : "h-64 md:h-80"
                  }`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
