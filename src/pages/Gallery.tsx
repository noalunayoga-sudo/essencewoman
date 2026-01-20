import Layout from "@/components/Layout";
import healingImage from "@/assets/retreat-healing.jpg";
import brunchImage from "@/assets/brunch.jpg";
import mandalaImage from "@/assets/mandala.jpg";
import healingSessionImage from "@/assets/gallery/healing-session.jpg";
import retreatMoment1 from "@/assets/gallery/retreat-moment-1.jpg";
import retreatMoment2 from "@/assets/gallery/retreat-moment-2.jpg";
import retreatMoment3 from "@/assets/gallery/retreat-moment-3.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  span?: "wide" | "tall" | "normal";
}

const galleryImages: GalleryImage[] = [
  { src: healingSessionImage, alt: "טיפול ריפוי", span: "wide" },
  { src: healingImage, alt: "סדנת ריפוי", span: "tall" },
  { src: brunchImage, alt: "ארוחת בראנץ׳", span: "normal" },
  { src: mandalaImage, alt: "מנדלה", span: "normal" },
  { src: retreatMoment1, alt: "רגע מהריטריט", span: "normal" },
  { src: retreatMoment2, alt: "חוויה קבוצתית", span: "tall" },
  { src: retreatMoment3, alt: "רגע של שקט", span: "wide" },
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
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-body text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                    {image.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-16 text-center">
            <p className="font-body text-muted-foreground text-lg mb-4">
              עוד תמונות יתווספו בקרוב...
            </p>
            <p className="font-body text-muted-foreground">
              עקבו אחרינו ברשתות החברתיות לעדכונים
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
