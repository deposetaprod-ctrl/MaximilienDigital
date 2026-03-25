"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/K1pakG7WODOC3tk27RQ42P?mode=gi_t";

export function Navigation() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();

  const navItems = [
    { name: t("nav_home"), href: "/" },
    { name: t("nav_mobile"), href: "/applications-mobiles" },
    { name: t("nav_saas"), href: "/saas" },
    { name: t("nav_offer"), href: "/offre" },
    { name: t("nav_financement"), href: "/financement" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="flex items-center gap-2 sm:gap-4 rounded-full border border-border bg-background/80 px-2 py-1.5 backdrop-blur-md shadow-sm pointer-events-auto">
        
        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors ${
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

        {/* Separator */}
        <div className="w-px h-5 bg-border" />

        {/* Language Toggle */}
        <div className="flex items-center gap-0.5 rounded-full bg-secondary/50 p-0.5">
          <button
            onClick={() => setLocale("fr")}
            className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
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
            className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              locale === "en"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="English"
          >
            EN
          </button>
        </div>

        {/* Separator */}
        <div className="w-px h-5 bg-border hidden sm:block" />

        {/* WhatsApp Button */}
        <a
          href={WHATSAPP_GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors group"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-[0.6rem] font-bold text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            WA
          </span>
          <span>WhatsApp</span>
        </a>

      </div>

      {/* Mobile WhatsApp Button */}
      <a
        href={WHATSAPP_GROUP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="sm:hidden absolute right-4 top-0 inline-flex items-center justify-center h-10 w-10 rounded-full border border-border bg-card shadow-lg pointer-events-auto hover:border-primary/50 group"
        title="WhatsApp"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-[0.6rem] font-bold text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          WA
        </span>
      </a>
    </header>
  );
}
