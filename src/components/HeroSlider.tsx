"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    src: "/images/photo1.jpg",
    alt: "Community members participating in a CIFACU civic accountability session",
  },
  {
    src: "/images/photo2.jpg",
    alt: "Citizens gathered for public integrity and community engagement",
  },
  {
    src: "/images/photo3.jpg",
    alt: "CIFACU civic participation activity focused on accountability",
  },
  {
    src: "/images/photo4.jpg",
    alt: "Community anti-corruption awareness and public responsibility event",
  },
];

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % slides.length);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(showNext, 6000);

    return () => window.clearInterval(intervalId);
  }, [showNext]);

  return (
    <section className="relative isolate min-h-[38rem] overflow-hidden bg-[#211718] text-white sm:min-h-[44rem] lg:min-h-[50rem]">
      {slides.map((slide, index) => (
        <Image
          alt={slide.alt}
          className={`object-cover transition-opacity duration-1000 ease-out ${
            index === activeIndex ? "z-0 opacity-100" : "-z-10 opacity-0"
          }`}
          fill
          key={slide.src}
          priority={index === 0}
          sizes="100vw"
          src={slide.src}
          unoptimized
        />
      ))}

      <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(33,23,24,0.86)_0%,rgba(33,23,24,0.62)_48%,rgba(33,23,24,0.26)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 z-20 h-2 bg-[linear-gradient(90deg,#1d1d1d_0_33%,#f6c84c_33%_66%,#9b1b30_66%_100%)]" />

      <div className="relative z-30 mx-auto flex min-h-[38rem] max-w-7xl items-start px-4 pb-24 pt-20 sm:min-h-[44rem] sm:px-6 sm:pb-28 sm:pt-24 lg:min-h-[50rem] lg:px-8 lg:pb-32 lg:pt-32">
        <div className="max-w-3xl lg:mt-4">
          <p className="inline-flex rounded-sm bg-[#f6c84c] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#4d0e19]">
            Public integrity and civic accountability
          </p>
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Citizens&apos; Forum Against Corruption Uganda
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/86 sm:text-xl">
            Promoting civic accountability, public integrity, and community
            participation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/join"
              className="inline-flex items-center justify-center rounded-sm bg-[#f6c84c] px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-[#4d0e19] shadow-xl shadow-black/20 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#211718]"
            >
              Join the Platform
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-sm border border-white/35 bg-white/10 px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-white backdrop-blur transition hover:bg-white hover:text-[#6f1725] focus:outline-none focus:ring-2 focus:ring-[#f6c84c] focus:ring-offset-2 focus:ring-offset-[#211718]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <button
        aria-label="Show previous banner slide"
        className="absolute left-4 top-1/2 z-40 hidden size-11 -translate-y-1/2 items-center justify-center rounded-sm border border-white/25 bg-[#211718]/55 text-white shadow-lg backdrop-blur transition hover:bg-[#f6c84c] hover:text-[#4d0e19] focus:outline-none focus:ring-2 focus:ring-[#f6c84c] md:flex"
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
        aria-label="Show next banner slide"
        className="absolute right-4 top-1/2 z-40 hidden size-11 -translate-y-1/2 items-center justify-center rounded-sm border border-white/25 bg-[#211718]/55 text-white shadow-lg backdrop-blur transition hover:bg-[#f6c84c] hover:text-[#4d0e19] focus:outline-none focus:ring-2 focus:ring-[#f6c84c] md:flex"
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

      <div className="absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 gap-2">
        {slides.map((slide, index) => (
          <button
            aria-label={`Show banner slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              index === activeIndex
                ? "w-9 bg-[#f6c84c]"
                : "w-2.5 bg-white/70 hover:bg-white"
            }`}
            key={slide.src}
            onClick={() => setActiveIndex(index)}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}
