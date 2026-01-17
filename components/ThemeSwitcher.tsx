"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<"xingyu" | "xingyu-dark">("xingyu");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to 'xingyu'
    const savedTheme = localStorage.getItem("theme") as
      | "xingyu"
      | "xingyu-dark"
      | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "xingyu" ? "xingyu-dark" : "xingyu";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Don't render icon until mounted to prevent flash
  if (!mounted) {
    return (
      <button className="btn btn-ghost btn-circle" aria-label="Toggle theme">
        <div className="h-5 w-5" /> {/* Placeholder */}
      </button>
    );
  }

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
