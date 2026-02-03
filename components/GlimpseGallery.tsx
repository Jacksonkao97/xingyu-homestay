"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function GlimpseGallery() {
  const lenis = useLenis();
  const t = useTranslations("Gallery");
  const galleryItems = t("items") as never as {
    id: number;
    title: string;
    image: string;
  }[];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - itemsPerPage;
      return newIndex < 0
        ? Math.max(0, galleryItems.length - itemsPerPage)
        : newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + itemsPerPage;
      return newIndex >= galleryItems.length ? 0 : newIndex;
    });
  };

  const visibleItems = galleryItems.slice(
    currentIndex,
    currentIndex + itemsPerPage,
  );

  useEffect(() => {
    if (selectedImage === null) {
      document.body.style.overflow = "auto";
      lenis?.start();
    } else {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    }
  }, [lenis, selectedImage]);

  // Detect screen size for responsive carousel
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 768 ? 3 : 1);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section id="gallery" className="bg-base-300 py-10 duration-300">
        <div className="container mx-auto px-3 py-3 md:px-6">
          {/* Header with Navigation */}
          <div className="mb-10 flex items-start justify-between">
            <div>
              <h2 className="text-base-content text-2xl leading-normal font-bold md:text-4xl">
                {t("title")}
                {/* <br /> */}
              </h2>
              <span className="text-base-content/70 text-sm font-normal sm:text-base">
                {t("subtitle")}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevious}
                className="btn btn-circle btn-md btn-ghost"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>
              <button
                onClick={handleNext}
                className="btn btn-circle btn-md btn-ghost"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>
          </div>

          {/* Gallery Grid with Fade Animation */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentIndex}-${itemsPerPage}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 gap-6 md:grid-cols-3"
              >
                {visibleItems.map((item) => (
                  <div
                    key={item.id}
                    className="group relative h-64 cursor-pointer overflow-hidden rounded-2xl md:h-80"
                    onClick={() => setSelectedImage(item.id)}
                  >
                    {/* Image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="eager"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40" />

                    {/* Label */}
                    <div className="absolute right-0 bottom-0 left-0 p-6">
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              className="btn btn-circle btn-ghost absolute top-4 right-4 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Enlarged Image */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={
                  galleryItems.find((item) => item.id === selectedImage)
                    ?.image || ""
                }
                alt={
                  galleryItems.find((item) => item.id === selectedImage)
                    ?.title || ""
                }
                width={1200} // Set a large base width
                height={800} // Set a base height
                className="h-auto max-h-[80vh] w-auto rounded-2xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
