import Link from "next/link";
import { ComponentProps } from "react";
import { RecipeVariantProps, cx } from "../../../styled-system/css";
import { buttonCva } from "./Button";
import { flex } from "../../../styled-system/patterns";

type LinkButtonProps = ComponentProps<typeof Link> &
  RecipeVariantProps<typeof buttonCva>;

export const LinkButton = ({
  className,
  size,
  color,
  ...rest
}: LinkButtonProps) => {
  return (
    <Link
      {...rest}
      className={cx(
        buttonCva({ size, color }),
        flex({ justify: "center" }),
        className
      )}
    />
  );
};
