import type { Metadata } from "next";
import Header from "../components/Header/Header";

export const metadata: Metadata = {
  title: "Psychologists",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
