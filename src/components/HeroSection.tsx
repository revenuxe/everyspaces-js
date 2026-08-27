"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-[#0d3b4f] pt-[76px] text-white">
    <div className="absolute inset-y-0 right-0 w-full md:w-[58%]"><Image src={heroImage} alt="Contemporary home interior by EverySpaces" fill priority sizes="(max-width: 768px) 100vw, 58vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-[#0d3b4f] via-[#0d3b4f]/30 to-transparent" /><div className="absolute inset-0 bg-[#0d3b4f]/20" /></div>
    <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-[#b9935a]/15 blur-[110px]" />
    <div className="relative mx-auto grid min-h-[555px] max-w-7xl items-center px-5 py-14 md:min-h-[590px] md:grid-cols-[1.08fr_.92fr] md:px-10"><div className="max-w-2xl">
      <h1 className="hero-display text-[3.35rem] leading-[.94] sm:text-7xl md:text-[5.55rem]">Best Interior<br />Designer in<br />Bangalore</h1>
      <p className="mt-7 max-w-lg text-base leading-8 text-white/70 md:text-lg">Thoughtful home interiors, transparent pricing, and an end-to-end process shaped around the way you live.</p>
      <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4"><Link href="/contact" className="group inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-medium text-[#0d3b4f] transition-all duration-300 hover:-translate-y-0.5">Start your project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link><Link href="/portfolio" className="group inline-flex items-center gap-3 text-sm font-medium text-white">Explore our work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></div>
    </div><div className="hidden justify-self-end self-end pb-4 md:block"><div className="w-56 rounded-2xl border border-white/20 bg-[#0d3b4f]/75 p-5 backdrop-blur-md"><p className="text-[10px] uppercase tracking-[.18em] text-[#d5b77c]">Our promise</p><p className="mt-3 text-lg font-light leading-snug">Transparency at every turn. Detail in every finish.</p><div className="mt-5 border-t border-white/15 pt-3 text-xs text-white/60">10 year warranty · End-to-end execution</div></div></div></div>
  </section>
);

export default HeroSection;
