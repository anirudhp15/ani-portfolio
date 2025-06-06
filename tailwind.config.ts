import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: "height, max-height, padding, margin, opacity",
      },
      maxHeight: {
        "0": "0",
        xl: "36rem", // or '1000px' or any max height you think the drawer will need
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        purple: "0 4px 14px 0 rgba(34, 16, 84, 0.39)",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        gradient: "gradient 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
