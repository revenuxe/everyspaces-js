import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { imgSrc } from "@/lib/utils";

const serviceLinks: Record<string, string> = {
  "Spacious Living Room": "/services/living-room",
  "Living Room": "/services/living-room",
  "Master Bedroom Suite": "/services/bedroom-design",
  "Bedroom Interiors": "/services/bedroom-design",
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
    <Link href={href} className="group relative block aspect-[4/3] overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
      <img src={imgSrc(image)} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-foreground/70 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/75 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 pr-14">
        <h3 className="font-display text-base text-primary-foreground md:text-lg">{title}</h3>
        <p className="mt-1 line-clamp-2 text-xs text-primary-foreground/90 md:text-sm">{description}</p>
      </div>
      <span className="absolute bottom-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true">
        <ArrowUpRight className="h-4 w-4" />
      </span>
      <span className="sr-only">Explore {title}</span>
    </Link>
  );
}
