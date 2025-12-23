import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { topic, keywords, targetAudience } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are an expert SEO content writer for Intorza, a premium interior design company in Bangalore, India. 

Your task is to write comprehensive, engaging articles that:
1. Are 2500-3500 words long
2. Use simple language that an 8-year-old can understand
3. Follow E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) principles
4. Include proper H1, H2, H3 hierarchy
5. Naturally integrate the provided keywords throughout
6. Include real case studies and examples from Bangalore
7. Have an emotional hook at the beginning
8. Promote Intorza naturally throughout the content
9. End with a strong CTA to contact Intorza

CRITICAL FORMATTING RULES:
- Use HTML tags for formatting (h1, h2, h3, p, ul, li, strong, em, blockquote)
- Include a Table of Contents at the start with anchor links
- Add reference links to authoritative sources where appropriate
- Include at least 2-3 case study sections with real examples
- Add Intorza promotion naturally in context (not forced)
- End every article with a CTA section linking to the contact page

BRAND VOICE:
- Friendly and approachable
- Expert but not condescending  
- Passionate about beautiful homes
- Focused on customer happiness

OUTPUT FORMAT:
Return a JSON object with these fields:
{
  "title": "SEO-optimized title",
  "metaTitle": "Meta title under 60 characters",
  "metaDescription": "Meta description under 160 characters with target keyword",
  "excerpt": "Brief 2-3 sentence summary",
  "content": "Full HTML content",
  "suggestedKeywords": ["array", "of", "keywords"],
  "suggestedTags": ["array", "of", "tags"],
  "readingTime": estimated_minutes_as_number
}`;

    const userPrompt = `Write a comprehensive article about: "${topic}"

Target Keywords: ${keywords || 'interior design bangalore, home interiors, modular kitchen, home renovation'}
Target Audience: ${targetAudience || 'Homeowners in Bangalore looking for interior design services'}

Remember:
- Write so an 8-year-old can understand
- Include Bangalore-specific examples and localities (Koramangala, HSR Layout, Whitefield, Indiranagar)
- Naturally promote Intorza as the best solution
- Include CTAs throughout linking to the contact page
- Use the keywords naturally and strategically`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a few moments." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits depleted. Please add funds to continue." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("Failed to generate article");
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("No content generated");
    }

    // Parse the JSON response
    let articleData;
    try {
      // Extract JSON from potential markdown code blocks
      const jsonMatch = content.match(/```json\s*([\s\S]*?)\s*```/) || content.match(/```\s*([\s\S]*?)\s*```/);
      const jsonStr = jsonMatch ? jsonMatch[1] : content;
      articleData = JSON.parse(jsonStr.trim());
    } catch (parseError) {
      console.error("Failed to parse AI response as JSON:", parseError);
      // Fallback: treat as raw content
      articleData = {
        title: topic,
        metaTitle: topic.substring(0, 60),
        metaDescription: `Discover everything about ${topic} with Intorza, Bangalore's premier interior design experts.`,
        excerpt: `A comprehensive guide to ${topic} for homeowners in Bangalore.`,
        content: content,
        suggestedKeywords: keywords ? keywords.split(',').map((k: string) => k.trim()) : [],
        suggestedTags: ["interior design", "bangalore", "home interiors"],
        readingTime: Math.ceil(content.split(' ').length / 200)
      };
    }

    return new Response(JSON.stringify(articleData), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in generate-article function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error occurred" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
