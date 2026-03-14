"use client";

import { Dialog } from "@base-ui/react";
import { X, Music, Loader2, CheckCircle } from "lucide-react";
import { useState, type FormEvent } from "react";

interface SongSuggestionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export function SongSuggestionModal({ open, onOpenChange }: SongSuggestionModalProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("Une erreur est survenue. Veuillez réessayer.");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get("title") as string,
      artist: formData.get("artist") as string,
    };

    try {
      const response = await fetch("/api/send-song-suggestion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setStatus("success");
    } catch (err: any) {
      console.error("Song Suggestion Error:", err);
      setErrorMessage(err.message || "Une erreur est survenue.");
      setStatus("error");
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0" />
        <Dialog.Popup className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95">
          <div className="relative w-full max-w-md rounded-xl bg-card p-6 shadow-xl md:p-8">
            <Dialog.Close className="absolute right-4 top-4 rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer">
              <X className="h-5 w-5" />
            </Dialog.Close>

            <Dialog.Title className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Music className="h-5 w-5 text-primary" />
              Suggérer une chanson
            </Dialog.Title>
            <Dialog.Description className="mt-1 text-sm text-muted-foreground">
              Quelle musique devrais-je écouter pendant que je code ?
            </Dialog.Description>

            {status === "success" ? (
              <div className="mt-8 flex flex-col items-center gap-3 py-8 text-center animate-fade-in">
                <CheckCircle className="h-12 w-12 text-green-500" />
                <p className="text-lg font-medium text-foreground">
                  Merci pour la découverte !
                </p>
                <p className="text-sm text-muted-foreground">
                  Je vais écouter ça très vite.
                </p>
                <button
                  onClick={() => onOpenChange(false)}
                  className="mt-4 rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="song-title"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Titre <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="song-title"
                    type="text"
                    required
                    name="title"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-colors"
                    placeholder="Ex: Moonlight Sonata"
                  />
                </div>

                <div>
                  <label
                    htmlFor="song-artist"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Artiste <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="song-artist"
                    type="text"
                    required
                    name="artist"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-colors"
                    placeholder="Ex: Beethoven"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-destructive">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Envoi...
                    </>
                  ) : (
                    <>
                      <span>Envoyer la suggestion</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
