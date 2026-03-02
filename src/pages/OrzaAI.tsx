import { useState } from "react";
import { ArrowRight, Sparkles, ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";

const PHASES = [
  {
    question: "What space are we designing today?",
    placeholder: "e.g. Living room, Bedroom, Kitchen...",
    key: "space",
  },
  {
    question: "How do you want it to feel?",
    placeholder: "e.g. Calm & Minimal, Warm & Cozy, Bold & Modern...",
    key: "vibe",
    suggestions: ["Calm & Minimal", "Warm & Cozy", "Bold & Modern", "Luxurious & Elegant", "Bright & Airy"],
  },
  {
    question: "Are we keeping it smart, or going all in?",
    placeholder: "e.g. Smart & Budget-Friendly, Balanced, Premium",
    key: "budget",
    suggestions: ["Smart & Budget-Friendly", "Balanced", "Premium"],
  },
  {
    question: "Anything important I should know?",
    placeholder: "Storage needs, kids, work setup, pets...",
    key: "details",
  },
];

const OrzaAI = () => {
  const [phase, setPhase] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentInput, setCurrentInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState("");

  const currentPhase = PHASES[phase];

  const handleSubmit = async () => {
    if (!currentInput.trim()) return;

    const newAnswers = { ...answers, [currentPhase.key]: currentInput.trim() };
    setAnswers(newAnswers);
    setCurrentInput("");

    if (phase < PHASES.length - 1) {
      setPhase(phase + 1);
    } else {
      // Final phase — call AI
      setIsLoading(true);
      try {
        const { data, error } = await supabase.functions.invoke("orza-ai", {
          body: newAnswers,
        });

        if (error) throw error;
        if (data?.error) throw new Error(data.error);

        setRecommendation(data.recommendation);
        setPhase(PHASES.length); // move to result screen
      } catch (err: any) {
        console.error("Orza AI error:", err);
        toast.error(err.message || "Something went wrong. Please try again.");
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
    setRecommendation("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    setCurrentInput(suggestion);
  };

  // Result screen
  if (phase === PHASES.length) {
    return (
      <div className="min-h-screen bg-primary flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 px-6 pt-8 pb-4">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-secondary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-primary-foreground">Orza AI</h1>
            <p className="text-xs text-primary-foreground/60">Your design vision</p>
          </div>
        </div>

        {/* Result */}
        <div className="flex-1 px-6 py-4 overflow-y-auto pb-32">
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-5 border border-primary-foreground/10">
            <div className="prose prose-sm prose-invert max-w-none text-primary-foreground/90 leading-relaxed">
              <ReactMarkdown>{recommendation}</ReactMarkdown>
            </div>
          </div>

          {/* Summary chips */}
          <div className="flex flex-wrap gap-2 mt-4">
            {Object.entries(answers).map(([key, value]) => (
              <span
                key={key}
                className="text-xs px-3 py-1.5 rounded-full bg-secondary/20 text-secondary border border-secondary/30"
              >
                {value}
              </span>
            ))}
          </div>
        </div>

        {/* Reset button */}
        <div className="fixed bottom-20 left-0 right-0 px-6 pb-4 md:pb-6">
          <button
            onClick={handleReset}
            className="w-full py-3.5 rounded-2xl bg-secondary text-secondary-foreground font-semibold text-sm"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

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
                className={`text-sm px-4 py-2 rounded-full border transition-all ${
                  currentInput === s
                    ? "bg-secondary text-secondary-foreground border-secondary"
                    : "bg-primary-foreground/5 text-primary-foreground/70 border-primary-foreground/15 hover:border-secondary/50"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input area — fixed at bottom */}
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
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-secondary-foreground/30 border-t-secondary-foreground rounded-full animate-spin" />
            ) : (
              <ArrowRight className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrzaAI;
