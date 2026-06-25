"use client";

import { FooterPartnersSlider } from "@/components/FooterPartnersSlider";
import Link from "next/link";
import { usePathname } from "next/navigation";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Activities", href: "/#activities" },
  { label: "News & Highlights", href: "/#news" },
  { label: "Resources", href: "/#resources" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Contact Us", href: "/#contact" },
];

const resourceLinks = [
  { label: "Reports", href: "/#resources" },
  { label: "Publications", href: "/#resources" },
  { label: "Downloads", href: "/#resources" },
  { label: "Gallery", href: "/#gallery" },
];

export function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="min-w-0 bg-[#211718] text-white">
      <div className="h-2 bg-[linear-gradient(90deg,#1d1d1d_0_33%,#f6c84c_33%_66%,#9b1b30_66%_100%)]" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.45fr_0.7fr_0.7fr_0.9fr] lg:px-8">
        <FooterPartnersSlider />

        <section>
          <h3 className="font-black text-[#f6c84c]">Quick Links</h3>
          <div className="mt-4 grid gap-3 text-sm font-semibold text-white/76">
            {quickLinks.map((link) => (
              <Link
                className="transition hover:text-[#f6c84c]"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-black text-[#f6c84c]">Resources</h3>
          <div className="mt-4 grid gap-3 text-sm font-semibold text-white/76">
            {resourceLinks.map((link) => (
              <Link
                className="transition hover:text-[#f6c84c]"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-black text-[#f6c84c]">Contact Info</h3>
          <div className="mt-4 grid gap-3 text-sm font-semibold leading-6 text-white/76">
            <p>Uganda</p>
            <a className="transition hover:text-[#f6c84c]" href="tel:+256XXXXXXXXX">
              Tel: +256 XXX XXX XXX
            </a>
            <a
              className="transition hover:text-[#f6c84c]"
              href="mailto:info@cifacu.org"
            >
              Email: info@cifacu.org
            </a>
            <p>Working hours: Mon - Fri / 8:00 - 17:00</p>
          </div>
        </section>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-sm font-semibold text-white/58">
        &copy; 2026 Citizens&apos; Forum Against Corruption Uganda (CIFACU). All
        rights reserved.
      </div>
    </footer>
  );
}
