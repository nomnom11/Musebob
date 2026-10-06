import type { Config } from "tailwindcss";

// Preflight is disabled so Tailwind never alters the existing MuseBob Land styles.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        ocean: "#008ED6",
        deep: "#003B63",
        cyan: "#00D9FF",
        gold: "#FFC928",
        navy: "#071B2D",
        coral: "#FF6B5A",
      },
      fontFamily: {
        display: ["'Lilita One'", "system-ui", "sans-serif"],
        body: ["'Nunito'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
