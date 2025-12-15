"use client";

import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const useDark = savedTheme ? savedTheme === "dark" : prefersDark;
    setIsDark(useDark);
    
    if (useDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-background-surface border border-border hover:border-primary transition-all duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <FiSun className="w-5 h-5 text-primary" />
      ) : (
        <FiMoon className="w-5 h-5 text-secondary" />
      )}
    </button>
  );
}

