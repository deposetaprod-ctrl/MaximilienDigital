# Documentation Chatbot IA - Vercel AI SDK v7 & Google Gemini

Ce document référence les pièges évités et les modifications apportées au chatbot IA pour qu'il soit compatible avec **Vercel AI SDK (version 7 / React v4)** et l'API **Google Generative AI**.

## 1. Structure du message (Le piège `content` vs `parts`)

Dans les anciennes versions du SDK Vercel, l'envoi d'un message manuel utilisait la clé `content`. 
Cependant, à partir des versions récentes (notamment v7), le SDK Vercel attend une **structure multimodale** (qui peut inclure texte, image, etc.).

**Ne faites pas :**
```tsx
// ❌ CELA CAUSERA UNE ERREUR 500 SILENCIEUSE DU SERVEUR
sendMessage({ role: "user", content: input } as any);
```

**Faites plutôt :**
```tsx
// ✅ C'EST LA BONNE STRUCTURE ATTENDUE PAR VERCEL AI SDK
sendMessage({ role: "user", parts: [{ type: "text", text: input }] } as any);
```

Si l'on envoie `content`, la fonction serveur `convertToModelMessages(messages)` plantera en essayant de lire `parts.some()` sur une valeur indéfinie (`undefined`).

## 2. Le modèle Google Gemini

Google met régulièrement à jour la famille de ses modèles "Gemini Flash". 
L'appellation "gemini-flash-latest" peut générer une erreur 500 si Google retire cet alias. 

**Modèle actuel utilisé :** `gemini-3.8-flash` (Lancé en Septembre 2026).
Si un jour le chatbot ne répond plus (message affiché mais aucune réponse), vérifiez si le modèle est toujours valide ou s'il a été remplacé par une version ultérieure (ex: `gemini-4.0-flash`).

## 3. Séparation de l'état (Hook `useChat`)

Avec les versions récentes de `@ai-sdk/react`, le hook `useChat` ne retourne plus les helpers de gestion du formulaire HTML (`input`, `handleInputChange`, etc.) pour des raisons de flexibilité. L'état doit être géré manuellement avec `useState` et envoyé via `sendMessage`.

**Exemple de gestion correcte :**
```tsx
import { useChat } from "@ai-sdk/react";
import { useState } from "react";

export function AIChatbot() {
  const { messages, sendMessage, status, stop } = useChat();
  const [input, setInput] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ role: "user", parts: [{ type: "text", text: input }] } as any);
    setInput("");
  };
  
  // ...
}
```
