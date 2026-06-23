import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About CIFACU | CITIZENS' FORUM AGAINST CORRUPTION UGANDA",
  description:
    "Learn about CITIZENS' FORUM AGAINST CORRUPTION UGANDA, its constitutional foundation, objectives, activities, mission, vision, and values.",
};

const participantGroups = [
  "Students",
  "Public and private sector professionals",
  "Local leaders",
  "Religious leaders",
  "Cultural leaders",
  "Business community",
  "Anti-corruption agencies and organizations",
  "Patriotic citizens across Uganda",
];

const cifacuObjectives = [
  "To create a corruption-free society in Uganda.",
  "To empower citizens with civic duty and consciousness against corruption.",
  "To collaborate with anti-corruption agencies, organizations, and stakeholders in designing effective and practical strategies to combat corruption.",
  "To sensitize the citizenry on the effects of corruption on Uganda's socio-economic transformation and their personal livelihoods.",
  "To carry out civic education, coordinate, and organize anti-corruption activities in communities, schools, and workplaces.",
  "To be a bridge between citizens, the President, and constitutionally mandated institutions in the fight against corruption.",
  "To engage and participate in the formulation of policy and legal frameworks.",
];

const cifacuActivities = [
  "Execution of Anti-Corruption Commitment cards as a personal pledge by citizens who believe corruption has devastating consequences for generations to come.",
  "Community barazas in all regions of Uganda.",
  "Seminars and debates in schools, workplace seminars, and collaboration with anti-corruption agencies and other stakeholders.",
  "Creation of associations or chapters in universities, schools, and workplaces to coordinate anti-corruption messages and activities.",
  "Anti-corruption concerts by creatives to drive the message home through edutainment.",
];

const cifacuValues = [
  "Courage",
  "Honesty",
  "Integrity",
  "Loyalty",
  "Legitimacy",
];

const cifacuModel = ["Reject", "Resist", "Report"];

const aboutHighlights = [
  {
    label: "Constitutional basis",
    value: "Article 17(1)(i)",
  },
  {
    label: "Engagement model",
    value: "Peaceful dialogue and civic action",
  },
  {
    label: "Citizen posture",
    value: "Reject, resist, and report corruption",
  },
];

const aboutLeaders = [
  { name: "Forum Chairperson", role: "National Coordination" },
  { name: "Secretary General", role: "Membership & Records" },
  { name: "Programs Director", role: "Training & Campaigns" },
];

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col bg-[#fffaf2] text-[#211718]">
      <section id="who-we-are" className="bg-[#fffdf8] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a1d2d]">
              About CIFACU
            </p>
            <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight tracking-tight text-[#4d0e19] sm:text-5xl lg:text-6xl">
              <span className="block">CITIZENS&apos; FORUM</span>
              <span className="block">AGAINST</span>
              <span className="block">CORRUPTION</span>
              <span className="block">UGANDA</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#514648]">
              Citizens&apos; Forum Against Corruption Uganda (CIFACU) is a
              non-discriminatory, non-sectarian, and intergenerational platform
              for anti-corruption warriors.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-md bg-[#6f1725] px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-xl shadow-[#4d0e19]/14 transition hover:-translate-y-0.5 hover:bg-[#4d0e19] focus:outline-none focus:ring-2 focus:ring-[#f6c84c] focus:ring-offset-2 focus:ring-offset-[#fffaf2]"
              >
                Join the Platform
              </Link>
              <Link
                href="/activities"
                className="inline-flex items-center justify-center rounded-md border border-[#6f1725]/18 bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-[#6f1725] shadow-lg shadow-[#4d0e19]/8 transition hover:-translate-y-0.5 hover:border-[#6f1725] focus:outline-none focus:ring-2 focus:ring-[#6f1725] focus:ring-offset-2 focus:ring-offset-[#fffaf2]"
              >
                View Activities
              </Link>
            </div>
          </div>

          <aside className="rounded-lg border border-[#6f1725]/10 bg-white p-6 shadow-2xl shadow-[#4d0e19]/10 lg:p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8a1d2d]">
              At a glance
            </p>
            <h2 className="mt-4 text-2xl font-black leading-tight text-[#211718]">
              Organized citizen participation against corruption.
            </h2>
            <dl className="mt-6 divide-y divide-[#6f1725]/10">
              {aboutHighlights.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-2 py-4 sm:grid-cols-[0.42fr_0.58fr]"
                >
                  <dt className="text-xs font-black uppercase tracking-[0.14em] text-[#8a1d2d]">
                    {item.label}
                  </dt>
                  <dd className="text-sm font-bold leading-6 text-[#3f3436]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 border-t border-[#6f1725]/10 pt-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8a1d2d]">
                3Rs Model
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {cifacuModel.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-[#f6c84c] px-3 py-4 text-center text-sm font-black text-[#4d0e19]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a1d2d]">
              Purpose
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#211718] sm:text-4xl">
              A peaceful civic platform for anti-corruption action.
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            <p className="rounded-lg border border-[#6f1725]/10 bg-[#fffaf2] p-5 text-base font-semibold leading-7 text-[#4d4243] shadow-lg shadow-[#4d0e19]/6">
              The forum is open to all citizens of Uganda from diverse
              backgrounds who are committed to stamping corruption out of Uganda
              with courage, honesty, intentionality, loyalty, and legitimacy.
            </p>
            <p className="rounded-lg border border-[#6f1725]/10 bg-[#fffaf2] p-5 text-base font-semibold leading-7 text-[#4d4243] shadow-lg shadow-[#4d0e19]/6">
              CIFACU rallies citizens from a victim mentality to an empowered
              and patriotic mentality that can stand against intimidation and
              harassment by the corrupt.
            </p>
            <p className="rounded-lg border border-[#6f1725]/10 bg-[#fffaf2] p-5 text-base font-semibold leading-7 text-[#4d4243] shadow-lg shadow-[#4d0e19]/6">
              CIFACU provides a peaceful forum for dialogue and civic engagement
              in place of disruptive anti-corruption riots that can leave
              innocent people harmed.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8f7] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a1d2d]">
                Open To Citizens
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#4d0e19] sm:text-4xl">
                CIFACU brings together Ugandans from diverse backgrounds.
              </h2>
            </div>
            <p className="max-w-2xl text-base font-semibold leading-7 text-[#5b5051]">
              The forum welcomes citizens who are ready to protect public
              resources, strengthen accountability, and participate in practical
              anti-corruption action.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {participantGroups.map((group) => (
              <div
                key={group}
                className="rounded-lg border border-[#6f1725]/10 bg-white p-5 text-base font-bold text-[#6f1725] shadow-lg shadow-[#4d0e19]/6"
              >
                {group}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="bg-[#fffaf2] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a1d2d]">
              Leadership
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#4d0e19] sm:text-4xl">
              Placeholder forum leadership profiles.
            </h2>
            <p className="mt-5 text-base font-semibold leading-7 text-[#5b5051]">
              Official leaders, district coordinators, and verified office
              bearers can be added here when confirmed.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {aboutLeaders.map((leader) => (
              <article
                className="rounded-lg border border-[#6f1725]/10 bg-white p-6 shadow-xl shadow-[#4d0e19]/8"
                key={leader.name}
              >
                <span className="flex size-14 items-center justify-center rounded-md bg-[#6f1725] text-sm font-black text-[#f6c84c]">
                  CF
                </span>
                <h3 className="mt-5 text-xl font-black text-[#211718]">
                  {leader.name}
                </h3>
                <p className="mt-2 font-semibold text-[#8a1d2d]">
                  {leader.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="mission-vision" className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <article className="rounded-lg border border-[#6f1725]/10 bg-[#fffaf2] p-6 shadow-xl shadow-[#4d0e19]/8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8a1d2d]">
              Mission
            </p>
            <h2 className="mt-4 text-2xl font-black leading-tight text-[#211718]">
              To inspire, promote, and sustain a culture of integrity for a
              corruption-free Uganda.
            </h2>
          </article>
          <article className="rounded-lg border border-[#6f1725]/10 bg-[#211718] p-6 text-white shadow-xl shadow-[#4d0e19]/12">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f6c84c]">
              Vision
            </p>
            <h2 className="mt-4 text-2xl font-black leading-tight">
              A Uganda where integrity leads and corruption ends.
            </h2>
          </article>
          <article className="rounded-lg border border-[#6f1725]/10 bg-white p-6 shadow-xl shadow-[#4d0e19]/8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8a1d2d]">
              Approach
            </p>
            <h2 className="mt-4 text-2xl font-black leading-tight text-[#211718]">
              Peaceful dialogue, civic education, and coordinated citizen
              action.
            </h2>
          </article>
        </div>
      </section>

      <section className="bg-[#fffaf2] py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a1d2d]">
              Constitutional Foundation
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#4d0e19] sm:text-4xl">
              A civic duty under Article 17(1)(i).
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-[#5b5051]">
              <p>
                CIFACU is founded on Article 17(1)(i) of the 1995 Constitution,
                which enjoins all citizens to combat corruption. The drafters
                of the Constitution saw it fit that the fight against corruption
                must involve all citizens of Uganda.
              </p>
              <p>
                Objective XXVI of the National Objectives and Directive
                Principles of State Policy calls for measures to expose and
                combat corruption and abuse of power by public officials.
                CIFACU turns that constitutional duty into organized civic
                action by reminding Ugandans of their ability and power to fight
                corruption.
              </p>
              <p>
                The goal is to curtail the culture that normalizes corruption
                and make corruption a despicable venture that every patriotic
                citizen should shun.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a1d2d]">
              Objectives
            </p>
            <ol className="mt-6 grid gap-4">
              {cifacuObjectives.map((objective, index) => (
                <li
                  key={objective}
                  className="flex gap-4 rounded-lg border border-[#6f1725]/10 bg-white p-5 shadow-lg shadow-[#4d0e19]/6"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#6f1725] text-sm font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="self-center text-base font-semibold leading-7 text-[#3f3436]">
                    {objective}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a1d2d]">
              Activities
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#211718] sm:text-4xl">
              How CIFACU pursues its objectives.
            </h2>
            <ol className="mt-8 grid gap-5">
              {cifacuActivities.map((activity, index) => (
                <li
                  key={activity}
                  className="rounded-lg border border-[#6f1725]/10 bg-[#fffaf2] p-5 shadow-lg shadow-[#4d0e19]/6"
                >
                  <div className="flex gap-4">
                    <span className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-md bg-[#f6c84c] text-sm font-black text-[#4d0e19]">
                      {index + 1}
                    </span>
                    <p className="leading-7 text-[#4d4243]">{activity}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside
            id="core-values"
            className="rounded-lg bg-[#6f1725] p-8 text-white shadow-2xl shadow-[#4d0e19]/16"
          >
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f6c84c]">
              Core Values
            </p>
            <div className="mt-8 grid gap-4">
              {cifacuValues.map((value) => (
                <div
                  key={value}
                  className="rounded-md border border-white/12 bg-white/8 px-5 py-4 text-lg font-black"
                >
                  {value}
                </div>
              ))}
            </div>
            <p className="mt-8 border-t border-white/12 pt-6 text-base leading-7 text-white/82">
              These values guide CIFACU&apos;s call for Ugandans to reject,
              resist, and report corruption with courage and legitimacy.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
