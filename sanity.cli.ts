import { defineCliConfig } from "sanity/cli";

function readEnv(name: string): string {
  const raw = process.env?.[name] || "";
  return raw.replace(/^"(.*)"$/, "$1").trim();
}

const projectId = readEnv("SANITY_STUDIO_PROJECT_ID") || readEnv("NEXT_PUBLIC_SANITY_PROJECT_ID");
const dataset = readEnv("SANITY_STUDIO_DATASET") || readEnv("NEXT_PUBLIC_SANITY_DATASET") || "production";

if (!projectId) {
  throw new Error(
    "Missing Sanity project ID. Set SANITY_STUDIO_PROJECT_ID (or NEXT_PUBLIC_SANITY_PROJECT_ID) in .env.",
  );
}

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
