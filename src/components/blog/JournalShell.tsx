"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

export default function JournalShell({ children }: { children: React.ReactNode }) {
  return <><Header />{children}<Footer /><BottomNav /></>;
}
