function readEnv(name: string, fallback = ""): string {
  return process.env[name] || fallback;
}

export const sanityEnv = {
  projectId: readEnv("NEXT_PUBLIC_SANITY_PROJECT_ID"),
  dataset: readEnv("NEXT_PUBLIC_SANITY_DATASET", "production"),
  apiVersion: readEnv("NEXT_PUBLIC_SANITY_API_VERSION", "2026-01-01"),
  token: readEnv("SANITY_API_READ_TOKEN"),
};

export function hasSanityConfig() {
  return Boolean(sanityEnv.projectId && sanityEnv.projectId !== "demo" && sanityEnv.dataset);
}
