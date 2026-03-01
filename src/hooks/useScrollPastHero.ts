"use client";

import { useEffect, useState, useCallback, useRef } from "react";

export function useScrollPastHero() {
  const [hasScrolledPast, setHasScrolledPast] = useState(false);
  const nodeRef = useRef<HTMLElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const heroRef = useCallback((node: HTMLElement | null) => {
    // Cleanup previous observer
    observerRef.current?.disconnect();

    if (!node) {
      nodeRef.current = null;
      return;
    }

    nodeRef.current = node;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setHasScrolledPast(true);
        }
      },
      { threshold: 0 }
    );

    observer.observe(node);
    observerRef.current = observer;
  }, []);

  return { heroRef, hasScrolledPast };
}
