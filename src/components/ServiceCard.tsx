import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ title, description, image, href, sizes }: {
  title: string;
  description: string;
  image: StaticImageData | string;
  href: string;
  sizes: string;
}) {
  return (
    <Link href={href} className="related-service-card">
      <div className="related-service-card__image">
        <Image src={image} alt={title} fill sizes={sizes} />
        <div aria-hidden="true" className="related-service-card__image-overlay" />
      </div>
      <div className="related-service-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="related-service-card__action">
          <span>Explore service</span>
          <span className="related-service-card__arrow"><ArrowUpRight aria-hidden="true" className="h-5 w-5" /></span>
        </div>
      </div>
    </Link>
  );
}
