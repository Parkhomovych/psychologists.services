import React from "react";

export interface LogoProps {
  children?: React.ReactNode;
}

export default function Logo({ children }: LogoProps) {
  return (
    <p className="text-black text-xl font-semibold">
      <span className="text-green font-bold">psychologists.</span>services
    </p>
  );
}
