import { FC } from "react";
import { Metadata } from "next";
import { LayoutProps } from "@/Types/LayoutType";

export const metadata: Metadata = {
  title: "Favorites",
};

const Layout: FC<Readonly<LayoutProps>> = ({ children }) => {
  return <div className="py-6">{children}</div>;
};

export default Layout;
