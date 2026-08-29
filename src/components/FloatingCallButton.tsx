"use client";

import { PhoneCall } from "lucide-react";
import { usePathname } from "next/navigation";

const MAIN_PAGE_PREFIXES = [
  "/about",
  "/about-us",
  "/bangalore",
  "/contact",
  "/portfolio",
  "/price-calculator",
  "/services",
];

export default function FloatingCallButton() {
  const pathname = usePathname();
  const isMainPage =
    pathname === "/" ||
    MAIN_PAGE_PREFIXES.some(
      (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
    );

  if (!isMainPage) return null;

  return <a href="tel:+919886579923" aria-label="Call EverySpaces now" className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-3 text-sm font-semibold text-secondary-foreground shadow-lg shadow-secondary/30 transition-transform hover:scale-105 md:bottom-7 md:right-7"><PhoneCall className="h-4 w-4" /> <span>Call Now</span></a>;
}
