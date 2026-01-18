import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // Place any private paths here
    },
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL || "https://xingyucabin.com"}/sitemap.xml`,
  };
}
