import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_SERVICE_SLUGS, SERVICE_COMPONENTS } from "@/views/services/serviceRouteMap";

type Params = Promise<{ service: string }>;

function titleFromSlug(slug: string): string {
  return slug
    .split("-")
    .map((word) => (word.length <= 3 ? word.toUpperCase() : `${word.charAt(0).toUpperCase()}${word.slice(1)}`))
    .join(" ");
}

export function generateStaticParams() {
  return ALL_SERVICE_SLUGS.map((service) => ({ service }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { service } = await params;
  if (!SERVICE_COMPONENTS[service]) return {};

  const serviceName = titleFromSlug(service);
  return {
    title: `${serviceName} Interior Design in Bangalore | EverySpaces`,
    description: `${serviceName} interior design services in Bangalore by EverySpaces. Custom design, transparent pricing, and end-to-end execution.`,
    alternates: {
      canonical: `/bangalore/services/${service}`,
    },
  };
}

export default async function BangaloreServicePage({ params }: { params: Params }) {
  const { service } = await params;
  const ServiceComponent = SERVICE_COMPONENTS[service];
  if (!ServiceComponent) notFound();
  return <ServiceComponent />;
}
