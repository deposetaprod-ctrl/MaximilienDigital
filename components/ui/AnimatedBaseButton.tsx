"use client";

import { Button } from "@base-ui/react";
import { cn } from "@/lib/utils";
import React from "react";

interface AnimatedButtonProps extends React.ComponentProps<typeof Button> {
  className?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
}

export function AnimatedBaseButton({
  className,
  children,
  variant = "primary",
  ...props
}: AnimatedButtonProps) {
  return (
    <Button
      {...props}
      className={cn(
        "px-6 py-3 font-semibold rounded-lg transition-colors duration-200 cursor-pointer",
        "focus:outline-none focus:ring-2 focus:ring-ring/50 focus:ring-offset-2",
        variant === "primary" &&
          "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "outline" &&
          "bg-transparent text-primary border border-primary hover:bg-primary/5",
        className
      )}
    >
      {children}
    </Button>
  );
}
