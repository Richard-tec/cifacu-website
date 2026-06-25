"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const partners = [
  {
    label: "State House Uganda",
    src: "/state-house-uganda-logo.png",
  },
  {
    label: "Partner Logo 2",
  },
  {
    label: "Partner Logo 3",
  },
  {
    label: "Partner Logo 4",
  },
];

export function FooterPartnersSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % partners.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section>
      <h3 className="font-black text-[#f6c84c]">Our Partners</h3>
      {/* TODO: Replace partner placeholders with real partner logos later. */}
      <div className="mt-4 overflow-hidden rounded-sm border border-white/10 bg-white/5 p-2">
        <div className="flex h-40 items-center justify-center rounded-sm border border-[#f6c84c]/30 bg-white text-center text-sm font-black uppercase tracking-[0.14em] text-[#6f1725] shadow-lg shadow-black/10 sm:h-48 lg:h-56">
          {partners[activeIndex].src ? (
            <Image
              alt={`${partners[activeIndex].label} logo`}
              className="h-full w-full object-contain p-0.5"
              height={360}
              src={partners[activeIndex].src}
              unoptimized
              width={440}
            />
          ) : (
            partners[activeIndex].label
          )}
        </div>
        <div className="mt-3 flex justify-center gap-1.5">
          {partners.map((partner, index) => (
            <button
              aria-label={`Show ${partner.label}`}
              className={`size-2 rounded-full transition ${
                index === activeIndex ? "bg-[#f6c84c]" : "bg-white/35"
              }`}
              key={partner.label}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
