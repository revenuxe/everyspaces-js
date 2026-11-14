import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
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
  { name: "Full Home Interiors", image: fullHome, href: "/services/full-home-design" },
  { name: "2 BHK Interiors", image: apartment, href: "/services/2bhk-interiors" },
  { name: "3 BHK Interiors", image: living, href: "/services/3bhk-interiors" },
  { name: "Villa Interiors", image: villa, href: "/services/villa-interiors" },
];
const rooms = [
  { name: "Modular Kitchens", image: kitchen, href: "/services/modular-kitchen" },
  { name: "Wardrobes", image: wardrobe, href: "/services/wardrobe-design" },
  { name: "Living Rooms", image: living, href: "/services/living-room" },
  { name: "Bedrooms", image: bedroom, href: "/services/bedroom-design" },
  { name: "TV Units", image: tvUnit, href: "/services/tv-unit" },
  { name: "Pooja Rooms", image: pooja, href: "/services/pooja-room" },
];

export default function StudioServices({ locationLabel }: { locationLabel?: string } = {}) {
  return <>
    <section id="services" className="studio-services bg-[#F0EDE3]">
      <div className="container px-5 md:px-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div><h2 className="studio-heading text-primary">{locationLabel ? `Interiors for your ${locationLabel} home.` : "Interiors for every home."}</h2><p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground md:text-base">Explore complete home design, tailored to your space and the way you live.</p></div>
          <Link href="/services" className="studio-text-link">All services <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeTypes.map((home) => <Link key={home.href} href={home.href} className="group block">
            <div className="relative h-[180px] overflow-hidden rounded-[10px] bg-muted md:h-[220px]">
              <Image src={home.image} alt={`${home.name} design inspiration`} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" />
              <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(to top, #003B29 0%, rgba(0,59,41,.96) 22%, rgba(0,59,41,.7) 42%, rgba(0,59,41,0) 75%)" }} />
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-5 text-xl font-medium text-white">{home.name}<ArrowUpRight className="h-5 w-5 shrink-0" /></span>
            </div>
          </Link>)}
        </div>
      </div>
    </section>
    <section id="room-services" className="bg-background">
      <div className="container px-5 md:px-8">
        <div className="mb-6"><h2 className="studio-heading text-primary">Find your space.</h2><p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">Discover design ideas and services, room by room.</p></div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {rooms.map((room) => <Link key={room.href} href={room.href} className="group relative block aspect-[4/3] overflow-hidden rounded-[10px] bg-muted">
            <Image src={room.image} alt={`${room.name} interior design`} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" />
            <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(to top, #003B29 0%, rgba(0,59,41,.94) 18%, rgba(0,59,41,.65) 36%, rgba(0,59,41,0) 68%)" }} />
            <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-3 text-sm font-medium text-white sm:p-5 sm:text-lg">{room.name}<ArrowUpRight className="h-4 w-4 shrink-0" /></span>
          </Link>)}
        </div>
        <Link href="/services" className="studio-text-link mt-6">View all room services <ArrowUpRight className="h-4 w-4" /></Link>
      </div>
    </section>
  </>;
}
