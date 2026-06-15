"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Activities", href: "/activities" },
  { label: "Pledge", href: "/pledge" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  { label: "Facebook", initial: "f", href: "#" },
  { label: "X", initial: "X", href: "#" },
  { label: "LinkedIn", initial: "in", href: "#" },
];

export function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-[#4d0e19] text-white">
      <div className="h-2 bg-[linear-gradient(90deg,#1d1d1d_0_33%,#f6c84c_33%_66%,#9b1b30_66%_100%)]" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.85fr_0.7fr] lg:px-8">
        <section>
          <div className="flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-md bg-white text-sm font-black text-[#6f1725]">
              CF
            </span>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f6c84c]">
                CIFACU
              </p>
              <h2 className="text-lg font-black">
                CITIZENS&apos; FORUM AGAINST CORRUPTION UGANDA (CIFACU)
              </h2>
            </div>
          </div>
          <p className="mt-5 max-w-md leading-7 text-white/72">
            Mobilizing citizens to combat corruption, protect public property,
            and promote accountable service in line with Uganda&apos;s civic
            duty.
          </p>
          <p className="mt-5 text-lg font-black text-[#f6c84c]">
            Integrity, accountability, and citizen action.
          </p>
        </section>

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
          <h3 className="font-black text-[#f6c84c]">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm font-semibold leading-6 text-white/76">
            <p>Kampala, Uganda</p>
            <a className="transition hover:text-[#f6c84c]" href="tel:+256700000000">
              +256 700 000 000
            </a>
            <a
              className="transition hover:text-[#f6c84c]"
              href="mailto:info@cifacu.org"
            >
              info@cifacu.org
            </a>
          </div>
        </section>

        <section>
          <h3 className="font-black text-[#f6c84c]">Follow Us</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                aria-label={link.label}
                className="flex size-11 items-center justify-center rounded-md border border-white/15 bg-white/8 text-sm font-black text-white transition hover:border-[#f6c84c] hover:text-[#f6c84c]"
                href={link.href}
                key={link.label}
              >
                {link.initial}
              </a>
            ))}
          </div>
        </section>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-sm font-semibold text-white/58">
        &copy; 2026 CITIZENS&apos; FORUM AGAINST CORRUPTION UGANDA (CIFACU). All rights
        reserved.
      </div>
    </footer>
  );
}
