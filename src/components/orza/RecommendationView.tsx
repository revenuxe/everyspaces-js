import { type ReactNode } from "react";
import { Palette, Sofa, Lightbulb, Layers, Star, IndianRupee, Download, MessageCircleHeart, RotateCcw, ArrowLeft, Sparkles, Image } from "lucide-react";
import { motion } from "framer-motion";
import type { Recommendation } from "./types";

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

// Mood board images mapped to style keywords
const MOOD_IMAGES: Record<string, string[]> = {
  "modern": [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=300&fit=crop",
  ],
  "luxury": [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=400&h=300&fit=crop",
  ],
  "minimal": [
    "https://images.unsplash.com/photo-1598928506311-c55ez165eb1?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=400&h=300&fit=crop",
  ],
  "default": [
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=300&fit=crop",
  ],
};

const getMoodImages = (keywords: string[]) => {
  const lowerKeywords = keywords.map(k => k.toLowerCase());
  if (lowerKeywords.some(k => k.includes("luxury") || k.includes("premium"))) return MOOD_IMAGES.luxury;
  if (lowerKeywords.some(k => k.includes("minimal") || k.includes("scandinavian"))) return MOOD_IMAGES.minimal;
  if (lowerKeywords.some(k => k.includes("modern") || k.includes("contemporary"))) return MOOD_IMAGES.modern;
  return MOOD_IMAGES.default;
};

interface RecommendationViewProps {
  recommendation: Recommendation;
  onReset: () => void;
  onDownload: () => void;
  onGetSupport: () => void;
}

const RecommendationView = ({ recommendation: rec, onReset, onDownload, onGetSupport }: RecommendationViewProps) => {
  const moodImages = getMoodImages(rec.moodKeywords || []);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border px-4 py-3 flex items-center gap-3">
        <button onClick={onReset} className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </button>
        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-secondary-foreground" />
        </div>
        <div>
          <h1 className="text-sm font-bold text-foreground">Your Design Plan</h1>
          <p className="text-[10px] text-muted-foreground">by Orza AI</p>
        </div>
      </div>

      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="px-5 pt-6 pb-4">
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

      {/* Mood Board */}
      <AnimatedCard delay={0.05} className="mx-4 mb-3 rounded-xl bg-card border border-border overflow-hidden shadow-sm">
        <div className="flex items-center gap-2 px-4 pt-4 pb-2">
          <Image className="w-4 h-4 text-secondary" />
          <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Mood Board</h3>
        </div>
        <p className="px-4 text-[11px] text-muted-foreground mb-2">Curated inspirations that match your style and taste</p>
        <div className="grid grid-cols-2 gap-0.5 p-1">
          {moodImages.map((url, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.08 + i * 0.08 }}
              className={`overflow-hidden ${i === 0 ? "rounded-tl-lg" : i === 1 ? "rounded-tr-lg" : i === 2 ? "rounded-bl-lg" : "rounded-br-lg"}`}
            >
              <img
                src={url}
                alt={`Mood inspiration ${i + 1}`}
                className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </AnimatedCard>

      {/* Color Palette */}
      {rec.colorPalette && (
        <AnimatedCard delay={0.12} className="mx-4 mb-3 rounded-xl bg-card border border-border overflow-hidden shadow-sm">
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
        <AnimatedCard delay={0.18} className="mx-4 mb-3 rounded-xl bg-card border border-border p-4 shadow-sm">
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
        <AnimatedCard delay={0.24} className="mx-4 mb-3 rounded-xl bg-card border border-border p-4 shadow-sm">
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
        <AnimatedCard delay={0.3} className="mx-4 mb-3 rounded-xl bg-card border border-border p-4 shadow-sm">
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
        <AnimatedCard delay={0.36} className="mx-4 mb-3 rounded-xl bg-secondary/5 border border-secondary/20 p-4">
          <div className="flex items-center gap-2 mb-1.5">
            <Star className="w-4 h-4 text-secondary" />
            <h3 className="text-xs font-bold text-secondary uppercase tracking-wider">Designer Secret</h3>
          </div>
          <p className="text-xs text-foreground/80 leading-relaxed italic">"{rec.designerSecret}"</p>
        </AnimatedCard>
      )}

      {/* Budget */}
      {rec.estimatedBudget && (
        <AnimatedCard delay={0.42} className="mx-4 mb-4 rounded-xl bg-card border border-border p-4 shadow-sm">
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
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.48 }} className="mx-4 mt-4 space-y-2.5 pb-6">
        <button
          onClick={onDownload}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm shadow-md shadow-secondary/20 hover:bg-secondary/90 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download Design Report
        </button>
        <button
          onClick={onGetSupport}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm border border-primary-foreground/10 hover:bg-primary/90 transition-colors"
        >
          <MessageCircleHeart className="w-4 h-4" />
          Talk to a Designer — It's Free
        </button>
        <button
          onClick={onReset}
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-muted-foreground text-xs font-medium hover:text-foreground transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Design Another Space
        </button>
      </motion.div>
    </div>
  );
};

export default RecommendationView;
