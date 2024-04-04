"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { FC } from "react";
import Header from "./components/Header/Header";
import { AuthContextProvider } from "./context/AuthContext";
import { RootLayoutProps } from "@/Types/LayoutType";

const inter = Inter({ subsets: ["latin"] });

const RootLayout: FC<Readonly<RootLayoutProps>> = ({ children }) => {
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
};

export default RootLayout;
