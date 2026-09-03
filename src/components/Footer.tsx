"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import everyspacesLogo from "@/assets/everyspaces-logo.webp";
import { imgSrc } from "@/lib/utils";
import SiteQuoteForm from "@/components/SiteQuoteForm";
import ServiceHeroCtas from "@/components/ServiceHeroCtas";

const footerGroups = [
  { title: "Studio", links: [["About", "/about-us"], ["Our work", "/portfolio"], ["Bangalore locations", "/bangalore"], ["Contact", "/contact"]] },
  { title: "Services", links: [["Modular kitchens", "/services/modular-kitchen"], ["Home interiors", "/services/full-home-design"], ["Wardrobe design", "/services/wardrobe-design"], ["All services", "/services"]] },
  { title: "Resources", links: [["Price calculator", "/price-calculator"], ["Design journal", "/articles"], ["Orza AI", "/orza-ai"], ["Start a project", "/contact"]] },
];

export default function Footer() {
  return <>
    <SiteQuoteForm />
    <ServiceHeroCtas />
    <footer className="bg-[#F5F5EF] px-4 py-10 pb-24 text-primary md:py-16 md:pb-16">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-primary/10 bg-white px-6 py-10 shadow-[0_24px_60px_-42px_rgb(13_59_79_/_35%)] md:px-11 md:py-12">
        <div className="grid gap-10 md:grid-cols-[1.55fr_repeat(3,1fr)]">
          <div>
            <a href="/" aria-label="EverySpaces home" className="inline-flex">
              <img src={imgSrc(everyspacesLogo)} alt="EverySpaces" width={296} height={46} className="h-10 w-auto" />
            </a>
            <p className="mt-7 max-w-sm text-sm leading-7 text-primary/75">Full home interiors, 2BHK and 3BHK designs, modular kitchens, wardrobes, and more.</p>
            <div className="mt-6 flex gap-4">
              <a href="https://www.instagram.com/every.spaces/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary hover:text-secondary"><Instagram className="h-5 w-5" /></a>
              <a href="https://www.facebook.com/people/EverySpaces/61593743559425/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary hover:text-secondary"><Facebook className="h-5 w-5" /></a>
              <a href="https://www.linkedin.com/company/everyspaces/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-primary hover:text-secondary"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
          {footerGroups.map((group) => <div key={group.title}>
            <h2 className="!m-0 !text-base font-semibold text-primary">{group.title}</h2>
            <ul className="mt-5 space-y-3 text-sm text-primary/75">{group.links.map(([label, href]) => <li key={href}><a href={href} className="transition-colors hover:text-secondary">{label}</a></li>)}</ul>
          </div>)}
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-primary/15 pt-6 text-sm text-primary/65 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} EverySpaces. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2"><a href="/privacy" className="hover:text-secondary">Privacy Policy</a><a href="/terms" className="hover:text-secondary">Terms of Service</a><a href="/contact" className="hover:text-secondary">Contact</a></div>
        </div>
      </div>
    </footer>
  </>;
}
