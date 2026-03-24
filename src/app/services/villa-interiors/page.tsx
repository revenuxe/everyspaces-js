import ServiceVilla from "@/views/services/ServiceVilla";
import { PAGE_METADATA } from "@/seo/pages-metadata";

export const metadata = PAGE_METADATA["/services/villa-interiors"];

export default function Page() {
  return <ServiceVilla />;
}
