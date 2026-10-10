"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ThemeSwitcher() {
  const t = useTranslations("Navigation");
  const { resolvedTheme, setTheme } = useTheme();
  const isClient = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (!isClient) {
    // Same size as the button, so nothing shifts once the theme is known.
    return <div className="size-10" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";
  const next = isDark ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => {
        setTheme(next);
        sendGAEvent("event", "theme_toggle", {
          event_category: "theme",
          event_label: next,
        });
      }}
      className="btn btn-ghost btn-circle size-10"
      aria-label={isDark ? t("toLight") : t("toDark")}
    >
      {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  );
}
