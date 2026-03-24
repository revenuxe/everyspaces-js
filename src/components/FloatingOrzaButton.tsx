import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { X, Send, Sparkles, ArrowRight, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import orzaIcon from "@/assets/orza-icon.webp";
import { imgSrc } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const QUICK_PROMPTS = [
  "What's the cost for a modular kitchen?",
  "How long does a 2BHK interior take?",
  "Do you serve my area in Bangalore?",
  "What styles are trending in 2025?",
];

const FloatingOrzaButton = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Hide on Orza AI page and admin pages
  if ((pathname ?? "") === "/orza-ai" || (pathname ?? "").startsWith("/admin")) {
    return null;
  }


  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    setHasInteracted(true);
    const userMsg: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("orza-chat", {
        body: {
          messages: newMessages,
          page: pathname,
        },
      });

      if (error) throw error;

      const assistantMsg: Message = {
        role: "assistant",
        content: data.reply || "Sorry, I couldn't process that. Try asking differently!",
      };
      setMessages([...newMessages, assistantMsg]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Oops! Something went wrong 😅 Try **[our full design tool](/orza-ai)** or **[contact us](/contact)**!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="hidden md:flex fixed bottom-24 right-8 z-50 w-[380px] h-[520px] flex-col rounded-3xl bg-background border border-border shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 bg-primary text-primary-foreground">
            <img src={imgSrc(orzaIcon)} alt="Orza" className="w-9 h-9 rounded-full object-contain bg-white p-0.5" />
            <div className="flex-1">
              <h3 className="font-bold text-sm">Orza AI Assistant</h3>
              <p className="text-xs opacity-80">Interior design help • Instant answers</p>
            </div>
            <Link
              href="/orza-ai"
              className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full transition-colors flex items-center gap-1"
            >
              Full Tool <ArrowRight className="w-3 h-3" />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {/* Welcome message */}
            {!hasInteracted && (
              <div className="space-y-4">
                <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3">
                  <p className="text-sm text-foreground">
                    Hey! 👋 I'm <strong>Orza</strong>, your interior design assistant. Ask me anything about home interiors, pricing, or styles!
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground font-medium px-1">Quick questions:</p>
                  {QUICK_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => sendMessage(prompt)}
                      className="w-full text-left text-sm px-4 py-2.5 rounded-xl border border-border hover:bg-accent hover:border-secondary/30 transition-all duration-200 text-foreground"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                    msg.role === "user"
                      ? "bg-secondary text-secondary-foreground rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <div className="prose prose-sm max-w-none [&_p]:m-0 [&_strong]:text-foreground [&_a]:text-secondary [&_a]:underline">
                      <ReactMarkdown
                        components={{
                          a: ({ href, children }) => (
                            <Link href={href || "/"} className="text-secondary underline font-medium" onClick={() => setIsOpen(false)}>
                              {children}
                            </Link>
                          ),
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="px-4 pb-4 pt-2 border-t border-border">
            <div className="flex items-center gap-2 bg-muted rounded-xl px-3 py-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about interiors..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 disabled:opacity-40 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-muted-foreground mt-2 text-center">
              For detailed design plans, try{" "}
              <Link href="/orza-ai" className="text-secondary underline" onClick={() => setIsOpen(false)}>
                Orza AI Full Tool
              </Link>
            </p>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`hidden md:flex fixed bottom-8 right-8 z-50 items-center gap-2.5 px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group ${
          isOpen
            ? "bg-muted text-foreground"
            : "bg-primary text-primary-foreground"
        }`}
      >
        {isOpen ? (
          <>
            <X className="w-5 h-5" />
            <span className="text-sm font-semibold">Close</span>
          </>
        ) : (
          <>
            <img src={imgSrc(orzaIcon)} alt="Orza" className="w-7 h-7 rounded-full object-contain bg-white" />
            <span className="text-sm font-semibold">Ask Orza</span>
            <Sparkles className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
          </>
        )}
      </button>
    </>
  );
};

export default FloatingOrzaButton;
