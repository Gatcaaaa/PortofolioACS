"use client";

import { type ThemeProviderProps } from "next-themes/dist/types";
import { ThemeProvider as NextThemeProviders } from "next-themes";
import * as Reacy from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemeProviders {...props}>{children}</NextThemeProviders>;
}
