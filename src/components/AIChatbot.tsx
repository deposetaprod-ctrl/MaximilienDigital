"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, User, MessageCircle, Sparkles, FileText, GraduationCap } from "lucide-react";
import { useChat } from "@ai-sdk/react";
import { trackClick, trackChat } from "@/lib/analytics";
import Image from "next/image";

type View = "closed" | "menu" | "chat";

export function AIChatbot() {
  const [view, setView] = useState<View>("closed");
  const { messages, sendMessage, status, stop } = useChat();
  const [input, setInput] = useState("");
  const isLoading = status === "submitted" || status === "streaming";
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    // Vercel AI SDK 4 uses standard message format with parts
    sendMessage({ role: "user", parts: [{ type: "text", text: input }] } as any);
    setInput("");
  };
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
    
    // Save chat history to CRM when messages change
    if (messages.length > 0 && status !== "streaming") {
      trackChat(messages);
    }
  }, [messages, isLoading, status]);

  useEffect(() => {
    const handleOpenChatbot = () => setView("menu");
    document.addEventListener("open-chatbot", handleOpenChatbot);
    return () => document.removeEventListener("open-chatbot", handleOpenChatbot);
  }, []);

  function handleScrollToForm() {
    setView("closed");
    const dialog = document.getElementById("brief") as HTMLDialogElement;
    if (dialog) dialog.showModal();
  }

  return (
    <>
      {/* ── Floating Bubble ── */}
      <AnimatePresence>
        {view === "closed" && (
          <motion.button
            key="bubble"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setView("menu");
              trackClick("open_chatbot_menu");
            }}
            className="hidden md:flex fixed bottom-20 md:bottom-6 right-6 z-50 items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-2xl shadow-primary/40 border border-primary/20 transition-colors"
            aria-label="Ouvrir le menu d'aide"
          >
            <MessageCircle className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Quick Menu ── */}
      <AnimatePresence>
        {view === "menu" && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setView("closed")}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
            />
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-20 md:bottom-6 right-6 z-50 w-72 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-4 border-b border-border bg-secondary/30">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-foreground">Comment puis-je vous aider ?</p>
                  <button
                    onClick={() => setView("closed")}
                    className="p-1 hover:bg-secondary rounded-full transition-colors"
                  >
                    <X className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
              <div className="p-3 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setView("chat");
                    trackClick("open_chatbot_chat");
                  }}
                  className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-secondary/60 transition-colors text-left group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Poser une question</p>
                    <p className="text-xs text-muted-foreground">Notre assistant IA vous répond</p>
                  </div>
                </button>
                <button
                  onClick={() => {
                    handleScrollToForm();
                    trackClick("click_chatbot_maquette_gratuite");
                  }}
                  className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-secondary/60 transition-colors text-left group"
                >
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                    <FileText className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Maquette Gratuite</p>
                    <p className="text-xs text-muted-foreground">Recevez votre maquette en 48h</p>
                  </div>
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/formation';
                    trackClick("click_chatbot_me_former");
                  }}
                  className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-secondary/60 transition-colors text-left group"
                >
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                    <GraduationCap className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Me former</p>
                    <p className="text-xs text-muted-foreground">Apprendre à créer vos apps</p>
                  </div>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Chat Window ── */}
      <AnimatePresence>
        {view === "chat" && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-20 md:bottom-6 right-6 z-50 flex flex-col w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary px-4 py-3 flex items-center justify-between text-primary-foreground shadow-sm relative z-10">
              <div className="flex items-center gap-2">
                <div className="bg-background/20 p-0.5 rounded-full overflow-hidden">
                  <Image src="/max.png" alt="Maximilien" width={32} height={32} className="h-8 w-8 object-cover rounded-full" />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-none mb-0.5">Assistant IA</h3>
                  <p className="text-xs text-primary-foreground/70 font-medium">Maximilien Digital</p>
                </div>
              </div>
              <button
                onClick={() => setView("closed")}
                className="p-1 hover:bg-background/20 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-secondary/10 relative">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center opacity-70">
                  <Image src="/max.png" alt="Maximilien" width={64} height={64} className="h-16 w-16 object-cover rounded-full mb-3 shadow-md border-2 border-primary/20" />
                  <p className="text-sm font-medium text-muted-foreground max-w-[250px]">
                    Bonjour ! Je suis l&apos;assistant IA de Maximilien. Posez-moi vos questions sur nos applications Web ou Mobiles !
                  </p>
                </div>
              )}

              {messages.map((m) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={m.id}
                  className={`flex items-start gap-2 max-w-[85%] ${m.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"}`}
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full overflow-hidden flex items-center justify-center ${m.role === "user" ? "bg-primary/20 text-primary" : "bg-primary shadow-sm"}`}>
                    {m.role === "user" ? <User className="h-4 w-4" /> : <Image src="/max.png" alt="Maximilien" width={32} height={32} className="h-full w-full object-cover" />}
                  </div>
                  <div className={`p-3 text-sm rounded-2xl ${m.role === "user" ? "bg-primary/10 text-foreground border border-primary/20 rounded-tr-sm" : "bg-card border border-border shadow-sm rounded-tl-sm text-card-foreground whitespace-pre-wrap"}`}>
                    {m.parts?.filter((p: any) => p.type === "text").map((p: any) => p.text).join("") || (m as any).content || ""}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <div className="flex items-start gap-2 max-w-[85%] mr-auto">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-primary shadow-sm">
                    <Image src="/max.png" alt="Maximilien" width={32} height={32} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4 rounded-2xl bg-card border border-border shadow-sm rounded-tl-sm flex items-center gap-1.5">
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 bg-card border-t border-border flex items-center gap-2">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Écrivez votre message..."
                className="flex-1 bg-secondary border border-border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-primary text-primary-foreground w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 disabled:opacity-50 transition-colors shadow-sm"
              >
                <Send className="h-4 w-4 ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
