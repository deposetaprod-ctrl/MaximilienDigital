"use client";

import { contactInfo } from "@/lib/data";
import { Mail, Linkedin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border px-4 py-8">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {year} DIGIMAX. {t("footer_rights")}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={contactInfo.comeup}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
            title="Profil ComeUp (Avis vérifiés)"
          >
            <span className="flex items-center gap-0.5 text-amber-500/80">★ 5.0</span>
            {t("footer_reviews")}
            <ExternalLink className="h-3 w-3" />
          </a>
          <span className="h-4 w-px bg-border hidden sm:block" />
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
