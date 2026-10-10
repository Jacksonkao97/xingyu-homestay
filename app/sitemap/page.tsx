import { SECTIONS } from "@/lib/site";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Sitemap");
  return { title: t("title") };
}

export default function SitemapPage() {
  const t = useTranslations("Sitemap");
  const tNav = useTranslations("Navigation");
  const tFooter = useTranslations("Footer");

  const groups = [
    {
      heading: t("mainNav"),
      links: SECTIONS.map((id) => ({
        href: id === "home" ? "/" : `/#${id}`,
        title: tNav(id),
      })),
    },
    {
      heading: t("legalInfo"),
      links: [
        { href: "/privacy", title: tFooter("privacy") },
        { href: "/terms", title: tFooter("terms") },
      ],
    },
  ];

  return (
    <main className="mx-auto max-w-3xl px-5 pt-32 pb-24 md:pt-40">
      <h1 className="text-4xl font-semibold md:text-5xl">{t("title")}</h1>
      <div className="mt-12 grid gap-12 sm:grid-cols-2">
        {groups.map(({ heading, links }) => (
          <section key={heading}>
            <h2 className="text-base-content/60 text-lg font-semibold">
              {heading}
            </h2>
            <ul className="mt-4 space-y-3">
              {links.map(({ href, title }) => (
                <li key={href}>
                  <Link href={href} className="link link-hover text-xl">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
