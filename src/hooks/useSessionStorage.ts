"use client";

import { useState, useCallback } from "react";

function readSessionStorage(key: string, fallback: boolean): boolean {
  if (typeof window === "undefined") return fallback;
  try {
    const stored = sessionStorage.getItem(key);
    if (stored !== null) return JSON.parse(stored);
  } catch {
    // ignore
  }
  return fallback;
}

export function useSessionStorage(key: string, initialValue: boolean) {
  const [value, setValue] = useState(() => readSessionStorage(key, initialValue));

  const setStoredValue = useCallback(
    (newValue: boolean) => {
      setValue(newValue);
      try {
        sessionStorage.setItem(key, JSON.stringify(newValue));
      } catch {
        // fail silently
      }
    },
    [key]
  );

  return [value, setStoredValue] as const;
}
