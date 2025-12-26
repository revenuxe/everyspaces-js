import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Service images
import kitchenImage from "@/assets/service-modular-kitchen.jpg?webp";
import wardrobeImage from "@/assets/service-wardrobe.jpg?webp";
import livingImage from "@/assets/service-living-room.jpg?webp";
import bedroomImage from "@/assets/service-bedroom.jpg?webp";
import tvUnitImage from "@/assets/service-tv-unit.jpg?webp";
import poojaImage from "@/assets/service-pooja-room.jpg?webp";
import villaImage from "@/assets/service-villa.jpg?webp";
import bhk2Image from "@/assets/service-2bhk.jpg?webp";

const allServices = [
  { slug: "modular-kitchen", title: "Modular Kitchen", image: kitchenImage },
  { slug: "bedroom-design", title: "Bedroom Design", image: bedroomImage },
  { slug: "living-room", title: "Living Room", image: livingImage },
  { slug: "wardrobe-design", title: "Wardrobe Design", image: wardrobeImage },
  { slug: "2bhk-interiors", title: "2 BHK Interiors", image: bhk2Image },
  { slug: "3bhk-interiors", title: "3 BHK Interiors", image: villaImage },
  { slug: "villa-interiors", title: "Villa Interiors", image: villaImage },
  { slug: "full-home-design", title: "Full Home Design", image: bhk2Image },
  { slug: "tv-unit", title: "TV Unit", image: tvUnitImage },
  { slug: "pooja-room", title: "Pooja Room", image: poojaImage },
  { slug: "home-office", title: "Home Office", image: bedroomImage },
  { slug: "kids-room", title: "Kids Room", image: wardrobeImage },
  { slug: "dining-room", title: "Dining Room", image: livingImage },
  { slug: "bathroom-design", title: "Bathroom Design", image: kitchenImage },
  { slug: "foyer-entrance", title: "Foyer & Entrance", image: villaImage },
  { slug: "false-ceiling", title: "False Ceiling", image: livingImage },
  { slug: "crockery-unit", title: "Crockery Unit", image: kitchenImage },
  { slug: "study-room", title: "Study Room", image: bedroomImage },
  { slug: "guest-room", title: "Guest Room", image: wardrobeImage },
  { slug: "balcony-design", title: "Balcony Design", image: bhk2Image },
];

interface RelatedServicesProps {
  currentSlug: string;
}

const RelatedServices = ({ currentSlug }: RelatedServicesProps) => {
  // Get 4 related services, excluding the current one
  const relatedServices = allServices
    .filter((service) => service.slug !== currentSlug)
    .slice(0, 4);

  return (
    <section className="py-12 md:py-16">
      <div className="container px-4">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl md:text-3xl text-primary mb-2">
            Explore More Services
          </h2>
          <p className="text-muted-foreground font-body">
            Complete your home with our other interior design services
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedServices.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
            >
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/60 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 pr-14 flex items-end justify-between">
                <h3 className="font-display text-sm md:text-base text-primary-foreground leading-tight">
                  {service.title}
                </h3>
              </div>
              <div className="absolute bottom-4 right-4 w-9 h-9 bg-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <ArrowRight className="w-4 h-4 text-secondary-foreground" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-secondary font-medium hover:underline"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
