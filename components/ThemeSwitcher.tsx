"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    if (theme === "xingyu") {
      setTheme("xingyu-dark");
    } else {
      setTheme("xingyu");
    }
    sendGAEvent("event", "theme_toggle", {
      transport_type: "theme",
      event_category: "theme",
      event_label: theme === "xingyu" ? "xingyu-dark" : "xingyu",
    });
  };

  const isClient = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (!isClient) {
    return (
      <div className="btn btn-ghost btn-circle pointer-events-none opacity-0" />
    ); // Placeholder to avoid layout shift
  }

  return (
    <button
      onClick={handleToggle}
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
