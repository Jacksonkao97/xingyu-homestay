"use client";

import { LOCALE_COOKIE, type Locale } from "@/i18n/config";
import { sendGAEvent } from "@next/third-parties/google";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const OPTIONS: { locale: Locale; label: string }[] = [
  { locale: "en", label: "EN" },
  { locale: "zh", label: "中文" },
];

function saveLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

export default function LanguageSwitcher() {
  const t = useTranslations("Navigation");
  const current = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSwitch = (locale: Locale) => {
    if (locale === current) return;
    saveLocale(locale);
    // Re-render server components so they pick up the new messages.
    startTransition(() => router.refresh());
    sendGAEvent("event", "language_switch", {
      event_category: "language",
      event_label: locale,
    });
  };

  return (
    <div
      role="group"
      aria-label={t("language")}
      className={`border-base-content/15 flex rounded-full border p-0.5 text-sm transition-opacity ${isPending ? "opacity-60" : ""}`}
    >
      {OPTIONS.map(({ locale, label }) => (
        <button
          key={locale}
          type="button"
          lang={locale === "zh" ? "zh-CN" : "en"}
          aria-pressed={locale === current}
          onClick={() => handleSwitch(locale)}
          className={`rounded-full px-3 py-1 transition-colors ${
            locale === current
              ? "bg-base-content text-base-100"
              : "text-base-content/70 hover:text-base-content"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
