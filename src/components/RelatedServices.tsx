"use client";

import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

// Service images
import kitchenImage from "@/assets/service-modular-kitchen.jpg";
import wardrobeImage from "@/assets/service-wardrobe.jpg";
import livingImage from "@/assets/service-living-room.jpg";
import bedroomImage from "@/assets/service-bedroom.jpg";
import tvUnitImage from "@/assets/service-tv-unit.jpg";
import poojaImage from "@/assets/service-pooja-room.jpg";
import villaImage from "@/assets/service-villa.jpg";
import bhk2Image from "@/assets/service-2bhk.jpg";


const allServices = [
  { slug: "modular-kitchen", title: "Modular Kitchen", image: kitchenImage, description: "Smart layouts, thoughtful storage, and room to create." },
  { slug: "bedroom-design", title: "Bedroom Design", image: bedroomImage, description: "Restful spaces designed around your daily rituals." },
  { slug: "living-room", title: "Living Room", image: livingImage, description: "Comfortable gathering spaces with a personal touch." },
  { slug: "wardrobe-design", title: "Wardrobe Design", image: wardrobeImage, description: "Beautifully organized storage, tailored to your space." },
  { slug: "2bhk-interiors", title: "2 BHK Interiors", image: bhk2Image, description: "Thoughtful interiors that make every corner count." },
  { slug: "3bhk-interiors", title: "3 BHK Interiors", image: villaImage, description: "Room to live beautifully, with a cohesive design." },
  { slug: "villa-interiors", title: "Villa Interiors", image: villaImage, description: "Distinctive interiors for generous, individual homes." },
  { slug: "full-home-design", title: "Full Home Design", image: bhk2Image, description: "A complete design story, from entrance to bedroom." },
  { slug: "tv-unit", title: "TV Unit", image: tvUnitImage, description: "Clean lines and clever storage for entertainment." },
  { slug: "pooja-room", title: "Pooja Room", image: poojaImage, description: "A peaceful space for your everyday rituals." },
  { slug: "home-office", title: "Home Office", image: bedroomImage, description: "A focused workspace that feels at home." },
  { slug: "kids-room", title: "Kids Room", image: wardrobeImage, description: "Playful spaces with room to learn and grow." },
  { slug: "dining-room", title: "Dining Room", image: livingImage, description: "Welcoming settings for shared meals and moments." },
  { slug: "bathroom-design", title: "Bathroom Design", image: kitchenImage, description: "Calm finishes and practical everyday comfort." },
  { slug: "foyer-entrance", title: "Foyer & Entrance", image: villaImage, description: "A thoughtful welcome, with storage built in." },
  { slug: "false-ceiling", title: "False Ceiling", image: livingImage, description: "Layered details and lighting to frame your rooms." },
  { slug: "crockery-unit", title: "Crockery Unit", image: kitchenImage, description: "Elegant storage for the pieces you love." },
  { slug: "study-room", title: "Study Room", image: bedroomImage, description: "Comfortable, organized spaces for focused learning." },
  { slug: "guest-room", title: "Guest Room", image: wardrobeImage, description: "A warm welcome for everyone who stays." },
  { slug: "balcony-design", title: "Balcony Design", image: bhk2Image, description: "Fresh ideas for your own outdoor retreat." },
];

interface RelatedServicesProps {
  currentSlug: string;
}

const RelatedServices = ({ currentSlug }: RelatedServicesProps) => {
  const pathname = usePathname() ?? "";
  const isBengaluru = pathname.startsWith("/bangalore");
  const servicesBasePath = isBengaluru ? "/bangalore/services" : "/services";

  // Get 4 related services, excluding the current one
  const relatedServices = allServices
    .filter((service) => service.slug !== currentSlug)
    .slice(0, 4);

  return (
    <section className="related-services" aria-labelledby="related-services-heading">
      <div className="related-services__inner">
        <div className="related-services__header">
          <div>
            <p className="related-services__eyebrow">Thoughtfully designed, room by room</p>
            <h2 id="related-services-heading">More spaces. More possibilities.</h2>
            <p className="related-services__intro">Bring the rest of your home together with interiors made for the way you live.</p>
          </div>
          <Link href={servicesBasePath} className="related-services__all">
            View all services <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
        <div className="related-services__grid">
          {relatedServices.map((service) => (
            <ServiceCard key={service.slug} href={servicesBasePath + "/" + service.slug} title={service.title} description={service.description} image={service.image} sizes="(max-width: 1023px) 50vw, 25vw" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
