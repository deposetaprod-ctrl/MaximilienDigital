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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* LOGO */}
            <Link href="/" className="brand" onClick={() => trackClick("nav_logo")} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/cellequejeprefere_rounded.png" alt="Maximilien" style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #46362c' }} />
              <div className="brand-text">maximilien<span>.digital</span></div>
            </Link>

            {/* COMEUP AWARD BADGE */}
            <a 
              href="https://comeup.com/fr/service/382688/developper-votre-application-mobile-ou-web-sur-mesure" 
              target="_blank" 
              rel="noopener noreferrer"
              className="award-badge-header"
              title="Certification Top Service sur ComeUp"
            >
              <div className="award-seal">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffbf3f" stroke="#ffbf3f" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <div className="award-text-wrapper">
                <span className="award-title">TOP SERVICE</span>
                <span className="award-subtitle">sur ComeUp</span>
              </div>
            </a>
          </div>

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
            <button className="nav-cta open-brief glow-effect" type="button">
              Votre maquette gratuite
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
              {/* MOBILE COMEUP BADGE */}
              <a 
                href="https://comeup.com/fr/service/382688/developper-votre-application-mobile-ou-web-sur-mesure" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 16px",
                  borderRadius: "15px",
                  background: "rgba(255, 191, 63, 0.1)",
                  border: "1px solid rgba(255, 191, 63, 0.2)",
                  textDecoration: "none",
                  marginBottom: "20px"
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffbf3f" stroke="#ffbf3f" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}>
                  <strong style={{ fontWeight: 600, fontSize: "16px", color: "#f1eee8" }}>Top Service sur ComeUp</strong>
                  <span style={{ fontSize: "12px", color: "#a3988e" }}>Voir les avis</span>
                </div>
              </a>

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
              <button className="open-existing-mockup" type="button" style={{ display: "block", width: "100%", margin: "16px 0 0", background: "transparent", border: "none", color: "#bbaa99", textDecoration: "underline", fontSize: "13px", cursor: "pointer", textAlign: "center" }}>
                J'ai déjà une maquette
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .award-badge-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 5px 10px 5px 6px;
          border-radius: 4px;
          border: 1px solid rgba(255, 191, 63, 0.25);
          background: linear-gradient(135deg, rgba(255, 191, 63, 0.1), rgba(255, 191, 63, 0.02));
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 191, 63, 0.05);
        }
        .award-badge-header:hover {
          border-color: rgba(255, 191, 63, 0.5);
          background: linear-gradient(135deg, rgba(255, 191, 63, 0.15), rgba(255, 191, 63, 0.05));
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(255, 191, 63, 0.1);
        }
        .award-seal {
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 0 4px rgba(255, 191, 63, 0.5));
        }
        .award-text-wrapper {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }
        .award-title {
          font-weight: 800;
          font-size: 11px;
          color: #ffbf3f;
          letter-spacing: 0.5px;
        }
        .award-subtitle {
          font-size: 9px;
          color: #d1c5b8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        @media (max-width: 950px) {
          .comeup-badge-desktop {
            display: none !important;
          }
        }
        @media (max-width: 600px) {
          .award-badge-header {
            padding: 4px 8px 4px 5px;
            gap: 6px;
          }
          .award-seal svg {
            width: 16px;
            height: 16px;
          }
          .award-title {
            font-size: 9px;
          }
          .award-subtitle {
            font-size: 7.5px;
          }
        }
      `}</style>
    </>
  );
}
