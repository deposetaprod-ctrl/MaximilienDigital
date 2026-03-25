"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface ScrollNotificationPopupProps {
  visible: boolean;
  onCtaClick: () => void;
}

export function ScrollNotificationPopup({
  visible,
  onCtaClick,
}: ScrollNotificationPopupProps) {
  const [dismissed, setDismissed] = useState(false);
  const { t } = useLanguage();

  const shouldShow = visible && !dismissed;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          key="scroll-popup"
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 backdrop-blur-sm shadow-[0_-2px_10px_rgba(0,0,0,0.05)] px-4 py-6 md:py-8"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => setDismissed(true)}
            className="absolute top-3 right-3 rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="mx-auto max-w-6xl flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary shrink-0" />
              <span className="text-foreground font-semibold text-base md:text-lg">
                {t("popup_title")}
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              {t("popup_subtitle")}
            </p>
            <button
              onClick={onCtaClick}
              className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer"
            >
              {t("popup_cta")}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
