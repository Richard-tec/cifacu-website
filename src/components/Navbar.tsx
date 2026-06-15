"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Join Movement", href: "/register" },
  { label: "Activities", href: "/activities" },
  { label: "Youth Programs", href: "/activities" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#6f1725]/95 text-white shadow-lg shadow-black/10 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 lg:mr-10"
          aria-label="CITIZENS' FORUM AGAINST CORRUPTION UGANDA (CIFACU) home"
        >
          <span className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-md border border-white/20 bg-white shadow-sm">
            <Image
              alt="CIFACU official logo"
              className="h-full w-full object-contain p-1"
              height={400}
              priority
              src="/logo.png"
              width={400}
            />
          </span>
          <span className="flex min-w-0 leading-tight">
            <span className="max-w-52 text-sm font-semibold text-white sm:max-w-72 lg:max-w-80">
              CITIZENS&apos; FORUM AGAINST CORRUPTION UGANDA (CIFACU)
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10 hover:text-[#f6c84c] focus:outline-none focus:ring-2 focus:ring-[#f6c84c] focus:ring-offset-2 focus:ring-offset-[#6f1725]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/register"
          className="hidden rounded-md bg-[#f6c84c] px-5 py-3 text-sm font-bold text-[#4f0f1a] shadow-sm transition hover:bg-white hover:text-[#6f1725] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6f1725] lg:inline-flex"
        >
          Join the Movement
        </Link>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md border border-white/20 text-white transition hover:bg-white/10 hover:text-[#f6c84c] focus:outline-none focus:ring-2 focus:ring-[#f6c84c] focus:ring-offset-2 focus:ring-offset-[#6f1725] lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`border-t border-white/10 bg-[#5b111d] px-4 pb-5 pt-3 shadow-xl lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-3 text-base font-semibold text-white transition hover:bg-white/10 hover:text-[#f6c84c] focus:outline-none focus:ring-2 focus:ring-[#f6c84c]"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/register"
            className="mt-3 rounded-md bg-[#f6c84c] px-4 py-3 text-center text-base font-bold text-[#4f0f1a] transition hover:bg-white hover:text-[#6f1725] focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setIsOpen(false)}
          >
            Join the Movement
          </Link>
        </div>
      </div>
    </header>
  );
}
