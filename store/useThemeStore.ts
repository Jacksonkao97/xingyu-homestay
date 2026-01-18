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
      version: 1,
      migrate: (persistedState: any, version: number) => {
        if (version === 0) {
          // Migration from version 0 to 1
          // We can add logic here if the state structure changed
        }
        return persistedState as ThemeState;
      },
    },
  ),
);
