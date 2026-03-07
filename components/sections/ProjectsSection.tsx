"use client";

import { projects } from "@/lib/data";
import { FolderOpen } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function ProjectsSection() {
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
          Mes réalisations
        </motion.h2>
        <motion.p
          className="mt-3 text-center text-muted-foreground max-w-lg mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          Quelques projets sur lesquels j&apos;ai travaillé récemment.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
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
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <FolderOpen className="h-12 w-12 text-muted-foreground/50" />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
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
