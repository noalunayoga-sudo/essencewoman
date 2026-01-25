import retreatMomentImage from "@/assets/retreat-moment.jpg";

const IntroSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src={retreatMomentImage}
              alt="נועה וקורל יוצרות מנדלה יחד"
              className="rounded-2xl shadow-elevated w-full aspect-[4/3] object-cover"
            />
          </div>
          
          <div className="order-1 md:order-2 text-center md:text-right">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              קחי רגע לעצמך
            </h2>
            
            <p className="font-display text-2xl text-primary mb-4 italic">
              הגיע הזמן להפסיק לרוץ ולהתחיל לנשום
            </p>
            
            <p className="font-body text-xl text-muted-foreground mb-6 leading-relaxed">
              יום אחד. רק בשבילך.
              <br />
              לזרום, לטעום, להתחבר
            </p>
            
            <blockquote className="font-body text-foreground/80 text-lg border-r-4 border-primary pr-4 italic">
              "יום של יוגה, בראנץ' מפנק, שיחות עומק ונשים מדהימות. מרחב להיות את עצמך, בלי לחץ, בלי ציפיות."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
