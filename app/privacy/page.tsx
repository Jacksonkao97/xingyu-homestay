import LegalPage from "@/components/LegalPage";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Privacy");
  return { title: t("title") };
}

export default function PrivacyPage() {
  return <LegalPage namespace="Privacy" />;
}
