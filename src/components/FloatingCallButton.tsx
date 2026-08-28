"use client";

import { PhoneCall } from "lucide-react";

export default function FloatingCallButton() {
  return <a href="tel:+919886579923" aria-label="Call EverySpaces now" className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-3 text-sm font-semibold text-secondary-foreground shadow-lg shadow-secondary/30 transition-transform hover:scale-105 md:bottom-7 md:right-7"><PhoneCall className="h-4 w-4" /> <span>Call Now</span></a>;
}
