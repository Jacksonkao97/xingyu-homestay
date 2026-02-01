"use client";

import { useTranslation } from "@/lib/translations";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-base-100 border-base-300 border-t py-8 duration-300">
      <div className="container mx-auto px-3 py-3 md:px-6">
        <div className="text-base-content/60 flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          {/* Copyright */}
          <div>
            © {currentYear} {t("brand.name")}. {t("footer.rights")}
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-base-content transition-colors"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="/terms"
              className="hover:text-base-content transition-colors"
            >
              {t("footer.terms")}
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-base-content transition-colors"
            >
              {t("footer.sitemap")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
