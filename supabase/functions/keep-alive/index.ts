import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

Deno.serve(async () => {
  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Simple query to keep the database active
    const { count, error } = await supabase
      .from("leads")
      .select("*", { count: "exact", head: true });

    if (error) throw error;

    return new Response(
      JSON.stringify({ status: "alive", leads_count: count, timestamp: new Date().toISOString() }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ status: "error", message: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});
