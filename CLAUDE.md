# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for 星语小屋 Star-Whisper Cottage, a whole-house homestay in Kundasang, Sabah (production domain `xingyucabin.com`). It is a single landing page (Hero, Gallery, Pricing, Contact) plus Privacy, Terms and Sitemap pages, in English and Chinese.

## Commands

```bash
npm install          # lockfile is currently out of sync, so `npm ci` fails until it is regenerated
npm run dev          # dev server on http://localhost:3000
npm run build        # production build (also type-checks)
npm run lint         # ESLint (next core-web-vitals + typescript configs)
npx tsc --noEmit     # type-check only
npx prettier --write .   # format; uses prettier-plugin-tailwindcss to sort classes
```

There is no test suite. Validate changes with `npm run lint`, `npx tsc --noEmit` and `npm run build`.

## Stack

Next.js 16 (App Router) with React 19 and TypeScript (strict), Tailwind CSS v4 with daisyUI 5, next-intl for i18n, next-themes for light/dark, Zustand for client state, Lenis for smooth scrolling, Framer Motion and Embla Carousel for UI motion, lucide-react for icons. Path alias `@/*` maps to the repo root.

## Architecture

- `app/layout.tsx` is the root layout. It sets SEO metadata and JSON-LD (`LodgingBusiness`), loads Inter and Noto Sans SC fonts as CSS variables, and wraps every page in `ThemeProvider` → `NextIntlClientProvider` → `Navigation` + `SmoothScroll` + `Footer`. Google Analytics is only rendered when `NODE_ENV === "production"`.
- `app/page.tsx` composes the landing page from section components in `components/`. Each section has an `id` (`home`, `gallery`, `pricing`, `contact`) that `Navigation` scrolls to via Lenis (`lenis.scrollTo` with a -64px offset for the fixed navbar).
- `app/api/send-email/route.ts` is a POST endpoint that sends an inquiry email through Gmail with nodemailer. No UI calls it yet.
- `app/robots.ts` and `app/sitemap.xml/route.ts` generate SEO files; `app/sitemap/page.tsx` is the human-readable sitemap. When adding a page, add it to both sitemaps.
- `proxy.ts` is the Next 16 replacement for `middleware.ts`; it is currently a pass-through.

### Internationalization

Locale is not in the URL. It lives in the `NEXT_LOCALE` cookie:

1. `i18n/request.ts` reads the cookie (default `en`) and loads `messages/<locale>.json`.
2. `components/LanguageSwitcher.tsx` sets the cookie, updates `store/useLanguageStore.ts` (Zustand, persisted to localStorage), then calls `router.refresh()` so server components re-render with the new messages.

Supported locales are `en` and `zh`. `messages/en.json` and `messages/zh.json` must keep identical key structures. Components read strings with `useTranslations("<Namespace>")`; list-like content (gallery items, amenities) is stored as arrays in the message files and read with `useMessages()`. Put all user-facing copy in the message files rather than hard-coding it.

### Theming

Two custom daisyUI themes are defined in `app/globals.css`: `xingyu` (light, default) and `xingyu-dark`. `next-themes` toggles them through the `data-theme` attribute, and `ThemeSwitcher` switches between exactly these two names. Style with daisyUI semantic colors (`bg-base-100`, `text-base-content/70`, `btn-info`, etc.) rather than raw colors so both themes work.

### Client-only rendering pattern

Components that depend on browser state (theme, language cookie) use `useSyncExternalStore` with a server snapshot to detect the client, and render an invisible placeholder of the same size on the server to avoid hydration mismatches and layout shift. Follow this pattern instead of `useEffect` + `useState` mounted flags.

### Analytics

User actions (theme toggle, language switch, contact clicks) are tracked with `sendGAEvent` from `@next/third-parties/google`, using `event_category` / `event_label` fields. Add an event when introducing a new meaningful interaction.

## Environment variables

`.env*` files are git-ignored. Variables used:

| Variable                                             | Used for                                                          |
| ---------------------------------------------------- | ----------------------------------------------------------------- |
| `NEXT_PUBLIC_BASE_URL`                               | metadata, robots, sitemap (defaults to `https://xingyucabin.com`) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER`                        | WhatsApp link and JSON-LD phone (digits only, no `+`)             |
| `NEXT_PUBLIC_MAILBOX`                                | contact email                                                     |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`                    | Google Maps embed in the contact section                          |
| `NEXT_PUBLIC_GA_ID`                                  | Google Analytics (production only)                                |
| `GMAIL_USER`, `GMAIL_APP_PASSWORD`, `GMAIL_RECEIVER` | `/api/send-email`                                                 |

## Conventions

- Prettier with the Tailwind plugin is the formatter; keep class order as the plugin sorts it.
- Commits use Conventional Commit style prefixes (`feat:`, etc.). Work happens on `dev` and is merged to `main` through pull requests.
- Images live in `public/images/`; remote images are only allowed from `images.unsplash.com` (`next.config.ts`).
- `.agent/workflows/ui-ux-pro-max.md` and `.shared/ui-ux-pro-max/` are a design-guidance tool (`python3 .shared/ui-ux-pro-max/scripts/search.py ...`), not part of the app build.

## Known gaps

- `app/privacy`, `app/terms` and `app/sitemap` call `useTranslations("Privacy" | "Terms" | "Sitemap")`, but those namespaces do not exist in the message files yet. They also render their own `Navigation`/`Footer` on top of the ones the root layout already renders.
- `package-lock.json` is missing `@swc/helpers@0.5.23`, so `npm ci` fails until the lockfile is regenerated with `npm install`.
