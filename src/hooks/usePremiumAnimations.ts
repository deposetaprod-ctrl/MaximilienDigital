"use client";

import { useEffect } from "react";

export function usePremiumAnimations() {
  useEffect(() => {
    document.documentElement.classList.add('js');
    
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const mobile = matchMedia('(max-width: 600px)');
    
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    
    reveals.forEach(e => io.observe(e));
    
    const services = document.querySelector('.services') as HTMLElement;
    const track = document.querySelector('.track') as HTMLElement;
    const progress = document.querySelector('.progress i') as HTMLElement;
    const hero = document.querySelector('.hero, .landing-hero') as HTMLElement;
    const desktop = document.querySelector('.desktop') as HTMLElement;
    const phone = document.querySelector('.phone') as HTMLElement;
    const note = document.querySelector('.note') as HTMLElement;
    const appFirst = document.querySelector('.app-render.first') as HTMLElement;
    const appSecond = document.querySelector('.app-render.second') as HTMLElement;
    
    let ticking = false;
    
    function draw() {
      ticking = false;
      
      if (reduced.matches) {
        [desktop, phone, note, track, appFirst, appSecond].forEach(e => {
          if (e) e.style.transform = '';
        });
        return;
      }
      
      if (hero) {
        const y = Math.min(Math.max(-hero.getBoundingClientRect().top, 0), 1000);
        
        if (desktop && phone && note) {
          desktop.style.transform = `translateX(${-y * 0.12}px) translateY(${y * 0.04}px) rotate(${-3 - y * 0.008}deg)`;
          phone.style.transform = `translateX(${y * 0.20}px) translateY(${-y * 0.05}px) rotate(${10 + y * 0.016}deg)`;
          note.style.transform = `translateX(${-y * 0.24}px) rotate(${-10 - y * 0.015}deg)`;
        }
        
        if (appFirst && appSecond) {
          appFirst.style.transform = `translateX(${-y * 0.16}px) rotate(${-6 - y * 0.008}deg)`;
          appSecond.style.transform = `translateX(${y * 0.16}px) rotate(${8 + y * 0.008}deg)`;
        }
      }
      
      if (services && track && progress && !mobile.matches) {
        const sticky = document.querySelector('.services-sticky') as HTMLElement;
        if (sticky) {
          const r = services.getBoundingClientRect();
          const distance = services.offsetHeight - sticky.offsetHeight;
          const p = Math.max(0, Math.min(1, (83 - r.top) / distance));
          const overflow = Math.max(0, track.scrollWidth - window.innerWidth);
          
          track.style.transform = `translateX(${-p * overflow}px)`;
          progress.style.width = `${p * 100}%`;
        }
      } else if (track) {
        track.style.transform = '';
      }
      
      // Mobile benefits scroll track
      const mobSection = document.querySelector(".mobile-benefits") as HTMLElement;
      const mobTrack = document.querySelector(".benefit-track") as HTMLElement;
      if (mobSection && mobTrack) {
        if (mobile.matches) {
          mobTrack.style.transform = "";
        } else {
          const sticky = mobSection.firstElementChild as HTMLElement;
          const p = Math.max(0, Math.min(1, (90 - mobSection.getBoundingClientRect().top) / (mobSection.offsetHeight - sticky.offsetHeight)));
          mobTrack.style.transform = `translateX(${-p * Math.max(0, mobTrack.scrollWidth - window.innerWidth)}px)`;
        }
      }
    }
    
    function schedule() {
      if (!ticking) {
        requestAnimationFrame(draw);
        ticking = true;
      }
    }
    
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    reduced.addEventListener('change', schedule);
    
    draw();
    
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      reduced.removeEventListener('change', schedule);
      io.disconnect();
    };
  }, []);
}
