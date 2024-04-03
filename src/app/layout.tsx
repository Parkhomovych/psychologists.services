"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "./components/Header/Header";
import { AuthContextProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <AuthContextProvider>
          <Header />
          <main>{children}</main>
        </AuthContextProvider>
      </body>
    </html>
  );
}
