"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/K1pakG7WODOC3tk27RQ42P?mode=gi_t";

export function Navigation() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Close menu when clicking outside (simple version)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: t("nav_home"), href: "/" },
    { name: t("nav_mobile"), href: "/applications-mobiles" },
    { name: t("nav_saas"), href: "/saas" },
    { name: t("nav_offer"), href: "/offre" },
    { name: t("nav_financement"), href: "/financement" },
  ];

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="flex items-center gap-2 sm:gap-4 rounded-full border border-border bg-background/80 px-2 py-1.5 backdrop-blur-md shadow-sm pointer-events-auto">
          
          {/* Desktop Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Current Page Indicator (Optional, but helps keep the pill small) */}
          <div className="md:hidden flex items-center px-3 py-1.5">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              {navItems.find(item => item.href === pathname)?.name || "Menu"}
            </span>
          </div>

          {/* Separator */}
          <div className="w-px h-5 bg-border" />

          {/* Language Toggle (Always visible) */}
          <div className="flex items-center gap-0.5 rounded-full bg-secondary/50 p-0.5">
            <button
              onClick={() => setLocale("fr")}
              className={`px-2.5 py-1 text-[10px] sm:text-xs font-semibold rounded-full transition-all cursor-pointer ${
                locale === "fr"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Français"
            >
              FR
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`px-2.5 py-1 text-[10px] sm:text-xs font-semibold rounded-full transition-all cursor-pointer ${
                locale === "en"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>

          {/* Desktop WhatsApp & Separator */}
          <div className="hidden md:flex items-center gap-2 sm:gap-4">
            <div className="w-px h-5 bg-border" />
            <a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors group"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-[0.6rem] font-bold text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                WA
              </span>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-lg pt-24 px-6 flex flex-col gap-8"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname?.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-2xl font-bold transition-colors ${
                      isActive ? "text-primary" : "text-foreground/60"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 pt-8 border-t border-border">
              <a
                href={WHATSAPP_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-6 rounded-3xl bg-primary/10 text-primary"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground">
                    <MessageCircle size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold">WhatsApp</span>
                    <span className="text-xs opacity-70">Contact direct & réactvité</span>
                  </div>
                </div>
                <div className="h-10 w-10 rounded-full border border-primary/20 flex items-center justify-center">
                  →
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
