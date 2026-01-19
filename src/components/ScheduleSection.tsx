const scheduleItems = [
  { time: "10:00", emoji: "☕", title: "התכנסות ונשנושים" },
  { time: "10:30", emoji: "🧘‍♀️", title: "תרגול יוגה נשית עם נועה" },
  { time: "11:30", emoji: "🌸", title: "מעגל פתיחה" },
  { time: "12:00", emoji: "🥗", title: "בראנץ' מפנק" },
  { time: "13:00", emoji: "🌙", title: "גניקוסופיה וחיבור למחזוריות" },
  { time: "14:30", emoji: "🌿", title: "הרצאה ושיח בנושא תזונה" },
  { time: "16:00", emoji: "🍵", title: "הפסקה ונשנושים" },
  { time: "16:30", emoji: "✨", title: "Deep Savasana - אמנות ההרפייה" },
  { time: "17:30", emoji: "💫", title: "מעגל סגירה" },
];

const ScheduleSection = () => {
  return (
    <section className="section-padding bg-soft-pink/30">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            לו"ז היום
          </h2>
          <p className="font-body text-xl text-muted-foreground">
            יום שלם של תוכן, תנועה ושקט פנימי
          </p>
        </div>

        <div className="space-y-4">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className="bg-background/80 backdrop-blur-sm rounded-xl p-5 flex items-center gap-4 shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex-shrink-0 w-16 text-center">
                <span className="font-body text-primary font-semibold text-lg">
                  {item.time}
                </span>
              </div>
              <div className="flex-shrink-0 text-2xl">{item.emoji}</div>
              <h3 className="font-display text-xl text-foreground">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-muted-foreground font-body text-sm space-y-1">
          <p>*לו"ז משוער - הזמנים עלולים להשתנות מעט</p>
          <p>*אין צורך בניסיון קודם</p>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
