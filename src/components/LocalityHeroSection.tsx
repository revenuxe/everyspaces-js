import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface LocalityHeroSectionProps { localityName: string; projectCount: string; heroImage: string; }

export default function LocalityHeroSection({ localityName, heroImage }: LocalityHeroSectionProps) {
  return <section className="locality-hero relative isolate overflow-hidden bg-primary text-primary-foreground"><Image src={heroImage} alt={`Interior design in ${localityName}, Bangalore`} fill priority sizes="100vw" className="-z-20 object-cover object-center" /><div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/85 to-primary/15" /><div className="container flex min-h-[570px] items-center px-4 py-14 md:min-h-[620px] md:px-8"><div className="max-w-5xl"><h1 className="hero-display text-[3.15rem] leading-[.94] text-primary-foreground sm:text-6xl md:text-[4.25rem]"><span className="block md:whitespace-nowrap">Best Interior Designer</span><span className="block md:whitespace-nowrap">in {localityName}, Bangalore</span></h1><p className="mt-7 max-w-xl text-base leading-8 text-primary-foreground/75 md:text-lg">Thoughtful home interiors, transparent pricing, and an end-to-end process shaped around the way you live.</p><div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4"><Link href="/contact" className="group inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-medium text-primary transition-all hover:-translate-y-0.5">Start your project <ArrowUpRight className="h-4 w-4" /></Link><Link href="/portfolio" className="group inline-flex items-center gap-3 text-sm font-medium text-white">Explore our work <ArrowRight className="h-4 w-4" /></Link></div></div></div></section>;
}
