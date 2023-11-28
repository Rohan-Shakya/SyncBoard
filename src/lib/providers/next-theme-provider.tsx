"use client";

import * as React from "react";
import { ThemeProvider as NextThemsProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemsProvider {...props}>{children}</NextThemsProvider>;
}
