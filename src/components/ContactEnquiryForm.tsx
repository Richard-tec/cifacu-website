"use client";

import { FormEvent, useState } from "react";
import {
  contactEnquiryRepository,
  type ContactEnquiryPayload,
} from "@/lib/contactEnquiries";

type FieldName = keyof ContactEnquiryPayload;
type ContactFormErrors = Partial<Record<FieldName, string>>;

const inputClass =
  "mt-2 w-full rounded-md border border-[#6f1725]/15 bg-white px-4 py-3 text-sm font-semibold text-[#211718] shadow-sm outline-none transition placeholder:text-[#8a7d7e] focus:border-[#8a1d2d] focus:ring-4 focus:ring-[#8a1d2d]/12";

const errorInputClass =
  "border-[#9b1b30]/70 bg-[#fff7f8] focus:border-[#9b1b30] focus:ring-[#9b1b30]/14";

const labelClass = "text-sm font-black text-[#3a2628]";

const requiredFields: Array<{ label: string; name: FieldName }> = [
  { label: "Full Name", name: "fullName" },
  { label: "Email Address", name: "email" },
  { label: "Subject", name: "subject" },
  { label: "Message", name: "message" },
];

function getInputClass(hasError: boolean) {
  return hasError ? `${inputClass} ${errorInputClass}` : inputClass;
}

function getFieldValue(formData: FormData, fieldName: FieldName) {
  const value = formData.get(fieldName);

  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

function getFieldErrorId(fieldName: FieldName) {
  return `contact-${fieldName}-error`;
}

function validatePayload(payload: ContactEnquiryPayload) {
  const errors: ContactFormErrors = {};

  requiredFields.forEach(({ label, name }) => {
    if (!payload[name]?.trim()) {
      errors[name] = `${label} is required.`;
    }
  });

  if (
    payload.email &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)
  ) {
    errors.email = "Enter a valid email address.";
  }

  return errors;
}

function FieldError({
  children,
  fieldName,
}: {
  children?: string;
  fieldName: FieldName;
}) {
  if (!children) {
    return null;
  }

  return (
    <p
      className="mt-2 text-sm font-bold text-[#9b1b30]"
      id={getFieldErrorId(fieldName)}
    >
      {children}
    </p>
  );
}

export function ContactEnquiryForm() {
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [formMessage, setFormMessage] = useState("");
  const [status, setStatus] = useState<
    "error" | "idle" | "submitting" | "success"
  >("idle");

  const clearFieldError = (fieldName: FieldName) => {
    setErrors((currentErrors) => {
      if (!currentErrors[fieldName]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors[fieldName];

      return nextErrors;
    });

    if (status !== "submitting") {
      setFormMessage("");
      setStatus("idle");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: ContactEnquiryPayload = {
      email: getFieldValue(formData, "email").toLowerCase(),
      fullName: getFieldValue(formData, "fullName"),
      message: getFieldValue(formData, "message"),
      phone: getFieldValue(formData, "phone") || undefined,
      subject: getFieldValue(formData, "subject"),
    };
    const validationErrors = validatePayload(payload);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFormMessage("Please correct the highlighted fields.");
      setStatus("error");
      return;
    }

    setErrors({});
    setFormMessage("");
    setStatus("submitting");

    const result = await contactEnquiryRepository.save(payload);

    if (!result.success) {
      setFormMessage(result.message);
      setStatus("error");
      return;
    }

    form.reset();
    setFormMessage(
      "Thank you. Your enquiry has been saved locally for follow-up.",
    );
    setStatus("success");
  };

  return (
    <form
      className="rounded-lg border border-[#6f1725]/10 bg-white p-5 text-[#211718] shadow-2xl shadow-black/18 sm:p-7"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="mb-6 border-b border-[#6f1725]/10 pb-5">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8a1d2d]">
          Enquiry Form
        </p>
        <h3 className="mt-2 text-2xl font-black tracking-tight text-[#211718]">
          Send CIFACU a message
        </h3>
        <p className="mt-3 text-sm font-semibold leading-6 text-[#6b6061]">
          Use this form for membership, partnership, reporting, media, or
          district coordination enquiries.
        </p>
      </div>

      {formMessage ? (
        <div
          aria-live="polite"
          className={`mb-5 rounded-md border px-4 py-3 text-sm font-bold ${
            status === "success"
              ? "border-[#f6c84c]/60 bg-[#fff8df] text-[#5b111d]"
              : "border-[#9b1b30]/30 bg-[#fff1f3] text-[#9b1b30]"
          }`}
          role="status"
        >
          {formMessage}
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <label>
          <span className={labelClass}>Full Name *</span>
          <input
            aria-describedby={
              errors.fullName ? getFieldErrorId("fullName") : undefined
            }
            aria-invalid={Boolean(errors.fullName)}
            className={getInputClass(Boolean(errors.fullName))}
            name="fullName"
            onInput={() => clearFieldError("fullName")}
            placeholder="Enter your full name"
            required
            type="text"
          />
          <FieldError fieldName="fullName">{errors.fullName}</FieldError>
        </label>

        <label>
          <span className={labelClass}>Email Address *</span>
          <input
            aria-describedby={
              errors.email ? getFieldErrorId("email") : undefined
            }
            aria-invalid={Boolean(errors.email)}
            className={getInputClass(Boolean(errors.email))}
            name="email"
            onInput={() => clearFieldError("email")}
            placeholder="name@example.com"
            required
            type="email"
          />
          <FieldError fieldName="email">{errors.email}</FieldError>
        </label>

        <label>
          <span className={labelClass}>Phone Number (optional)</span>
          <input
            className={inputClass}
            name="phone"
            placeholder="+256 700 000 000"
            type="tel"
          />
        </label>

        <label>
          <span className={labelClass}>Subject *</span>
          <input
            aria-describedby={
              errors.subject ? getFieldErrorId("subject") : undefined
            }
            aria-invalid={Boolean(errors.subject)}
            className={getInputClass(Boolean(errors.subject))}
            name="subject"
            onInput={() => clearFieldError("subject")}
            placeholder="How can CIFACU help?"
            required
            type="text"
          />
          <FieldError fieldName="subject">{errors.subject}</FieldError>
        </label>

        <label className="sm:col-span-2">
          <span className={labelClass}>Message *</span>
          <textarea
            aria-describedby={
              errors.message ? getFieldErrorId("message") : undefined
            }
            aria-invalid={Boolean(errors.message)}
            className={`${getInputClass(Boolean(errors.message))} min-h-36 resize-y`}
            name="message"
            onInput={() => clearFieldError("message")}
            placeholder="Write your enquiry or message"
            required
            rows={6}
          />
          <FieldError fieldName="message">{errors.message}</FieldError>
        </label>
      </div>

      <button
        className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-[#6f1725] px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-lg shadow-[#4d0e19]/18 transition hover:-translate-y-0.5 hover:bg-[#4d0e19] focus:outline-none focus:ring-4 focus:ring-[#f6c84c]/55 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        disabled={status === "submitting"}
        type="submit"
      >
        {status === "submitting" ? "Sending Enquiry..." : "Send Enquiry"}
      </button>
    </form>
  );
}
