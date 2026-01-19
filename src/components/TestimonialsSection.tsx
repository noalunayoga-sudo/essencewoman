const testimonials = [
  {
    quote:
      "הריטריט שינה לי את החיים. חזרתי הביתה עם כלים פרקטיים, תחושת שקט פנימי ובהירות שלא הכרתי קודם. נועה וקורל הן מנחות מדהימות שיוצרות מרחב בטוח ומלא אהבה.",
    name: "מיכל כ.",
  },
  {
    quote:
      "באתי בלי לדעת למה לצפות ויצאתי עם תחושה של שייכות, חיבור לעצמי ולנשים נפלאות. הבראנץ' היה מושלם והסדנאות נגעו לי עמוק.",
    name: "שירה ל.",
  },
  {
    quote:
      "הרגשתי שסוף סוף מישהי רואה אותי. המרחב הזה נתן לי הרשאה להיות, פשוט להיות. תודה על החוויה המיוחדת הזו.",
    name: "דנה ר.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            מה אומרות המשתתפות
          </h2>
          <p className="font-body text-xl text-muted-foreground">
            עדויות מנשים שעברו את המסע וחוו שינוי אמיתי
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-soft-pink/40 rounded-2xl p-8 shadow-soft relative"
            >
              <div className="absolute -top-4 right-8 text-6xl text-primary/30 font-display">
                "
              </div>
              <blockquote className="font-body text-foreground/90 leading-relaxed mb-6 relative z-10">
                {testimonial.quote}
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <p className="font-body font-medium text-foreground">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
