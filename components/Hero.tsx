"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      id="home"
      className="bg-base-200 relative mt-16 flex min-h-[calc(100vh-64px)] duration-300"
    >
      {/* Hero Container with Rounded Corners */}
      <div className="container flex flex-col justify-center px-0 py-0 sm:mx-auto sm:px-6 sm:py-6">
        <div className="relative flex min-h-120 flex-1 items-center justify-center overflow-hidden sm:rounded-4xl md:min-h-180">
          {/* Background Image */}
          <Image
            src="/images/hero-room.jpg"
            alt="Star-Whisper Cottage Modern Interior"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Centered Content */}
          <div className="relative z-10 max-w-3xl px-6 text-center">
            <h1 className="mb-6 text-5xl leading-tight font-bold text-white md:text-6xl lg:text-7xl">
              {t("title")}
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
              {t("subtitle")}
            </p>

            <button className="btn btn-info btn-lg shadow-lg">
              {t("cta")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
