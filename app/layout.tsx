import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "星语小屋 (Xingyu Cabin) | Nature Escape in Kundasang, Sabah",
  description:
    "Experience peace and serenity at 星语小屋. A cozy whole-house homestay nestled in nature with stunning views of Mount Kinabalu.",
  keywords: [
    "homestay kundasang",
    "sabah homestay",
    "mount kinabalu stay",
    "nature escape",
    "kundasang cabin",
  ],
  authors: [{ name: "星语小屋" }],
  openGraph: {
    title: "星语小屋 (Xingyu Cabin) | Nature Escape in Kundasang, Sabah",
    description:
      "Experience peace and serenity at 星语小屋. A cozy whole-house homestay nestled in nature with stunning views of Mount Kinabalu.",
    url: "https://xingyucabin.com",
    siteName: "星语小屋 (Xingyu Cabin)",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Xingyu Homestay - Luxury Rooms",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "星语小屋 (Xingyu Cabin) | Nature Escape in Kundasang, Sabah",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Xingyu Cabin",
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
      <body className={`${playfair.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
