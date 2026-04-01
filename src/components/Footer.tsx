import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import everyspacesLogo from "@/assets/everyspaces-logo.webp";
import { imgSrc } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pb-24 md:pb-8">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" aria-label="EverySpaces Home - Best Interior Designers in Hyderabad">
              <img
                src={imgSrc(everyspacesLogo)}
                alt="EverySpaces Interior Design Hyderabad"
                width={197}
                height={40}
                className="h-10 w-auto mb-4"
              />
            </a>
            <p className="text-primary-foreground/70 text-sm max-w-sm mb-6 font-body">
              For the Way You Work. Transforming Hyderabad homes with contemporary design excellence.
              Every space tells your story.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/everyspaces" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors" 
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a 
                href="https://www.linkedin.com/company/everyspaces/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors" 
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* All Services */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-lg mb-4">Our Services</h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-primary-foreground/70 font-body">
              <li><a href="/services/modular-kitchen" className="hover:text-secondary transition-colors">Modular Kitchens</a></li>
              <li><a href="/services/bedroom-design" className="hover:text-secondary transition-colors">Bedroom Interiors</a></li>
              <li><a href="/services/living-room" className="hover:text-secondary transition-colors">Living Room</a></li>
              <li><a href="/services/wardrobe-design" className="hover:text-secondary transition-colors">Wardrobes</a></li>
              <li><a href="/services/tv-unit" className="hover:text-secondary transition-colors">TV Units</a></li>
              <li><a href="/services/pooja-room" className="hover:text-secondary transition-colors">Pooja Room</a></li>
              <li><a href="/services/2bhk-interiors" className="hover:text-secondary transition-colors">2 BHK Interiors</a></li>
              <li><a href="/services/3bhk-interiors" className="hover:text-secondary transition-colors">3 BHK Interiors</a></li>
              <li><a href="/services/villa-interiors" className="hover:text-secondary transition-colors">Villa Interiors</a></li>
              <li><a href="/services/full-home-design" className="hover:text-secondary transition-colors">Full Home Design</a></li>
              <li><a href="/services/home-office" className="hover:text-secondary transition-colors">Home Office</a></li>
              <li><a href="/services/kids-room" className="hover:text-secondary transition-colors">Kids Room</a></li>
              <li><a href="/services/dining-room" className="hover:text-secondary transition-colors">Dining Room</a></li>
              <li><a href="/services/bathroom-design" className="hover:text-secondary transition-colors">Bathroom Design</a></li>
              <li><a href="/services/foyer-entrance" className="hover:text-secondary transition-colors">Foyer &amp; Entrance</a></li>
              <li><a href="/services/false-ceiling" className="hover:text-secondary transition-colors">False Ceiling</a></li>
              <li><a href="/services/crockery-unit" className="hover:text-secondary transition-colors">Crockery Unit</a></li>
              <li><a href="/services/study-room" className="hover:text-secondary transition-colors">Study Room</a></li>
              <li><a href="/services/guest-room" className="hover:text-secondary transition-colors">Guest Room</a></li>
              <li><a href="/services/balcony-design" className="hover:text-secondary transition-colors">Balcony Design</a></li>
              <li><a href="/services" className="hover:text-secondary transition-colors font-medium">View All Services →</a></li>
            </ul>
          </div>

          {/* Quick Links + Contact */}
          <div>
            <h4 className="font-display text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70 font-body">
              <li><a href="/" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="/portfolio" className="hover:text-secondary transition-colors">Portfolio</a></li>
              <li><a href="/price-calculator" className="hover:text-secondary transition-colors">Price Calculator</a></li>
              <li><a href="/hyderabad" className="hover:text-secondary transition-colors">Hyderabad</a></li>
              <li><a href="/articles" className="hover:text-secondary transition-colors">Articles</a></li>
              <li><a href="/contact" className="hover:text-secondary transition-colors">Contact Us</a></li>
              <li><a href="/orza-ai" className="hover:text-secondary transition-colors">Orza AI</a></li>
              <li><a href="/terms" className="hover:text-secondary transition-colors">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
            </ul>

            <h4 className="font-display text-lg mb-4 mt-8">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70 font-body">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span>Begumpet, Hyderabad 500016</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="tel:+919886579923" className="hover:text-secondary transition-colors">+91 9886579923</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="mailto:everyspaces.com@gmail.com" className="hover:text-secondary transition-colors">everyspaces.com@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* All Localities */}
          <div>
            <h4 className="font-display text-lg mb-4">Hyderabad Localities</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70 font-body">
              <li><a href="/hyderabad/jubilee-hills" className="hover:text-secondary transition-colors">Jubilee Hills</a></li>
              <li><a href="/hyderabad/gachibowli" className="hover:text-secondary transition-colors">Gachibowli</a></li>
              <li><a href="/hyderabad/kondapur" className="hover:text-secondary transition-colors">Kondapur</a></li>
              <li><a href="/hyderabad/madhapur" className="hover:text-secondary transition-colors">Madhapur</a></li>
              <li><a href="/hyderabad/himayatnagar" className="hover:text-secondary transition-colors">Himayatnagar</a></li>
              <li><a href="/hyderabad/nallagandla" className="hover:text-secondary transition-colors">Nallagandla</a></li>
              <li><a href="/hyderabad/ameerpet" className="hover:text-secondary transition-colors">Ameerpet</a></li>
              <li><a href="/hyderabad/hitec-city" className="hover:text-secondary transition-colors">HITEC City</a></li>
              <li><a href="/hyderabad/nanakramguda" className="hover:text-secondary transition-colors">Nanakramguda</a></li>
              <li><a href="/hyderabad/narsingi" className="hover:text-secondary transition-colors">Narsingi</a></li>
              <li><a href="/hyderabad/financial-district" className="hover:text-secondary transition-colors">Financial District</a></li>
              <li><a href="/hyderabad/kokapet" className="hover:text-secondary transition-colors">Kokapet</a></li>
              <li><a href="/hyderabad/kompally" className="hover:text-secondary transition-colors">Kompally</a></li>
              <li><a href="/hyderabad/secunderabad" className="hover:text-secondary transition-colors">Secunderabad</a></li>
              <li><a href="/hyderabad/miyapur" className="hover:text-secondary transition-colors">Miyapur</a></li>
              <li><a href="/hyderabad/abids" className="hover:text-secondary transition-colors">Abids</a></li>
              <li><a href="/hyderabad/uppal" className="hover:text-secondary transition-colors">Uppal</a></li>
              <li><a href="/hyderabad/kukatpally" className="hover:text-secondary transition-colors">Kukatpally</a></li>
              <li><a href="/hyderabad/banjara-hills" className="hover:text-secondary transition-colors">Banjara Hills</a></li>
              <li><a href="/hyderabad/manikonda" className="hover:text-secondary transition-colors">Manikonda</a></li>
              <li><a href="/hyderabad/begumpet" className="hover:text-secondary transition-colors">Begumpet</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50 font-body">
          <p>Â© {new Date().getFullYear()} EverySpaces Interior Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

