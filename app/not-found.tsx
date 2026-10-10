import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <main className="mx-auto flex min-h-[80svh] max-w-xl flex-col justify-center px-5 pt-24 pb-16">
      <p className="text-accent font-serif text-7xl font-semibold">404</p>
      <h1 className="mt-4 text-4xl font-semibold">{t("title")}</h1>
      <p className="text-base-content/70 mt-4 text-lg">{t("body")}</p>
      <Link href="/" className="btn btn-primary mt-8 self-start">
        {t("home")}
      </Link>
    </main>
  );
}
