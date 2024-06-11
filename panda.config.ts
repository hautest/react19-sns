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
    },
  },
  globalVars: {
    "var(--font-bold)": "boldFont, boldFont Fallback",
    "var(--font-light)": "lightFont,lightFont Fallback",
  },

  // The output directory for your css system
  outdir: "styled-system",
});
