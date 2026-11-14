import ServiceCard from "@/components/ServiceCard";
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
    <div className="service-detail-card-slot">
      <ServiceCard
        title={title}
        description={description}
        image={image}
        href={href}
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
      />
    </div>
  );
}
