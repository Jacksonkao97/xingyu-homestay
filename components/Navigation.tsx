"use client";

import { SECTIONS } from "@/lib/site";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandMark from "./BrandMark";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navigation() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // On other pages the section links point back to the home page.
  const prefix = pathname === "/" ? "" : "/";
  const links = SECTIONS.map((id) => ({ id, href: `${prefix}#${id}` }));

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header className="bg-base-100/75 border-base-content/5 fixed inset-x-0 top-0 z-40 border-b backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setIsOpen(false)}
        >
          <BrandMark className="size-8" />
          <span className="font-serif text-lg font-semibold">
            {t("siteName")}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map(({ id, href }) => (
            <li key={id}>
              <a
                href={href}
                className="text-base-content/70 hover:text-base-content transition-colors"
              >
                {t(id)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="btn btn-ghost btn-circle md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? t("closeMenu") : t("openMenu")}
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="bg-base-100 border-base-content/10 h-[calc(100dvh-4rem)] border-t px-5 py-8 md:hidden"
        >
          <ul className="space-y-1">
            {links.map(({ id, href }) => (
              <li key={id}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 font-serif text-3xl font-semibold"
                >
                  {t(id)}
                </a>
              </li>
            ))}
          </ul>
          <div className="border-base-content/10 mt-8 flex items-center justify-between border-t pt-6">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
