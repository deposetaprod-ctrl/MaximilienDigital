"use client";

import { services } from "@/lib/data";
import { motion } from "framer-motion";

export function ServicesSection() {
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
          Ce que je fais
        </motion.h2>
        <motion.p
          className="mt-3 text-center text-muted-foreground max-w-lg mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          Des solutions techniques adaptées à vos besoins, de la conception au
          déploiement.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="rounded-xl border border-border p-6 transition-[shadow,border-color] duration-200 hover:shadow-md hover:border-primary/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <service.icon className="h-10 w-10 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
