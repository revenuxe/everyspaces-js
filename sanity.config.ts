import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./src/sanity/schemaTypes";
import sanityProject from "./sanity.project.json";

/**
 * Do not import from `vite` in this file — it gets bundled into Sanity Studio and can cause
 * `SyntaxError: Identifier '__vite__injectQuery' has already been declared`.
 *
 * Project IDs are public. `sanity.project.json` is the reliable default; override via `.env`
 * using VITE_SANITY_STUDIO_* or SANITY_STUDIO_* (see vite.envPrefix below).
 */
function stripQuotes(value: string): string {
  return value.replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1").trim();
}

const im =
  (import.meta as unknown as { env?: Record<string, string | undefined> }).env ?? {};

function pickProjectId(): string {
  return stripQuotes(
    im.VITE_SANITY_STUDIO_PROJECT_ID ||
      im.VITE_SANITY_PROJECT_ID ||
      im.SANITY_STUDIO_PROJECT_ID ||
      im.NEXT_PUBLIC_SANITY_PROJECT_ID ||
      (typeof process !== "undefined" ? process.env?.SANITY_STUDIO_PROJECT_ID : undefined) ||
      (typeof process !== "undefined" ? process.env?.NEXT_PUBLIC_SANITY_PROJECT_ID : undefined) ||
      sanityProject.projectId ||
      "",
  );
}

function pickDataset(): string {
  const raw = stripQuotes(
    im.VITE_SANITY_STUDIO_DATASET ||
      im.VITE_SANITY_DATASET ||
      im.SANITY_STUDIO_DATASET ||
      im.NEXT_PUBLIC_SANITY_DATASET ||
      (typeof process !== "undefined" ? process.env?.SANITY_STUDIO_DATASET : undefined) ||
      (typeof process !== "undefined" ? process.env?.NEXT_PUBLIC_SANITY_DATASET : undefined) ||
      sanityProject.dataset ||
      "",
  );
  return raw || "production";
}

const projectId = pickProjectId();
const dataset = pickDataset();

if (!projectId) {
  throw new Error(
    "Missing Sanity project ID. Set `projectId` in sanity.project.json or add VITE_SANITY_STUDIO_PROJECT_ID to .env.",
  );
}

export default defineConfig({
  name: "everyspaces",
  title: "EverySpaces CMS",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [deskTool()],
  vite: {
    envPrefix: ["VITE_", "SANITY_STUDIO_", "NEXT_PUBLIC_"],
  },
  schema: {
    types: schemaTypes,
  },
});
