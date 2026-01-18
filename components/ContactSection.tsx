"use client";

import { Mail, Phone, ExternalLink } from "lucide-react";
import { useTranslation } from "@/lib/translations";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="bg-base-300 py-16 duration-300">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Left Side - Title & Contact Info */}
            <div className="space-y-8">
              {/* Section Title */}
              <h2 className="text-base-content text-3xl font-bold md:text-4xl">
                {t("contact.ready")}
              </h2>

              <div>
                <h3 className="text-base-content mb-1 text-2xl font-bold">
                  {t("contact.getInTouch")}
                </h3>
                <p className="text-base-content/70 text-sm">
                  {t("contact.subtitle")}
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-base-100 border-base-300 hover:border-info group flex items-center gap-4 rounded-2xl border-2 p-4 transition-colors"
                >
                  <div className="bg-success/10 group-hover:bg-success/20 flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors">
                    <Phone className="text-success h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base-content/60 text-xs font-semibold tracking-wider uppercase">
                      {t("contact.whatsapp")}
                    </p>
                    <p className="text-base-content font-semibold">
                      +1 (555) 123-4567
                    </p>
                  </div>
                  <ExternalLink className="text-base-content/40 group-hover:text-info h-4 w-4 transition-colors" />
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@homestay.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-base-100 border-base-300 hover:border-info group flex items-center gap-4 rounded-2xl border-2 p-4 transition-colors"
                >
                  <div className="bg-error/10 group-hover:bg-error/20 flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors">
                    <Mail className="text-error h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base-content/60 text-xs font-semibold tracking-wider uppercase">
                      {t("contact.email")}
                    </p>
                    <p className="text-base-content font-semibold">
                      hello@homestay.com
                    </p>
                  </div>
                  <ExternalLink className="text-base-content/40 group-hover:text-info h-4 w-4 transition-colors" />
                </a>
              </div>
            </div>

            {/* Right Side - Map */}
            <div className="relative h-80 min-h-100 overflow-hidden rounded-2xl shadow-xl md:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819618045441!2d103.8198!3d1.3521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjEnMDcuNiJOIDEwM8KwNDknMTEuMyJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
