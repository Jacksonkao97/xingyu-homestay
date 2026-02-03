"use client";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useTranslations } from "next-intl";

export default function TermsPage() {
  const t = useTranslations("Terms");

  return (
    <main>
      <Navigation />
      <div className="bg-base-200 min-h-screen pt-32 pb-20">
        <div className="container mx-auto max-w-4xl px-6">
          <h1 className="text-base-content mb-8 text-4xl font-bold">
            {t("title")}
          </h1>

          <div className="prose prose-lg text-base-content/80 max-w-none space-y-6">
            <section>
              <h2 className="text-base-content mb-4 text-2xl font-semibold">
                {t("section1Title")}
              </h2>
              <p>{t("section1Content")}</p>
            </section>

            <section>
              <h2 className="text-base-content mb-4 text-2xl font-semibold">
                {t("section2Title")}
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>{t("section2Item1")}</li>
                <li>{t("section2Item2")}</li>
                <li>{t("section2Item3")}</li>
                <li>{t("section2Item4")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base-content mb-4 text-2xl font-semibold">
                {t("section3Title")}
              </h2>
              <p>{t("section3Content")}</p>
            </section>

            <section>
              <h2 className="text-base-content mb-4 text-2xl font-semibold">
                {t("section4Title")}
              </h2>
              <p>{t("section4Content")}</p>
            </section>

            <p className="text-base-content/50 pt-8 text-sm">
              {t("privacy.lastUpdated")}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
