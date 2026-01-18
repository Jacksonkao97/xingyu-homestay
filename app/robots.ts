import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // Place any private paths here
    },
    sitemap: "https://xingyucabin.com/sitemap.xml",
  };
}
