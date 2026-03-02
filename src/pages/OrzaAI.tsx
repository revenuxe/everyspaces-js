import { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowLeft, ImagePlus, Camera, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import type { ChatMessage, Recommendation } from "@/components/orza/types";
import { StructuredData } from "@/components/StructuredData";
import RecommendationView from "@/components/orza/RecommendationView";
import LeadCapturePopup from "@/components/orza/LeadCapturePopup";
import orzaLogo from "@/assets/orza-logo.webp";
import orzaIcon from "@/assets/orza-icon.webp";

const OrzaAI = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(6);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentOptions, setCurrentOptions] = useState<string[]>([]);
  const [currentPlaceholder, setCurrentPlaceholder] = useState("Type your answer...");
  const [currentKey, setCurrentKey] = useState("name");
  const [isMultiSelect, setIsMultiSelect] = useState(false);
  const [selectedMulti, setSelectedMulti] = useState<string[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [showImageStep, setShowImageStep] = useState(false);
  const [stepHistory, setStepHistory] = useState<{ step: number; key: string; answer: string }[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, currentOptions, showImageStep]);

  useEffect(() => {
    fetchQuestion(0);
  }, []);

  const fetchQuestion = async (step: number, currentAnswers?: Record<string, string>) => {
    const a = currentAnswers || answers;
    try {
      const { data, error } = await supabase.functions.invoke("orza-ai", {
        body: { phase: "question", step, name: a.name || "", space: a.space || "" },
      });
      if (error) throw error;
      if (data.type === "question") {
        const multiSelect = data.key === "details";
        setMessages(prev => [...prev, { role: "assistant", content: data.message + (multiSelect ? "\n(Select multiple, then tap Done ✓)" : ""), options: data.options }]);
        setCurrentOptions(data.options || []);
        setCurrentPlaceholder(data.inputPlaceholder || "Type your answer...");
        setCurrentStep(step);
        setCurrentKey(data.key || `step_${step}`);
        setIsMultiSelect(multiSelect);
        setSelectedMulti([]);
        if (data.totalSteps) setTotalSteps(data.totalSteps);
      } else if (data.type === "ready") {
        promptImageUpload();
      }
    } catch (err: any) {
      console.error("Question fetch error:", err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const promptImageUpload = () => {
    setShowImageStep(true);
    setCurrentOptions([]);
    setMessages(prev => [
      ...prev,
      {
        role: "assistant",
        content: "📸 Almost done! Want to upload photos of your space? This helps me give more accurate recommendations. You can upload up to 3 photos, or skip.",
      },
    ]);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const newImages: string[] = [];
    const maxImages = 3 - uploadedImages.length;
    const filesToProcess = Math.min(files.length, maxImages);
    for (let i = 0; i < filesToProcess; i++) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          newImages.push(event.target.result as string);
          if (newImages.length === filesToProcess) {
            setUploadedImages(prev => [...prev, ...newImages]);
            setMessages(prev => [
              ...prev,
              { role: "user", content: `📷 Uploaded ${newImages.length} photo${newImages.length > 1 ? "s" : ""}` },
            ]);
          }
        }
      };
      reader.readAsDataURL(files[i]);
    }
    e.target.value = "";
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  const skipOrContinueFromImages = () => {
    setShowImageStep(false);
    if (uploadedImages.length > 0) {
      setMessages(prev => [...prev, { role: "assistant", content: "Great! I'll factor in your space photos. Generating your plan... ✨" }]);
    }
    generateRecommendation();
  };

  const handleOptionSelect = (option: string) => {
    if (isLoading) return;

    // Multi-select mode: toggle selection
    if (isMultiSelect) {
      if (option === "None") {
        setSelectedMulti(["None"]);
      } else {
        setSelectedMulti(prev => {
          const filtered = prev.filter(o => o !== "None");
          return filtered.includes(option) ? filtered.filter(o => o !== option) : [...filtered, option];
        });
      }
      return;
    }

    submitAnswer(option);
  };

  const handleMultiSelectDone = () => {
    if (selectedMulti.length === 0) return;
    const combined = selectedMulti.join(", ");
    submitAnswer(combined);
    setIsMultiSelect(false);
    setSelectedMulti([]);
  };

  const submitAnswer = (option: string) => {
    // Save history for back navigation
    setStepHistory(prev => [...prev, { step: currentStep, key: currentKey, answer: option }]);

    const newAnswers = { ...answers, [currentKey]: option };
    setAnswers(newAnswers);
    setCurrentOptions([]);
    setMessages(prev => [...prev, { role: "user", content: option }]);
    setIsLoading(true);

    const nextStep = currentStep + 1;
    setTimeout(() => {
      setIsLoading(false);
      fetchQuestion(nextStep, newAnswers);
    }, 500);
  };

  const handleGoBack = () => {
    if (isLoading || stepHistory.length === 0) return;
    if (showImageStep) {
      setShowImageStep(false);
      setUploadedImages([]);
      // Remove image prompt message
      setMessages(prev => prev.filter((_, i) => i < prev.length - 1));
      const lastEntry = stepHistory[stepHistory.length - 1];
      fetchQuestion(lastEntry.step + 1 > currentStep ? currentStep : lastEntry.step + 1, answers);
      return;
    }

    const lastEntry = stepHistory[stepHistory.length - 1];
    const newHistory = stepHistory.slice(0, -1);
    setStepHistory(newHistory);

    // Remove the last answer
    const newAnswers = { ...answers };
    delete newAnswers[lastEntry.key];
    setAnswers(newAnswers);

    // Remove last 2 messages (user answer + assistant question)
    setMessages(prev => prev.slice(0, -2));

    // Re-fetch the previous question
    fetchQuestion(lastEntry.step, newAnswers);
  };

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    if (showImageStep) {
      skipOrContinueFromImages();
      return;
    }
    handleOptionSelect(input.trim());
    setInput("");
  };

  const generateRecommendation = async () => {
    setIsLoading(true);
    setMessages(prev => [...prev, { role: "assistant", content: `Crafting your personalized design plan, ${answers.name || ""}... ✨` }]);

    try {
      const { data, error } = await supabase.functions.invoke("orza-ai", {
        body: {
          phase: "recommend",
          allAnswers: answers,
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
    setTotalSteps(6);
    setAnswers({});
    setCurrentOptions([]);
    setShowPopup(false);
    setUploadedImages([]);
    setShowImageStep(false);
    setStepHistory([]);
    setTimeout(() => fetchQuestion(0), 100);
  };

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
  const progressPercent = Math.min((currentStep / totalSteps) * 100, 100);

  return (
    <div className="h-[100dvh] bg-white flex flex-col overflow-hidden">
      <Helmet>
        <title>Orza AI – Free Interior Design Advisor | Intorza Bangalore</title>
        <meta name="description" content="Get instant AI-powered interior design recommendations for your Bangalore home. Free personalized ideas for kitchens, bedrooms, living rooms & more – budget, materials, colors in 2 minutes." />
        <meta name="keywords" content="AI interior design tool, free interior design advisor, home decor AI, modular kitchen planner, bedroom design ideas Bangalore, AI home designer, interior design cost calculator" />
        <link rel="canonical" href="https://intorza.com/orza-ai" />
        <meta property="og:title" content="Orza AI – Free Interior Design Advisor | Intorza" />
        <meta property="og:description" content="Get instant AI-powered interior design recommendations for your Bangalore home. Personalized ideas in 2 minutes – 100% free." />
        <meta property="og:url" content="https://intorza.com/orza-ai" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Orza AI – Free Interior Design Advisor | Intorza" />
        <meta name="twitter:description" content="Get instant AI-powered interior design recommendations for your Bangalore home. Free personalized ideas in 2 minutes." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <StructuredData data={[
        {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Orza AI – Interior Design Advisor",
          "url": "https://intorza.com/orza-ai",
          "description": "Free AI-powered interior design recommendation tool. Get personalized ideas for kitchens, bedrooms, living rooms and more – colors, materials, budget & timeline in 2 minutes.",
          "applicationCategory": "DesignApplication",
          "operatingSystem": "Web",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "520", "bestRating": "5" },
          "creator": { "@type": "Organization", "name": "Intorza Interior Design", "url": "https://intorza.com" },
          "browserRequirements": "Requires JavaScript. Works on all modern browsers.",
          "featureList": "AI-Powered Recommendations, Budget Planning, Material Suggestions, Color Palette, Timeline Estimation, Mood Board Generation"
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://intorza.com/orza-ai#faq",
          "mainEntity": [
            { "@type": "Question", "name": "Is Orza AI free to use?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Orza AI is 100% free. Get personalized interior design recommendations without any cost." }},
            { "@type": "Question", "name": "How does Orza AI work?", "acceptedAnswer": { "@type": "Answer", "text": "Answer a few quick questions about your space, budget, and style preferences. Orza AI generates a complete design recommendation with colors, materials, furniture, and budget breakdown in under 2 minutes." }},
            { "@type": "Question", "name": "What spaces can Orza AI design?", "acceptedAnswer": { "@type": "Answer", "text": "Orza AI covers modular kitchens, bedrooms, living rooms, wardrobes, TV units, pooja rooms, kids rooms, study rooms, bathrooms, balconies, and full home interiors." }}
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://intorza.com/" },
            { "@type": "ListItem", "position": 2, "name": "Orza AI – Interior Design Advisor", "item": "https://intorza.com/orza-ai" }
          ]
        }
      ]} />
      {/* Header - White */}
      <div className="shrink-0 bg-white border-b border-border px-4 py-3">
        <div className="flex items-center gap-3">
          <button onClick={() => stepHistory.length > 0 ? handleGoBack() : navigate(-1)} className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
            <ArrowLeft className="w-4 h-4 text-foreground" />
          </button>
          <img src={orzaLogo} alt="Orza AI" className="h-7 object-contain" />
          <div className="flex-1" />
          {!showImageStep && (
            <span className="text-[10px] text-muted-foreground font-medium">
              {currentStep + 1}/{totalSteps}
            </span>
          )}
        </div>
        {/* Progress bar */}
        {!showImageStep && (
          <div className="mt-2 h-0.5 bg-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-secondary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}
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
              {msg.role === "assistant" && (
                <img src={orzaIcon} alt="Orza" className="w-6 h-6 rounded-full mr-2 mt-1 shrink-0 bg-white object-contain" />
              )}
              <div
                className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                  msg.role === "user"
                    ? "bg-secondary text-secondary-foreground rounded-br-sm"
                    : "bg-muted text-primary border border-border rounded-bl-sm"
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
              <img src={orzaIcon} alt="Orza" className="w-6 h-6 rounded-full mr-2 mt-1 shrink-0 bg-white object-contain" />
              <div className="bg-muted border border-border rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5">
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
              className="flex flex-wrap gap-2 pt-1 pl-8"
            >
              {currentOptions.map((opt, i) => {
                const isSelected = isMultiSelect && selectedMulti.includes(opt);
                return (
                  <motion.button
                    key={opt}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      scale: isSelected ? 1.05 : 1,
                      boxShadow: isSelected ? "0 0 0 2px hsl(var(--secondary))" : "0 0 0 0px transparent",
                    }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20, delay: i * 0.04 }}
                    onClick={() => handleOptionSelect(opt)}
                    className={`px-3.5 py-2 rounded-full border text-xs font-medium transition-colors ${
                      isSelected
                        ? "bg-secondary text-secondary-foreground border-secondary"
                        : "bg-secondary/10 border-secondary/30 text-secondary hover:bg-secondary hover:text-secondary-foreground"
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {isMultiSelect && isSelected && (
                        <motion.span
                          key="check"
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: "auto", opacity: 1 }}
                          exit={{ width: 0, opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="inline-block overflow-hidden"
                        >
                          ✓{" "}
                        </motion.span>
                      )}
                    </AnimatePresence>
                    {opt}
                  </motion.button>
                );
              })}
              {isMultiSelect && selectedMulti.length > 0 && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={handleMultiSelectDone}
                  className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all active:scale-95"
                >
                  Done ✓
                </motion.button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image upload step */}
        <AnimatePresence>
          {showImageStep && !isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="pl-8 space-y-3"
            >
              {uploadedImages.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {uploadedImages.map((img, i) => (
                    <div key={i} className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-secondary/30">
                      <img src={img} alt={`Upload ${i + 1}`} className="w-full h-full object-cover" />
                      <button onClick={() => removeImage(i)} className="absolute top-0.5 right-0.5 w-5 h-5 rounded-full bg-destructive/80 flex items-center justify-center">
                        <X className="w-3 h-3 text-white" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex gap-2">
                {uploadedImages.length < 3 && (
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/10 border border-secondary/30 text-secondary text-xs font-medium hover:bg-secondary hover:text-secondary-foreground transition-all"
                  >
                    <Camera className="w-4 h-4" />
                    Upload Photo{uploadedImages.length > 0 ? ` (${3 - uploadedImages.length} left)` : ""}
                  </button>
                )}
                <button
                  onClick={skipOrContinueFromImages}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  {uploadedImages.length > 0 ? "Continue →" : "Skip & Continue →"}
                </button>
              </div>
              <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleImageUpload} className="hidden" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input bar */}
      <div className="shrink-0 px-4 pb-4 pt-2 bg-white border-t border-border">
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder={showImageStep ? "Or type 'skip' to continue..." : currentPlaceholder}
            disabled={isLoading}
            className="w-full py-3 pl-4 pr-12 rounded-xl bg-muted border border-border text-primary placeholder:text-muted-foreground text-sm focus:outline-none focus:border-secondary/50 transition-colors disabled:opacity-50"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-secondary text-secondary-foreground flex items-center justify-center disabled:opacity-30 transition-opacity"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-1.5 mt-2 mx-auto px-3 py-1.5 rounded-lg text-muted-foreground hover:text-primary transition-colors text-xs"
        >
          <ImagePlus className="w-3.5 h-3.5" />
          <span>Upload photo of your space</span>
        </button>
      </div>
    </div>
  );
};

export default OrzaAI;
