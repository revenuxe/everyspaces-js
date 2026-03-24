import ServiceDiningRoom from "@/views/services/ServiceDiningRoom";
import { PAGE_METADATA } from "@/seo/pages-metadata";

export const metadata = PAGE_METADATA["/services/dining-room"];

export default function Page() {
  return <ServiceDiningRoom />;
}
