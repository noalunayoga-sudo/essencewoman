import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "בית" },
    { href: "/about", label: "אודות" },
    { href: "/gallery", label: "גלריה" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-display text-2xl font-semibold text-foreground">
            ESSENCE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-body text-sm transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary font-medium" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="default" size="sm" asChild>
              <a
                href="https://wa.me/message/X3ASE2JKXDO7J1"
                target="_blank"
                rel="noopener noreferrer"
              >
                להרשמה
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="תפריט"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-body text-lg px-4 py-2 transition-colors ${
                    isActive(link.href) ? "text-primary font-medium" : "text-foreground/70"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button variant="default" size="sm" className="w-full" asChild>
                  <a
                    href="https://wa.me/message/X3ASE2JKXDO7J1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    להרשמה
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
