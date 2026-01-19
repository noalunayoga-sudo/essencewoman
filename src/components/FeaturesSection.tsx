const features = [
  {
    icon: "🌸",
    title: "מרחב נשי בטוח ואינטימי",
    description: "21 נשים בלבד לשמירה על אינטימיות",
  },
  {
    icon: "🧘‍♀️",
    title: "תנועה וחיבור לגוף",
    description: "האינטליגנציה של הגוף שלך מחכה לך",
  },
  {
    icon: "✨",
    title: "סדנאות מעצימות",
    description: "יוגה, מחזוריות, תזונה והרפייה",
  },
  {
    icon: "🥗",
    title: "בראנץ' מפנק ומזין",
    description: "כיבוד איכותי לאורך כל היום",
  },
  {
    icon: "🌙",
    title: "הרפייה עמוקה",
    description: "Deep Savasana - אמנות ההרפייה",
  },
  {
    icon: "💫",
    title: "מתנה מיוחדת",
    description: "כלים ותובנות שנשארות איתך",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            מה מחכה לך?
          </h2>
          <p className="font-body text-xl text-muted-foreground">
            יום שלם של התחדשות, חיבור והעצמה
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="gradient-card p-8 rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="font-display text-2xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
