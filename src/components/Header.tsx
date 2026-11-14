import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import everyspacesLogo from "@/assets/everyspaces-logo.webp";
import { imgSrc } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isBangalore = pathname?.startsWith("/bangalore");
  const servicesHref = isBangalore ? "/bangalore/services" : "/services";

  const navLinks = [
    { href: "/", label: "Home", isRoute: true },
    { href: servicesHref, label: "Services", isRoute: true },
    { href: "/portfolio", label: "Projects", isRoute: true },
    { href: "/about-us", label: "Our Studio", isRoute: true },
    { href: "/articles", label: "Insights", isRoute: true },
  ];

  return (
    <header
      className={`site-header fixed top-0 left-0 right-0 z-50 border-b border-primary/10 bg-[#FAF8F2]/95 text-primary backdrop-blur-md transition-shadow duration-300 ${
        isScrolled ? "pt-1 pb-2 shadow-sm" : "pt-1 pb-2"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="/" aria-label="EverySpaces home" className="flex shrink-0 items-center">
          <img
            src={imgSrc(everyspacesLogo)}
            alt="EverySpaces Interior Design"
            width={1075}
            height={478}
            fetchPriority="high"
            className="h-16 w-auto object-contain md:h-[72px]"
          />
        </a>
        
        {/* Desktop Navigation - Pill shape like screenshot */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link 
                  key={link.href}
                  href={link.href} 
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    pathname === link.href
                      ? "text-secondary"
                      : "text-primary/75 hover:text-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="rounded-full px-4 py-2 text-sm font-medium text-primary/75 transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                >
                  {link.label}
                </a>
              )
            ))}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          {/* Orange brand circle button */}
          <Link 
            href="/contact" 
            data-open-consultation
            className="hidden xl:flex gap-3 rounded-lg bg-secondary px-5 py-3 items-center justify-center text-sm text-white hover:bg-secondary-hover transition-colors"
            aria-label="Get Quote"
          >
            Let’s talk <ArrowUpRight className="w-4 h-4 text-secondary-foreground" />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-primary" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5 text-primary" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-primary/10 bg-[#FAF8F2] shadow-lg md:hidden">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    pathname === link.href
                      ? "bg-primary/15 text-primary"
                      : "text-primary/75 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="rounded-lg px-4 py-3 text-sm font-medium text-primary/75 transition-colors hover:bg-primary/10 hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            ))}
            <Link href="/contact" className="mt-2 mx-4 btn-orange px-6 py-2.5 rounded-2xl text-sm font-semibold text-secondary-foreground block text-center">
              Get Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
