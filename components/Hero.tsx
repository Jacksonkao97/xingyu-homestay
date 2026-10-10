import { whatsappUrl } from "@/lib/site";
import { MapPin, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import TrackedLink from "./TrackedLink";

// Deterministic star field so server and client markup always match.
function makeStars(count: number) {
  let seed = 7;
  const rand = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
  return Array.from({ length: count }, () => ({
    x: rand() * 1440,
    y: rand() * 520,
    r: 0.5 + rand() * rand() * 1.8,
    o: 0.35 + rand() * 0.65,
  }));
}

const STARS = makeStars(90);
const SPARKLES = [
  { x: 1180, y: 120, s: 9 },
  { x: 260, y: 90, s: 6 },
  { x: 940, y: 60, s: 5 },
  { x: 1320, y: 300, s: 5 },
];

// Kinabalu's granite summit plateau with its row of spires.
const KINABALU =
  "M0 300C140 290 260 270 360 245C430 228 480 205 520 185L548 172 560 150 572 162 584 128 596 146 610 118 622 134 636 104 650 126 664 96 676 112 690 82 702 100 716 88 728 108 742 92 756 122 770 104 784 134 798 118 812 148 828 136 846 164 870 176C930 200 1000 222 1080 240 1180 262 1300 276 1440 284V440H0Z";
const DISTANT_RANGE =
  "M0 236C90 214 170 222 250 204 330 186 390 200 450 214 500 226 540 236 600 240L900 236C960 226 1020 196 1100 186 1180 176 1240 202 1310 210 1370 216 1410 208 1440 204V440H0Z";
const MID_HILLS =
  "M0 340C120 318 220 312 330 326 450 342 560 300 700 308 820 315 900 338 1020 330 1140 322 1260 300 1440 318V440H0Z";
const NEAR_HILLS =
  "M0 392C180 372 360 400 560 386 760 372 960 398 1160 384 1290 376 1380 384 1440 380V440H0Z";

export default function Hero() {
  const t = useTranslations("Hero");
  const tContact = useTranslations("Contact");

  return (
    <section
      id="home"
      className="relative isolate flex min-h-svh flex-col overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, var(--sky-top), var(--sky-bottom) 70%)",
      }}
    >
      <svg
        aria-hidden
        className="absolute inset-0 -z-10 size-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          <radialGradient id="horizon-glow" cx="50%" cy="100%" r="60%">
            <stop
              offset="0"
              style={{ stopColor: "var(--sky-glow)", stopOpacity: 0.9 }}
            />
            <stop
              offset="1"
              style={{ stopColor: "var(--sky-glow)", stopOpacity: 0 }}
            />
          </radialGradient>
        </defs>
        <rect width="1440" height="900" fill="url(#horizon-glow)" />
        <g style={{ fill: "var(--star)", opacity: "var(--star-opacity)" }}>
          {STARS.map((star, i) => (
            <circle
              key={i}
              cx={star.x.toFixed(1)}
              cy={star.y.toFixed(1)}
              r={star.r.toFixed(2)}
              opacity={star.o.toFixed(2)}
            />
          ))}
          {SPARKLES.map(({ x, y, s }) => (
            <path
              key={`${x}-${y}`}
              d={`M${x} ${y - s}L${x + s * 0.22} ${y - s * 0.22} ${x + s} ${y} ${x + s * 0.22} ${y + s * 0.22} ${x} ${y + s} ${x - s * 0.22} ${y + s * 0.22} ${x - s} ${y} ${x - s * 0.22} ${y - s * 0.22}Z`}
            />
          ))}
        </g>
      </svg>

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-32 md:pt-40">
        <p
          className="hero-fade text-base-content/75 flex items-center gap-2 text-base"
          style={{ "--delay": "0.15s" } as React.CSSProperties}
        >
          <MapPin className="text-accent size-4" aria-hidden />
          {t("location")}
        </p>
        <h1
          className="hero-fade mt-5 max-w-[15ch] text-[clamp(2.6rem,6.4vw,5rem)] leading-[1.04] font-semibold tracking-[-0.015em]"
          style={{ "--delay": "0.25s" } as React.CSSProperties}
        >
          {t("title")}
        </h1>
        <p
          className="hero-fade text-base-content/80 mt-6 max-w-[34rem] text-lg leading-relaxed md:text-xl"
          style={{ "--delay": "0.4s" } as React.CSSProperties}
        >
          {t("subtitle")}
        </p>
        <div
          className="hero-fade mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ "--delay": "0.55s" } as React.CSSProperties}
        >
          <TrackedLink
            href={whatsappUrl(tContact("whatsappMessage"))}
            event="contact_whatsapp_click"
            category="contact"
            label="hero"
            className="btn btn-primary btn-lg gap-2.5 px-7"
          >
            <MessageCircle className="size-5" aria-hidden />
            {t("cta")}
          </TrackedLink>
          <a href="#gallery" className="btn btn-ghost btn-lg px-5">
            {t("secondaryCta")}
          </a>
        </div>

        <p
          aria-hidden
          lang="zh-CN"
          className="hero-fade text-accent absolute top-36 right-5 hidden font-serif text-[clamp(3.5rem,6vw,6rem)] leading-none font-semibold tracking-[0.18em] whitespace-nowrap [writing-mode:vertical-rl] lg:block"
          style={{ "--delay": "0.8s" } as React.CSSProperties}
        >
          星语小屋
        </p>
      </div>

      <svg
        aria-hidden
        className="mt-auto h-[max(220px,min(44vh,30.5vw))] w-full"
        viewBox="0 0 1440 440"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="mist" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0"
              style={{ stopColor: "var(--mist)", stopOpacity: 0 }}
            />
            <stop
              offset="0.55"
              style={{
                stopColor: "var(--mist)",
                stopOpacity: "var(--mist-opacity)",
              }}
            />
            <stop
              offset="1"
              style={{ stopColor: "var(--mist)", stopOpacity: 0 }}
            />
          </linearGradient>
        </defs>
        <path
          d={DISTANT_RANGE}
          className="hero-rise"
          style={
            {
              fill: "var(--ridge-far)",
              fillOpacity: 0.45,
              "--rise": "60px",
            } as React.CSSProperties
          }
        />
        <path
          d={KINABALU}
          className="hero-rise"
          style={
            {
              fill: "var(--ridge-far)",
              "--rise": "48px",
              "--delay": "0.05s",
            } as React.CSSProperties
          }
        />
        <rect
          y="240"
          width="1440"
          height="110"
          fill="url(#mist)"
          className="hero-fade"
          style={{ "--delay": "0.6s" } as React.CSSProperties}
        />
        <path
          d={MID_HILLS}
          className="hero-rise"
          style={
            {
              fill: "var(--ridge-mid)",
              "--rise": "28px",
              "--delay": "0.2s",
            } as React.CSSProperties
          }
        />
        <path d={NEAR_HILLS} style={{ fill: "var(--color-base-100)" }} />
      </svg>
    </section>
  );
}
