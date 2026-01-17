"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-base-200 relative flex min-h-screen items-center justify-center pt-18 duration-300"
    >
      {/* Hero Container with Rounded Corners */}
      <div className="container mx-auto px-6 py-6">
        <div className="relative flex min-h-120 items-center justify-center overflow-hidden rounded-4xl shadow-2xl md:min-h-180">
          {/* Background Image */}
          <Image
            src="/images/hero-room.jpg"
            alt="Modern Homestay Interior"
            fill
            className="object-cover"
            priority
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Centered Content */}
          <div className="relative z-10 max-w-3xl px-6 text-center">
            <h1 className="mb-6 text-5xl leading-tight font-bold text-white md:text-6xl lg:text-7xl">
              Experience Comfort Like Never Before
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
              Experience luxury living in the heart of nature. Your perfect
              getaway awaits.
            </p>

            <button className="btn btn-info btn-lg shadow-lg">
              Book Your Stay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
