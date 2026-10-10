import {
  formatPhone,
  MAILBOX,
  MAP_EMBED_URL,
  MAP_URL,
  WHATSAPP_NUMBER,
  whatsappUrl,
} from "@/lib/site";
import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import TrackedLink from "./TrackedLink";

export default function ContactSection() {
  const t = useTranslations("Contact");

  const methods = [
    {
      key: "whatsapp",
      icon: MessageCircle,
      label: t("whatsapp"),
      value: formatPhone(WHATSAPP_NUMBER),
      href: whatsappUrl(t("whatsappMessage")),
      event: "contact_whatsapp_click",
    },
    {
      key: "email",
      icon: Mail,
      label: t("email"),
      value: MAILBOX,
      href: `mailto:${MAILBOX}`,
      event: "contact_email_click",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-4xl font-semibold md:text-5xl">{t("ready")}</h2>
          <p className="text-base-content/70 mt-4 max-w-md text-lg">
            {t("subtitle")}
          </p>

          <h3 className="sr-only">{t("getInTouch")}</h3>
          <ul className="border-base-content/10 divide-base-content/10 mt-10 divide-y border-y">
            {methods.map(({ key, icon: Icon, label, value, href, event }) => (
              <li key={key}>
                <TrackedLink
                  href={href}
                  event={event}
                  category="contact"
                  label="contact_section"
                  className="group flex items-center gap-5 py-5"
                >
                  <span className="bg-primary text-primary-content flex size-12 shrink-0 items-center justify-center rounded-full">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="text-base-content/60 block text-sm">
                      {label}
                    </span>
                    <span className="block truncate text-lg font-medium md:text-xl">
                      {value}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="text-base-content/40 group-hover:text-accent size-5 transition-colors"
                    aria-hidden
                  />
                </TrackedLink>
              </li>
            ))}
          </ul>

          <p className="text-base-content/70 mt-8 flex gap-3">
            <MapPin
              className="text-accent mt-0.5 size-5 shrink-0"
              aria-hidden
            />
            <span>
              {t("address")}
              <TrackedLink
                href={MAP_URL}
                event="contact_map_click"
                category="contact"
                label="open_map"
                className="link link-hover text-base-content mt-1 block font-medium"
              >
                {t("openMap")}
              </TrackedLink>
            </span>
          </p>
        </div>

        <div className="rounded-box bg-base-200 relative min-h-80 overflow-hidden md:min-h-full">
          <iframe
            src={MAP_EMBED_URL}
            title={t("mapTitle")}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0 size-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
