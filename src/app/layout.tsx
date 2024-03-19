import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "./components/Header/Header";
import { auth } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Psychologists.Services",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);

      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(uid);

      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <main> {children}</main>
      </body>
    </html>
  );
}
