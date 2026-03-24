import ServiceFullHome from "@/views/services/ServiceFullHome";
import { PAGE_METADATA } from "@/seo/pages-metadata";

export const metadata = PAGE_METADATA["/services/full-home-design"];

export default function Page() {
  return <ServiceFullHome />;
}
