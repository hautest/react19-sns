import { Dispatch, SetStateAction } from "react";
import { createContext } from "../createContext";

export interface UseModalContext {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onOpenChange?: (open: boolean) => void;
  backgroundClose?: boolean;
}

export const [ModalProvider, useModalContext] =
  createContext<UseModalContext>("Modal Context");
