"use client";

import { ArrowRight, Mountain, Sparkles, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-base-100">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Image
          src="/images/hero-room.jpg"
          alt="Xingyu Cabin"
          fill
          className="object-cover scale-110 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-base-100 via-base-100/40 to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Editorial Branding */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 backdrop-blur-md rounded-full border border-secondary/30 text-secondary text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3 h-3" />
              <span>Boutique Nature Retreat</span>
            </div>

            {/* <div className="badge">
              <Sparkles className="w-3 h-3" />
              <span>Boutique Nature Retreat</span>
            </div> */}

            <h1 className="text-6xl sm:text-8xl text-white leading-[0.9] font-bold">
              星语
              <br />
              <span className="italic font-light text-secondary">小屋</span>
            </h1>

            <p className="max-w-md text-lg text-white/70 font-light leading-relaxed">
              An editorial escape into the misty highlands of Kundasang. Find
              your rhythm in a cabin designed for slow living and uninterrupted
              mountain vistas.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#gallery"
                className="px-8 py-4 bg-secondary text-primary rounded-2xl font-bold shadow-premium hover:scale-105 transition-all duration-500"
              >
                The Experience
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold hover:bg-white/10 transition-all"
              >
                Book Your Stay
              </a>
            </div>
          </div>

          {/* Right Side: Floating Spotlight (Empty on large screens for asymmetry) */}
          <div className="hidden lg:block relative h-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Refined Scroll Hint: Prominent on Desktop, Hidden on Mobile to avoid overlap */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 writing-vertical">
          Scroll
        </span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1.5">
          <motion.div
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 bg-secondary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
