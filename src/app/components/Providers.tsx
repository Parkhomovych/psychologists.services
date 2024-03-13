"use client";
import React from "react";

import { SessionProvider } from "next-auth/react";

export interface ProvidersProps {
  children?: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
