"use client";

import { motion } from "framer-motion";
import { Users, Bot, Rocket, Table2, Code2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { LucideIcon } from "lucide-react";

interface ServiceItem {
  icon: LucideIcon;
  titleKey: "service_portal_title" | "service_automation_title" | "service_mvp_title" | "service_excel_title" | any;
  descKey: "service_portal_desc" | "service_automation_desc" | "service_mvp_desc" | "service_excel_desc" | any;
}

const serviceItems: ServiceItem[] = [
  { icon: Users, titleKey: "service_portal_title", descKey: "service_portal_desc" },
  { icon: Bot, titleKey: "service_automation_title", descKey: "service_automation_desc" },
  { icon: Rocket, titleKey: "service_mvp_title", descKey: "service_mvp_desc" },
  { icon: Table2, titleKey: "service_excel_title", descKey: "service_excel_desc" },
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

        <motion.div
          className="mt-6 rounded-xl border-2 border-primary/20 bg-primary/5 p-8 sm:p-10 transition-[shadow,border-color] duration-300 hover:shadow-lg hover:border-primary/40 relative overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="absolute -top-10 -right-10 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500 rotate-12">
            <Code2 className="w-64 h-64 text-primary" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 mb-5">
              <Code2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              {t("service_custom_title")}
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t("service_custom_desc")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
