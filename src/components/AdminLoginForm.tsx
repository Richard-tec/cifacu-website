"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function AdminLoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setError("");
    router.push("/admin/dashboard");
  }

  return (
    <form
      className="rounded-lg border border-white/12 bg-white p-6 text-[#211718] shadow-2xl shadow-black/25 sm:p-8"
      onSubmit={handleSubmit}
    >
      <div className="mb-8">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8a1d2d]">
          Secure Admin Access
        </p>
        <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
          Sign in to manage CIFACU.
        </h1>
        <p className="mt-3 text-sm font-semibold leading-6 text-[#6c6061]">
          Use administrator credentials to access registrations, events,
          announcements, and member records.
        </p>
      </div>

      {error ? (
        <div className="mb-5 rounded-md border border-[#8a1d2d]/25 bg-[#fff1f3] px-4 py-3 text-sm font-bold text-[#8a1d2d]">
          {error}
        </div>
      ) : null}

      <label className="block">
        <span className="text-sm font-black text-[#3a2628]">Email address</span>
        <input
          className="mt-2 w-full rounded-md border border-[#6f1725]/15 bg-white px-4 py-3 text-sm font-semibold outline-none transition focus:border-[#8a1d2d] focus:ring-4 focus:ring-[#8a1d2d]/12"
          name="email"
          placeholder="admin@cifacu.org"
          required
          type="email"
        />
      </label>

      <label className="mt-5 block">
        <span className="text-sm font-black text-[#3a2628]">Password</span>
        <input
          className="mt-2 w-full rounded-md border border-[#6f1725]/15 bg-white px-4 py-3 text-sm font-semibold outline-none transition focus:border-[#8a1d2d] focus:ring-4 focus:ring-[#8a1d2d]/12"
          minLength={6}
          name="password"
          placeholder="Enter password"
          required
          type="password"
        />
      </label>

      <div className="mt-5 flex items-center justify-between gap-4 text-sm">
        <label className="flex items-center gap-2 font-semibold text-[#5b5051]">
          <input className="size-4 accent-[#8a1d2d]" type="checkbox" />
          Remember device
        </label>
        <button
          className="font-black text-[#8a1d2d] transition hover:text-[#4d0e19]"
          onClick={() => setError("Password recovery is not connected yet.")}
          type="button"
        >
          Forgot password?
        </button>
      </div>

      <button
        className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-[#6f1725] px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-xl shadow-[#4d0e19]/18 transition hover:-translate-y-0.5 hover:bg-[#4d0e19] focus:outline-none focus:ring-4 focus:ring-[#f6c84c]/50"
        type="submit"
      >
        Open Dashboard
      </button>
    </form>
  );
}
