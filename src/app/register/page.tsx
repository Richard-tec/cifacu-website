import type { Metadata } from "next";
import { MembershipRegistrationForm } from "@/components/MembershipRegistrationForm";

export const metadata: Metadata = {
  title: "Membership Registration | Citizens' Forum Against Corruption Uganda",
  description:
    "Register as a member of Citizens' Forum Against Corruption Uganda.",
};

export default function RegisterPage() {
  return (
    <main className="flex flex-1 flex-col bg-[#fffaf2] text-[#211718]">
      <section className="relative overflow-hidden bg-[#5b111d] text-white">
        <div className="absolute left-0 right-0 top-0 h-2 bg-[linear-gradient(90deg,#1d1d1d_0_33%,#f6c84c_33%_66%,#9b1b30_66%_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(246,200,76,0.18),transparent_28%),linear-gradient(135deg,rgba(111,23,37,0.98),rgba(34,20,22,0.96))]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f6c84c]">
              Membership Registration
            </p>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
              Join the citizen movement against corruption.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              Complete the registration form with your National ID details,
              civic profile, and anti-corruption pledge. Required fields help
              the forum keep membership records clear and verifiable.
            </p>
          </div>

          <aside className="rounded-lg border border-white/12 bg-white/8 p-6 shadow-2xl shadow-black/20 backdrop-blur">
            <h2 className="text-xl font-black text-[#f6c84c]">
              Registration checklist
            </h2>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-white/82">
              {[
                "Use your official full name",
                "Enter a valid National ID number",
                "Provide reachable phone and email contacts",
                "Read and accept the anti-corruption pledge",
                "Type your name as a digital signature",
              ].map((item) => (
                <div
                  className="flex items-center gap-3 rounded-md border border-white/10 bg-black/12 px-4 py-3"
                  key={item}
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#f6c84c] text-[#4d0e19]">
                    <svg
                      aria-hidden="true"
                      className="size-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <MembershipRegistrationForm />
      </section>
    </main>
  );
}
