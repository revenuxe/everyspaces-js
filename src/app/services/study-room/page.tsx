import ServiceStudyRoom from "@/views/services/ServiceStudyRoom";
import { PAGE_METADATA } from "@/seo/pages-metadata";

export const metadata = PAGE_METADATA["/services/study-room"];

export default function Page() {
  return <ServiceStudyRoom />;
}
