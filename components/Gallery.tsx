"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Gallery() {
  const t = useTranslations("Gallery");
  const items = useMessages().Gallery.items;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (selected !== null && dialog && !dialog.open) dialog.showModal();
  }, [selected]);

  const open = (index: number) => {
    setSelected(index);
    sendGAEvent("event", "gallery_open", {
      event_category: "gallery",
      event_label: items[index].image,
    });
  };

  const step = (delta: number) =>
    setSelected((i) =>
      i === null ? i : (i + delta + items.length) % items.length,
    );

  const current = selected === null ? null : items[selected];

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-4xl font-semibold md:text-5xl">{t("title")}</h2>
        <p className="text-base-content/70 mt-4 max-w-xl text-lg">
          {t("subtitle")}
        </p>

        <ul className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-3 md:gap-4 lg:auto-rows-[240px]">
          {items.map((item, index) => (
            <li
              key={item.image}
              className={
                index === 0
                  ? "col-span-2 row-span-2"
                  : index === items.length - 1
                    ? "max-md:col-span-2"
                    : undefined
              }
            >
              <button
                type="button"
                onClick={() => open(index)}
                aria-label={t("open", { title: item.title })}
                className="group rounded-box relative block size-full overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes={
                    index === 0
                      ? "(min-width: 768px) 66vw, 100vw"
                      : "(min-width: 768px) 33vw, 50vw"
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent px-4 pt-10 pb-3 text-left font-medium text-white md:px-5 md:pb-4">
                  {item.title}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setSelected(null)}
        onClick={(e) =>
          e.target === e.currentTarget && dialogRef.current?.close()
        }
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") step(-1);
          if (e.key === "ArrowRight") step(1);
        }}
        aria-label={current?.title}
        className="m-auto size-full max-h-none max-w-none bg-transparent backdrop:bg-black/85"
      >
        {current && selected !== null && (
          <div
            className="flex size-full flex-col items-center justify-center gap-4 p-4 md:p-10"
            onClick={(e) =>
              e.target === e.currentTarget && dialogRef.current?.close()
            }
          >
            <Image
              src={current.image}
              alt={current.title}
              width={1024}
              height={1024}
              sizes="(min-width: 768px) 80vw, 100vw"
              className="rounded-box max-h-[78vh] w-auto object-contain"
            />
            <div className="flex w-full max-w-3xl items-center justify-between gap-4 text-white">
              <button
                type="button"
                onClick={() => step(-1)}
                className="btn btn-circle btn-ghost text-white hover:bg-white/10"
                aria-label={t("previous")}
              >
                <ChevronLeft className="size-6" />
              </button>
              <p className="text-center">
                <span className="font-medium">{current.title}</span>
                <span className="block text-sm text-white/60">
                  {t("counter", { current: selected + 1, total: items.length })}
                </span>
              </p>
              <button
                type="button"
                onClick={() => step(1)}
                className="btn btn-circle btn-ghost text-white hover:bg-white/10"
                aria-label={t("next")}
              >
                <ChevronRight className="size-6" />
              </button>
            </div>
          </div>
        )}
        <button
          type="button"
          autoFocus
          onClick={() => dialogRef.current?.close()}
          className="btn btn-circle btn-ghost absolute top-4 right-4 text-white hover:bg-white/10"
          aria-label={t("close")}
        >
          <X className="size-6" />
        </button>
      </dialog>
    </section>
  );
}
