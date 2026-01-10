"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import {
  Camera,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Info,
  ArrowRight,
  Sparkles,
  Users,
  ShieldCheck,
} from "lucide-react";

const galleryImages = [
  { src: "/images/hero-room.jpg", caption: "Living Area with Mountain View" },
  {
    src: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&q=80&w=1200",
    caption: "Lush Green Surroundings",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
    caption: "Starry Nights in Kundasang",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200",
    caption: "Misty Morning Escape",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200",
    caption: "Cozy Cabin Atmosphere",
  },
];

export default function HouseGallery() {
  const [view, setView] = useState<"gallery" | "pricing">("gallery");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (view === "gallery" && emblaApi) {
      const timer = setInterval(() => emblaApi.scrollNext(), 8000);
      return () => clearInterval(timer);
    }
  }, [view, emblaApi]);

  return (
    <section
      id="gallery"
      className="py-24 bg-background overflow-hidden relative"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">
              A Look Inside
            </span>
            <h2 className="text-5xl font-bold leading-tight text-foreground">
              The{" "}
              <span className="italic font-light text-accent">Experience</span>
            </h2>
            <p className="text-muted-foreground font-light max-w-xl">
              Immerse yourself in the rustic elegance of 星语小屋, where every
              window frames a masterpiece of nature.
            </p>
          </div>

          <div className="bg-muted p-1.5 rounded-2xl flex gap-1 self-start shadow-inner border border-foreground/5">
            <button
              onClick={() => setView("gallery")}
              className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-500 flex items-center gap-2 ${
                view === "gallery"
                  ? "bg-white shadow-premium text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Camera className="w-4 h-4" />
              Gallery
            </button>
            <button
              onClick={() => setView("pricing")}
              className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-500 flex items-center gap-2 ${
                view === "pricing"
                  ? "bg-white shadow-premium text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Calendar className="w-4 h-4" />
              Rates
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {view === "gallery" ? (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative"
            >
              {/* Embla Carousel with Editorial Masking */}
              <div className="relative group">
                <div
                  className="embla overflow-hidden rounded-4xl md:rounded-[4rem] bg-muted shadow-2xl"
                  ref={emblaRef}
                >
                  <div className="embla__container flex">
                    {galleryImages.map((image, index) => (
                      <div
                        key={index}
                        className="embla__slide flex-[0_0_100%] relative aspect-4/3 md:aspect-21/9"
                      >
                        <Image
                          src={image.src}
                          alt={image.caption}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                        {/* Dynamic Caption */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-16">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="space-y-1 md:space-y-2"
                          >
                            <p className="text-secondary/90 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
                              Featured Space
                            </p>
                            <p className="text-white text-xl md:text-4xl font-bold font-serif leading-tight">
                              {image.caption}
                            </p>
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation: Hidden on Mobile */}
                <button
                  onClick={scrollPrev}
                  className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 items-center justify-center text-white hover:bg-white hover:text-primary transition-all z-10 group/btn"
                >
                  <ChevronLeft className="w-6 h-6 group-hover/btn:scale-110 transition-transform" />
                </button>
                <button
                  onClick={scrollNext}
                  className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 items-center justify-center text-white hover:bg-white hover:text-primary transition-all z-10 group/btn"
                >
                  <ChevronRight className="w-6 h-6 group-hover/btn:scale-110 transition-transform" />
                </button>

                {/* Pagination: Lowered for Mobile */}
                <div className="absolute bottom-2 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10 px-4 py-2 bg-black/20 backdrop-blur-md rounded-full border border-white/10">
                  {galleryImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => emblaApi && emblaApi.scrollTo(idx)}
                      className={`w-1 h-1 md:w-2 md:h-2 rounded-full transition-all duration-500 ${
                        idx === currentIndex
                          ? "bg-white w-4 md:w-10"
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="pricing"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="flex items-center justify-center py-6 md:py-12"
            >
              {/* Ultra-Compact "Price Tag" Slip */}
              <div className="bg-white shadow-premium rounded-3xl md:rounded-[2.5rem] border border-foreground/5 p-5 md:p-12 max-w-2xl w-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity hidden md:block">
                  <Sparkles className="w-32 h-32 text-accent" />
                </div>

                <div className="flex flex-col md:flex-row gap-5 md:gap-12 items-center">
                  <div className="space-y-3 md:space-y-6 flex-1 text-center md:text-left">
                    <div className="space-y-0.5">
                      <span className="text-accent font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px]">
                        Exceptional Value
                      </span>
                      <h3 className="text-xl md:text-5xl font-bold text-primary font-serif italic leading-tight">
                        Cabin Rates
                      </h3>
                    </div>

                    <div className="space-y-0">
                      <div className="flex items-baseline justify-center md:justify-start gap-1.5 md:gap-2">
                        <span className="text-3xl md:text-6xl font-black text-primary tracking-tighter">
                          RM 350
                        </span>
                        <span className="text-muted-foreground font-light text-[10px] md:text-base italic">
                          / night
                        </span>
                      </div>
                      <p className="text-[9px] md:text-sm text-muted-foreground font-light">
                        Entire house accommodation
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-1.5 md:gap-4">
                      <div className="flex items-center gap-1 px-2 py-0.5 md:px-3 md:py-1.5 bg-background rounded-full border border-foreground/5 text-[8px] md:text-[10px] font-bold text-primary uppercase tracking-widest">
                        <Users className="w-2 md:w-3 h-2 md:h-3" />
                        <span>6 guests</span>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-0.5 md:px-3 md:py-1.5 bg-background rounded-full border border-foreground/5 text-[8px] md:text-[10px] font-bold text-primary uppercase tracking-widest">
                        <ShieldCheck className="w-2 md:w-3 h-2 md:h-3" />
                        <span>Privacy</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-px h-px md:h-24 bg-foreground/10" />

                  <div className="space-y-3 md:space-y-6 text-center md:text-right w-full md:w-auto">
                    <a
                      href="#contact"
                      className="w-full md:w-auto px-6 md:px-10 py-3 md:py-5 bg-primary text-white rounded-lg md:rounded-2xl font-bold hover:bg-primary-light hover:shadow-2xl transition-all inline-flex items-center justify-center gap-2 group/cta text-sm md:text-base"
                    >
                      Book Now
                      <ArrowRight className="w-3.5 md:w-4 h-3.5 md:h-4 group-hover/cta:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="mt-5 md:mt-8 p-2.5 md:p-4 bg-secondary/10 rounded-lg md:rounded-2xl border border-secondary/20 flex gap-2 md:gap-4 items-center justify-center md:justify-start text-center md:text-left">
                  <Info className="w-3 md:w-4 h-3 md:h-4 text-accent shrink-0" />
                  <p className="text-[8px] md:text-[10px] font-light text-muted-foreground leading-tight">
                    Prices inclusive of all fees.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
