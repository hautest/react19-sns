import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Create Next App",
  description: "Generated by create next app",
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
      <body>{children}</body>
    </html>
  );
}
