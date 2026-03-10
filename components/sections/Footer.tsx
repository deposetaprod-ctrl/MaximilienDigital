import { contactInfo } from "@/lib/data";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-4 py-8">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {year} Maximilien Digital. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
