import { styled } from "../../../styled-system/jsx";

export const Button = styled("button", {
  base: {
    borderRadius: "2rem",
    "&:hover": {
      bg: "gray",
    },
    fontFamily: "bold",
  },
  variants: {
    color: {
      white: {
        bg: "white",
        color: "darkGray",
      },
      black: {
        color: "white",
        bg: "darkGray",
      },
      yellow: {
        bg: "yellow",
        color: "darkGray",
      },
    },
    size: {
      large: {
        fontSize: "2rem",
        lineHeight: "2.1rem",
        fontWeight: "700",
        py: "2.1rem",
        w: "full",
      },
      medium: {
        fontSize: "2rem",
        lineHeight: "2.1rem",
        fontWeight: "700",
        py: "2.1rem",
        w: "13.9rem",
      },
      small: {
        fontSize: "1.5rem",
        lineHeight: "1.57rem",
        fontWeight: "700",
        py: "1.4rem",
        w: "9.8rem",
      },
    },
  },
  defaultVariants: {
    color: "white",
    size: "large",
  },
});
