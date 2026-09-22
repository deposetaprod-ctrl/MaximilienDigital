"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const VideoSection = () => {
  const { t } = useLanguage();

  return (
    <section className="px-4 py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm shadow-sm uppercase tracking-widest"
          >
            <PlayCircle className="w-4 h-4" /> En vidéo
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight"
          >
            Découvrez mon approche
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Une courte présentation de ma vision, de mon expertise et de la manière dont j'accompagne mes clients.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-border bg-card"
        >
          {/* Decorative glow behind the video */}
          <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10"></div>
          
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/35EHSl2AT2M?autoplay=0&rel=0" 
            title="Présentation Maximilien Digital" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};
