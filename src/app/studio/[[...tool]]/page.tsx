export const dynamic = "force-static";

export default function StudioPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "unset";
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container max-w-2xl py-20 px-4">
        <h1 className="text-3xl font-bold mb-4">Sanity Studio Gateway</h1>
        <p className="text-muted-foreground mb-6">
          This app is configured for Sanity content schemas and SSR delivery. For React 18 + Next 16 compatibility,
          run Sanity Studio using the Sanity CLI in a dedicated process/repo.
        </p>
        <div className="rounded-xl border p-5 space-y-2 text-sm">
          <p>
            <strong>Project ID:</strong> {projectId}
          </p>
          <p>
            <strong>Dataset:</strong> {dataset}
          </p>
          <p>
            <strong>Recommended:</strong> `npm run sanity -- init` (if not initialized) and `npm run sanity -- dev`
          </p>
        </div>
      </div>
    </main>
  );
}
