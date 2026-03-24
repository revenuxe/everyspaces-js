import Index from "@/views/Index";
import { PAGE_METADATA } from "@/seo/pages-metadata";

export const metadata = PAGE_METADATA["/"];

export default function HomePage() {
  return <Index />;
}
