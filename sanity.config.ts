import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./src/sanity/schemaTypes";

function readEnv(name: string): string {
  const envFromProcess = process.env?.[name];
  const envFromImportMeta = (import.meta as any)?.env?.[name] as string | undefined;
  const raw = envFromProcess ?? envFromImportMeta ?? "";
  return raw.replace(/^"(.*)"$/, "$1").trim();
}

const projectId = readEnv("SANITY_STUDIO_PROJECT_ID") || readEnv("NEXT_PUBLIC_SANITY_PROJECT_ID");
const dataset = readEnv("SANITY_STUDIO_DATASET") || readEnv("NEXT_PUBLIC_SANITY_DATASET") || "production";

if (!projectId) {
  throw new Error(
    "Missing Sanity project ID. Set SANITY_STUDIO_PROJECT_ID in .env (recommended for Studio). " +
      "If you only have NEXT_PUBLIC_SANITY_PROJECT_ID, ensure it is exposed to Sanity Studio's Vite env.",
  );
}

export default defineConfig({
  name: "everyspaces",
  title: "EverySpaces CMS",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [deskTool()],
  // Sanity Studio runs on Vite in the browser; allow NEXT_PUBLIC_* as a fallback source.
  // Prefer SANITY_STUDIO_* in production/studio environments.
  vite: {
    envPrefix: ["SANITY_STUDIO_", "NEXT_PUBLIC_"],
  },
  schema: {
    types: schemaTypes,
  },
});
