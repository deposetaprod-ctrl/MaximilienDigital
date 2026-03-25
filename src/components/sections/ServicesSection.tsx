"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Brain } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { LucideIcon } from "lucide-react";

interface ServiceItem {
  icon: LucideIcon;
  titleKey: "service_saas_title" | "service_mobile_title" | "service_ai_title";
  descKey: "service_saas_desc" | "service_mobile_desc" | "service_ai_desc";
}

const serviceItems: ServiceItem[] = [
  { icon: Code, titleKey: "service_saas_title", descKey: "service_saas_desc" },
  { icon: Smartphone, titleKey: "service_mobile_title", descKey: "service_mobile_desc" },
  { icon: Brain, titleKey: "service_ai_title", descKey: "service_ai_desc" },
];

export function ServicesSection() {
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
          {t("services_title")}
        </motion.h2>
        <motion.p
          className="mt-3 text-center text-muted-foreground max-w-lg mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          {t("services_subtitle")}
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((service, i) => (
            <motion.div
              key={service.titleKey}
              className="rounded-xl border border-border p-6 transition-[shadow,border-color] duration-200 hover:shadow-md hover:border-primary/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <service.icon className="h-10 w-10 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {t(service.titleKey)}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {t(service.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
