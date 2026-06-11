import type { Metadata } from "next";
import Link from "next/link";
import { logoutAdmin } from "@/app/admin/actions/auth";

const stats = [
  { label: "Total Members", value: "2,486", change: "+148 this month" },
  { label: "Upcoming Events", value: "18", change: "6 workshops scheduled" },
  { label: "Youth Participation", value: "64%", change: "+12% from last quarter" },
];

const members = [
  {
    name: "Amina Nakato",
    district: "Kampala",
    profession: "Teacher",
    status: "Active",
  },
  {
    name: "Daniel Okello",
    district: "Gulu",
    profession: "Youth Leader",
    status: "Active",
  },
  {
    name: "Sarah Katusiime",
    district: "Mbarara",
    profession: "Student",
    status: "Pending",
  },
];

const registrations = [
  { name: "Peter K.", id: "CM9200...", district: "Jinja", date: "17 May 2026" },
  { name: "Grace A.", id: "CM8812...", district: "Masaka", date: "16 May 2026" },
  { name: "Ibrahim M.", id: "CM7731...", district: "Arua", date: "15 May 2026" },
];

const events = [
  { title: "Youth Integrity Training", type: "Youth Training", date: "24 May" },
  { title: "Community Accountability Workshop", type: "Workshop", date: "29 May" },
  { title: "District Coordinators Meeting", type: "Meeting", date: "02 Jun" },
];

const navItems = [
  "Overview",
  "Members",
  "Registrations",
  "Workshops",
  "Meetings",
  "Announcements",
];

export const metadata: Metadata = {
  title: "Admin Dashboard | CITIZENS' FORUM AGAINST CORRUPTION UGANDA (CIFACU)",
  description: "CIFACU administration dashboard.",
};

function SmallIcon({ label }: { label: string }) {
  return (
    <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-white/10 text-[#f6c84c]">
      <svg
        aria-hidden="true"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          d={
            label === "Members"
              ? "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
              : label === "Announcements"
                ? "M3 11v2a2 2 0 0 0 2 2h3l5 4V5L8 9H5a2 2 0 0 0-2 2ZM16 9a5 5 0 0 1 0 6"
                : "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
          }
        />
      </svg>
    </span>
  );
}

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-[#f7f2ec] text-[#211718]">
      <div className="lg:flex">
        <aside className="bg-[#5b111d] text-white lg:fixed lg:inset-y-0 lg:left-0 lg:w-72">
          <div className="flex min-h-20 items-center justify-between border-b border-white/10 px-5">
            <Link className="flex items-center gap-3" href="/">
              <span className="flex size-11 items-center justify-center rounded-md bg-white text-sm font-black text-[#6f1725]">
                CF
              </span>
              <span>
                <span className="block text-xs font-black uppercase tracking-[0.16em] text-[#f6c84c]">
                  CIFACU
                </span>
                <span className="text-sm font-bold">Admin Panel</span>
              </span>
            </Link>
            <form action={logoutAdmin} className="lg:hidden">
              <button
                className="rounded-md border border-white/15 px-3 py-2 text-xs font-black text-white/78 transition hover:text-[#f6c84c]"
                type="submit"
              >
                Logout
              </button>
            </form>
          </div>

          <nav className="grid gap-1 px-4 py-5">
            {navItems.map((item) => (
              <a
                className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-bold text-white/78 transition hover:bg-white/10 hover:text-[#f6c84c]"
                href={`#${item.toLowerCase()}`}
                key={item}
              >
                <SmallIcon label={item} />
                {item}
              </a>
            ))}
          </nav>
        </aside>

        <section className="min-h-screen lg:ml-72 lg:flex-1">
          <header className="sticky top-0 z-30 border-b border-[#6f1725]/10 bg-white/90 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8a1d2d]">
                  Administration
                </p>
                <h1 className="text-2xl font-black tracking-tight">
                  Dashboard Overview
                </h1>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  className="rounded-md border border-[#6f1725]/15 bg-white px-4 py-3 text-sm font-black text-[#6f1725] shadow-sm transition hover:border-[#6f1725]"
                  href="/"
                >
                  View Site
                </Link>
                <form action={logoutAdmin} className="hidden lg:block">
                  <button
                    className="rounded-md bg-[#6f1725] px-4 py-3 text-sm font-black text-white shadow-sm transition hover:bg-[#4d0e19]"
                    type="submit"
                  >
                    Logout
                  </button>
                </form>
              </div>
            </div>
          </header>

          <div className="grid gap-8 px-4 py-8 sm:px-6 lg:px-8">
            <section id="overview" className="grid gap-5 md:grid-cols-3">
              {stats.map((stat) => (
                <article
                  className="rounded-lg border border-[#6f1725]/10 bg-white p-6 shadow-xl shadow-[#4d0e19]/6"
                  key={stat.label}
                >
                  <p className="text-sm font-black uppercase tracking-[0.12em] text-[#8a1d2d]">
                    {stat.label}
                  </p>
                  <p className="mt-4 text-4xl font-black">{stat.value}</p>
                  <p className="mt-2 text-sm font-semibold text-[#6c6061]">
                    {stat.change}
                  </p>
                </article>
              ))}
            </section>

            <section className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
              <div
                className="rounded-lg border border-[#6f1725]/10 bg-white shadow-xl shadow-[#4d0e19]/6"
                id="members"
              >
                <div className="border-b border-[#6f1725]/10 p-5">
                  <h2 className="text-xl font-black">Manage Members</h2>
                  <p className="mt-1 text-sm font-semibold text-[#6c6061]">
                    Review active and pending member records.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[620px] text-left text-sm">
                    <thead className="bg-[#fffaf2] text-xs uppercase tracking-[0.12em] text-[#8a1d2d]">
                      <tr>
                        {["Name", "District", "Profession", "Status"].map(
                          (heading) => (
                            <th className="px-5 py-4 font-black" key={heading}>
                              {heading}
                            </th>
                          ),
                        )}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#6f1725]/8">
                      {members.map((member) => (
                        <tr key={member.name}>
                          <td className="px-5 py-4 font-black">{member.name}</td>
                          <td className="px-5 py-4 font-semibold text-[#5b5051]">
                            {member.district}
                          </td>
                          <td className="px-5 py-4 font-semibold text-[#5b5051]">
                            {member.profession}
                          </td>
                          <td className="px-5 py-4">
                            <span className="rounded-full bg-[#fff1d0] px-3 py-1 text-xs font-black text-[#6f1725]">
                              {member.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div
                className="rounded-lg border border-[#6f1725]/10 bg-white p-5 shadow-xl shadow-[#4d0e19]/6"
                id="registrations"
              >
                <h2 className="text-xl font-black">Approve Registrations</h2>
                <div className="mt-5 grid gap-3">
                  {registrations.map((item) => (
                    <div
                      className="rounded-md border border-[#6f1725]/10 bg-[#fffaf2] p-4"
                      key={item.id}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-black">{item.name}</p>
                          <p className="mt-1 text-sm font-semibold text-[#6c6061]">
                            {item.id} | {item.district} | {item.date}
                          </p>
                        </div>
                        <button
                          className="rounded-md bg-[#6f1725] px-3 py-2 text-xs font-black text-white transition hover:bg-[#4d0e19]"
                          type="button"
                        >
                          Approve
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="grid gap-8 xl:grid-cols-2">
              <form
                className="rounded-lg border border-[#6f1725]/10 bg-white p-5 shadow-xl shadow-[#4d0e19]/6"
                id="workshops"
              >
                <h2 className="text-xl font-black">Post Workshops & Activities</h2>
                <div className="mt-5 grid gap-4">
                  <input
                    className="rounded-md border border-[#6f1725]/15 px-4 py-3 text-sm font-semibold outline-none focus:ring-4 focus:ring-[#8a1d2d]/12"
                    placeholder="Activity title"
                    type="text"
                  />
                  <select className="rounded-md border border-[#6f1725]/15 px-4 py-3 text-sm font-semibold outline-none focus:ring-4 focus:ring-[#8a1d2d]/12">
                    <option>Workshop</option>
                    <option>Awareness Campaign</option>
                    <option>Community Outreach</option>
                  </select>
                  <textarea
                    className="min-h-28 rounded-md border border-[#6f1725]/15 px-4 py-3 text-sm font-semibold outline-none focus:ring-4 focus:ring-[#8a1d2d]/12"
                    placeholder="Activity details"
                  />
                  <label className="rounded-md border border-dashed border-[#6f1725]/25 bg-[#fffaf2] px-4 py-6 text-center text-sm font-bold text-[#6f1725]">
                    Upload event images
                    <input accept="image/*" className="sr-only" multiple type="file" />
                  </label>
                  <button
                    className="rounded-md bg-[#6f1725] px-5 py-3 text-sm font-black text-white transition hover:bg-[#4d0e19]"
                    type="button"
                  >
                    Publish Activity
                  </button>
                </div>
              </form>

              <form
                className="rounded-lg border border-[#6f1725]/10 bg-white p-5 shadow-xl shadow-[#4d0e19]/6"
                id="meetings"
              >
                <h2 className="text-xl font-black">Post Meetings & Youth Training</h2>
                <div className="mt-5 grid gap-4">
                  <input
                    className="rounded-md border border-[#6f1725]/15 px-4 py-3 text-sm font-semibold outline-none focus:ring-4 focus:ring-[#8a1d2d]/12"
                    placeholder="Session title"
                    type="text"
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      className="rounded-md border border-[#6f1725]/15 px-4 py-3 text-sm font-semibold outline-none focus:ring-4 focus:ring-[#8a1d2d]/12"
                      type="date"
                    />
                    <input
                      className="rounded-md border border-[#6f1725]/15 px-4 py-3 text-sm font-semibold outline-none focus:ring-4 focus:ring-[#8a1d2d]/12"
                      placeholder="Venue"
                      type="text"
                    />
                  </div>
                  <select className="rounded-md border border-[#6f1725]/15 px-4 py-3 text-sm font-semibold outline-none focus:ring-4 focus:ring-[#8a1d2d]/12">
                    <option>District Meeting</option>
                    <option>Youth Training Session</option>
                    <option>Leadership Briefing</option>
                  </select>
                  <button
                    className="rounded-md bg-[#6f1725] px-5 py-3 text-sm font-black text-white transition hover:bg-[#4d0e19]"
                    type="button"
                  >
                    Schedule Session
                  </button>
                </div>
              </form>
            </section>

            <section className="grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
              <form
                className="rounded-lg border border-[#6f1725]/10 bg-white p-5 shadow-xl shadow-[#4d0e19]/6"
                id="announcements"
              >
                <h2 className="text-xl font-black">Send Announcements</h2>
                <div className="mt-5 grid gap-4">
                  <input
                    className="rounded-md border border-[#6f1725]/15 px-4 py-3 text-sm font-semibold outline-none focus:ring-4 focus:ring-[#8a1d2d]/12"
                    placeholder="Announcement subject"
                    type="text"
                  />
                  <select className="rounded-md border border-[#6f1725]/15 px-4 py-3 text-sm font-semibold outline-none focus:ring-4 focus:ring-[#8a1d2d]/12">
                    <option>All members</option>
                    <option>District coordinators</option>
                    <option>Youth participants</option>
                  </select>
                  <textarea
                    className="min-h-32 rounded-md border border-[#6f1725]/15 px-4 py-3 text-sm font-semibold outline-none focus:ring-4 focus:ring-[#8a1d2d]/12"
                    placeholder="Write announcement"
                  />
                  <button
                    className="rounded-md bg-[#f6c84c] px-5 py-3 text-sm font-black text-[#4d0e19] transition hover:bg-[#ffe28a]"
                    type="button"
                  >
                    Send Announcement
                  </button>
                </div>
              </form>

              <div className="rounded-lg border border-[#6f1725]/10 bg-white p-5 shadow-xl shadow-[#4d0e19]/6">
                <h2 className="text-xl font-black">Upcoming Events</h2>
                <div className="mt-5 grid gap-3">
                  {events.map((event) => (
                    <div
                      className="flex items-center justify-between gap-4 rounded-md border border-[#6f1725]/10 bg-[#fffaf2] p-4"
                      key={event.title}
                    >
                      <div>
                        <p className="font-black">{event.title}</p>
                        <p className="mt-1 text-sm font-semibold text-[#6c6061]">
                          {event.type}
                        </p>
                      </div>
                      <span className="rounded-md bg-[#6f1725] px-3 py-2 text-xs font-black text-white">
                        {event.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
