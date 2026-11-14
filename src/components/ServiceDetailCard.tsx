import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { imgSrc } from "@/lib/utils";

const serviceLinks: Record<string, string> = {
  "Spacious Living Room": "/services/living-room",
  "Living Room": "/services/living-room",
  "Master Bedroom Suite": "/services/bedroom-design",
  "Bedroom Interiors": "/services/bedroom-design",
  "All Bedrooms": "/services/bedroom-design",
  "Living & Dining": "/services/living-room",
  "Wardrobes & Storage": "/services/wardrobe-design",
  "Modular Kitchen": "/services/modular-kitchen",
  "Kids & Guest Rooms": "/services/kids-room",
  "Kids Room": "/services/kids-room",
  "Home Theatre": "/services/tv-unit",
  "Study & Office": "/services/home-office",
  "Study Room": "/services/study-room",
  "Wardrobe Design": "/services/wardrobe-design",
  "Dining Space": "/services/dining-room",
  "Bathroom Design": "/services/bathroom-design",
  "Pooja Room": "/services/pooja-room",
  "Foyer & Entrance": "/services/foyer-entrance",
  "TV Unit Design": "/services/tv-unit",
  "False Ceiling": "/services/false-ceiling",
  "Crockery Unit": "/services/crockery-unit",
  "Guest Room": "/services/guest-room",
  "Balcony Design": "/services/balcony-design",
};

type ServiceDetailCardProps = {
  title: string;
  description: string;
  image: Parameters<typeof imgSrc>[0];
  href?: string;
};

export default function ServiceDetailCard({ title, description, image, href: explicitHref }: ServiceDetailCardProps) {
  const href = explicitHref ?? serviceLinks[title] ?? "/services";

  return (
    <Link href={href} className="group relative block h-[190px] overflow-hidden rounded-[10px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary sm:h-[220px] lg:h-[250px]">
      <img src={imgSrc(image)} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" />
      <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(to top, #003B29 0%, rgba(0,59,41,.92) 16%, rgba(0,59,41,.55) 38%, rgba(0,59,41,0) 72%)" }} />
      <div className="absolute bottom-0 left-0 right-0 p-4 pr-11 md:p-5 md:pr-12">
        <h3 className="font-display text-base font-medium leading-snug text-white md:text-xl">{title}</h3>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-white/85 md:text-sm">{description}</p>
      </div>
      <span className="absolute bottom-5 right-4 text-white transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5 md:right-5" aria-hidden="true">
        <ArrowUpRight className="h-5 w-5" />
      </span>
      <span className="sr-only">Explore {title}</span>
    </Link>
  );
}
