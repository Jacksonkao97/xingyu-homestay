"use client";

import { useLanguageStore } from "@/store/useLanguageStore";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="btn btn-ghost btn-sm px-2">
        <span className="opacity-0">EN</span>
      </button>
    );
  }

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setLanguage("en")}
        className={`btn btn-ghost btn-xs px-2 ${language === "en" ? "btn-active text-info" : "opacity-50"}`}
      >
        EN
      </button>
      <span className="text-base-content/20 text-xs">|</span>
      <button
        onClick={() => setLanguage("zh")}
        className={`btn btn-ghost btn-xs px-2 ${language === "zh" ? "btn-active text-info" : "opacity-50"}`}
      >
        中
      </button>
    </div>
  );
}
