import {
  defineConfig,
  defineGlobalStyles,
  defineTextStyles,
} from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  jsxStyleProps: "minimal",
  jsxFramework: "react",

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      textStyles: defineTextStyles({
        size25weight700bold: {
          value: {
            fontSize: "2.5rem",
            fontWeight: "700",
            fontFamily: "bold",
            lineHeight: "2.625rem",
          },
        },
        size15weight700bold: {
          value: {
            fontSize: "1.5rem",
            fontWeight: "700",
            fontFamily: "bold",
            lineHeight: "1.575rem",
          },
        },
        size18weight700bold: {
          value: {
            fontSize: "1.8rem",
            fontWeight: "700",
            fontFamily: "bold",
            lineHeight: "1.89rem",
          },
        },
        size13weight300light: {
          value: {
            fontSize: "1.3rem",
            fontWeight: "300",
            fontFamily: "light",
            lineHeight: "1.43rem",
          },
        },
        size10weight700bold: {
          value: {
            fontSize: "1rem",
            fontWeight: "700",
            fontFamily: "bold",
            lineHeight: "1.05rem",
          },
        },
        size6weight700bold: {
          value: {
            fontSize: "0.6rem",
            fontWeight: "700",
            fontFamily: "bold",
            lineHeight: "0.63rem",
          },
        },
      }),
    },
    tokens: {
      sizes: {
        full: {
          value: "100%",
        },
        maxWidth: {
          value: "60rem",
        },
      },
      spacing: {
        full: {
          value: "100%",
        },
      },
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
  minify: true,
  globalVars: {
    "var(--font-bold)": "boldFont, boldFont Fallback",
    "var(--font-light)": "lightFont,lightFont Fallback",
  },
  globalCss: defineGlobalStyles({
    html: {
      minHeight: "100dvh",
      "@supports (-webkit-touch-callout: none)": {
        minHeight: "-webkit-fill-available",
      },
      fontSize: "62.5%",
    },
    body: {
      m: "0",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    },
    "html, body, div#__next": {
      height: "100%",
    },
    "*": {
      boxSizing: "border-box",
      WebkitTouchCallout: "none",
      WebkitTapHighlightColor: "transparent",
      "&:not(input, textarea)": {
        userSelect: "none",
      },
    },
    "em, del, pre, strong, li9, ul, il, dl, dt, table, tbody, thead, tfoot, nav, main, menu":
      {
        margin: "0",
        padding: "0",
        font: "inherit",
        verticalAlign: "baseline",
      },
    li: {
      listStyle: "none",
    },
    input: {
      "&:focus": {
        outline: "none",
      },
      "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":
        {
          display: "none",
          WebkitAppearance: "none",
        },
    },
    a: {
      textDecoration: "none",
      color: "white",
      cursor: "pointer",
    },
    button: {
      background: "transparent",
      cursor: "pointer",
      border: "none",
      padding: "0",
    },
    img: {
      "-webkit-user-select": "none",
      "-khtml-user-select": "none",
      "-moz-user-select": "none",
      "-o-user-select": "none",
      "user-select": "none",
      "-webkit-user-drag": "none",
      "-khtml-user-drag": "none",
      "-moz-user-drag": "none",
      "-o-user-drag": "none",
      "user-drag": "none",
    },
    ".no-scroll": {
      overflow: "hidden",
    },
  }),

  // The output directory for your css system
  outdir: "styled-system",
});
