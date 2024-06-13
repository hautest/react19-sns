import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
    tokens: {
      fonts: {
        bold: { value: "var(--font-bold)" },
        light: { value: "var(--font-light)" },
      },
      colors: {
        darkGray: {
          value: "#323D41",
          description: "배경색",
        },
        yellow: {
          value: "#FCF893",
          deprecated: "로고색",
        },
        ivory: {
          value: "#FDFCF7",
          description: "내용색",
        },
        gray: {
          value: "#A7A7A7",
          description: "클릭색",
        },
        warning: {
          value: "#E13B36",
          description: "경고색",
        },
        success: {
          value: "#00CD2D",
          description: "성공색",
        },
      },
    },
  },
  globalVars: {
    "var(--font-bold)": "boldFont, boldFont Fallback",
    "var(--font-light)": "lightFont,lightFont Fallback",
  },

  // The output directory for your css system
  outdir: "styled-system",
});
