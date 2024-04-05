"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { FC, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { AuthContextProvider } from "./context/AuthContext";
import { RotatingLines } from "react-loader-spinner";
import { LayoutProps } from "@/Types/LayoutType";

const inter = Inter({ subsets: ["latin"] });

const RootLayout: FC<Readonly<LayoutProps>> = ({ children }) => {
  const [delay, setDelay] = useState<boolean>(true);
  useEffect(() => {
    const id = setTimeout(() => {
      setDelay(false);
    }, 350);
    return () => {
      clearTimeout(id);
    };
  }, []);
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {delay ? (
          <div className=" h-screen flex items-center justify-center">
            <RotatingLines
              visible={true}
              width="124"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
            />
          </div>
        ) : (
          <AuthContextProvider>
            <Header />
            <main>{children}</main>
          </AuthContextProvider>
        )}
      </body>
    </html>
  );
};

export default RootLayout;
