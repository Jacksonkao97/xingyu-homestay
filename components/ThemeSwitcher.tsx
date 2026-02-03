"use client";

import { useThemeStore } from "@/store/useThemeStore";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle"
      aria-label="Toggle theme"
    >
      {theme === "xingyu" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
}
