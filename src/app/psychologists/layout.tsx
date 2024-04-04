import { FC, ReactNode } from "react";
import { Metadata } from "next";
import { LayoutPsychologistsProps } from "@/Types/LayoutType";

export const metadata: Metadata = {
  title: "Psychologists",
};

const LayoutPsychologists: FC<Readonly<LayoutPsychologistsProps>> = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <div className="py-6">{children}</div>;
};

export default LayoutPsychologists;
