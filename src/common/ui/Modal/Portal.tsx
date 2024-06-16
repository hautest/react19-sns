"use client";

import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useModalContext } from "./useModalContext";

interface PortalProps {
  children: ReactNode;
}

export const Portal = ({ children }: PortalProps) => {
  const { open } = useModalContext("Overlay");

  return open ? createPortal(children, document.body) : null;
};
