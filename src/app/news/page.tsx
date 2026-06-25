import type { Metadata } from "next";
import { NewsHighlightsSection } from "@/components/home/NewsHighlightsSection";

export const metadata: Metadata = {
  title: "News & Highlights | CITIZENS' FORUM AGAINST CORRUPTION UGANDA (CIFACU)",
  description:
    "News, announcements, campaign updates, and highlights from CITIZENS' FORUM AGAINST CORRUPTION UGANDA.",
};

export default function NewsPage() {
  return (
    <main className="flex flex-1 flex-col bg-[#f7f8f7] text-[#211718]">
      <section className="relative overflow-hidden bg-[#5b111d] text-white">
        <div className="absolute left-0 right-0 top-0 h-2 bg-[linear-gradient(90deg,#1d1d1d_0_33%,#f6c84c_33%_66%,#9b1b30_66%_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(91,17,29,0.98),rgba(33,23,24,0.94))]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f6c84c]">
            News & Highlights
          </p>
          <h1 className="mt-5 max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-6xl">
            CIFACU updates, announcements, and public integrity highlights.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            Official updates will be added here after administrative review.
          </p>
        </div>
      </section>
      <NewsHighlightsSection />
    </main>
  );
}
