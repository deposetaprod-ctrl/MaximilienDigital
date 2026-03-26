"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2 } from "lucide-react";

interface SimplifiedContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SimplifiedContactModal({ open, onOpenChange }: SimplifiedContactModalProps) {
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !phone) return;

    setStatus("sending");

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Blog Lead (Simplified)",
          email: "no-email@provided.com",
          phone,
          description,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          onOpenChange(false);
          setStatus("idle");
          setDescription("");
          setPhone("");
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onOpenChange(false)}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg rounded-[2.5rem] border border-border bg-card p-8 shadow-2xl overflow-hidden"
          >
            {/* Background Gradient */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Nous parler de votre projet</h2>
                  <p className="text-sm text-muted-foreground mt-1">Réponse ultra-rapide sous 24h.</p>
                </div>
                <button
                  onClick={() => onOpenChange(false)}
                  className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 text-center"
                >
                  <div className="h-16 w-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message envoyé !</h3>
                  <p className="text-muted-foreground">On vous rappelle très vite.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-1">
                      Décrire votre projet
                    </label>
                    <textarea
                      id="description"
                      required
                      placeholder="Une idée de SaaS, une app mobile, un besoin IA..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full min-h-[120px] rounded-3xl bg-secondary/50 border border-border px-6 py-4 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none placeholder:text-muted-foreground/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold uppercase tracking-wider text-muted-foreground ml-1">
                      Votre numéro de téléphone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="06 12 34 56 78"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-14 rounded-full bg-secondary/50 border border-border px-6 text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground/50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full h-16 rounded-full bg-primary text-primary-foreground font-bold hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2 group shadow-lg shadow-primary/20"
                  >
                    {status === "sending" ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <>
                        <span>Envoyer ma demande</span>
                        <Send size={18} className="translate-y-[1px] group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-center text-xs text-destructive font-medium">
                      Une erreur est survenue. Veuillez réessayer.
                    </p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
