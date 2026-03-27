"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const TeamCarousel = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      name: "Maximilien",
      role: t("team_role_architect"),
      image: "/images/team/maximilien.png",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
    },
    {
      name: "Jules",
      role: t("team_role_fullstack"),
      image: "/images/team/jul.jpg",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
    },
    {
      name: "Mathieu",
      role: t("team_role_fullstack"),
      image: "/images/team/matthieu.jpg",
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  // Drag constraints and logic
  const dragThreshold = 50;
  const onDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = Math.abs(offset.x) > dragThreshold;
    if (swipe) {
      if (offset.x > 0) handlePrev();
      else handleNext();
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-background">
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

        <div className="relative h-[500px] flex items-center justify-center perspective-[1000px]">
          <div className="relative w-full max-w-[400px] h-full flex items-center justify-center">
            {teamMembers.map((member, index) => {
              // Calculate relative position to current index
              const position = (index - currentIndex + teamMembers.length) % teamMembers.length;
              
              // Position mapping for 3 members
              // 0: Center (Featured)
              // 1: Right/Back
              // 2: Left/Back
              
              let x = 0;
              let z = 0;
              let scale = 1;
              let rotateY = 0;
              let opacity = 1;
              let zIndex = 0;

              if (position === 0) {
                x = 0;
                z = 0;
                scale = 1;
                rotateY = 0;
                opacity = 1;
                zIndex = 10;
              } else if (position === 1) {
                x = 250;
                z = -200;
                scale = 0.8;
                rotateY = -25;
                opacity = 0.5;
                zIndex = 5;
              } else if (position === 2) {
                x = -250;
                z = -200;
                scale = 0.8;
                rotateY = 25;
                opacity = 0.5;
                zIndex = 5;
              }

              return (
                <motion.div
                  key={member.name}
                  animate={{
                    x,
                    z,
                    scale,
                    rotateY,
                    opacity,
                    zIndex,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={onDragEnd}
                  className={`absolute w-full max-w-[320px] md:max-w-[380px] rounded-[2.5rem] p-1 border ${member.borderColor} bg-gradient-to-br ${member.color} backdrop-blur-3xl overflow-hidden cursor-grab active:cursor-grabbing`}
                >
                  <div className="relative aspect-square rounded-[2.3rem] overflow-hidden mb-6 bg-background/50 border border-white/5 pointer-events-none">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                  </div>
                  
                  <div className="px-8 pb-10 text-center pointer-events-none">
                    <h3 className="text-2xl font-bold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-0 pointer-events-none">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white/10 transition-colors pointer-events-auto"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white/10 transition-colors pointer-events-auto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};
