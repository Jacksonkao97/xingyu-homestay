import { Language, useLanguageStore } from "@/store/useLanguageStore";

import translationsData from "./translations.json";

export const translations = translationsData as Record<Language, never>;

export const useTranslation = () => {
  const { language } = useLanguageStore();

  const t = (path: string): string => {
    const keys = path.split(".");
    let result: never = translations[language];

    for (const key of keys) {
      if (result && Object.prototype.hasOwnProperty.call(result, key)) {
        result = result[key];
      } else {
        return path; // Fallback to key path if not found
      }
    }

    return result;
  };

  return { t, language };
};
