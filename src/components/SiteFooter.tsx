import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-right">
            <h3 className="font-display text-2xl mb-4">ESSENCE</h3>
            <p className="font-body text-background/70 text-sm">
              ריטריטים לנשים | יוגה, תנועה וחיבור
            </p>
          </div>

          {/* Links */}
          <div className="text-center">
            <h4 className="font-display text-lg mb-4">ניווט</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="font-body text-background/70 hover:text-background transition-colors">
                בית
              </Link>
              <Link to="/about" className="font-body text-background/70 hover:text-background transition-colors">
                אודות
              </Link>
              <Link to="/gallery" className="font-body text-background/70 hover:text-background transition-colors">
                גלריה
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-lg mb-4">צרו קשר</h4>
            <a
              href="https://wa.me/message/X3ASE2JKXDO7J1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-background/70 hover:text-background transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="font-body text-background/60 text-sm">
            נוצר באהבה על ידי נועה וקורל © 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
