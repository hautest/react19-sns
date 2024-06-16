"use client";

import { ButtonHTMLAttributes, MouseEvent } from "react";
import { useModalContext } from "./useModalContext";

type TriggerProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Trigger = ({ onClick, ...rest }: TriggerProps) => {
  const { setOpen, onOpenChange } = useModalContext("Trigger");

  const handleTriggerClick = (e: MouseEvent<HTMLButtonElement>) => {
    setOpen(true);
    onOpenChange?.(true);
    onClick?.(e);
  };

  return <button {...rest} onClick={handleTriggerClick} />;
};
