import { InputHTMLAttributes, ReactNode } from "react";
import { styled } from "../../../styled-system/jsx";
import { StyledVariantProps } from "../../../styled-system/types";

const StyledInput = styled("input", {
  base: {
    bg: "white",
    w: "full",
    fontFamily: "bold",
    "&::placeholder": {
      color: "gray",
    },
  },
  variants: {
    variants: {
      default: {
        borderRadius: "2rem",
      },
      outline: {
        bg: "inherit",
      },
    },
    size: {
      large: {
        py: "2.1rem",
        fontSize: "2rem",
        lineHeight: "2.1rem",
        fontWeight: "700",
      },
      small: {
        py: "1.6rem",
        fontSize: "1.5rem",
        lineHeight: "1.575rem",
        fontWeight: "700",
      },
    },
  },
  defaultVariants: {
    size: "large",
    variants: "default",
  },
});

const InputContainer = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    bg: "white",
    w: "full",
    px: "1.9rem",
    position: "relative",
  },
  variants: {
    variants: {
      default: {
        borderRadius: "2rem",
      },
      outline: {
        bg: "inherit",
        borderBottom: "0.1rem solid darkgray",
      },
    },
  },
  defaultVariants: {
    variants: "default",
  },
});

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    StyledVariantProps<typeof StyledInput> {
  rightNode?: ReactNode;
}

export const Input = ({ rightNode, size, variants, ...rest }: InputProps) => {
  return (
    <InputContainer variants={variants}>
      <StyledInput size={size} variants={variants} {...rest} />
      {rightNode}
    </InputContainer>
  );
};
