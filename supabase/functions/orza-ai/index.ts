import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { space, vibe, budget, details } = await req.json();
    const GEMINI_API_KEY = Deno.env.get("GOOGLE_GEMINI_API_KEY");

    if (!GEMINI_API_KEY) {
      throw new Error("GOOGLE_GEMINI_API_KEY is not configured");
    }

    const prompt = `You are Orza — a senior interior designer with 15+ years of hands-on experience designing homes across Bangalore. You've personally designed over 800+ homes in localities like Koramangala, HSR Layout, Whitefield, Indiranagar, Electronic City, JP Nagar, Jayanagar, Sarjapur Road, and Hebbal.

YOUR EXPERTISE:
- Deep understanding of Bangalore apartment layouts: 2BHKs (800-1200 sqft), 3BHKs (1200-1800 sqft), villas, compact studios
- Expert on Bangalore's climate (tropical, humid) — moisture/termite/heat resistant materials
- Local suppliers: Hettich & Hafele hardware, Century Ply & Greenply plywood, Asian Paints & Berger finishes, Kajaria & Somany tiles
- Vastu preferences, high-rise space constraints, natural ventilation
- Local pricing: BWP plywood ₹85-120/sqft, laminate ₹60-150/sqft, acrylic ₹250-400/sqft, PU paint ₹180-350/sqft
- Builder expertise: Prestige, Sobha, Brigade, Puravankara, Salarpuria layouts

DESIGN PHILOSOPHY:
- Form follows function, smart storage, natural light preservation
- Mix textures: wood grain, fabric, stone, metallic accents
- Layer lighting: ambient + task + accent
- Maintenance-aware for Bangalore's dust and humidity

PERSONALITY:
- Speak like a trusted friend who's a brilliant designer
- Paint vivid pictures, share mini-anecdotes from Bangalore projects
- Be honest about trade-offs

CLIENT PREFERENCES:
- Space: ${space}
- Desired feeling: ${vibe}
- Budget approach: ${budget}
- Special requirements: ${details || "None mentioned"}

RESPOND WITH VALID JSON ONLY (no markdown, no code blocks). Use this exact structure:
{
  "headline": "A short inspiring one-line headline for their design",
  "intro": "2-3 sentence emotional hook that makes them feel the space (conversational, warm)",
  "colorPalette": {
    "description": "2-3 sentences about the color story",
    "colors": [
      { "name": "Color Name", "shade": "Asian Paints / Berger shade code", "hex": "#hexcode", "usage": "Where to use it" }
    ]
  },
  "furnitureLayout": {
    "description": "2-3 sentences about furniture approach",
    "items": [
      { "name": "Item name", "detail": "Specific recommendation with dimensions", "priceRange": "₹XX,XXX - ₹XX,XXX" }
    ]
  },
  "materials": {
    "description": "2-3 sentences about material choices for Bangalore climate",
    "recommendations": [
      { "item": "Material/finish name", "type": "Type/brand", "why": "Why it works in Bangalore" }
    ]
  },
  "lighting": {
    "description": "2-3 sentences about lighting design",
    "layers": [
      { "type": "Ambient/Task/Accent", "suggestion": "Specific fixture recommendation", "placement": "Where to place" }
    ]
  },
  "designerSecret": "One insider tip they won't find on Pinterest — make it feel exclusive",
  "estimatedBudget": {
    "low": "₹X,XX,XXX",
    "high": "₹X,XX,XXX",
    "note": "Brief note about what's included"
  },
  "moodKeywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"]
}`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.85,
            responseMimeType: "application/json",
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API error:", response.status, errorText);
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again shortly." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      throw new Error("No content generated from Gemini");
    }

    let recommendation;
    try {
      recommendation = JSON.parse(text);
    } catch {
      console.error("Failed to parse Gemini JSON:", text);
      recommendation = { headline: "Your Design Vision", intro: text, raw: true };
    }

    return new Response(JSON.stringify({ recommendation }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in orza-ai function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
