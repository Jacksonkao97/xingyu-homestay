import Cookies from "js-cookie";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Language = "en" | "zh";

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: "en",
      setLanguage: (language) => {
        // 1. Save to Cookie for the Server
        Cookies.set("NEXT_LOCALE", language, { expires: 365 });
        // 2. Save to Zustand for the Client
        set({ language });
      },
    }),
    {
      name: "language-storage",
      version: 1.1,
      migrate: (persistedState, version) => {
        if (version < 1.1) {
          // Migration from version 0 to 1.1
          return {
            ...(persistedState as LanguageState),
          };
        }

        return persistedState;
      },
    },
  ),
);
