import ServiceGuestRoom from "@/views/services/ServiceGuestRoom";
import { PAGE_METADATA } from "@/seo/pages-metadata";

export const metadata = PAGE_METADATA["/services/guest-room"];

export default function Page() {
  return <ServiceGuestRoom />;
}
