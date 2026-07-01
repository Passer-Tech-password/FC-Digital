import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFF5EB",
          100: "#FFE6CC",
          200: "#FFC999",
          300: "#FFAC66",
          400: "#FF8F33",
          500: "#FF6A00",
          600: "#E65A00",
          700: "#CC4A00",
          800: "#993A00",
          900: "#662A00",
          950: "#331A00",
        },
        background: {
          50: "#F8F8F8",
          100: "#E8E8E8",
          200: "#D8D8D8",
          300: "#C8C8C8",
          400: "#B8B8B8",
          500: "#080808",
          600: "#060606",
          700: "#050505",
          800: "#030303",
          900: "#010101",
          950: "#000000",
        },
        card: {
          50: "#F8F8F8",
          100: "#E8E8E8",
          200: "#D8D8D8",
          300: "#C8C8C8",
          400: "#B8B8B8",
          500: "#121212",
          600: "#101010",
          700: "#0E0E0E",
          800: "#0C0C0C",
          900: "#0A0A0A",
          950: "#080808",
        },
        border: {
          50: "rgba(255,255,255,0.05)",
          100: "rgba(255,255,255,0.08)",
          200: "rgba(255,255,255,0.12)",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "rgba(255,255,255,0.6)",
          tertiary: "rgba(255,255,255,0.4)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "20px",
        xl: "28px",
        "2xl": "36px",
      },
      boxShadow: {
        "glow-orange": "0 0 60px rgba(255, 106, 0, 0.4)",
        "glow-orange-sm": "0 0 30px rgba(255, 106, 0, 0.2)",
        "soft-xl": "0 20px 60px rgba(0, 0, 0, 0.5)",
        "soft-lg": "0 10px 40px rgba(0, 0, 0, 0.4)",
        "soft-md": "0 6px 30px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-reverse": "float-reverse 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
