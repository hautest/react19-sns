import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { css } from "../../styled-system/css";
import { flex } from "../../styled-system/patterns";

const boldFont = localFont({
  src: "./fonts/kimm_bold.ttf",
  variable: "--font-bold",
  display: "swap",
});
const lightFont = localFont({
  src: "./fonts/jamsil_Light.ttf",
  variable: "--font-light",
  display: "swap",
});

export const metadata: Metadata = {
  title: "갭잘알",
  description: "개발자들을 위한 SNS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${boldFont.variable} ${lightFont.variable} ${lightFont.className}`}
      lang="en"
    >
      <body
        className={flex({
          justifyContent: "center",
          h: "full",
          w: "full",
          bg: "white",
        })}
      >
        <div
          className={css({
            bg: "darkGray",
            maxWidth: "maxWidth",
            w: "full",
            h: "full",
          })}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
