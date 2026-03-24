import ServiceWardrobe from "@/views/services/ServiceWardrobe";
import { PAGE_METADATA } from "@/seo/pages-metadata";

export const metadata = PAGE_METADATA["/services/wardrobe-design"];

export default function Page() {
  return <ServiceWardrobe />;
}
