import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import fullHome from "@/assets/hero-interior.jpg";
import apartment from "@/assets/service-2bhk.jpg";
import living from "@/assets/service-living.jpg";
import villa from "@/assets/service-villa.jpg";
import kitchen from "@/assets/service-modular-kitchen.jpg";
import wardrobe from "@/assets/service-wardrobe.jpg";
import bedroom from "@/assets/service-bedroom.jpg";
import tvUnit from "@/assets/service-tv-unit.jpg";
import pooja from "@/assets/service-pooja-room.jpg";

const homeTypes = [
  { name: "Full Home Interiors", image: fullHome, href: "/services/full-home-design", description: "A complete design story, from entrance to bedroom." },
  { name: "2 BHK Interiors", image: apartment, href: "/services/2bhk-interiors", description: "Thoughtful interiors that make every corner count." },
  { name: "3 BHK Interiors", image: living, href: "/services/3bhk-interiors", description: "Room to live beautifully, with a cohesive design." },
  { name: "Villa Interiors", image: villa, href: "/services/villa-interiors", description: "Distinctive interiors for generous, individual homes." },
];
const rooms = [
  { name: "Modular Kitchens", image: kitchen, href: "/services/modular-kitchen", description: "Smart layouts, thoughtful storage, and room to create." },
  { name: "Wardrobes", image: wardrobe, href: "/services/wardrobe-design", description: "Beautifully organized storage, tailored to your space." },
  { name: "Living Rooms", image: living, href: "/services/living-room", description: "Comfortable gathering spaces with a personal touch." },
  { name: "Bedrooms", image: bedroom, href: "/services/bedroom-design", description: "Restful spaces designed around your daily rituals." },
  { name: "TV Units", image: tvUnit, href: "/services/tv-unit", description: "Clean lines and clever storage for entertainment." },
  { name: "Pooja Rooms", image: pooja, href: "/services/pooja-room", description: "A peaceful space for your everyday rituals." },
];

export default function StudioServices({ locationLabel }: { locationLabel?: string } = {}) {
  return <>
    <section id="services" className="studio-services bg-[#F0EDE3]">
      <div className="container px-5 md:px-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div><h2 className="studio-heading text-primary">{locationLabel ? `Interiors for your ${locationLabel} home.` : "Interiors for every home."}</h2><p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground md:text-base">Explore complete home design, tailored to your space and the way you live.</p></div>
          <Link href="/services" className="studio-text-link">All services <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <div className="home-types-grid grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {homeTypes.map((home) => <ServiceCard key={home.href} href={home.href} title={home.name} description={home.description} image={home.image} actionLabel="Explore" sizes="(min-width: 1024px) 25vw, 50vw" />)}
        </div>
      </div>
    </section>
    <section id="room-services" className="bg-background">
      <div className="container px-5 md:px-8">
        <div className="mb-6"><h2 className="studio-heading text-primary">Find your space.</h2><p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">Discover design ideas and services, room by room.</p></div>
        <div className="room-services-grid grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {rooms.map((room) => <ServiceCard key={room.href} href={room.href} title={room.name} description={room.description} image={room.image} sizes="(min-width: 1024px) 33vw, 50vw" />)}
        </div>
        <Link href="/services" className="studio-text-link mt-6">View all room services <ArrowUpRight className="h-4 w-4" /></Link>
      </div>
    </section>
  </>;
}
