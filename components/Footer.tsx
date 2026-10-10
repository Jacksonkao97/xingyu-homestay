import { useTranslations } from "next-intl";
import Link from "next/link";
import BrandMark from "./BrandMark";

const LINKS = [
  { href: "/privacy", key: "privacy" },
  { href: "/terms", key: "terms" },
  { href: "/sitemap", key: "sitemap" },
] as const;

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-base-200 border-base-content/5 border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="flex items-center gap-2.5 font-serif text-lg font-semibold">
            <BrandMark className="size-7" />
            {t("name")}
          </p>
          <p className="text-base-content/60 mt-2">{t("tagline")}</p>
        </div>
        <div className="text-base-content/60 flex flex-col gap-3 text-sm md:items-end">
          <nav className="flex gap-6">
            {LINKS.map(({ href, key }) => (
              <Link
                key={key}
                href={href}
                className="hover:text-base-content transition-colors"
              >
                {t(key)}
              </Link>
            ))}
          </nav>
          <p>
            © {new Date().getFullYear()} {t("name")}. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
