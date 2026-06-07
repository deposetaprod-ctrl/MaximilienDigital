"use client";

import { motion } from "framer-motion";
import { Users, Bot, Rocket, Code2, Building2, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { LucideIcon } from "lucide-react";
import { Dialog } from "@base-ui/react";
import { useState } from "react";
import Link from "next/link";

interface ServiceItem {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
  onClick?: () => void;
}

export function ServicesSection() {
  const { t } = useLanguage();
  const [accountingModalOpen, setAccountingModalOpen] = useState(false);

  const serviceItems: ServiceItem[] = [
    { icon: Users, titleKey: "service_portal_title", descKey: "service_portal_desc" },
    { icon: Bot, titleKey: "service_automation_title", descKey: "service_automation_desc" },
    { icon: Rocket, titleKey: "service_mvp_title", descKey: "service_mvp_desc" },
    { 
      icon: Building2, 
      titleKey: "service_accounting_title", 
      descKey: "service_accounting_desc",
      onClick: () => setAccountingModalOpen(true)
    },
  ];

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
              onClick={service.onClick}
              className={`rounded-xl border border-border p-6 transition-[shadow,border-color,transform] duration-200 hover:shadow-md hover:border-primary/30 ${service.onClick ? "cursor-pointer hover:-translate-y-1" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <service.icon className="h-10 w-10 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {t(service.titleKey as any)}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {t(service.descKey as any)}
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

      <Dialog.Root open={accountingModalOpen} onOpenChange={setAccountingModalOpen}>
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0" />
          <Dialog.Popup className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95">
            <div className="relative w-full max-w-lg rounded-2xl bg-card p-6 shadow-2xl md:p-8 border border-border">
              <Dialog.Close className="absolute right-4 top-4 rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer z-10">
                <X className="h-5 w-5" />
              </Dialog.Close>

              <div className="animate-fade-in text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <Building2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Comptabilité & Finance</h3>
                <p className="text-muted-foreground mb-8">
                  Découvrez nos deux solutions spécialisées pour la digitalisation de votre cabinet.
                </p>
                
                <div className="space-y-4">
                  <Link href="/portail-client-expert-comptable" className="flex items-center justify-between p-4 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-colors group">
                    <div className="text-left pr-4">
                      <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">Portail Client Automatisé</h4>
                      <p className="text-sm text-muted-foreground mt-1">Dépôt de pièces, relances automatiques et mesure de la satisfaction client.</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </Link>

                  <Link href="/logiciel-expert-comptable" className="flex items-center justify-between p-4 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-colors group">
                    <div className="text-left pr-4">
                      <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">CRM & Logiciel Interne</h4>
                      <p className="text-sm text-muted-foreground mt-1">Lettres de mission, onboarding et suivi interne de vos dossiers.</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
