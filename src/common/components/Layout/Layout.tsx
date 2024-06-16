import { HTMLAttributes } from "react";
import { css } from "../../../../styled-system/css";
import { NavBar } from "./NavBar";

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const Layout = ({ children, ...rest }: LayoutProps) => {
  return (
    <div {...rest}>
      <main className={css({ overflowY: "auto", height: "90dvh" })}>
        {children}
      </main>
      <NavBar />
    </div>
  );
};
