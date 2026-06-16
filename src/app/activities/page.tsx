import type { Metadata } from "next";
import Link from "next/link";

const activities = [
  {
    category: "Workshop",
    title: "Community Workshops/ Barazas",
    date: "24 May 2026",
    location: "Kampala Civic Centre",
    description:
      "A practical session on identifying corruption risks, protecting public resources, and using official reporting channels.",
    image: "/Photo2.jpeg",
    imagePosition: "center",
  },
  {
    category: "Community Meeting",
    title: "District Integrity Forum",
    date: "29 May 2026",
    location: "Gulu Municipal Hall",
    description:
      "Citizens, local leaders, and coordinators meet to review community concerns and strengthen public accountability.",
    image: "/Photo4.jpeg",
    imagePosition: "center",
  },
  {
    category: "Youth Training",
    title: "Youth Anti-Corruption Leadership Training",
    date: "04 June 2026",
    location: "Mbarara University Hall",
    description:
      "A youth-focused training on ethics, civic courage, service delivery monitoring, and refusing bribery.",
    image: "/Photo3.jpeg",
    imagePosition: "center 35%",
  },
  {
    category: "Awareness Campaign",
    title: "Citizen Integrity Road Campaign",
    date: "12 June 2026",
    location: "Jinja Main Street",
    description:
      "A public awareness campaign using community outreach, media engagement, and citizen pledge mobilization.",
    image: "/Photo1.jpeg",
    imagePosition: "center",
  },
];

export const metadata: Metadata = {
  title: "Activities & Events | CITIZENS' FORUM AGAINST CORRUPTION UGANDA (CIFACU)",
  description:
    "Workshops, meetings, youth training, and awareness campaigns by CITIZENS' FORUM AGAINST CORRUPTION UGANDA (CIFACU).",
};

export default function ActivitiesPage() {
  return (
    <main className="flex min-w-0 flex-1 flex-col overflow-x-hidden bg-[#fffaf2] text-[#211718]">
      <section className="relative overflow-hidden bg-[#5b111d] text-white">
        <div className="absolute left-0 right-0 top-0 h-2 bg-[linear-gradient(90deg,#1d1d1d_0_33%,#f6c84c_33%_66%,#9b1b30_66%_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(91,17,29,0.98),rgba(33,23,24,0.94))]" />
        <div className="relative mx-0 w-full min-w-0 max-w-sm px-4 py-16 sm:mx-auto sm:max-w-7xl sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f6c84c]">
            Activities & Events
          </p>
          <h1 className="mt-5 max-w-4xl break-words text-3xl font-black leading-tight tracking-tight sm:text-6xl">
            Civic programs that turn anti-corruption duty into action.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            Join workshops, community meetings, youth anti-corruption training,
            and awareness campaigns organized for citizens across Uganda.
          </p>
        </div>
      </section>

      <section className="mx-0 w-full min-w-0 max-w-sm px-4 py-12 sm:mx-auto sm:max-w-7xl sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {activities.map((activity) => (
            <article
              className="group min-w-0 overflow-hidden rounded-lg border border-[#6f1725]/10 bg-white shadow-xl shadow-[#4d0e19]/8 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#4d0e19]/14"
              key={activity.title}
            >
              <div
                className="relative min-h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${activity.image}')`,
                  backgroundPosition: activity.imagePosition,
                }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(91,17,29,0.72))]" />
                <span className="absolute left-5 top-5 rounded-md bg-[#f6c84c] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#4d0e19] shadow-lg">
                  {activity.category}
                </span>
              </div>

              <div className="min-w-0 p-6">
                <div className="flex flex-wrap gap-3 text-sm font-black text-[#8a1d2d]">
                  <span>{activity.date}</span>
                  <span className="text-[#c6b2b5]">|</span>
                  <span>{activity.location}</span>
                </div>
                <h2 className="mt-4 break-words text-xl font-black tracking-tight sm:text-2xl">
                  {activity.title}
                </h2>
                <p className="mt-4 leading-7 text-[#5b5051]">
                  {activity.description}
                </p>
                <Link
                  className="mt-6 inline-flex rounded-md bg-[#6f1725] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#4d0e19]/12 transition hover:bg-[#4d0e19] focus:outline-none focus:ring-4 focus:ring-[#f6c84c]/50"
                  href="/register"
                >
                  Register
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
