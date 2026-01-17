"use client";

import { Check } from "lucide-react";

const amenities = [
  "High-speed Wi-Fi",
  "Full Kitchen",
  "Private Parking",
  "Laundry",
  "Smart Home Features",
  "Work Space",
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-base-100 py-16 duration-300">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left Side - Description & Amenities */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-base-content text-3xl font-bold md:text-4xl">
                  Transparent Pricing,
                  <br />
                  Premium Experience.
                </h2>
                <p className="text-base-content/70 text-sm md:text-base">
                  Enjoy all the comforts of home without all-inclusive nightly
                  rate. No hidden fees, just pure relaxation.
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
                      Standard Rate
                    </p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-base-content text-5xl font-bold">
                        RM400
                      </span>
                      <span className="text-base-content/60">/night</span>
                    </div>
                  </div>

                  <button className="btn btn-info btn-lg w-full">
                    Check Availability
                  </button>

                  <p className="text-base-content/50 text-xs">
                    Prices may vary during holidays and special events
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
