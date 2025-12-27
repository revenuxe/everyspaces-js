import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import intorzaLogo from "@/assets/intorza-logo-new.webp";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let rafId = 0;

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        setIsScrolled(window.scrollY > 20);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home", isRoute: true },
    { href: "/services", label: "Services", isRoute: true },
    { href: "/portfolio", label: "Portfolio", isRoute: true },
    { href: "/articles", label: "Articles", isRoute: true },
    { href: "/#localities", label: "Locations" },
    { href: "/contact", label: "Contact", isRoute: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-smooth bg-card shadow-soft ${
        isScrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={intorzaLogo}
            alt="Intorza Interior Design"
            width={197}
            height={40}
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link 
                key={link.href}
                to={link.href} 
                className="text-sm font-medium text-primary hover:text-secondary transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a 
                key={link.href}
                href={link.href} 
                className="text-sm font-medium text-primary hover:text-secondary transition-colors"
              >
                {link.label}
              </a>
            )
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden md:flex btn-terracotta px-6 py-2.5 rounded-2xl text-sm font-semibold text-secondary-foreground">
            Get Quote
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-muted/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-primary" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5 text-primary" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card shadow-lg border-t border-border/50">
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link 
                  key={link.href}
                  to={link.href} 
                  className="px-4 py-3 text-sm font-medium text-primary hover:text-secondary hover:bg-muted/50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="px-4 py-3 text-sm font-medium text-primary hover:text-secondary hover:bg-muted/50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            ))}
            <Link to="/contact" className="mt-2 mx-4 btn-terracotta px-6 py-2.5 rounded-2xl text-sm font-semibold text-secondary-foreground block text-center">
              Get Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
