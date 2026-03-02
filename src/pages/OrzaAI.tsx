import { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowLeft, Sparkles, ImagePlus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import type { ChatMessage, Recommendation } from "@/components/orza/types";
import RecommendationView from "@/components/orza/RecommendationView";
import LeadCapturePopup from "@/components/orza/LeadCapturePopup";

const QUESTION_KEYS = ["name", "location", "space", "vibe", "budget", "details"];

const OrzaAI = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentOptions, setCurrentOptions] = useState<string[]>([]);
  const [currentPlaceholder, setCurrentPlaceholder] = useState("Type your answer...");
  const [showPopup, setShowPopup] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, currentOptions]);

  // Fetch the first question on mount
  useEffect(() => {
    fetchQuestion(0);
  }, []);

  const fetchQuestion = async (step: number) => {
    try {
      const { data, error } = await supabase.functions.invoke("orza-ai", {
        body: { phase: "question", step, name: answers.name || "" },
      });
      if (error) throw error;
      if (data.type === "question") {
        setMessages(prev => [...prev, { role: "assistant", content: data.message, options: data.options }]);
        setCurrentOptions(data.options || []);
        setCurrentPlaceholder(data.inputPlaceholder || "Type your answer...");
        setCurrentStep(step);
      } else if (data.type === "ready") {
        generateRecommendation();
      }
    } catch (err: any) {
      console.error("Question fetch error:", err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleOptionSelect = (option: string) => {
    if (isLoading) return;
    const key = QUESTION_KEYS[currentStep] || `step_${currentStep}`;
    const newAnswers = { ...answers, [key]: option };
    setAnswers(newAnswers);
    setCurrentOptions([]);
    setMessages(prev => [...prev, { role: "user", content: option }]);

    const nextStep = currentStep + 1;
    if (nextStep < 6) {
      fetchQuestion(nextStep);
    } else {
      generateRecommendation(newAnswers);
    }
  };

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    handleOptionSelect(input.trim());
    setInput("");
  };

  const generateRecommendation = async (finalAnswers?: Record<string, string>) => {
    const a = finalAnswers || answers;
    setIsLoading(true);
    setMessages(prev => [...prev, { role: "assistant", content: `Crafting your personalized design plan, ${a.name || ""}... ✨` }]);

    try {
      const { data, error } = await supabase.functions.invoke("orza-ai", {
        body: {
          phase: "recommend",
          space: a.space || "Living Room",
          vibe: a.vibe || "Modern & Minimal",
          budget: a.budget || "Not sure yet",
          details: a.details || "None",
          location: a.location || "",
        },
      });
      if (error) throw error;
      if (data?.type === "recommendation") {
        setTimeout(() => setRecommendation(data.data), 600);
      }
    } catch (err: any) {
      console.error("Recommendation error:", err);
      toast.error("Couldn't generate your plan. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([]);
    setInput("");
    setRecommendation(null);
    setCurrentStep(0);
    setAnswers({});
    setCurrentOptions([]);
    setShowPopup(false);
    setTimeout(() => fetchQuestion(0), 100);
  };

  // ──────────── RECOMMENDATION UI ────────────
  if (recommendation) {
    return (
      <>
        <RecommendationView
          recommendation={recommendation}
          onReset={handleReset}
          onDownload={() => setShowPopup(true)}
          onGetSupport={() => setShowPopup(true)}
        />
        <LeadCapturePopup
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          userName={answers.name || ""}
          location={answers.location || ""}
          recommendation={recommendation}
          answers={answers}
        />
      </>
    );
  }

  // ──────────── CHAT UI ────────────
  return (
    <div className="h-[100dvh] bg-primary flex flex-col overflow-hidden">
      {/* Header */}
      <div className="shrink-0 bg-primary border-b border-primary-foreground/10 px-4 py-3 flex items-center gap-3">
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

      {/* Messages area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 pt-4 pb-4 space-y-3">
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

        {/* Loading dots */}
        <AnimatePresence>
          {isLoading && (
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex justify-start">
              <div className="bg-primary-foreground/10 border border-primary-foreground/10 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-1.5 h-1.5 rounded-full bg-secondary/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-1.5 h-1.5 rounded-full bg-secondary/60 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick reply chips */}
        <AnimatePresence>
          {currentOptions.length > 0 && !isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-wrap gap-2 pt-1"
            >
              {currentOptions.map((opt, i) => (
                <motion.button
                  key={opt}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => handleOptionSelect(opt)}
                  className="px-3.5 py-2 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs font-medium hover:bg-secondary hover:text-secondary-foreground transition-all active:scale-95"
                >
                  {opt}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input bar */}
      <div className="shrink-0 px-4 pb-4 pt-2 bg-primary border-t border-primary-foreground/10">
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder={currentPlaceholder}
            disabled={isLoading}
            className="w-full py-3 pl-4 pr-12 rounded-xl bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-secondary/50 transition-colors disabled:opacity-50"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-secondary text-secondary-foreground flex items-center justify-center disabled:opacity-30 transition-opacity"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <button className="flex items-center gap-1.5 mt-2 mx-auto px-3 py-1.5 rounded-lg text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors text-xs">
          <ImagePlus className="w-3.5 h-3.5" />
          <span>Upload photo of your space</span>
        </button>
      </div>
    </div>
  );
};

export default OrzaAI;
