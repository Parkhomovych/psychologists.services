import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import React from "react";
import Header from "./components/Header";
import {Providers} from './components/Providers'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Psychologists.Services",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#f3f3f3] dark:bg-gray-900 text-black dark:text-gray-50 `}
      >
        <Providers>
          <Header />
          <main> {children}</main>
        </Providers>
      </body>
    </html>
  );
}
