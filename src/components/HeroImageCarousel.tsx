"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    src: "/images/photo1.jpg",
    alt: "Community members participating in a civic accountability session",
  },
  {
    src: "/images/photo2.jpg",
    alt: "Citizens gathered for public integrity and community engagement",
  },
  {
    src: "/images/photo3.jpg",
    alt: "Civic participation activity focused on accountability",
  },
  {
    src: "/images/photo4.jpg",
    alt: "Community anti-corruption awareness and public responsibility event",
  },
];

export function HeroImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % slides.length);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(showNext, 5000);

    return () => window.clearInterval(intervalId);
  }, [showNext]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-[#6f1725]/12 bg-white p-2 shadow-2xl shadow-[#4d0e19]/18">
      <div
        aria-live="polite"
        className="relative h-[20rem] overflow-hidden rounded-xl bg-[#f7f2ec] sm:h-[30rem] lg:h-[min(68vh,46rem)]"
      >
        {slides.map((slide, index) => (
          <Image
            alt={slide.alt}
            className={`object-cover transition-opacity duration-1000 ease-out ${
              index === activeIndex ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
            fill
            key={slide.src}
            priority={index === 0}
            sizes="(min-width: 1280px) 58rem, (min-width: 1024px) 62vw, 100vw"
            src={slide.src}
            unoptimized
          />
        ))}
        <div className="absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(33,23,24,0.02),rgba(33,23,24,0.42))]" />
        <div className="absolute left-0 right-0 top-0 z-30 h-1.5 bg-[linear-gradient(90deg,#1d1d1d_0_33%,#f6c84c_33%_66%,#9b1b30_66%_100%)]" />

        <div className="absolute bottom-4 left-4 right-4 z-30 flex items-end justify-between gap-4 sm:bottom-5 sm:left-5 sm:right-5">
          <div className="max-w-[22rem] rounded-md border border-white/20 bg-[#211718]/72 px-4 py-3 text-white shadow-lg backdrop-blur">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f6c84c]">
              CIFACU in action
            </p>
            <p className="mt-1 text-sm font-bold">
              Community participation for public integrity
            </p>
          </div>

          <div className="hidden gap-2 sm:flex">
            <button
              aria-label="Show previous slide"
              className="flex size-11 items-center justify-center rounded-md border border-white/25 bg-white/88 text-[#6f1725] shadow-lg transition hover:bg-[#f6c84c] focus:outline-none focus:ring-2 focus:ring-[#f6c84c]"
              onClick={showPrevious}
              type="button"
            >
              <svg
                aria-hidden="true"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              aria-label="Show next slide"
              className="flex size-11 items-center justify-center rounded-md border border-white/25 bg-white/88 text-[#6f1725] shadow-lg transition hover:bg-[#f6c84c] focus:outline-none focus:ring-2 focus:ring-[#f6c84c]"
              onClick={showNext}
              type="button"
            >
              <svg
                aria-hidden="true"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-4 px-1">
        <div className="flex gap-2">
          {slides.map((slide, index) => (
            <button
              aria-label={`Show slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex
                  ? "w-8 bg-[#6f1725]"
                  : "w-2.5 bg-[#6f1725]/22 hover:bg-[#6f1725]/45"
              }`}
              key={slide.src}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>

        <div className="flex gap-2 sm:hidden">
          <button
            aria-label="Show previous slide"
            className="flex size-10 items-center justify-center rounded-md border border-[#6f1725]/15 bg-white text-[#6f1725] shadow-sm transition hover:bg-[#f6c84c]"
            onClick={showPrevious}
            type="button"
          >
            <svg
              aria-hidden="true"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            aria-label="Show next slide"
            className="flex size-10 items-center justify-center rounded-md border border-[#6f1725]/15 bg-white text-[#6f1725] shadow-sm transition hover:bg-[#f6c84c]"
            onClick={showNext}
            type="button"
          >
            <svg
              aria-hidden="true"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
