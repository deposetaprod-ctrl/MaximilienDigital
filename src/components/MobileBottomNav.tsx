"use client";

import { usePathname, Link } from "@/i18n/routing";
import { Menu, MonitorSmartphone, Plus, Smartphone, Laptop, MessageSquare, Star } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export function MobileBottomNav() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [showAppsMenu, setShowAppsMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on mobile screens
    const handleResize = () => {
      setIsVisible(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close apps menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowAppsMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setShowAppsMenu(false);
  }, [pathname]);

  if (!isVisible) return null;

  const isAppActive = pathname?.includes('/application-');

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#1c1714',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        paddingBottom: 'env(safe-area-inset-bottom)',
        zIndex: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 15px',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.5)'
      }}
    >
      {/* 1. Menu Sandwich */}
      <button 
        onClick={() => document.dispatchEvent(new CustomEvent("open-mobile-menu"))}
        style={{ color: '#a3988e', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', flex: 1 }}
      >
        <Menu size={22} />
      </button>

      {/* 2. Apps Menu (Combined Web & Mobile) */}
      <div ref={menuRef} style={{ position: 'relative', flex: 1, display: 'flex', justifyContent: 'center' }}>
        <button 
          onClick={() => setShowAppsMenu(!showAppsMenu)}
          style={{ color: isAppActive ? '#ffbf3f' : '#a3988e', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <MonitorSmartphone size={22} />
        </button>
        
        {/* Dropdown Menu */}
        {showAppsMenu && (
          <div style={{
            position: 'absolute',
            bottom: '45px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#2a241e',
            borderRadius: '12px',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            minWidth: '160px'
          }}>
            <Link href="/application-web-sur-mesure" style={{ color: pathname === '/application-web-sur-mesure' ? '#ffbf3f' : '#e5e5e5', display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', textDecoration: 'none', borderRadius: '8px', backgroundColor: pathname === '/application-web-sur-mesure' ? 'rgba(255, 191, 63, 0.1)' : 'transparent', fontSize: '14px', fontWeight: 500 }}>
              <Laptop size={18} />
              Web & SaaS
            </Link>
            <Link href="/application-mobile" style={{ color: pathname === '/application-mobile' ? '#ffbf3f' : '#e5e5e5', display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', textDecoration: 'none', borderRadius: '8px', backgroundColor: pathname === '/application-mobile' ? 'rgba(255, 191, 63, 0.1)' : 'transparent', fontSize: '14px', fontWeight: 500 }}>
              <Smartphone size={18} />
              App Mobile
            </Link>
          </div>
        )}
      </div>

      {/* 3. Plus Button (Center) */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <button 
          className="open-brief glow-effect"
          style={{ 
            backgroundColor: '#ffbf3f', 
            color: '#1c1714', 
            width: '42px', 
            height: '42px', 
            borderRadius: '21px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            border: 'none',
            transform: 'translateY(-10px)',
            boxShadow: '0 4px 15px rgba(255, 191, 63, 0.3)',
            cursor: 'pointer'
          }}
        >
          <Plus size={26} />
        </button>
      </div>

      {/* 4. Avis clients */}
      <Link href="/#avis" style={{ color: pathname === '/#avis' ? '#ffbf3f' : '#a3988e', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textDecoration: 'none', flex: 1 }}>
        <Star size={22} />
      </Link>

      {/* 5. Chatbot Message */}
      <button 
        onClick={() => document.dispatchEvent(new CustomEvent("open-chatbot"))}
        style={{ color: '#a3988e', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', border: 'none', background: 'none', cursor: 'pointer', flex: 1 }}
      >
        <MessageSquare size={22} />
      </button>
    </div>
  );
}
