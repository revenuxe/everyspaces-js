import { notFound } from "next/navigation";
import type { Metadata } from "next";
import KitchenLayoutPage from "@/components/KitchenLayoutPage";
import { getKitchenLayout } from "@/data/kitchen-layouts";

type Props = { params: Promise<{ layout: string }> };

export function generateStaticParams() {
  return ["l-shaped-kitchen", "u-shaped-kitchen", "parallel-kitchen", "island-kitchen", "straight-kitchen", "g-shaped-kitchen"].map((layout) => ({ layout }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { layout } = await params;
  const item = getKitchenLayout(layout);
  if (!item) return { robots: { index: false, follow: false } };
  return { title: `${item.title} in Bangalore | EverySpaces`, description: `${item.description} Talk to EverySpaces for a tailored modular kitchen consultation in Bangalore.`, alternates: { canonical: `/services/modular-kitchen/${layout}` } };
}

export default async function Page({ params }: Props) {
  const { layout } = await params;
  if (!getKitchenLayout(layout)) notFound();
  return <KitchenLayoutPage slug={layout} />;
}
