"use client";

import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export function TestimonialsSection() {
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
          Ce que disent mes clients
        </motion.h2>
        <motion.p
          className="mt-3 text-center text-muted-foreground max-w-lg mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          Des retours concrets de ceux qui m&apos;ont fait confiance.
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
                <p className="text-sm font-semibold text-foreground">
                  {testimonial.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
