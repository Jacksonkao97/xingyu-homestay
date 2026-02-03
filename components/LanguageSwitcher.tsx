"use client";

import { useLanguageStore } from "@/store/useLanguageStore"; // Adjust path
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LanguageToggle() {
  const router = useRouter();
  const { language, setLanguage } = useLanguageStore();

  const handleSwitch = (newLang: "en" | "zh") => {
    // 1. Update the Cookie (Matches NEXT_LOCALE used in your request.ts)
    Cookies.set("NEXT_LOCALE", newLang, { expires: 365 });

    // 2. Update Zustand (Updates the client-side state)
    setLanguage(newLang);

    // 3. Refresh the Server Components
    // This tells Next.js to re-run request.ts and get new messages
    router.refresh();
  };

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => handleSwitch("en")}
        className={`btn btn-ghost btn-xs px-2 ${language === "en" ? "btn-active text-info" : "opacity-50"}`}
      >
        EN
      </button>
      <span className="text-base-content/20 text-xs">|</span>
      <button
        onClick={() => handleSwitch("zh")}
        className={`btn btn-ghost btn-xs px-2 ${language === "zh" ? "btn-active text-info" : "opacity-50"}`}
      >
        中
      </button>
    </div>
  );
}
