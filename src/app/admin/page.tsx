import type { Metadata } from "next";
import Link from "next/link";
import { AdminLoginForm } from "@/components/AdminLoginForm";

export const metadata: Metadata = {
  title: "Admin Login | CITIZENS' FORUM AGAINST CORRUPTION UGANDA(CIFACU)",
  description: "Administrator login for the CIFACU website.",
};

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen bg-[#5b111d] text-white">
      <div className="absolute left-0 right-0 top-0 h-2 bg-[linear-gradient(90deg,#1d1d1d_0_33%,#f6c84c_33%_66%,#9b1b30_66%_100%)]" />
      <section className="mx-auto grid min-h-screen max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <Link
            className="mb-10 inline-flex w-fit items-center gap-3 text-sm font-black uppercase tracking-[0.16em] text-[#f6c84c]"
            href="/"
          >
            <span className="flex size-11 items-center justify-center rounded-md bg-white text-[#6f1725]">
              CF
            </span>
            CIFACU Admin
          </Link>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f6c84c]">
            CITIZENS&apos; FORUM AGAINST CORRUPTION UGANDA(CIFACU)
          </p>
          <h2 className="mt-5 max-w-2xl text-4xl font-black tracking-tight sm:text-6xl">
            Manage the movement with clarity and accountability.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/76">
            Review members, approve registrations, publish civic activities,
            upload event images, and send announcements from one secure admin
            workspace.
          </p>
        </div>

        <div className="flex items-center">
          <AdminLoginForm />
        </div>
      </section>
    </main>
  );
}
