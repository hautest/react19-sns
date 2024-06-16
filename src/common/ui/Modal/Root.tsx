"use client";

import { ReactNode, useState } from "react";
import { ModalProvider, UseModalContext } from "./useModalContext";

interface RootProps extends Partial<Omit<UseModalContext, "setOpen">> {
  children: ReactNode;
}

export const Root = ({
  children,
  open: _open,
  onOpenChange,
  backgroundClose = true,
}: RootProps) => {
  const [open, setOpen] = useState(!!_open);

  return (
    <ModalProvider value={{ open, setOpen, onOpenChange, backgroundClose }}>
      {children}
    </ModalProvider>
  );
};
