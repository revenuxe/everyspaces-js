"use client";

import type { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import HeroSection from "@/components/HeroSection";

export default function ServiceHero({ title, description, image, formName }: {
  title: string;
  description: string;
  image: StaticImageData;
  formName: string;
}) {
  const pathname = usePathname() ?? "/services";

  return <HeroSection
    headingPrefix={title}
    description={description}
    image={image}
    imageAlt={title}
    locationLabel={pathname.startsWith("/bangalore") ? "Bangalore" : ""}
    sourcePage={pathname}
    formName={formName}
  />;
}
