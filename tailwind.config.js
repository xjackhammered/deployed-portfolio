/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Elevation tiers (dark engineering-console surfaces)
        canvas: "#0a0d12",
        background: "#0a0d12",
        surface: "#111620",
        "surface-2": "#1a2234",
        line: "#232f45",
        "line-strong": "#334059",

        // Foreground hierarchy
        text: "#f8fafc",
        muted: "#94a3b8",
        subtle: "#64748b",

        // Accents
        primary: "#38bdf8",
        "primary-dim": "#7dd3fc",
        "on-primary": "#0a0d12",
        secondary: "#10b981",
        "on-secondary": "#04140f",
        amber: "#f1a02b",
        rose: "#fb7185",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        display: [
          "3.25rem",
          { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        "display-mobile": [
          "2.15rem",
          { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
      },
      boxShadow: {
        glow: "0 0 16px -2px rgba(56, 189, 248, 0.25)",
        "glow-sm": "0 0 14px rgba(56, 189, 248, 0.35)",
        panel: "0 8px 24px -4px rgba(0, 0, 0, 0.6)",
      },
      maxWidth: {
        "7xl": "1280px",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
