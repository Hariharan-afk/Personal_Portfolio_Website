import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0a0a0f",
          surface: "#1a1a2e",
        },
        border: "#2d2d44",
        primary: "#00d9ff",
        secondary: "#a855f7",
        accent: "#f97316",
        text: {
          DEFAULT: "#e5e5e5",
          muted: "#9ca3af",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #00d9ff, 0 0 10px #00d9ff" },
          "100%": { boxShadow: "0 0 10px #00d9ff, 0 0 20px #00d9ff, 0 0 30px #00d9ff" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

