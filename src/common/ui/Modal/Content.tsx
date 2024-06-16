import { HTMLAttributes } from "react";
import { useModalContext } from "./useModalContext";
import { css, cx } from "../../../../styled-system/css";

type ContentProps = HTMLAttributes<HTMLDivElement>;

export const Content = ({ className, ...rest }: ContentProps) => {
  const { open } = useModalContext("Content");

  return open ? (
    <div
      {...rest}
      className={cx(
        css({
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "101",
          bg: "ivory",
        }),
        className
      )}
    />
  ) : null;
};
