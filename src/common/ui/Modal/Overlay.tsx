"use client";

import { HTMLAttributes, MouseEvent, useEffect } from "react";
import { css, cx } from "../../../../styled-system/css";
import { useModalContext } from "./useModalContext";

const NO_SCROLL_CLASS_NAME = "no-scroll";

type OverlayProps = HTMLAttributes<HTMLDivElement>;

export const Overlay = ({ className, onClick, ...rest }: OverlayProps) => {
  const { open, backgroundClose, setOpen, onOpenChange } =
    useModalContext("Overlay");

  useEffect(() => {
    if (open) {
      document.body.classList.add(NO_SCROLL_CLASS_NAME);
    } else {
      document.body.classList.remove(NO_SCROLL_CLASS_NAME);
    }

    return () => {
      document.body.classList.remove(NO_SCROLL_CLASS_NAME);
    };
  }, [open]);

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (backgroundClose) {
      setOpen(false);
      onOpenChange?.(false);
    }
    onClick?.(e);
  };

  return (
    <div
      onClick={handleOverlayClick}
      className={cx(
        css({
          bg: "darkGray",
          opacity: "0.4",
          inset: "0",
          position: "fixed",
          width: "full",
          height: "full",
          display: open ? "block" : "none",
          animation: "ease-in",
          zIndex: "100",
        }),
        className
      )}
      {...rest}
    />
  );
};
