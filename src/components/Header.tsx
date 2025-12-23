import { useState, useEffect } from "react";
import intorzaLogo from "@/assets/intorza-logo-new.webp";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-smooth bg-card shadow-soft ${
        isScrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={intorzaLogo}
            alt="Intorza Interior Design"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-primary hover:text-secondary transition-colors">
            Services
          </a>
          <a href="#portfolio" className="text-sm font-medium text-primary hover:text-secondary transition-colors">
            Portfolio
          </a>
          <a href="#localities" className="text-sm font-medium text-primary hover:text-secondary transition-colors">
            Locations
          </a>
        </nav>

        <button className="hidden md:flex btn-terracotta px-6 py-2.5 rounded-2xl text-sm font-semibold text-secondary-foreground">
          Get Quote
        </button>
      </div>
    </header>
  );
};

export default Header;
