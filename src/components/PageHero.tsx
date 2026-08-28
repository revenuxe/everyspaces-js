import Image from "next/image";
import heroImage from "@/assets/hero-interior.jpg";

type PageHeroProps = { title: string; description: string; eyebrow?: string };

export default function PageHero({ title, description, eyebrow }: PageHeroProps) {
  return <section className="page-hero relative isolate min-h-[540px] overflow-hidden bg-primary text-primary-foreground md:min-h-[640px]"><Image src={heroImage} alt="EverySpaces interior design" fill priority className="-z-20 object-cover object-right" sizes="100vw" /><div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0d3b4f]/75 via-[#0d3b4f]/55 to-[#0d3b4f]/20" /><div className="absolute inset-0 -z-10 bg-[#0d3b4f]/25" /><div className="container flex min-h-[540px] items-center px-4 pb-16 pt-36 md:min-h-[640px] md:px-8 md:py-24"><div className="max-w-[48rem]"><h1 className="hero-display text-5xl leading-[.94] text-primary-foreground md:text-7xl">{title}</h1><p className="mt-6 max-w-xl text-base leading-7 text-primary-foreground/80 md:text-lg">{description}</p></div></div></section>;
}
