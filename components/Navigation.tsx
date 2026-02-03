"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { MenuIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const NAV_LINKS = [
  { href: "#home", labelKey: "home" },
  { href: "#gallery", labelKey: "gallery" },
  { href: "#pricing", labelKey: "pricing" },
  { href: "#contact", labelKey: "contact" },
];

export default function Navigation() {
  const lenis = useLenis();
  const t = useTranslations("Navigation");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClick = (e: React.MouseEvent, href: string) => {
    // Only intercept if it's an anchor link (starts with #)
    if (href.startsWith("#")) {
      e.preventDefault();
      lenis?.scrollTo(href, {
        offset: -64, // Adjust if you have a sticky header
        duration: 1.5, // Custom speed for this specific jump
        lerp: 0.1,
      });
    }
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-base-100 fixed top-0 right-0 left-0 z-50 shadow-sm duration-300">
      <div className="container mx-auto px-3 py-3 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => (window.location.href = "/")}
            className="flex items-center gap-2"
          >
            <div className="bg-info flex h-10 w-10 items-center justify-center rounded-lg">
              <span className="text-info-content text-lg font-bold">S</span>
            </div>
            <span className="text-base-content inline text-lg font-bold">
              {t("siteName")}
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.labelKey}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-base-content/70 hover:text-base-content transition-colors"
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </div>

          {/* Right side: Language + Theme */}
          <div className="hidden items-center md:flex md:gap-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleToggleSidebar}
              className="btn btn-ghost btn-sm btn-square"
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon />
            </button>

            <AnimatePresence>
              {isSidebarOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={handleToggleSidebar}
                  className="bg-base-100/80 pointer-events-auto absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-center gap-6 space-y-8 backdrop-blur-xs duration-300"
                >
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.labelKey}
                      href={link.href}
                      onClick={(e) => {
                        handleClick(e, link.href);
                      }}
                      className="text-base-content hover:text-info text-xl font-bold transition-colors"
                    >
                      {t(link.labelKey)}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}
