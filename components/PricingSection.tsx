"use client";

import { Check } from "lucide-react";
import { useMessages, useTranslations } from "next-intl";

export default function PricingSection() {
  const t = useTranslations("PricingSection");
  const message = useMessages();
  const amenities = Object.values(message.PricingSection.amenities) as string[];

  return (
    <section id="pricing" className="bg-base-100 py-10 duration-300">
      <div className="container mx-auto px-3 py-3 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left Side - Description & Amenities */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-base-content text-3xl font-bold md:text-4xl">
                  {t("title")}
                </h2>
                <p className="text-base-content/70 text-sm md:text-base">
                  {t("subtitle")}
                </p>
              </div>

              {/* Amenities Grid */}
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="bg-info/10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                      <Check className="text-info h-3 w-3" />
                    </div>
                    <span className="text-base-content/80 text-sm">
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Price Card */}
            <div className="flex justify-center md:justify-end">
              <div className="card border-base-300 w-full max-w-sm rounded-3xl border shadow-xl">
                <div className="card-body space-y-6 text-center">
                  <div>
                    <p className="text-base-content/60 mb-2 text-xs font-semibold tracking-wider uppercase">
                      {t("standardRate")}
                    </p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-base-content text-5xl font-bold">
                        RM400
                      </span>
                      <span className="text-base-content/60">
                        /{t("perNight")}
                      </span>
                    </div>
                  </div>

                  {/* <button  className="btn btn-info btn-lg w-full">
                    {t("bookNow")}
                  </button> */}

                  <p className="text-base-content/50 text-xs">
                    {t("disclaimer")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
