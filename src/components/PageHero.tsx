import Image from "next/image";
import heroImage from "@/assets/hero-interior.jpg";

type PageHeroProps = { title: string; description: string; eyebrow?: string };

export default function PageHero({ title, description, eyebrow }: PageHeroProps) {
  return <section className="page-hero relative isolate overflow-hidden bg-primary text-primary-foreground"><Image src={heroImage} alt="EverySpaces interior design" fill priority className="-z-20 object-cover object-right opacity-55" sizes="100vw" /><div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/90 to-primary/25" /><div className="container px-4 py-16 md:px-8 md:py-20"><div className="max-w-3xl"><h1 className="hero-display text-5xl leading-[.94] text-primary-foreground md:text-7xl">{title}</h1><p className="mt-6 max-w-xl text-base leading-7 text-primary-foreground/75 md:text-lg">{description}</p></div></div></section>;
}
