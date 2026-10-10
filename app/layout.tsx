import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import {
  GA_ID,
  MAILBOX,
  PRICE_PER_NIGHT,
  SITE_URL,
  WHATSAPP_NUMBER,
} from "@/lib/site";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import {
  Noto_Sans_SC,
  Noto_Serif_SC,
  Source_Sans_3,
  Source_Serif_4,
} from "next/font/google";
import "./globals.css";

// Source Serif/Sans are the Latin companions of Source Han (Noto CJK), so the
// English and Chinese text share one design.
const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  weight: ["500", "600"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");
  const locale = await getLocale();
  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: title, template: "%s | 星语小屋 Star-Whisper Cottage" },
    description,
    keywords: [
      "homestay kundasang",
      "sabah homestay",
      "mount kinabalu stay",
      "kundasang whole house",
      "star-whisper cottage",
      "星语小屋",
      "昆达山民宿",
    ],
    openGraph: {
      title,
      description,
      url: SITE_URL,
      siteName: "星语小屋 Star-Whisper Cottage",
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "星语小屋 Star-Whisper Cottage",
        },
      ],
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.jpg"],
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Star-Whisper Cottage",
  alternateName: "星语小屋",
  description: "Whole-house homestay in Kundasang, Sabah",
  url: SITE_URL,
  image: `${SITE_URL}/images/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jalan Kundasang Kauluan",
    addressLocality: "Ranau",
    postalCode: "89308",
    addressRegion: "Sabah",
    addressCountry: "MY",
  },
  telephone: `+${WHATSAPP_NUMBER}`,
  email: MAILBOX,
  priceRange: `RM${PRICE_PER_NIGHT}`,
  amenityFeature: [
    "Kitchen",
    "BBQ Facilities",
    "Mountain View",
    "Private Parking",
    "Free WiFi",
  ].map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  })),
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale === "zh" ? "zh-CN" : "en"}
      className={`${sourceSerif.variable} ${sourceSans.variable} ${notoSerifSC.variable} ${notoSansSC.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <NextIntlClientProvider>
            <Navigation />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
      {process.env.NODE_ENV === "production" && GA_ID && (
        <GoogleAnalytics gaId={GA_ID} />
      )}
    </html>
  );
}
