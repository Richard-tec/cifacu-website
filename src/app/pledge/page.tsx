import type { Metadata } from "next";
import Link from "next/link";
import { PledgeSignatureForm } from "@/components/PledgeSignatureForm";

const commitments = [
  "I will reject bribery, extortion, fraud, favoritism, and misuse of entrusted power in public and private dealings.",
  "I will protect public property and report suspected misuse of public resources through lawful and proper channels.",
  "I will refuse to offer, request, or accept improper benefits in exchange for public services, contracts, or influence.",
  "I will encourage family, colleagues, and community members to uphold integrity and demand accountable leadership.",
  "I will support peaceful civic action, public education, and responsible participation in the fight against corruption.",
];

export const metadata: Metadata = {
  title: "Anti-Corruption Pledge | Citizens' Forum Against Corruption Uganda",
  description:
    "Digitally sign the Citizens' Forum Against Corruption Uganda patriotic citizen pledge.",
};

export default function PledgePage() {
  return (
    <main className="flex flex-1 flex-col bg-[#fffaf2] text-[#211718]">
      <section className="relative overflow-hidden bg-[#5b111d] text-white">
        <div className="absolute left-0 right-0 top-0 h-2 bg-[linear-gradient(90deg,#1d1d1d_0_33%,#f6c84c_33%_66%,#9b1b30_66%_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(91,17,29,0.98),rgba(33,23,24,0.96))]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f6c84c]">
              Citizen Anti-Corruption Commitment
            </p>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
              Patriotic pledge for public integrity.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              A modern digital pledge for citizens who choose to stand against
              corruption, protect public property, and uphold Uganda&apos;s
              constitutional duty.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr]">
          <article className="overflow-hidden rounded-lg border border-[#6f1725]/20 bg-white shadow-2xl shadow-[#4d0e19]/10">
            <header className="border-b border-[#6f1725]/18 bg-[#fffaf2] p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8a1d2d]">
                    Citizens&apos; Forum Against Corruption Uganda
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-[#211718]">
                    Anti-Corruption Pledge
                  </h2>
                </div>
                <div className="grid w-full max-w-40 grid-cols-3 overflow-hidden rounded-md border border-[#211718]/15">
                  <span className="h-3 bg-[#1d1d1d]" />
                  <span className="h-3 bg-[#f6c84c]" />
                  <span className="h-3 bg-[#9b1b30]" />
                </div>
              </div>
            </header>

            <div className="p-6 sm:p-8">
              <section className="rounded-lg border border-[#6f1725]/18 p-5 sm:p-6">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8a1d2d]">
                  Constitutional Foundation
                </p>
                <p className="mt-4 text-lg leading-8 text-[#4d4243]">
                  Guided by Article 17(1)(i) of Uganda&apos;s Constitution,
                  which recognizes the duty of every citizen to combat
                  corruption and misuse of public property, I freely make this
                  pledge as an expression of patriotic responsibility and civic
                  service.
                </p>
              </section>

              <section className="mt-6 rounded-lg border border-[#6f1725]/18 p-5 sm:p-6">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8a1d2d]">
                  Pledge Declaration
                </p>
                <p className="mt-4 text-lg leading-8 text-[#4d4243]">
                  I pledge to stand with fellow citizens in defending public
                  trust, refusing corruption in all its forms, and promoting a
                  culture where honesty, accountability, and lawful service are
                  expected from every person entrusted with responsibility.
                </p>
              </section>

              <section className="mt-6 rounded-lg border border-[#6f1725]/18 p-5 sm:p-6">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8a1d2d]">
                  Numbered Commitments
                </p>
                <div className="mt-5 grid gap-4">
                  {commitments.map((commitment, index) => (
                    <div
                      className="flex gap-4 rounded-md border border-[#6f1725]/12 bg-[#fffaf2] p-4"
                      key={commitment}
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-[#6f1725] text-sm font-black text-white">
                        {index + 1}
                      </span>
                      <p className="self-center text-sm font-semibold leading-6 text-[#3a2628]">
                        {commitment}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="mt-6 border-t border-[#6f1725]/18 pt-6 text-center">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#8a1d2d]">
                  Integrity, accountability, and citizen action.
                </p>
              </div>
            </div>
          </article>

          <aside className="grid gap-6">
            <PledgeSignatureForm />

            <section className="rounded-lg border border-[#6f1725]/18 bg-white p-6 shadow-xl shadow-[#4d0e19]/8">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8a1d2d]">
                Next Step
              </p>
              <h2 className="mt-3 text-2xl font-black text-[#211718]">
                Become a registered member.
              </h2>
              <p className="mt-4 leading-7 text-[#5b5051]">
                After signing the pledge, complete membership registration to
                join trainings, district activities, and civic accountability
                programs.
              </p>
              <Link
                className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-[#f6c84c] px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-[#4d0e19] shadow-lg shadow-[#4d0e19]/12 transition hover:-translate-y-0.5 hover:bg-[#ffe28a] sm:w-auto"
                href="/register"
              >
                Join the Movement
              </Link>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
