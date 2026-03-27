"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { useRef } from "react";

export const TeamCarousel = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      name: "Maximilien",
      role: t("team_role_architect"),
      image: "/images/team/maximilien.png",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
    },
    {
      name: "Jul",
      role: t("team_role_frontend"),
      image: "/images/team/jul.png",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
    },
    {
      name: "Matthieu",
      role: t("team_role_backend"),
      image: "/images/team/matthieu.png",
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            {t("team_title")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            {t("team_subtitle")}
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative group w-full max-w-sm rounded-[2.5rem] p-1 border ${member.borderColor} bg-gradient-to-br ${member.color} backdrop-blur-xl overflow-hidden`}
            >
              <div className="relative aspect-square rounded-[2.3rem] overflow-hidden mb-6 bg-background/50 border border-white/5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              </div>
              
              <div className="px-8 pb-10 text-center">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">
                  {member.role}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/10 blur-3xl rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};
