import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight, PhoneCall } from "lucide-react";
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
  eyebrow,
  image = heroImage,
  imageAlt = "EverySpaces interior design",
  primaryLabel = "Book a Free Consultation",
  primaryHref = "/contact",
  secondaryLabel = "Our Work",
  secondaryHref = "/portfolio",
  minimal = false,
}: PageHeroProps) {
  const heroHeight = minimal ? "min-h-[260px] md:min-h-[320px]" : "md:min-h-[620px]";
  const contentLayout = minimal
    ? "min-h-[260px] items-center px-5 py-20 md:min-h-[320px] md:px-8"
    : "items-start px-5 pb-12 pt-20 md:min-h-[620px] md:items-center md:px-8 md:py-24";

  return (
    <section data-quote-form={minimal ? "disabled" : "enabled"} className={`page-hero relative isolate overflow-hidden bg-primary text-primary-foreground ${heroHeight}`}>
      <Image src={image} alt={imageAlt} fill priority className="z-0 object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(90deg, rgba(7,31,43,.88) 0%, rgba(7,31,43,.76) 55%, rgba(7,31,43,.54) 100%)" }} />
      <div className="absolute inset-0 z-10" style={{ backgroundColor: "rgba(7,31,43,.38)" }} />
      <div className={`container relative z-20 flex ${contentLayout}`}>
        <div className="max-w-2xl">
          {!minimal && eyebrow && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/85">{eyebrow}</p>}
          <h1 className="hero-display max-w-[650px] text-[2.8rem] leading-[.98] text-primary-foreground sm:text-5xl md:text-[3.6rem]">{title}</h1>
          {!minimal && <><p className="mt-6 max-w-xl text-base leading-7 text-primary-foreground/90 md:text-lg">{description}</p><div className="hero-cta-row mt-8"><Link href={primaryHref} data-open-consultation className="hero-cta-primary group inline-flex items-center gap-3 whitespace-nowrap bg-secondary py-4 text-sm font-semibold text-secondary-foreground shadow-[0_10px_22px_-12px_rgb(209_101_66_/_72%)] transition-all hover:-translate-y-0.5">{primaryLabel} <ArrowUpRight className="h-4 w-4" /></Link><a href="tel:+919886579923" className="hero-cta-secondary group inline-flex items-center gap-2 whitespace-nowrap border border-white/20 bg-black/35 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/50"><PhoneCall className="h-4 w-4" /> Call Now</a></div></>}
        </div>
      </div>
    </section>
  );
}
