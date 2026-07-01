"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "outline" | "ghost" | "secondary" | "destructive";
  size?: "default" | "sm" | "lg" | "xl" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    const variants = {
      primary: "gradient-primary text-white shadow-glow-orange-sm hover:shadow-glow-orange transition-all duration-300",
      outline: "border border-border-200 bg-transparent text-white hover:bg-card-500 hover:border-primary-500/30 transition-all duration-300",
      ghost: "bg-transparent text-white hover:bg-card-500/50 transition-all duration-300",
      secondary: "bg-card-500 text-white hover:bg-card-600 border border-border-100 transition-all duration-300",
      destructive: "bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition-all duration-300",
    };

    const sizes = {
      default: "h-12 px-6 text-sm font-semibold",
      sm: "h-10 px-4 text-xs font-semibold",
      lg: "h-14 px-8 text-base font-semibold",
      xl: "h-16 px-10 text-lg font-semibold",
      icon: "h-12 w-12",
    };

    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl transition-all",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
