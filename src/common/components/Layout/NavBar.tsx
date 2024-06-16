import SvgHome from "@/common/icons/Home";
import Link, { LinkProps } from "next/link";
import { css } from "../../../../styled-system/css";
import SvgPencil from "@/common/icons/Pencil";
import SvgUser from "@/common/icons/User";
import { flex } from "../../../../styled-system/patterns";
import { getUrlOnServer } from "@/common/utils/getUrlOnServer";
import { ReactNode } from "react";

interface NavItemProps extends LinkProps {
  children: ReactNode;
}

const NavItem = (props: NavItemProps) => {
  const { pathname } = getUrlOnServer();

  return (
    <Link
      className={flex({
        width: "6rem",
        height: "6rem",
        bg: pathname === props.href ? "ivory" : "inherit",
        borderRadius: "50%",
        justify: "center",
        align: "center",
      })}
      {...props}
    />
  );
};

export const NavBar = () => {
  return (
    <nav
      className={flex({
        height: "10dvh",
        justify: "center",
        gap: "5.6rem",
        bg: "yellow",
        align: "center",
        borderTopRadius: "4.9rem",
      })}
    >
      <NavItem href="/">
        <SvgHome
          className={css({
            height: "3.2rem",
            width: "3.2rem",
          })}
        />
      </NavItem>
      <NavItem href="/write-post">
        <SvgPencil className={css({ height: "3.2rem", width: "3.2rem" })} />
      </NavItem>
      <NavItem href="/my">
        <SvgUser className={css({ height: "3.2rem", width: "3.2rem" })} />
      </NavItem>
    </nav>
  );
};
