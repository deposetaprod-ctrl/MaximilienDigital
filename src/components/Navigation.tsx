"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { trackClick } from "@/lib/analytics";
import { X } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Listen for open-mobile-menu event
  useEffect(() => {
    const handleOpenMenu = () => setIsMenuOpen((prev) => !prev);
    document.addEventListener("open-mobile-menu", handleOpenMenu);
    return () => document.removeEventListener("open-mobile-menu", handleOpenMenu);
  }, []);

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
      <header className="top hidden md:block" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, pointerEvents: "none" }}>
        {/* pointerEvents: none on header to allow clicking through it, auto on nav to make it clickable */}
        <nav className="nav shell" aria-label="Navigation principale" style={{ pointerEvents: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* LOGO */}
            <Link href="/" className="brand" onClick={() => trackClick("nav_logo")} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/cellequejeprefere_rounded.png" alt="Maximilien" width={32} height={32} style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #46362c' }} />
              <div className="brand-text">maximilien<span>.digital</span></div>
            </Link>
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

      {/* MOBILE MENU DROPDOWN (CSS transitions instead of framer-motion) */}
      <div
        style={{ 
          position: "fixed", 
          inset: 0, 
          zIndex: 45, 
          backgroundColor: "rgba(20, 15, 12, 0.7)", 
          backdropFilter: "blur(12px)", 
          WebkitBackdropFilter: "blur(12px)",
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: "center",
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? "auto" : "none",
          transition: "opacity 0.25s ease"
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "#ffbf3f",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer"
          }}
          aria-label="Fermer le menu"
        >
          <X size={24} />
        </button>

        <nav id="mobile-nav" style={{ width: "85%", maxWidth: "400px", background: "transparent", border: "none", boxShadow: "none" }}>
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
                style={{ 
                  textDecoration: "none", 
                  fontSize: "22px", 
                  textAlign: "center",
                  display: "block",
                  padding: "16px",
                  marginBottom: "8px",
                  color: isActive ? "#ffbf3f" : "#f1eee8",
                  fontWeight: isActive ? "600" : "400",
                  background: isActive ? "rgba(255, 191, 63, 0.1)" : "transparent",
                  borderRadius: "12px"
                }}
              >
                {item.name}
              </Link>
            );
          })}
          <button 
            className="nav-cta open-brief" 
            style={{ marginTop: "30px", padding: "18px", width: "100%", fontSize: "18px", borderRadius: "30px", border: "none", fontWeight: "600" }}
          >
            Recevoir ma maquette
          </button>
          <button className="open-existing-mockup" type="button" style={{ display: "block", width: "100%", margin: "20px 0 0", background: "transparent", border: "none", color: "#bbaa99", textDecoration: "underline", fontSize: "15px", cursor: "pointer", textAlign: "center" }}>
            J'ai déjà une maquette
          </button>
        </nav>
      </div>

    </>
  );
}
