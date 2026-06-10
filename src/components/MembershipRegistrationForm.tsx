"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import type { ReactNode } from "react";
import {
  createMember,
  type RegistrationState,
} from "@/app/register/actions/createMember";

type IconName = "user" | "id" | "phone" | "mail" | "location" | "briefcase";

const inputClass =
  "mt-2 w-full rounded-md border border-[#6f1725]/15 bg-white px-4 py-3 text-sm font-semibold text-[#211718] shadow-sm outline-none transition placeholder:text-[#8a7d7e] focus:border-[#8a1d2d] focus:ring-4 focus:ring-[#8a1d2d]/12";

const selectClass =
  "mt-2 w-full rounded-md border border-[#6f1725]/15 bg-white px-4 py-3 text-sm font-semibold text-[#211718] shadow-sm outline-none transition focus:border-[#8a1d2d] focus:ring-4 focus:ring-[#8a1d2d]/12";

function FieldIcon({ name }: { name: IconName }) {
  const paths: Record<IconName, string> = {
    user: "M15 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 20a8 8 0 0 1 16 0",
    id: "M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm4 4h4M8 14h8M15 9h1",
    phone:
      "M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.81a2 2 0 0 1-.45 2.11L8.05 9.91a16 16 0 0 0 6.04 6.04l1.27-1.27a2 2 0 0 1 2.11-.45c.91.31 1.85.53 2.81.66A2 2 0 0 1 22 16.92Z",
    mail: "M4 6h16v12H4V6Zm0 0 8 7 8-7",
    location:
      "M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    briefcase:
      "M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1m-8 0h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm-2 6h16",
  };

  return (
    <svg
      aria-hidden="true"
      className="size-4 text-[#8a1d2d]"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d={paths[name]} />
    </svg>
  );
}

function Label({
  children,
  icon,
}: {
  children: ReactNode;
  icon?: IconName;
}) {
  return (
    <span className="flex items-center gap-2 text-sm font-black text-[#3a2628]">
      {icon ? <FieldIcon name={icon} /> : null}
      {children}
      <span className="text-[#8a1d2d]">*</span>
    </span>
  );
}

const initialState: RegistrationState = {
  message: "",
  status: "idle",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-[#6f1725] px-6 py-4 text-base font-black text-white shadow-xl shadow-[#4d0e19]/20 transition hover:-translate-y-0.5 hover:bg-[#4d0e19] focus:outline-none focus:ring-4 focus:ring-[#f6c84c]/50 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      disabled={pending}
      type="submit"
    >
      {pending ? "Submitting Registration..." : "Submit Membership Registration"}
    </button>
  );
}

export function MembershipRegistrationForm() {
  const [state, formAction] = useActionState(createMember, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form
      action={formAction}
      className="rounded-lg border border-[#6f1725]/10 bg-white p-5 shadow-2xl shadow-[#4d0e19]/10 sm:p-8"
      ref={formRef}
    >
      {state.message ? (
        <div
          className={`mb-6 rounded-md border px-4 py-3 text-sm font-bold ${
            state.status === "success"
              ? "border-[#f6c84c]/50 bg-[#fff8df] text-[#5b111d]"
              : "border-[#8a1d2d]/30 bg-[#fff1f3] text-[#8a1d2d]"
          }`}
          role="status"
        >
          {state.message}
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2">
        <label>
          <Label icon="user">Full name</Label>
          <input
            className={inputClass}
            name="fullName"
            placeholder="Enter full legal name"
            required
            type="text"
          />
        </label>

        <label>
          <Label icon="id">National ID Number</Label>
          <input
            className={inputClass}
            name="nationalId"
            placeholder="CM..."
            required
            type="text"
          />
        </label>

        <label>
          <Label icon="phone">Phone number</Label>
          <input
            className={inputClass}
            name="phone"
            placeholder="+256 700 000 000"
            required
            type="tel"
          />
        </label>

        <label>
          <Label icon="mail">Email address</Label>
          <input
            className={inputClass}
            name="email"
            placeholder="name@example.com"
            required
            type="email"
          />
        </label>

        <label>
          <Label icon="location">District/location</Label>
          <input
            className={inputClass}
            name="district"
            placeholder="Kampala, Gulu, Mbarara..."
            required
            type="text"
          />
        </label>

        <label>
          <Label icon="briefcase">Profession</Label>
          <input
            className={inputClass}
            name="profession"
            placeholder="Teacher, student, business owner..."
            required
            type="text"
          />
        </label>

        <label>
          <Label>Citizenship status</Label>
          <select className={selectClass} defaultValue="" name="citizenship" required>
            <option disabled value="">
              Select status
            </option>
            <option>Ugandan citizen</option>
            <option>Dual citizen</option>
            <option>Resident supporter</option>
          </select>
        </label>

        <label>
          <Label>Gender</Label>
          <select className={selectClass} defaultValue="" name="gender" required>
            <option disabled value="">
              Select gender
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </label>

        <label className="md:col-span-2">
          <Label>Date of birth</Label>
          <input className={inputClass} name="dateOfBirth" required type="date" />
        </label>
      </div>

      <section className="mt-8 rounded-lg border border-[#8a1d2d]/15 bg-[#fffaf2] p-5">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8a1d2d]">
          Citizen Pledge
        </p>
        <h2 className="mt-3 text-2xl font-black text-[#211718]">
          Anti-corruption commitment
        </h2>
        <p className="mt-4 leading-7 text-[#5b5051]">
          I pledge, as a responsible citizen, to oppose corruption, bribery,
          abuse of office, and misuse of public property. I commit to support
          lawful accountability efforts, protect public resources, report
          suspected corruption through proper channels, and uphold the civic
          duty reflected in Uganda&apos;s Constitution.
        </p>

        <label className="mt-5 flex gap-3 rounded-md border border-[#6f1725]/12 bg-white p-4">
          <input
            className="mt-1 size-5 rounded border-[#8a1d2d] accent-[#8a1d2d]"
            name="pledgeAgreement"
            required
            type="checkbox"
          />
          <span className="text-sm font-bold leading-6 text-[#3a2628]">
            I agree to combat corruption and misuse of public property as part
            of Citizens&apos; Forum Against Corruption Uganda.
          </span>
        </label>

        <label className="mt-5 block">
          <Label>Digital signature</Label>
          <input
            className={inputClass}
            name="digitalSignature"
            placeholder="Type your full name as signature"
            required
            type="text"
          />
        </label>
      </section>

      <SubmitButton />
    </form>
  );
}
