"use client";

import { ArrowRight, MapPin } from "lucide-react";

const bangaloreLocalities = [
  { slug: "indiranagar", name: "Indiranagar" }, { slug: "whitefield", name: "Whitefield" },
  { slug: "hsr-layout", name: "HSR Layout" }, { slug: "koramangala", name: "Koramangala" },
  { slug: "sarjapur-road", name: "Sarjapur Road" }, { slug: "jayanagar", name: "Jayanagar" },
  { slug: "jp-nagar", name: "JP Nagar" }, { slug: "bellandur", name: "Bellandur" },
];

export default function RelatedLocalities({ currentSlug }: { currentSlug: string }) {
  const related = bangaloreLocalities.filter((area) => area.slug !== currentSlug).slice(0, 6);
  return <section className="py-12 md:py-16 bg-muted/30"><div className="container px-4"><div className="mb-8 text-center"><h2 className="font-display text-2xl md:text-3xl text-primary mb-2">We Also Serve Nearby Areas</h2><p className="text-muted-foreground font-body">Explore interior design services across Bangalore.</p></div><div className="grid grid-cols-2 md:grid-cols-3 gap-4">{related.map((area) => <a key={area.slug} href={`/bangalore/${area.slug}`} className="group flex items-center gap-3 p-4 bg-card rounded-2xl border border-border/50 hover:border-secondary/50 hover:shadow-soft transition-all"><div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center"><MapPin className="w-5 h-5 text-secondary" /></div><div className="flex-1"><h3 className="font-display text-sm md:text-base text-primary">{area.name}</h3><p className="text-xs text-muted-foreground">Interior Design</p></div><ArrowRight className="w-4 h-4 text-muted-foreground" /></a>)}</div><div className="text-center mt-8"><a href="/bangalore" className="inline-flex items-center gap-2 text-secondary font-medium hover:underline">View All Bangalore Localities <ArrowRight className="w-4 h-4" /></a></div></div></section>;
}
