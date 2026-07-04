import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        linen: "#fbf7ef",
        sand: "#e9dbc5",
        olive: "#6f7c54",
        "olive-dark": "#3c472f",
        coffee: "#8f6b4d",
        gold: "#c8a15a",
        ink: "#151412"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(21, 20, 18, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
