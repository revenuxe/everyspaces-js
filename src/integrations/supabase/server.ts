import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const SUPABASE_URL = "https://pjljizsnwwukbzdfpmuv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqbGppenNud3d1a2J6ZGZwbXV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2MDg3OTIsImV4cCI6MjA4OTE4NDc5Mn0.yRIO5z4zxzJkL9TlCHu_SEEELjlp_zNAfRZeqkgCfq8";

/** Read-only Supabase client for server metadata / RSC (no localStorage). */
export function createServerSupabase() {
  return createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
}
