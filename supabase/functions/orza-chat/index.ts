import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are Orza, EverySpaces' friendly AI interior design assistant on their website. You help visitors with quick interior design questions and guide them to take action.

ABOUT EVERYSPACES:
- Premium interior design company in Bangalore
- Services: Modular Kitchen, Full Home Interiors, Bedroom, Living Room, Wardrobe, TV Unit, Pooja Room, 2BHK, 3BHK, Villa, Study Room, Kids Room
- Localities: Koramangala, HSR Layout, Whitefield, Indiranagar, JP Nagar, Jayanagar, Electronic City, and more
- USP: Factory-direct pricing, 10-year warranty, 45-day delivery, 300+ homes delivered
- Starting prices: Modular Kitchen from ₹1.5L, Full Home from ₹3.5L, Bedroom from ₹1.2L

YOUR PERSONALITY:
- Warm, knowledgeable, enthusiastic about design
- Give concise but helpful answers (2-4 sentences max)
- Always relate answers back to EverySpaces services
- Use emojis sparingly but naturally

CONVERSION GOALS (prioritize these):
1. If user asks about pricing → give a range, then suggest "Get a Free Consultation" for exact quote
2. If user describes their space → give a quick tip, then suggest trying the full Orza AI Design tool at /orza-ai
3. If user asks about timelines → answer, then mention free site visit
4. Always end with a soft CTA when appropriate

RESPONSE FORMAT:
- Keep responses SHORT (under 100 words)
- Use markdown for formatting
- If you suggest an action, format it as: **[Action Text](/link)**

IMPORTANT: You are chatting in a small floating widget, so keep responses concise and scannable.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, page } = await req.json();
    const GOOGLE_GEMINI_API_KEY = Deno.env.get("GOOGLE_GEMINI_API_KEY");

    if (!GOOGLE_GEMINI_API_KEY) {
      throw new Error("GOOGLE_GEMINI_API_KEY is not configured");
    }

    const contextNote = page ? `\n\nThe user is currently on the page: ${page}` : "";

    // Convert messages to Gemini format
    const geminiContents = [
      {
        role: "user",
        parts: [{ text: SYSTEM_PROMPT + contextNote + "\n\nNow respond to the conversation below." }],
      },
      {
        role: "model",
        parts: [{ text: "Understood! I'm Orza, ready to help with interior design questions. I'll keep responses concise and conversion-focused." }],
      },
      ...messages.map((m: { role: string; content: string }) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      })),
    ];

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GOOGLE_GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: geminiContents,
          generationConfig: {
            temperature: 0.8,
            maxOutputTokens: 300,
            responseMimeType: "text/plain",
          },
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "I'm a bit busy right now! Try again in a moment 😊" }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("Gemini error:", response.status, errorText);
      throw new Error("AI service unavailable");
    }

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) {
      throw new Error("No response generated");
    }

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("orza-chat error:", error);
    return new Response(
      JSON.stringify({
        reply: "I'm having a little trouble right now! 😅 You can try our **[full AI design tool](/orza-ai)** or **[contact us directly](/contact)** for instant help.",
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
