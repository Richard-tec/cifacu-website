import { ContactEnquiryForm } from "@/components/ContactEnquiryForm";
import { HeroSlider } from "@/components/HeroSlider";
import { AboutSection } from "@/components/home/AboutSection";
import { ActivitiesSection } from "@/components/home/ActivitiesSection";
import { GallerySection } from "@/components/home/GallerySection";
import { LeadershipSection } from "@/components/home/LeadershipSection";
import { NewsHighlightsSection } from "@/components/home/NewsHighlightsSection";
import { ResourcesSection } from "@/components/home/ResourcesSection";

const contactChannels = [
  {
    label: "Location",
    value: "Uganda",
  },
  {
    href: "tel:+256XXXXXXXXX",
    label: "Telephone",
    value: "+256 XXX XXX XXX",
  },
  {
    href: "mailto:info@cifacu.org",
    label: "Email",
    value: "info@cifacu.org",
  },
  {
    label: "Working Hours",
    value: "Mon - Fri / 8:00 - 17:00",
  },
];

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

      <section id="contact" className="bg-[#f7f8f7] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
          <div>
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

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactChannels.map((channel) => (
                <div
                  className="rounded-sm border border-[#6f1725]/10 bg-white p-5 shadow-lg shadow-[#4d0e19]/8"
                  key={channel.label}
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8a1d2d]">
                    {channel.label}
                  </p>
                  {channel.href ? (
                    <a
                      className="mt-2 block text-lg font-black text-[#211718] transition hover:text-[#8a1d2d]"
                      href={channel.href}
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-lg font-black text-[#211718]">
                      {channel.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <ContactEnquiryForm />
        </div>
      </section>
    </main>
  );
}
