import { useState } from "react";
import { ArrowRight, Sparkles, ArrowLeft, Palette, Sofa, Lightbulb, Layers, Star, IndianRupee, RotateCcw, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Link } from "react-router-dom";

interface ColorItem {
  name: string;
  shade: string;
  hex: string;
  usage: string;
}
interface FurnitureItem {
  name: string;
  detail: string;
  priceRange: string;
}
interface MaterialItem {
  item: string;
  type: string;
  why: string;
}
interface LightingLayer {
  type: string;
  suggestion: string;
  placement: string;
}
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
  raw?: boolean;
}

const PHASES = [
  {
    question: "What space are we designing today?",
    placeholder: "e.g. Living room, Bedroom, Kitchen...",
    key: "space",
    emoji: "🏠",
  },
  {
    question: "How do you want it to feel?",
    placeholder: "Pick one or type your own...",
    key: "vibe",
    emoji: "🎨",
    suggestions: ["Calm & Minimal", "Warm & Cozy", "Bold & Modern", "Luxurious & Elegant", "Bright & Airy"],
  },
  {
    question: "Are we keeping it smart, or going all in?",
    placeholder: "Pick your budget approach...",
    key: "budget",
    emoji: "💰",
    suggestions: ["Smart & Budget-Friendly", "Balanced", "Premium"],
  },
  {
    question: "Anything important I should know?",
    placeholder: "Storage, kids, work setup, pets, vastu...",
    key: "details",
    emoji: "🧠",
  },
];

const OrzaAI = () => {
  const [phase, setPhase] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentInput, setCurrentInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const currentPhase = PHASES[phase];

  const handleSubmit = async () => {
    if (!currentInput.trim()) return;

    const newAnswers = { ...answers, [currentPhase.key]: currentInput.trim() };
    setAnswers(newAnswers);
    setCurrentInput("");

    if (phase < PHASES.length - 1) {
      setPhase(phase + 1);
    } else {
      setIsLoading(true);
      setPhase(PHASES.length);
      try {
        const { data, error } = await supabase.functions.invoke("orza-ai", {
          body: newAnswers,
        });
        if (error) throw error;
        if (data?.error) throw new Error(data.error);
        setRecommendation(data.recommendation);
      } catch (err: any) {
        console.error("Orza AI error:", err);
        toast.error(err.message || "Something went wrong. Please try again.");
        setPhase(PHASES.length - 1);
        setCurrentInput(newAnswers.details || "");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleBack = () => {
    if (phase > 0) {
      const prevKey = PHASES[phase - 1].key;
      setCurrentInput(answers[prevKey] || "");
      setPhase(phase - 1);
    }
  };

  const handleReset = () => {
    setPhase(0);
    setAnswers({});
    setCurrentInput("");
    setRecommendation(null);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setCurrentInput(suggestion);
  };

  // Loading screen
  if (phase === PHASES.length && isLoading) {
    return (
      <div className="min-h-screen bg-primary flex flex-col items-center justify-center px-6">
        <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6 animate-pulse">
          <Sparkles className="w-8 h-8 text-secondary" />
        </div>
        <h2 className="text-xl font-bold text-primary-foreground mb-2">Orza is designing...</h2>
        <p className="text-sm text-primary-foreground/50 text-center">Crafting your personalized design vision based on 800+ Bangalore projects</p>
        <div className="flex gap-2 mt-6">
          {Object.values(answers).map((val, i) => (
            <span key={i} className="text-xs px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
              {val}
            </span>
          ))}
        </div>
      </div>
    );
  }

  // Result screen
  if (phase === PHASES.length && recommendation) {
    const rec = recommendation;

    if (rec.raw) {
      return (
        <div className="min-h-screen bg-primary flex flex-col pb-24">
          <div className="flex items-center gap-3 px-6 pt-8 pb-4">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-secondary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary-foreground">Orza AI</h1>
              <p className="text-xs text-primary-foreground/60">Your design vision</p>
            </div>
          </div>
          <div className="px-6 py-4">
            <p className="text-primary-foreground/90 leading-relaxed">{rec.intro}</p>
          </div>
          <div className="px-6 mt-4">
            <button onClick={handleReset} className="w-full py-3.5 rounded-2xl bg-secondary text-secondary-foreground font-semibold text-sm">
              Start Over
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-primary pb-24">
        {/* Hero header */}
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

          {/* Mood keywords */}
          {rec.moodKeywords && (
            <div className="flex flex-wrap gap-2 mt-4">
              {rec.moodKeywords.map((kw, i) => (
                <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20 font-medium">
                  {kw}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Color Palette Card */}
        {rec.colorPalette && (
          <div className="mx-6 mb-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 overflow-hidden">
            <div className="flex items-center gap-2 px-5 pt-4 pb-2">
              <Palette className="w-4 h-4 text-secondary" />
              <h3 className="text-sm font-bold text-primary-foreground uppercase tracking-wider">Color Palette</h3>
            </div>
            <p className="px-5 text-xs text-primary-foreground/60 mb-3">{rec.colorPalette.description}</p>
            <div className="flex gap-0 overflow-hidden rounded-b-2xl">
              {rec.colorPalette.colors?.map((c, i) => (
                <div key={i} className="flex-1 group relative" style={{ backgroundColor: c.hex, minHeight: "80px" }}>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm px-2 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-[10px] text-white font-semibold truncate">{c.name}</p>
                    <p className="text-[9px] text-white/70 truncate">{c.shade}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Color legend below */}
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
          </div>
        )}

        {/* Furniture & Layout Card */}
        {rec.furnitureLayout && (
          <div className="mx-6 mb-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-5">
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
          </div>
        )}

        {/* Materials Card */}
        {rec.materials && (
          <div className="mx-6 mb-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-5">
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
          </div>
        )}

        {/* Lighting Card */}
        {rec.lighting && (
          <div className="mx-6 mb-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-5">
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
          </div>
        )}

        {/* Designer Secret */}
        {rec.designerSecret && (
          <div className="mx-6 mb-4 rounded-2xl bg-secondary/10 border border-secondary/20 p-5">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-secondary" />
              <h3 className="text-sm font-bold text-secondary uppercase tracking-wider">Designer Secret</h3>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed italic">"{rec.designerSecret}"</p>
          </div>
        )}

        {/* Budget Estimate */}
        {rec.estimatedBudget && (
          <div className="mx-6 mb-4 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-5">
            <div className="flex items-center gap-2 mb-3">
              <IndianRupee className="w-4 h-4 text-secondary" />
              <h3 className="text-sm font-bold text-primary-foreground uppercase tracking-wider">Estimated Budget</h3>
            </div>
            <div className="flex items-center justify-between bg-primary-foreground/5 rounded-xl px-4 py-3">
              <div>
                <p className="text-lg font-bold text-primary-foreground">{rec.estimatedBudget.low} — {rec.estimatedBudget.high}</p>
                <p className="text-xs text-primary-foreground/50 mt-0.5">{rec.estimatedBudget.note}</p>
              </div>
            </div>
          </div>
        )}

        {/* CTAs */}
        <div className="mx-6 mt-6 space-y-3 pb-6">
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-secondary text-secondary-foreground font-semibold text-sm"
          >
            <Phone className="w-4 h-4" />
            Book Free Consultation
          </Link>
          <button
            onClick={handleReset}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-primary-foreground/10 text-primary-foreground font-semibold text-sm border border-primary-foreground/10"
          >
            <RotateCcw className="w-4 h-4" />
            Design Another Space
          </button>
        </div>
      </div>
    );
  }

  // Phase input screens
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 px-6 pt-8 pb-4">
        {phase > 0 && (
          <button onClick={handleBack} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors mr-1">
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-secondary-foreground" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-primary-foreground">Orza AI</h1>
          <p className="text-xs text-primary-foreground/60">Step {phase + 1} of {PHASES.length}</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-6 pb-6">
        <div className="flex gap-1.5">
          {PHASES.map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                i <= phase ? "bg-secondary" : "bg-primary-foreground/15"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 px-6 flex flex-col">
        <span className="text-3xl mb-4">{currentPhase.emoji}</span>
        <h2 className="text-2xl font-bold text-primary-foreground leading-tight mb-8">
          {currentPhase.question}
        </h2>

        {/* Suggestion chips */}
        {currentPhase.suggestions && (
          <div className="flex flex-wrap gap-2 mb-6">
            {currentPhase.suggestions.map((s) => (
              <button
                key={s}
                onClick={() => handleSuggestionClick(s)}
                className={`text-sm px-4 py-2.5 rounded-full border transition-all ${
                  currentInput === s
                    ? "bg-secondary text-secondary-foreground border-secondary shadow-lg shadow-secondary/20"
                    : "bg-primary-foreground/5 text-primary-foreground/70 border-primary-foreground/15 hover:border-secondary/50 hover:bg-secondary/5"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="fixed bottom-20 left-0 right-0 px-6 pb-4 md:pb-6">
        <div className="relative">
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder={currentPhase.placeholder}
            disabled={isLoading}
            className="w-full py-3.5 pl-5 pr-14 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-secondary/50 transition-colors disabled:opacity-50"
            autoFocus
          />
          <button
            onClick={handleSubmit}
            disabled={!currentInput.trim() || isLoading}
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
