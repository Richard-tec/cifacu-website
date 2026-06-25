import type { Metadata } from "next";
import { ContactEnquiryForm } from "@/components/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Contact | CITIZENS' FORUM AGAINST CORRUPTION UGANDA (CIFACU)",
  description:
    "Contact CITIZENS' FORUM AGAINST CORRUPTION UGANDA for enquiries, membership, partnerships, and coordination.",
};

const contactChannels = [
  { label: "Location", value: "Uganda" },
  { href: "tel:+256XXXXXXXXX", label: "Telephone", value: "+256 XXX XXX XXX" },
  { href: "mailto:info@cifacu.org", label: "Email", value: "info@cifacu.org" },
  { label: "Working Hours", value: "Mon - Fri / 8:00 - 17:00" },
];

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col bg-[#f7f8f7] text-[#211718]">
      <section className="relative overflow-hidden bg-[#5b111d] text-white">
        <div className="absolute left-0 right-0 top-0 h-2 bg-[linear-gradient(90deg,#1d1d1d_0_33%,#f6c84c_33%_66%,#9b1b30_66%_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(91,17,29,0.98),rgba(33,23,24,0.94))]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f6c84c]">
            Contact Us
          </p>
          <h1 className="mt-5 max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-6xl">
            Enquiries, partnerships, and citizen coordination.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            Reach the CIFACU team for membership support, district coordination,
            media enquiries, or civic accountability concerns.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a1d2d]">
            Contact Info
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#4d0e19] sm:text-5xl">
            Official CIFACU communication channels.
          </h2>
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
      </section>
    </main>
  );
}
