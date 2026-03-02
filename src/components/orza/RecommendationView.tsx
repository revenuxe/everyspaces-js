import { type ReactNode } from "react";
import { Palette, Sofa, Lightbulb, Layers, Star, IndianRupee, Download, MessageCircleHeart, RotateCcw, ArrowLeft, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

interface RecommendationViewProps {
  recommendation: Recommendation;
  onReset: () => void;
  onDownload: () => void;
  onGetSupport: () => void;
}

const RecommendationView = ({ recommendation: rec, onReset, onDownload, onGetSupport }: RecommendationViewProps) => {
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
          <h1 className="text-sm font-bold text-foreground">Orza AI</h1>
          <p className="text-[10px] text-muted-foreground">Your design plan</p>
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
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.44 }} className="mx-4 mt-4 space-y-2.5 pb-6">
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
          Get Personalized Support from Experts
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
