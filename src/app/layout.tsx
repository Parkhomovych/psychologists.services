import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import React from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Psychologists.Services",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <html lang="en" className=" bg-white">
      <body className={`${inter.className}`}>
        {modal}
        {children}
      </body>
    </html>
  );
}
