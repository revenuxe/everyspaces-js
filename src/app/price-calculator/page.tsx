import PriceCalculator from "@/views/PriceCalculator";
import { PAGE_METADATA } from "@/seo/pages-metadata";

export const metadata = PAGE_METADATA["/price-calculator"];

export default function PriceCalculatorPage() {
  return <PriceCalculator />;
}
