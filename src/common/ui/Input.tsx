import { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import { cva, cx, RecipeVariantProps } from "../../../styled-system/css";

const inputCva = cva({
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

const inputContainerCva = cva({
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

export type InputProps = RecipeVariantProps<typeof inputCva> &
  InputHTMLAttributes<HTMLInputElement> & {
    rightNode?: ReactNode;
    containerProps?: HTMLAttributes<HTMLDivElement>;
  };

export const Input = ({
  rightNode,
  size,
  variants,
  className,
  containerProps,
  ...rest
}: InputProps) => {
  const { className: containerClassName, ...containerPropsRest } =
    containerProps || {};

  return (
    <div
      className={cx(inputContainerCva({ variants }), containerClassName)}
      {...containerPropsRest}
    >
      <input
        className={cx(inputCva({ size, variants }), className)}
        {...rest}
      />
      {rightNode}
    </div>
  );
};
