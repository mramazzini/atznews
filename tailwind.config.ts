import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  daisyui: {
    themes: [
      {
        standard: {
          primary: "#003366",

          "primary-content": "#ffffff",

          secondary: "#007BFF",

          "secondary-content": "#ffffff",

          accent: "#C81023",

          "accent-content": "#fff",

          neutral: "B3B3B3",

          "neutral-content": "#0c0c0c",

          "base-100": "#fdfcfb",

          "base-200": "#f9f6f1",

          "base-300": "#F3EDE3",

          "base-content": "#141412",

          info: "#a6b89a",

          "info-content": "#0a0c09",

          success: "#009a05",

          "success-content": "#000900",

          warning: "#ab4100",

          "warning-content": "#f2d9cf",

          error: "#ed324a",

          "error-content": "#140102",
        },
        luxury: {
          primary: "#003366",

          secondary: "#4a5d73",

          accent: "#800020",

          neutral: "#f7e7ce",

          "base-100": "#FFFFFF",

          "base-200": "#e5e4e2",

          "accent-content": "#191970",

          "base-content": "#f8f8ff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
