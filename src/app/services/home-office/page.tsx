import ServiceHomeOffice from "@/views/services/ServiceHomeOffice";
import { PAGE_METADATA } from "@/seo/pages-metadata";

export const metadata = PAGE_METADATA["/services/home-office"];

export default function Page() {
  return <ServiceHomeOffice />;
}
