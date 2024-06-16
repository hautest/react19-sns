"use client";

import { ButtonHTMLAttributes, MouseEvent } from "react";
import { useModalContext } from "./useModalContext";

type CloseProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Close = ({ onClick, ...rest }: CloseProps) => {
  const { setOpen, onOpenChange } = useModalContext("Close");

  const handleTriggerClick = (e: MouseEvent<HTMLButtonElement>) => {
    setOpen(false);
    onOpenChange?.(false);
    onClick?.(e);
  };

  return <button {...rest} onClick={handleTriggerClick} />;
};
