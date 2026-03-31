import { createClient } from "@sanity/client";
import { sanityEnv } from "@/sanity/env";

export const sanityClient = createClient({
  projectId: sanityEnv.projectId || "demo",
  dataset: sanityEnv.dataset,
  apiVersion: sanityEnv.apiVersion,
  token: sanityEnv.token || undefined,
  useCdn: false,
  perspective: "published",
});

export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}) {
  return sanityClient.fetch<T>(query, params);
}
