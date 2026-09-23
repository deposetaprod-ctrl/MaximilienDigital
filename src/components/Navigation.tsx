"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { trackClick } from "@/lib/analytics";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
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
    { name: "Accueil", href: "/" },
    { name: "Sites & Web Apps", href: "/application-web-sur-mesure" },
    { name: "Apps mobiles", href: "/application-mobile" },
    { name: "Formation", href: "/formation" },
    { name: "Avis clients", href: "/#avis" },
    { name: "Devis", href: "/devis" },
  ];

  

  return (
    <>
      <header className="top" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, pointerEvents: "none" }}>
        {/* pointerEvents: none on header to allow clicking through it, auto on nav to make it clickable */}
        <nav className="nav shell" aria-label="Navigation principale" style={{ pointerEvents: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          {/* LOGO */}
          <Link href="/" className="brand" onClick={() => trackClick("nav_logo")} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/max.png" alt="Maximilien" style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #46362c' }} />
            <div>maximilien<span>.digital</span></div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="links">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => trackClick(`nav_${item.name}`)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="nav-actions" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* CTA BUTTON */}
            <button className="nav-cta open-brief" type="button">
              Parlons de votre idée <span style={{ marginLeft: "8px" }}>↗&#xFE0E;&#xFE0E;</span>
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>

        </nav>
      </header>

      {/* MOBILE MENU DROPDOWN (Framer Motion) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{ position: "fixed", top: "75px", left: 0, right: 0, zIndex: 40 }}
          >
            <nav id="mobile-nav">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      trackClick(`nav_mobile_${item.name}`);
                      setIsMenuOpen(false);
                    }}
                    aria-current={isActive ? "page" : undefined}
                    style={{ textDecoration: "none" }}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <button 
                className="nav-cta open-brief" 
                style={{ marginTop: "20px", padding: "16px", width: "100%", fontSize: "16px", borderRadius: "30px", border: "none" }}
              >
                Recevoir ma maquette
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
