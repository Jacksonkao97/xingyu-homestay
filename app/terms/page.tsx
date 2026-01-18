"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTranslation } from "@/lib/translations";

export default function TermsPage() {
  const { t } = useTranslation();

  return (
    <main>
      <Navigation />
      <div className="bg-base-200 min-h-screen pt-32 pb-20">
        <div className="container mx-auto max-w-4xl px-6">
          <h1 className="text-base-content mb-8 text-4xl font-bold">
            {t("terms.title")}
          </h1>

          <div className="prose prose-lg text-base-content/80 max-w-none space-y-6">
            <section>
              <h2 className="text-base-content mb-4 text-2xl font-semibold">
                {t("terms.section1Title")}
              </h2>
              <p>{t("terms.section1Content")}</p>
            </section>

            <section>
              <h2 className="text-base-content mb-4 text-2xl font-semibold">
                {t("terms.section2Title")}
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>{t("terms.section2Item1")}</li>
                <li>{t("terms.section2Item2")}</li>
                <li>{t("terms.section2Item3")}</li>
                <li>{t("terms.section2Item4")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base-content mb-4 text-2xl font-semibold">
                {t("terms.section3Title")}
              </h2>
              <p>{t("terms.section3Content")}</p>
            </section>

            <section>
              <h2 className="text-base-content mb-4 text-2xl font-semibold">
                {t("terms.section4Title")}
              </h2>
              <p>{t("terms.section4Content")}</p>
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
