import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Inter, Noto_Sans_SC } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  style: ["normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://xingyucabin.com",
  ),
  title: "星语小屋 Star-Whisper Cottage | Nature Escape in Kundasang, Sabah",
  description:
    "Experience peace and serenity at 星语小屋. A cozy whole-house homestay nestled in nature with stunning views of Mount Kinabalu.",
  keywords: [
    "homestay kundasang",
    "sabah homestay",
    "mount kinabalu stay",
    "nature escape",
    "kundasang cabin",
    "star-whisper cottage",
  ],
  openGraph: {
    title: "星语小屋 Star-Whisper Cottage | Nature Escape in Kundasang, Sabah",
    description:
      "Experience peace and serenity at 星语小屋. A cozy whole-house homestay nestled in nature with stunning views of Mount Kinabalu.",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://xingyucabin.com",
    siteName: "星语小屋 Star-Whisper Cottage",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Star-Whisper Cottage - Luxury Rooms",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "星语小屋 Star-Whisper Cottage | Nature Escape in Kundasang, Sabah",
    description:
      "Experience peace and serenity at 星语小屋. A cozy whole-house homestay nestled in nature with stunning views of Mount Kinabalu.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value || "en";

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Star-Whisper Cottage",
              alternateName: "星语小屋",
              description:
                "Cozy whole-house nature homestay in Kundasang, Sabah",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kundasang Town",
                addressRegion: "Sabah",
                addressCountry: "Malaysia",
              },
              telephone:
                "+" +
                (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "60123456789"),
              email:
                process.env.NEXT_PUBLIC_MAILBOX || "contact@xingyucabin.com",
              priceRange: "RM350 - RM500",
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Kitchen" },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "BBQ Facilities",
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Mountain View",
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Nature Surroundings",
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Free WiFi",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${notoSansSC.variable} antialiased`}>
        <ThemeProvider>
          <NextIntlClientProvider>
            <header>
              <Navigation />
            </header>
            <SmoothScroll>{children}</SmoothScroll>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      )}
    </html>
  );
}
