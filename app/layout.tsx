import type { Metadata } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";
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
  title: "星语小屋 (Star-Whisper Cottage) | Nature Escape in Kundasang, Sabah",
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
  authors: [{ name: "星语小屋" }],
  openGraph: {
    title:
      "星语小屋 (Star-Whisper Cottage) | Nature Escape in Kundasang, Sabah",
    description:
      "Experience peace and serenity at 星语小屋. A cozy whole-house homestay nestled in nature with stunning views of Mount Kinabalu.",
    url: "https://xingyucabin.com",
    siteName: "星语小屋 (Star-Whisper Cottage)",
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
    title:
      "星语小屋 (Star-Whisper Cottage) | Nature Escape in Kundasang, Sabah",
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

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme initialization script - runs before page renders to prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const raw = localStorage.getItem('theme-storage');
                  const theme = raw ? JSON.parse(raw).state.theme : 'xingyu';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'xingyu');
                }
              })();
            `,
          }}
        />
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
              telephone: "+60198207639",
              email: "kao1239@gmail.com",
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
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
