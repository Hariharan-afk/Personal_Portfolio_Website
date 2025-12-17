"use client";

import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    
    // Check current theme
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newIsDark = !isDark;
    
    console.log("Toggling theme. Current:", isDark, "New:", newIsDark);
    
    if (newIsDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    
    setIsDark(newIsDark);
    
    // Force a check
    console.log("HTML classes:", html.classList.toString());
  };

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <div className="p-2 w-9 h-9 rounded-lg bg-background-surface border border-border">
        <div className="w-5 h-5" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-background-surface border border-border hover:border-primary transition-all duration-300"
      aria-label="Toggle theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <FiSun className="w-5 h-5 text-primary" />
      ) : (
        <FiMoon className="w-5 h-5 text-secondary" />
      )}
    </button>
  );
}

