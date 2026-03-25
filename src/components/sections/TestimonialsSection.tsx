"use client";

import { testimonials, contactInfo } from "@/lib/data";
import { Quote, ExternalLink, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="text-2xl font-bold text-foreground text-center sm:text-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          {t("testimonials_title")}
        </motion.h2>
        <motion.p
          className="mt-3 text-center text-muted-foreground max-w-lg mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          {t("testimonials_subtitle")}
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={`${testimonial.name}-${i}`}
              className="rounded-xl border border-border bg-card p-6 transition-[shadow,border-color] duration-200 hover:shadow-md hover:border-primary/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Quote className="h-8 w-8 text-primary/20" />
              <p className="mt-4 text-sm text-foreground leading-relaxed">
                {testimonial.content}
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-center">
          <motion.a
            href={contactInfo.comeup}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-8 py-4 text-sm font-semibold text-primary transition-all hover:bg-primary/10 hover:border-primary/40"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-1 mr-2 text-amber-500">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
            </div>
            {t("testimonials_see_more")}
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
          <p className="mt-4 text-xs text-muted-foreground">{t("testimonials_based_on")}</p>
        </div>
      </div>
    </section>
  );
}
