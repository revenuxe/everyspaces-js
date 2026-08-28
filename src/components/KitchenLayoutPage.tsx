"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import PageHero from "@/components/PageHero";
import RelatedServices from "@/components/RelatedServices";
import { getKitchenLayout } from "@/data/kitchen-layouts";

export default function KitchenLayoutPage({ slug }: { slug: string }) {
  const layout = getKitchenLayout(slug);
  if (!layout) return null;

  return <div className="min-h-screen bg-background"><Header /><main className="pb-24"><PageHero eyebrow="Modular kitchens · EverySpaces Bangalore" title={layout.title} description={layout.description} /><section className="py-14 md:py-20"><div className="container grid gap-10 px-4 md:grid-cols-[1.1fr_.9fr] md:px-8"><div><p className="text-xs font-semibold uppercase tracking-[.18em] text-secondary">Designed around your home</p><h2 className="mt-3 text-3xl text-primary md:text-5xl">Built for {layout.idealFor}.</h2><p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">Every layout is measured around your room, appliances, workflow and storage needs. Our designers help you choose the materials, hardware and configuration that make everyday use effortless.</p></div><div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-soft"><h2 className="!mt-0 !text-xl font-semibold text-primary">What your design can include</h2><ul className="mt-5 space-y-4">{layout.features.map((feature) => <li key={feature} className="flex gap-3 text-sm text-primary/80"><Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />{feature}</li>)}</ul><Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline">Plan this kitchen <ArrowRight className="h-4 w-4" /></Link></div></div></section><RelatedServices currentSlug="modular-kitchen" /></main><Footer /><BottomNav /></div>;
}
