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
        ink: "#121212",
        paper: "#f8f5ef",
        mutedBlue: "#3d5a80",
        mutedRed: "#b55252",
      },
      fontFamily: {
        serifDisplay: ["Georgia", "Times New Roman", "serif"],
        sansBody: ["Inter", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
