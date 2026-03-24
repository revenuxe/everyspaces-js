import ServiceFoyer from "@/views/services/ServiceFoyer";
import { PAGE_METADATA } from "@/seo/pages-metadata";

export const metadata = PAGE_METADATA["/services/foyer-entrance"];

export default function Page() {
  return <ServiceFoyer />;
}
