import { notFound } from "next/navigation";
import type { Metadata } from "next";
import KitchenLayoutPage from "@/components/KitchenLayoutPage";
import { getKitchenLayout, kitchenLayouts } from "@/data/kitchen-layouts";

type Props = { params: Promise<{ layout: string }> };

export function generateStaticParams() {
  return Object.keys(kitchenLayouts).map((layout) => ({ layout }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { layout } = await params;
  const item = getKitchenLayout(layout);

  if (!item) return { robots: { index: false, follow: false } };

  return {
    title: `${item.title} in Bangalore | EverySpaces`,
    description: `${item.description} Talk to EverySpaces for a tailored modular kitchen consultation in Bangalore.`,
    alternates: { canonical: `/bangalore/services/modular-kitchen/${layout}` },
  };
}

export default async function BangaloreKitchenLayoutPage({ params }: Props) {
  const { layout } = await params;
  if (!getKitchenLayout(layout)) notFound();

  return <KitchenLayoutPage slug={layout} />;
}
