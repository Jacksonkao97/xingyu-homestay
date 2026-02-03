// src/middleware.ts
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "zh"],
  defaultLocale: "en",
  localePrefix: "never", // This ensures no /en or /zh in the URL
});

export const config = {
  // Match all paths except static files
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
