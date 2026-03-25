"use client";

import { FolderOpen } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import type { TranslationKey } from "@/lib/i18n";

interface ProjectItem {
  titleKey: TranslationKey;
  descKey: TranslationKey;
  tags: string[];
  image: string;
}

const projectItems: ProjectItem[] = [
  { titleKey: "project_dating_title", descKey: "project_dating_desc", tags: ["Mobile", "React Native", "Dating"], image: "/rencontre.png" },
  { titleKey: "project_coach_title", descKey: "project_coach_desc", tags: ["Mobile", "SaaS", "Sport"], image: "/coach.png" },
  { titleKey: "project_invoices_title", descKey: "project_invoices_desc", tags: ["SaaS", "IA", "Automatisation"], image: "/factures.png" },
  { titleKey: "project_majordome_title", descKey: "project_majordome_desc", tags: ["Mobile", "Luxe", "UX Premium"], image: "/majordome.png" },
  { titleKey: "project_esport_title", descKey: "project_esport_desc", tags: ["Média", "Esport", "Live Data"], image: "esportnews.png" },
];

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section className="px-4 py-16 md:py-24 bg-secondary/50">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="text-2xl font-bold text-foreground text-center sm:text-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          {t("projects_title")}
        </motion.h2>
        <motion.p
          className="mt-3 text-center text-muted-foreground max-w-lg mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          {t("projects_subtitle")}
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectItems.map((project, i) => (
            <motion.div
              key={project.titleKey}
              className="rounded-xl border border-border bg-card overflow-hidden transition-[shadow,border-color] duration-200 hover:shadow-md hover:border-primary/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="h-48 bg-muted flex items-center justify-center relative overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image.startsWith("/") ? project.image : `/${project.image}`}
                    alt={t(project.titleKey)}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <FolderOpen className="h-12 w-12 text-muted-foreground/50" />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{t(project.titleKey)}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {t(project.descKey)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
