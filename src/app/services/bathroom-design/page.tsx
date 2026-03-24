import ServiceBathroom from "@/views/services/ServiceBathroom";
import { PAGE_METADATA } from "@/seo/pages-metadata";

export const metadata = PAGE_METADATA["/services/bathroom-design"];

export default function Page() {
  return <ServiceBathroom />;
}
