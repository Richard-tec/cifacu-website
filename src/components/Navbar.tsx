"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const primaryLinks = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/#about",
    children: [
      { label: "Who We Are", href: "/#about" },
      { label: "Mission & Vision", href: "/about#mission-vision" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Core Values", href: "/about#core-values" },
    ],
  },
  {
    label: "Activities",
    href: "/#activities",
    children: [
      { label: "Community Workshops", href: "/#activities" },
      { label: "Youth Integrity Training", href: "/#activities" },
      { label: "Stakeholder Meetings", href: "/#activities" },
      { label: "Awareness Campaigns", href: "/#activities" },
    ],
  },
  { label: "News & Highlights", href: "/#news" },
  {
    label: "Resources",
    href: "/#resources",
    children: [
      { label: "Reports", href: "/#resources" },
      { label: "Publications", href: "/#resources" },
      { label: "Downloads", href: "/#resources" },
    ],
  },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact Us", href: "/#contact" },
];

const topInfoItems = [
  "Mon - Fri / 8:00 - 17:00",
  "Tel: +256 XXX XXX XXX",
  "Email: info@cifacu.org",
  "Location: Uganda",
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 min-w-0 bg-white shadow-lg shadow-black/10">
      <div className="hidden bg-[#211718] text-white sm:block">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-2 text-xs font-semibold lg:px-8">
          {topInfoItems.map((item) => (
            <span className="text-white/82" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <nav
        aria-label="Primary navigation"
        className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 lg:mr-6"
          aria-label="CITIZENS' FORUM AGAINST CORRUPTION UGANDA (CIFACU) home"
        >
          <span className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-[#6f1725]/12 bg-white shadow-sm">
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
            <span className="max-w-48 text-sm font-black uppercase text-[#4d0e19] sm:max-w-80">
              CITIZENS&apos; FORUM AGAINST CORRUPTION UGANDA (CIFACU)
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1.5 rounded-sm border border-[#6f1725]/10 bg-[#fffaf2]/80 p-1 shadow-inner shadow-[#4d0e19]/5 xl:flex">
          {primaryLinks.map((item) => (
            <div className="group relative" key={item.label}>
              <Link
                href={item.href}
                className="flex whitespace-nowrap items-center gap-1.5 rounded-sm border border-transparent bg-transparent px-3.5 py-3 text-[0.82rem] font-black text-[#211718] transition hover:border-[#6f1725]/12 hover:bg-white hover:text-[#6f1725] hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f6c84c]"
              >
                {item.label}
                {item.children ? (
                  <svg
                    aria-hidden="true"
                    className="size-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                ) : null}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-0 top-full min-w-64 translate-y-2 rounded-sm border border-[#6f1725]/10 border-t-2 border-t-[#f6c84c] bg-white py-2 opacity-0 shadow-2xl shadow-[#211718]/16 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      className="block px-5 py-3 text-sm font-semibold text-[#3f3436] transition hover:bg-[#fffaf2] hover:text-[#6f1725] focus:bg-[#fffaf2] focus:outline-none"
                      href={child.href}
                      key={child.label}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <Link
          href="/register"
          className="hidden rounded-sm bg-[#6f1725] px-5 py-3 text-sm font-black text-white shadow-sm transition hover:bg-[#4d0e19] focus:outline-none focus:ring-2 focus:ring-[#f6c84c] focus:ring-offset-2 focus:ring-offset-white xl:inline-flex"
        >
          Join the Platform
        </Link>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-sm border border-[#6f1725]/20 text-[#6f1725] transition hover:bg-[#fffaf2] focus:outline-none focus:ring-2 focus:ring-[#f6c84c] xl:hidden"
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
        className={`border-t border-[#6f1725]/10 bg-white px-4 pb-5 pt-3 shadow-xl xl:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-2">
          <div className="grid gap-2 rounded-sm bg-[#211718] px-4 py-3 text-xs font-semibold text-white sm:hidden">
            {topInfoItems.map((item) => (
              <span className="text-white/82" key={item}>
                {item}
              </span>
            ))}
          </div>
          {primaryLinks.map((item) => (
            <div
              className="rounded-sm border border-[#6f1725]/10 bg-[#fffaf2]/70"
              key={item.label}
            >
              <Link
                href={item.href}
                className="block whitespace-nowrap rounded-sm px-4 py-3 text-base font-black text-[#211718] transition hover:bg-white hover:text-[#6f1725] focus:outline-none focus:ring-2 focus:ring-[#f6c84c]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
              {item.children ? (
                <div className="mb-3 ml-4 mr-3 grid gap-1 border-l-2 border-[#f6c84c] pl-3">
                  {item.children.map((child) => (
                    <Link
                      className="rounded-sm px-3 py-2 text-sm font-semibold text-[#5b5051] transition hover:bg-white hover:text-[#6f1725]"
                      href={child.href}
                      key={child.label}
                      onClick={() => setIsOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <Link
            href="/register"
            className="mt-3 rounded-sm bg-[#6f1725] px-4 py-3 text-center text-base font-black text-white transition hover:bg-[#4d0e19] focus:outline-none focus:ring-2 focus:ring-[#f6c84c]"
            onClick={() => setIsOpen(false)}
          >
            Join the Platform
          </Link>
        </div>
      </div>
    </header>
  );
}
