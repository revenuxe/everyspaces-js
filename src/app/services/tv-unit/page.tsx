import ServiceTVUnit from "@/views/services/ServiceTVUnit";
import { PAGE_METADATA } from "@/seo/pages-metadata";

export const metadata = PAGE_METADATA["/services/tv-unit"];

export default function Page() {
  return <ServiceTVUnit />;
}
