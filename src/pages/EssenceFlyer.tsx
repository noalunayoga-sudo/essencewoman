import essenceImage from "@/assets/essence-retreat.jpg";
import coralProfile from "@/assets/coral-profile.jpg";
import noaProfile from "@/assets/noa-profile.jpg";

const EssenceFlyer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-primary/5 flex items-center justify-center p-4 print:p-0">
      <div className="w-full max-w-[600px] bg-white shadow-2xl rounded-3xl overflow-hidden print:shadow-none print:rounded-none">
        
        {/* Header Image */}
        <div className="relative h-[300px] overflow-hidden">
          <img
            src={essenceImage}
            alt="ESSENCE Retreat"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-white/90" />
          
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 text-center pb-6">
            <h1 className="font-display text-6xl font-semibold text-primary tracking-wider drop-shadow-lg">
              ESSENCE
            </h1>
            <p className="text-sm text-muted-foreground mt-1 font-body">
              ריטריט יום לנשים
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-8 py-6 text-center" dir="rtl">
          
          {/* Subtitle */}
          <p className="font-display text-xl text-foreground mb-6 leading-relaxed">
            יום שלם של נשיות, תנועה, אוכל טוב וחיבור אמיתי
          </p>

          {/* Date & Location */}
          <div className="bg-primary/10 rounded-2xl p-5 mb-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-2xl">📅</span>
              <span className="font-display text-2xl text-primary font-medium">
                יום שבת | 07.02.2026
              </span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-xl">📍</span>
              <span className="font-body text-lg text-muted-foreground">
                תל-אביב
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="font-body text-muted-foreground mb-6 leading-relaxed">
            ריטריט יום שלם שמזמין אותך לעצור, לנשום, ולהתחבר לעצמך ולנשים נוספות.
            <br />
            יום של יוגה, סדנאות, אוכל טוב ורגעים שישארו איתך.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-secondary/30 rounded-xl p-4">
              <span className="text-2xl mb-2 block">🧘‍♀️</span>
              <span className="font-body text-sm text-foreground">סדנאות יוגה ותנועה</span>
            </div>
            <div className="bg-secondary/30 rounded-xl p-4">
              <span className="text-2xl mb-2 block">💫</span>
              <span className="font-body text-sm text-foreground">מפגש עם הגוף והנפש</span>
            </div>
            <div className="bg-secondary/30 rounded-xl p-4">
              <span className="text-2xl mb-2 block">🍽️</span>
              <span className="font-body text-sm text-foreground">ארוחות בריאות וטעימות</span>
            </div>
            <div className="bg-secondary/30 rounded-xl p-4">
              <span className="text-2xl mb-2 block">🎁</span>
              <span className="font-body text-sm text-foreground">מתנה מיוחדת לכל משתתפת</span>
            </div>
          </div>

          {/* Facilitators */}
          <div className="mb-6">
            <p className="font-body text-sm text-muted-foreground mb-3">מנחות הריטריט</p>
            <div className="flex items-center justify-center gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 mb-2">
                  <img src={noaProfile} alt="נועה" className="w-full h-full object-cover" />
                </div>
                <span className="font-display text-foreground">נועה</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 mb-2">
                  <img src={coralProfile} alt="קורל" className="w-full h-full object-cover" />
                </div>
                <span className="font-display text-foreground">קורל</span>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl p-5 mb-6">
            <p className="font-body text-sm text-muted-foreground mb-3">מחירון מדורג</p>
            <div className="flex justify-center gap-4 text-center">
              <div className="flex-1">
                <p className="font-display text-lg text-muted-foreground line-through">660₪</p>
                <p className="font-body text-xs text-muted-foreground">7 הראשונות</p>
                <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">אזל</span>
              </div>
              <div className="flex-1 bg-white rounded-xl p-2 shadow-sm">
                <p className="font-display text-2xl text-primary font-bold">720₪</p>
                <p className="font-body text-xs text-foreground">7 הבאות</p>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">זמין!</span>
              </div>
              <div className="flex-1">
                <p className="font-display text-lg text-muted-foreground">780₪</p>
                <p className="font-body text-xs text-muted-foreground">7 האחרונות</p>
              </div>
            </div>
          </div>

          {/* Limited Spots */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-pink-400">🌸</span>
            <p className="font-body text-sm text-primary font-medium">
              מספר המקומות מוגבל ל-21 נשים בלבד
            </p>
            <span className="text-pink-400">🌸</span>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/message/X3ASE2JKXDO7J1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-body font-medium text-lg px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            להרשמה בוואטסאפ
          </a>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-primary/10">
            <p className="font-display text-2xl text-primary mb-1">Noa Luna</p>
            <p className="font-body text-sm text-muted-foreground">Wellness & Lifestyle</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EssenceFlyer;
