import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "xingyu" | "xingyu-dark";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "xingyu",
      setTheme: (theme) => {
        set({ theme });
        if (typeof window !== "undefined") {
          document.documentElement.setAttribute("data-theme", theme);
        }
      },
      toggleTheme: () =>
        set((state) => {
          const newTheme = state.theme === "xingyu" ? "xingyu-dark" : "xingyu";
          if (typeof window !== "undefined") {
            document.documentElement.setAttribute("data-theme", newTheme);
          }
          return { theme: newTheme };
        }),
    }),
    {
      name: "theme-storage",
      version: 1.1,
      migrate: (persistedState: unknown, version: number) => {
        if (version < 1) {
          return { theme: "xingyu" };
        }

        return persistedState as ThemeState;
      },
    },
  ),
);
