"use client";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useTranslations } from "next-intl";

export default function PrivacyPage() {
  const t = useTranslations("Privacy");

  return (
    <main>
      <Navigation />
      <div className="bg-base-200 min-h-screen pt-32 pb-20">
        <div className="container mx-auto max-w-4xl px-6">
          <h1 className="text-base-content mb-8 text-4xl font-bold">
            {t("privacy.title")}
          </h1>

          <div className="prose prose-lg text-base-content/80 max-w-none space-y-6">
            <section>
              <h2 className="text-base-content mb-4 text-2xl font-semibold">
                {t("privacy.section1Title")}
              </h2>
              <p>{t("privacy.section1Content")}</p>
            </section>

            <section>
              <h2 className="text-base-content mb-4 text-2xl font-semibold">
                {t("privacy.section2Title")}
              </h2>
              <p>{t("privacy.section2Content")}</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>{t("privacy.section2Item1")}</li>
                <li>{t("privacy.section2Item2")}</li>
                <li>{t("privacy.section2Item3")}</li>
                <li>{t("privacy.section2Item4")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base-content mb-4 text-2xl font-semibold">
                {t("privacy.section3Title")}
              </h2>
              <p>{t("privacy.section3Content")}</p>
            </section>

            <section>
              <h2 className="text-base-content mb-4 text-2xl font-semibold">
                {t("privacy.section4Title")}
              </h2>
              <p>{t("privacy.section4Content1")}</p>
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
