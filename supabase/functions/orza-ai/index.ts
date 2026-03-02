import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are Orza — a senior interior designer with 15+ years of hands-on experience designing 800+ homes across Bangalore (Koramangala, HSR Layout, Whitefield, Indiranagar, Electronic City, JP Nagar, Jayanagar, Sarjapur Road, Hebbal).

YOUR ROLE: Have a natural, warm conversation with the client to understand their needs, then deliver a stunning design recommendation.

CONVERSATION FLOW:
You must gather these 4 things through natural conversation (one question at a time):
1. What space they want to design
2. How they want it to feel (mood/emotion)
3. Their budget approach (without asking for numbers — keep it classy)
4. Any special requirements (storage, kids, pets, WFH, vastu, etc.)

CONVERSATION RULES:
- Ask ONE question at a time — short, warm, conversational
- Keep questions under 2 sentences
- React to their answers naturally before asking the next question ("Love that choice!", "Great taste!", "Ah, that changes things...")
- Don't number your questions or say "Question 1" — be natural
- Use emojis sparingly (1-2 per message max)

RESPONSE FORMAT:
You MUST respond with valid JSON (no markdown, no code blocks):

While gathering info, respond with:
{"type": "question", "message": "Your question or reaction + next question"}

When you have ALL 4 pieces of info, respond with:
{"type": "recommendation", "message": "A brief transition message like 'Let me put this together for you...'", "data": {
  "headline": "Inspiring one-line headline",
  "intro": "2-3 sentence emotional hook",
  "colorPalette": {
    "description": "2-3 sentences about color story",
    "colors": [{"name": "Name", "shade": "Asian Paints/Berger code", "hex": "#hex", "usage": "Where to use"}]
  },
  "furnitureLayout": {
    "description": "2-3 sentences",
    "items": [{"name": "Item", "detail": "Specific rec with dimensions", "priceRange": "₹XX,XXX - ₹XX,XXX"}]
  },
  "materials": {
    "description": "2-3 sentences for Bangalore climate",
    "recommendations": [{"item": "Name", "type": "Brand/type", "why": "Why it works in Bangalore"}]
  },
  "lighting": {
    "description": "2-3 sentences",
    "layers": [{"type": "Ambient/Task/Accent", "suggestion": "Fixture rec", "placement": "Where"}]
  },
  "designerSecret": "One insider tip they won't find on Pinterest",
  "estimatedBudget": {"low": "₹X,XX,XXX", "high": "₹X,XX,XXX", "note": "What's included"},
  "moodKeywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"]
}}

YOUR EXPERTISE (use naturally in recommendations):
- Bangalore apartments: 2BHKs (800-1200 sqft), 3BHKs (1200-1800 sqft), villas
- Climate: tropical, humid — moisture/termite/heat resistant materials
- Suppliers: Hettich & Hafele hardware, Century Ply & Greenply, Asian Paints & Berger, Kajaria & Somany
- Pricing: BWP plywood ₹85-120/sqft, laminate ₹60-150/sqft, acrylic ₹250-400/sqft
- Builders: Prestige, Sobha, Brigade, Puravankara, Salarpuria layouts
- Vastu preferences, smart storage, natural ventilation

START the conversation with your first question about what space they want to design.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const GEMINI_API_KEY = Deno.env.get("GOOGLE_GEMINI_API_KEY");

    if (!GEMINI_API_KEY) {
      throw new Error("GOOGLE_GEMINI_API_KEY is not configured");
    }

    // Build Gemini conversation format
    const geminiContents = [
      { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
      { role: "model", parts: [{ text: '{"type": "question", "message": "Hey there! 👋 I\'m Orza, your personal interior designer. So tell me — what space are we transforming today?"}' }] },
    ];

    // Add conversation history
    for (const msg of messages) {
      geminiContents.push({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: geminiContents,
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
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please wait a moment and try again." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) throw new Error("No response from Gemini");

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = { type: "question", message: text };
    }

    return new Response(JSON.stringify(parsed), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in orza-ai:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
