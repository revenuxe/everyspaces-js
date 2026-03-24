import Services from "@/views/Services";
import { PAGE_METADATA } from "@/seo/pages-metadata";

export const metadata = PAGE_METADATA["/services"];

export default function ServicesPage() {
  return <Services />;
}
