"use client";

import { useEffect, useState } from "react";

const partners = [
  "Partner Logo 1",
  "Partner Logo 2",
  "Partner Logo 3",
  "Partner Logo 4",
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
      <div className="mt-4 overflow-hidden rounded-sm border border-white/10 bg-white/5 p-3">
        <div className="flex h-20 items-center justify-center rounded-sm border border-[#f6c84c]/30 bg-white text-center text-xs font-black uppercase tracking-[0.14em] text-[#6f1725] shadow-lg shadow-black/10">
          {partners[activeIndex]}
        </div>
        <div className="mt-3 flex justify-center gap-1.5">
          {partners.map((partner, index) => (
            <button
              aria-label={`Show ${partner}`}
              className={`size-2 rounded-full transition ${
                index === activeIndex ? "bg-[#f6c84c]" : "bg-white/35"
              }`}
              key={partner}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
