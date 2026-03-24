import ServiceLivingRoom from "@/views/services/ServiceLivingRoom";
import { PAGE_METADATA } from "@/seo/pages-metadata";

export const metadata = PAGE_METADATA["/services/living-room"];

export default function Page() {
  return <ServiceLivingRoom />;
}
