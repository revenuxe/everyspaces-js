import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import intorzaLogo from "@/assets/intorza-logo-new.webp";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pb-24 md:pb-8">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="https://intorza.in/" aria-label="Intorza Home - Best Interior Designers in Bangalore">
              <img
                src={intorzaLogo}
                alt="Intorza Interior Design Bangalore"
                width={197}
                height={40}
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
            </a>
            <p className="text-primary-foreground/70 text-sm max-w-sm mb-6 font-body">
              Transforming Bengaluru homes with contemporary design excellence. 
              Every space tells your story.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/intorza?igsh=MXBudjUyeGxxc2xseQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors" 
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a 
                href="https://www.linkedin.com/company/intorza/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors" 
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70 font-body">
              <li><Link to="/services/modular-kitchen" className="hover:text-secondary transition-colors">Modular Kitchens</Link></li>
              <li><Link to="/services/bedroom-design" className="hover:text-secondary transition-colors">Bedroom Interiors</Link></li>
              <li><Link to="/services/living-room" className="hover:text-secondary transition-colors">Living Room</Link></li>
              <li><Link to="/services/wardrobe-design" className="hover:text-secondary transition-colors">Wardrobes</Link></li>
              <li><Link to="/services/tv-unit" className="hover:text-secondary transition-colors">TV Units</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors font-medium">View All Services →</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70 font-body">
              <li><a href="https://intorza.in/" className="hover:text-secondary transition-colors">Home</a></li>
              <li><Link to="/portfolio" className="hover:text-secondary transition-colors">Portfolio</Link></li>
              <li><Link to="/price-calculator" className="hover:text-secondary transition-colors">Price Calculator</Link></li>
              <li><Link to="/bangalore" className="hover:text-secondary transition-colors">Bangalore</Link></li>
              <li><Link to="/articles" className="hover:text-secondary transition-colors">Articles</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><Link to="/terms" className="hover:text-secondary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70 font-body">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span>HBR Layout, Bangalore 560045</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="tel:+919886579923" className="hover:text-secondary transition-colors">+91 9886579923</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="mailto:intorza.com@gmail.com" className="hover:text-secondary transition-colors">intorza.com@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50 font-body">
          <p>© {new Date().getFullYear()} Intorza Interior Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
