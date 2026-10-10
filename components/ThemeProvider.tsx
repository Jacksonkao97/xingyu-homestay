"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// "light" / "dark" (or the visitor's system setting) map onto the two daisyUI
// themes defined in globals.css.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      themes={["light", "dark"]}
      value={{ light: "xingyu", dark: "xingyu-dark" }}
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
