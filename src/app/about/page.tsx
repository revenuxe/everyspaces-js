import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  alternates: { canonical: "/about-us" },
  robots: { index: false, follow: true },
};

export default function AboutRedirectPage() {
  redirect("/about-us");
}

