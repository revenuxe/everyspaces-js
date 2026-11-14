import WhatsAppIcon from "@/components/WhatsAppIcon";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";

type PageHeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
  image?: StaticImageData;
  imageAlt?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  minimal?: boolean;
};

export default function PageHero({
  title,
  description,

  image = heroImage,
  imageAlt = "EverySpaces interior design",
  primaryLabel = "Book a Free Consultation",
  primaryHref = "/contact",
  secondaryLabel = "Our Work",
  secondaryHref = "/portfolio",
  minimal = false,
}: PageHeroProps) {
  const heroHeight = minimal ? "min-h-[260px] md:min-h-[320px]" : "md:min-h-[500px]";
  const contentLayout = minimal
    ? "min-h-[260px] items-center px-5 py-20 md:min-h-[320px] md:px-8"
    : "items-start px-5 pb-10 pt-28 md:min-h-[500px] md:items-center md:px-8 md:py-16";

  return (
    <section data-quote-form={minimal ? "disabled" : "enabled"} className={`page-hero relative isolate overflow-hidden bg-primary text-primary-foreground ${heroHeight}`}>
      <Image src={image} alt={imageAlt} fill priority className="z-0 object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(90deg, rgba(0,39,27,.88) 0%, rgba(0,39,27,.65) 55%, rgba(0,39,27,.22) 100%)" }} />
      <div className={`container relative z-20 flex ${contentLayout}`}>
        <div className="max-w-2xl">
          <h1 className="hero-display max-w-[650px] text-[2.8rem] leading-[.98] text-primary-foreground sm:text-5xl md:text-[3.6rem]">{title}</h1>
          {!minimal && <><p className="mt-6 max-w-xl text-base leading-7 text-primary-foreground/90 md:text-lg">{description}</p><div className="hero-cta-row mt-8"><Link href={primaryHref} data-open-consultation className="hero-cta-primary group inline-flex items-center gap-3 bg-secondary py-4 text-sm font-semibold text-secondary-foreground shadow-[0_10px_22px_-12px_rgb(194_74_8_/_72%)] transition-all hover:-translate-y-0.5"><WhatsAppIcon />{primaryLabel}</Link><a href="tel:+919886579923" className="hero-cta-secondary group inline-flex items-center gap-2 whitespace-nowrap border border-white/20 bg-black/35 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/50"><PhoneCall className="h-4 w-4" /> Call Now</a></div></>}
        </div>
      </div>
    </section>
  );
}
