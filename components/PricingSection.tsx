import { PRICE_PER_NIGHT, whatsappUrl } from "@/lib/site";
import {
  CookingPot,
  Flame,
  MessageCircle,
  SquareParking,
  Trees,
  Wifi,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { useMessages, useTranslations } from "next-intl";
import TrackedLink from "./TrackedLink";

const AMENITY_ICONS: Record<string, LucideIcon> = {
  wifi: Wifi,
  kitchen: CookingPot,
  parking: SquareParking,
  air: Wind,
  forest: Trees,
  bbq: Flame,
};

export default function PricingSection() {
  const t = useTranslations("PricingSection");
  const tContact = useTranslations("Contact");
  const amenities = useMessages().PricingSection.amenities;

  return (
    <section id="pricing" className="bg-base-200 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_minmax(0,24rem)] md:items-center md:gap-16">
        <div>
          <h2 className="text-4xl font-semibold md:text-5xl">{t("title")}</h2>
          <p className="text-base-content/70 mt-4 max-w-xl text-lg">
            {t("subtitle")}
          </p>

          <ul className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {amenities.map(({ icon, label }) => {
              const Icon = AMENITY_ICONS[icon] ?? Trees;
              return (
                <li key={icon} className="flex items-center gap-4">
                  <span className="bg-base-100 text-primary flex size-11 shrink-0 items-center justify-center rounded-full">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="text-base-content/85">{label}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="bg-neutral text-neutral-content rounded-box relative overflow-hidden p-8 md:p-10">
          <svg
            aria-hidden
            viewBox="0 0 120 120"
            className="text-accent absolute -top-6 -right-6 size-32 opacity-20"
          >
            <path
              d="M60 0l9 51 51 9-51 9-9 51-9-51-51-9 51-9z"
              fill="currentColor"
            />
          </svg>
          <p className="text-neutral-content/70">{t("standardRate")}</p>
          <p className="mt-3 flex items-baseline gap-2">
            <span className="text-accent font-serif text-6xl font-semibold">
              RM{PRICE_PER_NIGHT}
            </span>
            <span className="text-neutral-content/70">/ {t("perNight")}</span>
          </p>
          <TrackedLink
            href={whatsappUrl(tContact("whatsappMessage"))}
            event="contact_whatsapp_click"
            category="contact"
            label="pricing"
            className="btn btn-accent btn-lg mt-8 w-full gap-2.5"
          >
            <MessageCircle className="size-5" aria-hidden />
            {t("bookNow")}
          </TrackedLink>
          <p className="text-neutral-content/60 mt-5 text-sm">
            {t("disclaimer")}
          </p>
        </div>
      </div>
    </section>
  );
}
