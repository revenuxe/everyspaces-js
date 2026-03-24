import ServiceBedroom from "@/views/services/ServiceBedroom";
import { PAGE_METADATA } from "@/seo/pages-metadata";

export const metadata = PAGE_METADATA["/services/bedroom-design"];

export default function Page() {
  return <ServiceBedroom />;
}
