"use client";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function SitemapPage() {
  const t = useTranslations("Sitemap");

  const links = [
    { title: t("nav.home"), href: "/" },
    { title: t("nav.gallery"), href: "/#gallery" },
    { title: t("nav.pricing"), href: "/#pricing" },
    { title: t("nav.contact"), href: "/#contact" },
    { title: t("footer.privacy"), href: "/privacy" },
    { title: t("footer.terms"), href: "/terms" },
  ];

  return (
    <main>
      <Navigation />
      <div className="bg-base-200 min-h-screen pt-32 pb-20">
        <div className="container mx-auto max-w-4xl px-6">
          <h1 className="text-base-content mb-8 text-4xl font-bold">
            {t("title")}
          </h1>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-primary mb-6 text-xl font-bold">
                {t("mainNav")}
              </h2>
              <ul className="space-y-4">
                {links.slice(0, 4).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base-content/70 hover:text-info flex items-center gap-2 text-lg transition-colors"
                    >
                      <span className="bg-info h-1.5 w-1.5 rounded-full opacity-50"></span>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-primary mb-6 text-xl font-bold">
                {t("legalInfo")}
              </h2>
              <ul className="space-y-4">
                {links.slice(4).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base-content/70 hover:text-info flex items-center gap-2 text-lg transition-colors"
                    >
                      <span className="bg-info h-1.5 w-1.5 rounded-full opacity-50"></span>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
