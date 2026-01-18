"use client";

import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "@/lib/translations";

export default function Navigation() {
  const { t } = useTranslation();

  return (
    <nav className="bg-base-100 fixed top-0 right-0 left-0 z-50 shadow-sm duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-info flex h-8 w-8 items-center justify-center rounded-lg">
              <span className="text-info-content text-lg font-bold">S</span>
            </div>
            <span className="text-base-content text-lg font-bold">
              {t("brand.logo")}
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#home"
              className="text-base-content/70 hover:text-base-content transition-colors"
            >
              {t("nav.home")}
            </Link>
            <Link
              href="#gallery"
              className="text-base-content/70 hover:text-base-content transition-colors"
            >
              {t("nav.gallery")}
            </Link>
            <Link
              href="#pricing"
              className="text-base-content/70 hover:text-base-content transition-colors"
            >
              {t("nav.pricing")}
            </Link>
            <Link
              href="#contact"
              className="text-base-content/70 hover:text-base-content transition-colors"
            >
              {t("nav.contact")}
            </Link>
          </div>

          {/* Right side: Language + Theme + CTA */}
          <div className="flex items-center gap-2 md:gap-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <Link href="#contact" className="btn btn-info btn-sm md:btn-md">
              {t("nav.bookNow")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
