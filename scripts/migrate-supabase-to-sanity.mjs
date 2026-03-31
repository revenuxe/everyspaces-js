import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { createClient as createSanityClient } from "@sanity/client";

const SUPABASE_URL = process.env.SUPABASE_URL || "https://pjljizsnwwukbzdfpmuv.supabase.co";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const SANITY_TOKEN = process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_WRITE_TOKEN;
const SANITY_API_VERSION = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-01-01";
const DRY_RUN = process.argv.includes("--dry-run");

if (!SUPABASE_ANON_KEY) {
  console.error("Missing SUPABASE_ANON_KEY");
  process.exit(1);
}

if (!SANITY_PROJECT_ID) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID");
  process.exit(1);
}

const supabase = createSupabaseClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const sanity = createSanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  token: SANITY_TOKEN,
  useCdn: false,
});

function slugify(input) {
  return String(input || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 96);
}

async function getOrCreateAuthor(name) {
  const safeName = name || "EverySpaces Team";
  const slug = slugify(safeName);
  const id = `author-${slug}`;
  if (!DRY_RUN) {
    await sanity.createIfNotExists({
      _id: id,
      _type: "author",
      name: safeName,
      slug: { _type: "slug", current: slug },
    });
  }
  return { _type: "reference", _ref: id };
}

async function getOrCreateCategory(title) {
  if (!title) return undefined;
  const slug = slugify(title);
  const id = `category-${slug}`;
  if (!DRY_RUN) {
    await sanity.createIfNotExists({
      _id: id,
      _type: "category",
      title,
      slug: { _type: "slug", current: slug },
    });
  }
  return { _type: "reference", _ref: id };
}

function buildPostDoc(row, authorRef, categoryRef) {
  const focusKeyword = row.keywords?.[0] || `${row.title} hyderabad`;
  const secondaryKeywords = (row.keywords || []).slice(1, 7);
  const canonical = `https://everyspaces.com/articles/${row.slug}`;

  return {
    _id: `post-${row.slug}`,
    _type: "post",
    title: row.title,
    slug: { _type: "slug", current: row.slug },
    published: row.status === "published",
    publishedAt: row.published_at || row.created_at,
    author: authorRef,
    category: categoryRef,
    excerpt: row.excerpt || row.meta_description || row.title,
    contentHtml: row.content || "",
    readingTime: row.reading_time || undefined,
    tags: row.tags || [],
    seo: {
      _type: "seo",
      metaTitle: row.meta_title || row.title,
      metaDescription: row.meta_description || row.excerpt || row.title,
      canonicalUrl: canonical,
      focusKeyword,
      secondaryKeywords,
      schemaType: "Article",
      noindex: row.status !== "published",
      faqBlocks: [],
    },
  };
}

async function run() {
  console.log(`Fetching Supabase published articles... (dry-run: ${DRY_RUN})`);
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) throw error;
  const rows = data || [];
  console.log(`Found ${rows.length} published article(s).`);

  const seenSlugs = new Set();
  for (const row of rows) {
    if (seenSlugs.has(row.slug)) {
      console.warn(`Duplicate slug in source: ${row.slug}`);
    }
    seenSlugs.add(row.slug);

    const authorRef = await getOrCreateAuthor(row.author);
    const categoryRef = await getOrCreateCategory(row.category);
    const doc = buildPostDoc(row, authorRef, categoryRef);

    if (!DRY_RUN) {
      await sanity.createOrReplace(doc);
    }
  }

  if (!DRY_RUN) {
    const sanityCount = await sanity.fetch(`count(*[_type == "post" && published == true])`);
    console.log(`Sanity published post count: ${sanityCount}`);
  }

  console.log("Migration completed.");
}

run().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
