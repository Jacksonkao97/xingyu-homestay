# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for 星语小屋 Star-Whisper Cottage, a whole-house homestay in Kundasang, Sabah (production domain `xingyucabin.com`). It is a single landing page (Hero, Gallery, Pricing, Contact) plus Privacy, Terms and Sitemap pages, in English and Chinese.

## Commands

```bash
npm ci               # install from the lockfile
npm run dev          # dev server on http://localhost:3000
npm run build        # production build (also type-checks)
npm run lint         # ESLint (next core-web-vitals + typescript configs)
npm run typecheck    # type-check only (TypeScript 7 native `tsc`)
npx prettier --write .   # format; uses prettier-plugin-tailwindcss to sort classes
```

There is no test suite. Validate changes with `npm run lint`, `npm run typecheck` and `npm run build`.

## Stack

Next.js 16 (App Router) with React 19 and TypeScript 7 (strict), Tailwind CSS v4 with daisyUI 5, next-intl for i18n, next-themes for light/dark, lucide-react for icons. Path alias `@/*` maps to the repo root. There is no animation or carousel library: smooth scrolling is CSS (`scroll-behavior` plus `scroll-padding-top` for the fixed navbar), the gallery lightbox is a native `<dialog>`, and the hero's load animation is CSS keyframes in `app/globals.css` that respect `prefers-reduced-motion`.

## Architecture

- `app/layout.tsx` is the root layout. It builds localized metadata (`generateMetadata`) and JSON-LD (`LodgingBusiness`), loads the fonts as CSS variables on `<html>`, and wraps every page in `ThemeProvider` → `NextIntlClientProvider` → `Navigation` + page + `Footer`. Pages must not render their own `Navigation`/`Footer`. Google Analytics is only rendered in production when `NEXT_PUBLIC_GA_ID` is set.
- `lib/site.ts` holds site-wide constants: env-backed values (base URL, WhatsApp number, mailbox, GA ID), the nightly price, the address and keyless Google Maps embed URL, the section ids and the page list used by `sitemap.xml`. Read env vars through it rather than `process.env` in components.
- `app/page.tsx` composes the landing page from section components in `components/` (`Hero`, `Gallery`, `PricingSection`, `ContactSection`). Each section has an `id` (`home`, `gallery`, `pricing`, `contact`); `Navigation` links to them as plain `#id` anchors (`/#id` from other pages).
- Sections are server components. Only interactive pieces are client components: `Navigation` (mobile menu), `LanguageSwitcher`, `ThemeSwitcher`, `Gallery` (lightbox) and `TrackedLink` (an external link that sends a GA event).
- `components/LegalPage.tsx` renders the Privacy and Terms pages from the `Privacy` / `Terms` message namespaces (`title`, `updated`, `intro`, `sections[]`).
- `app/api/send-email/route.ts` is a POST endpoint that sends an inquiry email through Gmail with nodemailer. No UI calls it yet.
- `app/robots.ts` and `app/sitemap.xml/route.ts` generate SEO files; `app/sitemap/page.tsx` is the human-readable sitemap. When adding a page, add it to `PAGES` in `lib/site.ts` and to the sitemap page.
- `public/images/og-image.jpg` is the link-preview image (1200×630), a screenshot of the hero.

### Internationalization

Locale is not in the URL. It lives in the `NEXT_LOCALE` cookie:

1. `i18n/config.ts` lists the locales and the cookie name; `i18n/request.ts` reads the cookie, falls back to `en` for missing or unknown values, and loads `messages/<locale>.json`.
2. `components/LanguageSwitcher.tsx` reads the current locale with `useLocale()`, sets the cookie, then calls `router.refresh()` so server components re-render with the new messages.

Supported locales are `en` and `zh`. `messages/en.json` and `messages/zh.json` must keep identical key structures. `global.d.ts` types next-intl against `messages/en.json`, so a missing key is a type error. Components read strings with `useTranslations("<Namespace>")`; list-like content (gallery items, amenities, legal sections) is stored as arrays in the message files and read with `useMessages()`. Put all user-facing copy in the message files rather than hard-coding it.

### Theming

Two custom daisyUI themes are defined in `app/globals.css`: `xingyu` (light, "highland dawn") and `xingyu-dark` ("highland night"). `next-themes` uses the theme names `light` / `dark` (default: the visitor's system setting) and maps them to those daisyUI names on the `data-theme` attribute; `ThemeSwitcher` toggles via `resolvedTheme`. Style with daisyUI semantic colors (`bg-base-100`, `text-base-content/70`, `btn-primary`, etc.) rather than raw colors so both themes work. The hero landscape uses its own per-theme CSS variables (`--sky-*`, `--ridge-*`, `--mist`, `--star`) defined next to the themes.

Typography: Source Serif 4 + Noto Serif SC for headings (`font-serif`, applied to `h1`–`h3` by default) and Source Sans 3 + Noto Sans SC for body text (`font-sans`). Source Serif/Sans are the Latin companions of Source Han (Noto CJK), so both languages share one design.

### Client-only rendering pattern

Components that depend on browser-only state (the theme) use `useSyncExternalStore` with a server snapshot to detect the client, and render an invisible placeholder of the same size on the server to avoid hydration mismatches and layout shift. Follow this pattern instead of `useEffect` + `useState` mounted flags.

### Analytics

User actions (theme toggle, language switch, contact and map clicks, gallery opens) are tracked with `sendGAEvent` from `@next/third-parties/google`, using `event_category` / `event_label` fields. Add an event when introducing a new meaningful interaction.

## Environment variables

`.env*` files are git-ignored. `NEXT_PUBLIC_*` values are inlined at build time, so a change on Vercel needs a redeploy. Variables used:

| Variable                                             | Used for                                                          |
| ---------------------------------------------------- | ----------------------------------------------------------------- |
| `NEXT_PUBLIC_BASE_URL`                               | metadata, robots, sitemap (defaults to `https://xingyucabin.com`) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER`                        | WhatsApp link and JSON-LD phone (digits only, no `+`)             |
| `NEXT_PUBLIC_MAILBOX`                                | contact email                                                     |
| `NEXT_PUBLIC_GA_ID`                                  | Google Analytics (production only)                                |
| `GMAIL_USER`, `GMAIL_APP_PASSWORD`, `GMAIL_RECEIVER` | `/api/send-email`                                                 |

## Conventions

- Prettier with the Tailwind plugin is the formatter; keep class order as the plugin sorts it.
- Commits use Conventional Commit style prefixes (`feat:`, etc.). Work happens on `dev` and is merged to `main` through pull requests.
- Images live in `public/images/` (gallery photos in `public/images/gallery/`, currently placeholders to be replaced with real photos of the house); remote images are only allowed from `images.unsplash.com` (`next.config.ts`).
- TypeScript is installed twice, as Microsoft recommends until TypeScript 7.1 ships a compiler API: `typescript` is aliased to `@typescript/typescript6` (the 6.0 API, needed by typescript-eslint and used by `next build`'s type check), and `@typescript/native` is TypeScript 7, which provides the `tsc` binary. Drop the alias once typescript-eslint supports TypeScript 7.
