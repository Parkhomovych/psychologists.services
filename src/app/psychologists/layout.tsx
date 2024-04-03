import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psychologists",
};
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="py-6">{children}</div>;
}
