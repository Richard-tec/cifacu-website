import Link from "next/link";
import { HeroSlider } from "@/components/HeroSlider";
import { AboutSection } from "@/components/home/AboutSection";
import { ActivitiesSection } from "@/components/home/ActivitiesSection";
import { GallerySection } from "@/components/home/GallerySection";
import { LeadershipSection } from "@/components/home/LeadershipSection";
import { NewsHighlightsSection } from "@/components/home/NewsHighlightsSection";
import { ResourcesSection } from "@/components/home/ResourcesSection";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col overflow-hidden bg-[#fffaf2] text-[#211718]">
      <HeroSlider />
      <AboutSection />
      <ActivitiesSection />
      <NewsHighlightsSection />
      <ResourcesSection />
      <GallerySection />
      <LeadershipSection />

      <section className="bg-[#f7f8f7] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a1d2d]">
              Contact Us
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#4d0e19] sm:text-5xl">
              Enquiries, partnerships, and citizen coordination.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5b5051]">
              Reach the CIFACU team for membership support, district
              coordination, program partnerships, media enquiries, or civic
              accountability concerns.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-sm bg-[#6f1725] px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-xl shadow-[#4d0e19]/14 transition hover:bg-[#4d0e19] focus:outline-none focus:ring-2 focus:ring-[#f6c84c] focus:ring-offset-2 focus:ring-offset-[#f7f8f7]"
            >
              Contact CIFACU
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
