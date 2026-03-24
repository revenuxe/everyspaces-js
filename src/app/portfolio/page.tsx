import Portfolio from "@/views/Portfolio";
import { PAGE_METADATA } from "@/seo/pages-metadata";

export const metadata = PAGE_METADATA["/portfolio"];

export default function PortfolioPage() {
  return <Portfolio />;
}
