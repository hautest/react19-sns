"use client";

import { Close } from "./Close";
import { Content } from "./Content";
import { Overlay } from "./Overlay";
import { Portal } from "./Portal";
import { Root } from "./Root";
import { Trigger } from "./Trigger";

export const Modal = Object.assign(Root, {
  Trigger,
  Close,
  Overlay,
  Content,
  Portal,
});
