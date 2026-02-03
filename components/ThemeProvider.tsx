"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme" // Or "class" depending on your CSS framework (e.g. DaisyUI/Tailwind)
      defaultTheme="xingyu"
      enableSystem
    >
      {children}
    </NextThemesProvider>
  );
}
