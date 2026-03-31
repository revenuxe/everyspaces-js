import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  buildLocalityMetadata,
  isValidLocalitySlug,
  VALID_LOCALITY_SLUGS,
} from "@/seo/locality-metadata";
import Indiranagar from "@/views/localities/Indiranagar";
import Whitefield from "@/views/localities/Whitefield";
import HSRLayout from "@/views/localities/HSRLayout";
import Koramangala from "@/views/localities/Koramangala";
import JPNagar from "@/views/localities/JPNagar";
import Jayanagar from "@/views/localities/Jayanagar";
import Marathahalli from "@/views/localities/Marathahalli";
import ElectronicCity from "@/views/localities/ElectronicCity";
import SarjapurRoad from "@/views/localities/SarjapurRoad";
import Bellandur from "@/views/localities/Bellandur";
import BTMLayout from "@/views/localities/BTMLayout";
import Hebbal from "@/views/localities/Hebbal";
import Yelahanka from "@/views/localities/Yelahanka";
import Banashankari from "@/views/localities/Banashankari";
import Malleshwaram from "@/views/localities/Malleshwaram";
import Rajajinagar from "@/views/localities/Rajajinagar";
import Basavanagudi from "@/views/localities/Basavanagudi";
import Sadashivanagar from "@/views/localities/Sadashivanagar";
import RTNagar from "@/views/localities/RTNagar";
import Vijayanagar from "@/views/localities/Vijayanagar";
import HBRLayout from "@/views/localities/HBRLayout";

export function generateStaticParams() {
  return VALID_LOCALITY_SLUGS.map((locality) => ({ locality }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locality: string }>;
}): Promise<Metadata> {
  const { locality } = await params;
  if (!isValidLocalitySlug(locality)) return {};
  return buildLocalityMetadata(locality);
}

export default async function LocalityPage({
  params,
}: {
  params: Promise<{ locality: string }>;
}) {
  const { locality } = await params;
  if (!isValidLocalitySlug(locality)) notFound();

  switch (locality) {
    case "indiranagar":
      return <Indiranagar />;
    case "whitefield":
      return <Whitefield />;
    case "hsr-layout":
      return <HSRLayout />;
    case "koramangala":
      return <Koramangala />;
    case "jp-nagar":
      return <JPNagar />;
    case "jayanagar":
      return <Jayanagar />;
    case "marathahalli":
      return <Marathahalli />;
    case "electronic-city":
      return <ElectronicCity />;
    case "sarjapur-road":
      return <SarjapurRoad />;
    case "bellandur":
      return <Bellandur />;
    case "btm-layout":
      return <BTMLayout />;
    case "hebbal":
      return <Hebbal />;
    case "yelahanka":
      return <Yelahanka />;
    case "banashankari":
      return <Banashankari />;
    case "malleshwaram":
      return <Malleshwaram />;
    case "rajajinagar":
      return <Rajajinagar />;
    case "basavanagudi":
      return <Basavanagudi />;
    case "sadashivanagar":
      return <Sadashivanagar />;
    case "rt-nagar":
      return <RTNagar />;
    case "vijayanagar":
      return <Vijayanagar />;
    case "hbr-layout":
      return <HBRLayout />;
    default:
      notFound();
  }
}
