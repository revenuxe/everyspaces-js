import { useState, useEffect, useRef, type ReactNode } from "react";
import { ArrowRight, ArrowLeft, Sparkles, Palette, Sofa, Lightbulb, Layers, Star, IndianRupee, RotateCcw, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

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

const INITIAL_MESSAGE = "Hey! 👋 I'm Orza — think of me as your personal interior designer. So, what space are we working on today?";

const AnimatedCard = ({ children, delay = 0, className }: { children: ReactNode; delay?: number; className: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const OrzaAI = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: INITIAL_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: "user", content: input.trim() };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const apiMessages = updatedMessages.slice(1).map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const { data, error } = await supabase.functions.invoke("orza-ai", {
        body: { messages: apiMessages },
      });

      if (error) throw new Error(data?.error || error.message);
      if (data?.error) throw new Error(data.error);

      if (data.type === "ready") {
        // AI decided it has enough info — now fetch recommendation
        setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
        setIsLoading(true);

        const { data: recData, error: recError } = await supabase.functions.invoke("orza-ai", {
          body: { phase: "recommend", ...data.context },
        });

        if (recError) throw new Error(recData?.error || recError.message);
        if (recData?.type === "recommendation") {
          setRecommendation(recData.data);
        }
      } else if (data.type === "recommendation") {
        setMessages((prev) => [...prev, { role: "assistant", content: data.message || "Here's your plan ✨" }]);
        setTimeout(() => setRecommendation(data.data), 600);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
      }
    } catch (err: any) {
      console.error("Orza AI error:", err);
      toast.error(err.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([{ role: "assistant", content: INITIAL_MESSAGE }]);
    setInput("");
    setRecommendation(null);
  };

  // ──────────── RECOMMENDATION UI ────────────
  if (recommendation) {
    const rec = recommendation;
    return (
      <div className="min-h-screen bg-background pb-24">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border px-4 py-3 flex items-center gap-3">
          <button onClick={handleReset} className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
            <ArrowLeft className="w-4 h-4 text-foreground" />
          </button>
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-secondary-foreground" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-foreground">Orza AI</h1>
            <p className="text-[10px] text-muted-foreground">Your design plan</p>
          </div>
        </div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="px-5 pt-6 pb-4"
        >
          <h2 className="text-xl font-bold text-foreground leading-tight mb-2">{rec.headline}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{rec.intro}</p>

          {rec.moodKeywords && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {rec.moodKeywords.map((kw, i) => (
                <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-secondary/10 text-secondary font-medium">{kw}</span>
              ))}
            </div>
          )}
        </motion.div>

        {/* Color Palette */}
        {rec.colorPalette && (
          <AnimatedCard delay={0.08} className="mx-4 mb-3 rounded-xl bg-card border border-border overflow-hidden shadow-sm">
            <div className="flex items-center gap-2 px-4 pt-4 pb-1">
              <Palette className="w-4 h-4 text-secondary" />
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Color Palette</h3>
            </div>
            <p className="px-4 text-[11px] text-muted-foreground mb-2">{rec.colorPalette.description}</p>
            <div className="flex">
              {rec.colorPalette.colors?.map((c, i) => (
                <div key={i} className="flex-1" style={{ backgroundColor: c.hex, height: "56px" }} />
              ))}
            </div>
            <div className="px-4 py-3 grid grid-cols-2 gap-2">
              {rec.colorPalette.colors?.map((c, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-3.5 h-3.5 rounded-full shrink-0 mt-0.5 border border-border" style={{ backgroundColor: c.hex }} />
                  <div>
                    <p className="text-[11px] font-semibold text-foreground leading-tight">{c.name}</p>
                    <p className="text-[10px] text-muted-foreground">{c.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedCard>
        )}

        {/* Furniture */}
        {rec.furnitureLayout && (
          <AnimatedCard delay={0.14} className="mx-4 mb-3 rounded-xl bg-card border border-border p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <Sofa className="w-4 h-4 text-secondary" />
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Furniture & Layout</h3>
            </div>
            <p className="text-[11px] text-muted-foreground mb-3">{rec.furnitureLayout.description}</p>
            <div className="space-y-2">
              {rec.furnitureLayout.items?.map((item, i) => (
                <div key={i} className="flex items-start justify-between gap-2 bg-muted/50 rounded-lg px-3 py-2.5">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-foreground">{item.name}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5 leading-snug">{item.detail}</p>
                  </div>
                  <span className="text-[10px] text-secondary font-bold whitespace-nowrap">{item.priceRange}</span>
                </div>
              ))}
            </div>
          </AnimatedCard>
        )}

        {/* Materials */}
        {rec.materials && (
          <AnimatedCard delay={0.2} className="mx-4 mb-3 rounded-xl bg-card border border-border p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <Layers className="w-4 h-4 text-secondary" />
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Materials & Finishes</h3>
            </div>
            <p className="text-[11px] text-muted-foreground mb-3">{rec.materials.description}</p>
            <div className="space-y-2">
              {rec.materials.recommendations?.map((m, i) => (
                <div key={i} className="bg-muted/50 rounded-lg px-3 py-2.5">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="text-xs font-semibold text-foreground">{m.item}</p>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-semibold">{m.type}</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground">{m.why}</p>
                </div>
              ))}
            </div>
          </AnimatedCard>
        )}

        {/* Lighting */}
        {rec.lighting && (
          <AnimatedCard delay={0.26} className="mx-4 mb-3 rounded-xl bg-card border border-border p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <Lightbulb className="w-4 h-4 text-secondary" />
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Lighting Design</h3>
            </div>
            <p className="text-[11px] text-muted-foreground mb-3">{rec.lighting.description}</p>
            <div className="space-y-2">
              {rec.lighting.layers?.map((l, i) => (
                <div key={i} className="flex items-start gap-2.5 bg-muted/50 rounded-lg px-3 py-2.5">
                  <div className="w-7 h-7 rounded-md bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Lightbulb className="w-3.5 h-3.5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-secondary uppercase">{l.type}</p>
                    <p className="text-xs text-foreground font-medium">{l.suggestion}</p>
                    <p className="text-[10px] text-muted-foreground">{l.placement}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedCard>
        )}

        {/* Designer Secret */}
        {rec.designerSecret && (
          <AnimatedCard delay={0.32} className="mx-4 mb-3 rounded-xl bg-secondary/5 border border-secondary/20 p-4">
            <div className="flex items-center gap-2 mb-1.5">
              <Star className="w-4 h-4 text-secondary" />
              <h3 className="text-xs font-bold text-secondary uppercase tracking-wider">Designer Secret</h3>
            </div>
            <p className="text-xs text-foreground/80 leading-relaxed italic">"{rec.designerSecret}"</p>
          </AnimatedCard>
        )}

        {/* Budget */}
        {rec.estimatedBudget && (
          <AnimatedCard delay={0.38} className="mx-4 mb-4 rounded-xl bg-card border border-border p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <IndianRupee className="w-4 h-4 text-secondary" />
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Estimated Budget</h3>
            </div>
            <div className="bg-muted/50 rounded-lg px-3 py-3">
              <p className="text-base font-bold text-foreground">{rec.estimatedBudget.low} — {rec.estimatedBudget.high}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{rec.estimatedBudget.note}</p>
            </div>
          </AnimatedCard>
        )}

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.44 }}
          className="mx-4 mt-4 space-y-2.5 pb-6"
        >
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm shadow-md shadow-secondary/20 hover:bg-secondary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Book Free Consultation
          </Link>
          <button
            onClick={handleReset}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-muted text-foreground font-semibold text-sm border border-border hover:bg-muted/80 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Design Another Space
          </button>
        </motion.div>
      </div>
    );
  }

  // ──────────── CHAT UI ────────────
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10 px-4 py-3 flex items-center gap-3 shrink-0">
        <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/15 transition-colors">
          <ArrowLeft className="w-4 h-4 text-primary-foreground" />
        </button>
        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-secondary-foreground" />
        </div>
        <div>
          <h1 className="text-sm font-bold text-primary-foreground">Orza AI</h1>
          <p className="text-[10px] text-primary-foreground/50">Your personal interior designer</p>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 pt-4 pb-24 space-y-3">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={`${msg.role}-${i}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                  msg.role === "user"
                    ? "bg-secondary text-secondary-foreground rounded-br-sm"
                    : "bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/10 rounded-bl-sm"
                }`}
              >
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div className="bg-primary-foreground/10 border border-primary-foreground/10 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-1.5 h-1.5 rounded-full bg-secondary/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-1.5 h-1.5 rounded-full bg-secondary/60 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input — fixed above bottom nav */}
      <div className="fixed bottom-[4.5rem] left-0 right-0 px-4 pb-3 pt-3 bg-gradient-to-t from-primary via-primary/95 to-transparent md:hidden">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your answer..."
            disabled={isLoading}
            className="w-full py-3 pl-4 pr-12 rounded-xl bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-secondary/50 transition-colors disabled:opacity-50"
            autoFocus
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-secondary text-secondary-foreground flex items-center justify-center disabled:opacity-30 transition-opacity"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Desktop input */}
      <div className="hidden md:block fixed bottom-0 left-0 right-0 px-6 pb-6 pt-4 bg-gradient-to-t from-primary via-primary to-transparent">
        <div className="relative max-w-2xl mx-auto">
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
