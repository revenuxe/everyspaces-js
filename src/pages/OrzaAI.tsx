import { useState, useEffect, useRef, type ReactNode } from "react";
import { ArrowRight, Sparkles, Palette, Sofa, Lightbulb, Layers, Star, IndianRupee, RotateCcw, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Link } from "react-router-dom";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ColorItem { name: string; shade: string; hex: string; usage: string; }
interface FurnitureItem { name: string; detail: string; priceRange: string; }
interface MaterialItem { item: string; type: string; why: string; }
interface LightingLayer { type: string; suggestion: string; placement: string; }
interface Recommendation {
  headline: string;
  intro: string;
  colorPalette: { description: string; colors: ColorItem[] };
  furnitureLayout: { description: string; items: FurnitureItem[] };
  materials: { description: string; recommendations: MaterialItem[] };
  lighting: { description: string; layers: LightingLayer[] };
  designerSecret: string;
  estimatedBudget: { low: string; high: string; note: string };
  moodKeywords: string[];
}

const INITIAL_MESSAGE = "Hey there! 👋 I'm Orza, your personal interior designer. So tell me — what space are we transforming today?";

const AnimatedCard = ({ children, delay = 0, className }: { children: ReactNode; delay?: number; className: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 14, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.35, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const OrzaAI = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: INITIAL_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: "user", content: input.trim() };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      // Send only user messages for the API (system prompt + initial greeting are in the edge function)
      const apiMessages = updatedMessages.slice(1).map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const { data, error } = await supabase.functions.invoke("orza-ai", {
        body: { messages: apiMessages },
      });

      if (error) {
        const msg = data?.error || error.message;
        throw new Error(msg);
      }
      if (data?.error) throw new Error(data.error);

      if (data.type === "recommendation") {
        // Add transition message to chat
        setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
        // Show structured recommendation
        setTimeout(() => setRecommendation(data.data), 800);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
      }
    } catch (err: any) {
      console.error("Orza AI error:", err);
      const msg = err.message?.includes("Rate limit")
        ? "Gemini rate limit hit. Wait 30 seconds and try again."
        : err.message || "Something went wrong.";
      toast.error(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([{ role: "assistant", content: INITIAL_MESSAGE }]);
    setInput("");
    setRecommendation(null);
  };

  // Recommendation UI
  if (recommendation) {
    const rec = recommendation;
    return (
      <div className="min-h-screen bg-primary pb-24">
        {/* Header */}
        <div className="px-6 pt-8 pb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-secondary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary-foreground">Orza AI</h1>
              <p className="text-xs text-primary-foreground/60">Your personalized design</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-foreground leading-tight mb-3">{rec.headline}</h2>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">{rec.intro}</p>

          {rec.moodKeywords && (
            <div className="flex flex-wrap gap-2 mt-4">
              {rec.moodKeywords.map((kw, i) => (
                <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20 font-medium">{kw}</span>
              ))}
            </div>
          )}
        </div>

        {/* Color Palette */}
        {rec.colorPalette && (
          <AnimatedCard delay={0.1} className="mx-6 mb-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 overflow-hidden">
            <div className="flex items-center gap-2 px-5 pt-4 pb-2">
              <Palette className="w-4 h-4 text-secondary" />
              <h3 className="text-sm font-bold text-primary-foreground uppercase tracking-wider">Color Palette</h3>
            </div>
            <p className="px-5 text-xs text-primary-foreground/60 mb-3">{rec.colorPalette.description}</p>
            <div className="flex gap-0 overflow-hidden">
              {rec.colorPalette.colors?.map((c, i) => (
                <div key={i} className="flex-1 group relative" style={{ backgroundColor: c.hex, minHeight: "80px" }}>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm px-2 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-[10px] text-white font-semibold truncate">{c.name}</p>
                    <p className="text-[9px] text-white/70 truncate">{c.shade}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 grid grid-cols-2 gap-2">
              {rec.colorPalette.colors?.map((c, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full shrink-0 mt-0.5 border border-primary-foreground/10" style={{ backgroundColor: c.hex }} />
                  <div>
                    <p className="text-xs font-semibold text-primary-foreground">{c.name}</p>
                    <p className="text-[10px] text-primary-foreground/50">{c.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedCard>
        )}

        {/* Furniture */}
        {rec.furnitureLayout && (
          <AnimatedCard delay={0.16} className="mx-6 mb-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-5">
            <div className="flex items-center gap-2 mb-2">
              <Sofa className="w-4 h-4 text-secondary" />
              <h3 className="text-sm font-bold text-primary-foreground uppercase tracking-wider">Furniture & Layout</h3>
            </div>
            <p className="text-xs text-primary-foreground/60 mb-4">{rec.furnitureLayout.description}</p>
            <div className="space-y-3">
              {rec.furnitureLayout.items?.map((item, i) => (
                <div key={i} className="flex items-start justify-between gap-3 bg-primary-foreground/5 rounded-xl px-4 py-3">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-primary-foreground">{item.name}</p>
                    <p className="text-xs text-primary-foreground/50 mt-0.5">{item.detail}</p>
                  </div>
                  <span className="text-xs text-secondary font-semibold whitespace-nowrap">{item.priceRange}</span>
                </div>
              ))}
            </div>
          </AnimatedCard>
        )}

        {/* Materials */}
        {rec.materials && (
          <AnimatedCard delay={0.22} className="mx-6 mb-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-5">
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-secondary" />
              <h3 className="text-sm font-bold text-primary-foreground uppercase tracking-wider">Materials & Finishes</h3>
            </div>
            <p className="text-xs text-primary-foreground/60 mb-4">{rec.materials.description}</p>
            <div className="space-y-3">
              {rec.materials.recommendations?.map((m, i) => (
                <div key={i} className="bg-primary-foreground/5 rounded-xl px-4 py-3">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-semibold text-primary-foreground">{m.item}</p>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-medium">{m.type}</span>
                  </div>
                  <p className="text-xs text-primary-foreground/50">{m.why}</p>
                </div>
              ))}
            </div>
          </AnimatedCard>
        )}

        {/* Lighting */}
        {rec.lighting && (
          <AnimatedCard delay={0.28} className="mx-6 mb-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-5">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-4 h-4 text-secondary" />
              <h3 className="text-sm font-bold text-primary-foreground uppercase tracking-wider">Lighting Design</h3>
            </div>
            <p className="text-xs text-primary-foreground/60 mb-4">{rec.lighting.description}</p>
            <div className="space-y-3">
              {rec.lighting.layers?.map((l, i) => (
                <div key={i} className="flex items-start gap-3 bg-primary-foreground/5 rounded-xl px-4 py-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <Lightbulb className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-secondary uppercase">{l.type}</p>
                    <p className="text-sm text-primary-foreground font-medium">{l.suggestion}</p>
                    <p className="text-xs text-primary-foreground/50">{l.placement}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedCard>
        )}

        {/* Designer Secret */}
        {rec.designerSecret && (
          <AnimatedCard delay={0.34} className="mx-6 mb-4 rounded-2xl bg-secondary/10 border border-secondary/20 p-5">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-secondary" />
              <h3 className="text-sm font-bold text-secondary uppercase tracking-wider">Designer Secret</h3>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed italic">"{rec.designerSecret}"</p>
          </AnimatedCard>
        )}

        {/* Budget */}
        {rec.estimatedBudget && (
          <AnimatedCard delay={0.4} className="mx-6 mb-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-5">
            <div className="flex items-center gap-2 mb-3">
              <IndianRupee className="w-4 h-4 text-secondary" />
              <h3 className="text-sm font-bold text-primary-foreground uppercase tracking-wider">Estimated Budget</h3>
            </div>
            <div className="bg-primary-foreground/5 rounded-xl px-4 py-3">
              <p className="text-lg font-bold text-primary-foreground">{rec.estimatedBudget.low} — {rec.estimatedBudget.high}</p>
              <p className="text-xs text-primary-foreground/50 mt-0.5">{rec.estimatedBudget.note}</p>
            </div>
          </AnimatedCard>
        )}

        {/* CTAs */}
        <div className="mx-6 mt-6 space-y-3 pb-6">
          <Link to="/contact" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-secondary text-secondary-foreground font-semibold text-sm">
            <Phone className="w-4 h-4" />
            Book Free Consultation
          </Link>
          <button onClick={handleReset} className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-primary-foreground/10 text-primary-foreground font-semibold text-sm border border-primary-foreground/10">
            <RotateCcw className="w-4 h-4" />
            Design Another Space
          </button>
        </div>
      </div>
    );
  }

  // Chat UI
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 px-6 pt-8 pb-4 shrink-0">
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-secondary-foreground" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-primary-foreground">Orza AI</h1>
          <p className="text-xs text-primary-foreground/60">Your personal interior designer</p>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 pb-28 space-y-4">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={`${msg.role}-${i}-${msg.content.slice(0, 12)}`}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-secondary text-secondary-foreground rounded-br-md"
                    : "bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/10 rounded-bl-md"
                }`}
              >
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="flex justify-start"
            >
              <div className="bg-primary-foreground/10 border border-primary-foreground/10 rounded-2xl rounded-bl-md px-4 py-3 flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-secondary/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 rounded-full bg-secondary/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 rounded-full bg-secondary/60 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input */}
      <div className="fixed bottom-20 left-0 right-0 px-6 pb-4 md:pb-6 bg-gradient-to-t from-primary via-primary to-transparent pt-6">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your answer..."
            disabled={isLoading}
            className="w-full py-3.5 pl-5 pr-14 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-secondary/50 transition-colors disabled:opacity-50"
            autoFocus
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center disabled:opacity-30 transition-opacity"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrzaAI;
