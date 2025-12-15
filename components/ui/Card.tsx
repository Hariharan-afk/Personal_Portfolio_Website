"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export default function Card({ children, className, hover = true, glass = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-6",
        glass && "card-glass",
        hover && "card-hover",
        className
      )}
    >
      {children}
    </div>
  );
}

