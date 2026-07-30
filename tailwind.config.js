/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#05070B",
          900: "#0A0E14",
          800: "#10151F",
          700: "#161C29",
          600: "#232B3B",
        },
        cyan: {
          glow: "#00D9FF",
        },
        amber: {
          glow: "#FFB020",
        },
        signal: {
          green: "#39FF88",
        },
        ink: {
          100: "#E6EDF3",
          300: "#B7C2CE",
          500: "#8B98A5",
          700: "#5B6673",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-blueprint":
          "linear-gradient(rgba(0,217,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.06) 1px, transparent 1px)",
      },
      boxShadow: {
        "glow-cyan": "0 0 24px rgba(0,217,255,0.35)",
        "glow-amber": "0 0 24px rgba(255,176,32,0.35)",
      },
      animation: {
        "pulse-slow": "pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        blink: "blink 1.4s step-start infinite",
        "trace-flow": "trace-flow 6s linear infinite",
      },
      keyframes: {
        blink: {
          "50%": { opacity: 0.25 },
        },
        "trace-flow": {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};
