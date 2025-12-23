import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import intorzaLogo from "@/assets/intorza-logo-new.webp";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pb-24 md:pb-8">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src={intorzaLogo}
              alt="Intorza"
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/70 text-sm max-w-sm mb-6 font-body">
              Transforming Bengaluru homes with contemporary design excellence. 
              Every space tells your story.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70 font-body">
              <li><a href="#" className="hover:text-secondary transition-colors">Modular Kitchens</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Bedroom Interiors</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Living Spaces</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Home Office</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70 font-body">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary" />
                <span>HBR Layout, Bangalore 560045</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                <a href="tel:+919886579923" className="hover:text-secondary transition-colors">+91 9886579923</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary" />
                <a href="mailto:hello@intorza.com" className="hover:text-secondary transition-colors">hello@intorza.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50 font-body">
          <p>© 2024 Intorza Interior Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
