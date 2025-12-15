"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  glow = false,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-background hover:bg-primary/90 hover:scale-105",
    secondary: "bg-secondary text-white hover:bg-secondary/90 hover:scale-105",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-background hover:scale-105",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const glowClass = glow ? "glow-primary" : "";

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], glowClass, className)}
      {...props}
    >
      {children}
    </button>
  );
}

