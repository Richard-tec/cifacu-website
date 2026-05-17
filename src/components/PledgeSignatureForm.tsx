"use client";

import { FormEvent, useState } from "react";

const fieldClass =
  "mt-2 w-full rounded-md border border-[#6f1725]/18 bg-white px-4 py-3 text-sm font-semibold text-[#211718] shadow-sm outline-none transition placeholder:text-[#8a7d7e] focus:border-[#8a1d2d] focus:ring-4 focus:ring-[#8a1d2d]/12";

export function PledgeSignatureForm() {
  const [signed, setSigned] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSigned(true);
    form.reset();
  }

  return (
    <form
      className="rounded-lg border border-[#6f1725]/18 bg-[#fffaf2] p-5 shadow-inner sm:p-6"
      onSubmit={handleSubmit}
    >
      <div className="mb-5 flex items-center justify-between gap-4 border-b border-[#6f1725]/12 pb-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8a1d2d]">
            Digital Signature
          </p>
          <h2 className="mt-1 text-2xl font-black text-[#211718]">
            Sign the citizen pledge
          </h2>
        </div>
        <span className="hidden rounded-md bg-[#6f1725] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-white sm:inline-flex">
          Official Record
        </span>
      </div>

      {signed ? (
        <div
          className="mb-5 rounded-md border border-[#f6c84c]/60 bg-white px-4 py-3 text-sm font-bold text-[#5b111d]"
          role="status"
        >
          Pledge signature recorded for review.
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2">
        <label>
          <span className="text-sm font-black text-[#3a2628]">
            Full name <span className="text-[#8a1d2d]">*</span>
          </span>
          <input
            className={fieldClass}
            name="fullName"
            placeholder="Enter full legal name"
            required
            type="text"
          />
        </label>

        <label>
          <span className="text-sm font-black text-[#3a2628]">
            National ID number <span className="text-[#8a1d2d]">*</span>
          </span>
          <input
            className={fieldClass}
            name="nationalId"
            placeholder="CM..."
            required
            type="text"
          />
        </label>

        <label>
          <span className="text-sm font-black text-[#3a2628]">
            Signature field <span className="text-[#8a1d2d]">*</span>
          </span>
          <input
            className={fieldClass}
            name="signature"
            placeholder="Type your full name as signature"
            required
            type="text"
          />
        </label>

        <label>
          <span className="text-sm font-black text-[#3a2628]">
            Date <span className="text-[#8a1d2d]">*</span>
          </span>
          <input className={fieldClass} name="date" required type="date" />
        </label>

        <label className="md:col-span-2">
          <span className="text-sm font-black text-[#3a2628]">
            Location <span className="text-[#8a1d2d]">*</span>
          </span>
          <input
            className={fieldClass}
            name="location"
            placeholder="District, municipality, or village"
            required
            type="text"
          />
        </label>
      </div>

      <button
        className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-[#6f1725] px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-xl shadow-[#4d0e19]/18 transition hover:-translate-y-0.5 hover:bg-[#4d0e19] focus:outline-none focus:ring-4 focus:ring-[#f6c84c]/50 sm:w-auto"
        type="submit"
      >
        Digitally Sign Pledge
      </button>
    </form>
  );
}
