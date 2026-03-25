"use client";

import { Dialog } from "@base-ui/react";
import { X, MessageCircle, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/K1pakG7WODOC3tk27RQ42P?mode=gi_t";

interface QuickContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function QuickContactModal({ open, onOpenChange }: QuickContactModalProps) {
  const [submitting, setSubmitting] = useState(false);
  const { t } = useLanguage();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const phone = (formData.get("phone") as string)?.trim();
    if (!phone) return;

    setSubmitting(true);

    const body =
      "Bonjour,\n\nJe souhaite être recontacté par téléphone.\n\nTéléphone : " +
      phone +
      "\n\n(Message envoyé depuis le formulaire rapide du site.)";

    window.location.href =
      "mailto:Maximilien.godeau.off@gmail.com" +
      "?subject=" +
      encodeURIComponent("Demande de rappel (formulaire rapide)") +
      "&body=" +
      encodeURIComponent(body);

    setSubmitting(false);
    onOpenChange(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0" />
        <Dialog.Popup className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95">
          <div className="relative w-full max-w-sm rounded-xl bg-card p-6 shadow-xl md:p-7 border border-border">
            <Dialog.Close className="absolute right-4 top-4 rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer">
              <X className="h-5 w-5" />
            </Dialog.Close>

            <div className="flex items-center gap-2 mb-2">
              <Phone className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">{t("qc_title")}</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{t("qc_subtitle")}</p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label
                  htmlFor="quick-phone"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  {t("qc_phone_label")} <span className="text-destructive">*</span>
                </label>
                <input
                  id="quick-phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-colors"
                  placeholder={t("qc_phone_placeholder")}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {t("qc_submit")}
              </button>
            </form>

            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-black hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" />
              {t("qc_whatsapp")}
            </a>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
