import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const syne = Inter({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Eshayat",
  description: "Eshayat's Portfolio.",
  openGraph: {
    title: "Eshayat",
    description: "Eshayat's Prtfolio.",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="0e47b787-7278-4cad-b957-c8050c204a23"></script>
        <link rel="icon" href="../public/logo.ico" />
      </head>
      <body
        className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
      </body>
    </html>
  );
}

<Script defer strategy="afterInteractive" src="https://cloud.umami.is/script.js" data-website-id="c0236e25-4199-4409-8339-889a7754c851" />
