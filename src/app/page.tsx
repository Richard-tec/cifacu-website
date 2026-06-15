import { ContactEnquiryForm } from "@/components/ContactEnquiryForm";
import { HeroImageCarousel } from "@/components/HeroImageCarousel";

const activities = [
  {
    title: "Community Workshops",
    description:
      "Local forums that help citizens understand reporting channels, public duty, and practical accountability tools.",
  },
  {
    title: "Youth Integrity Training",
    description:
      "Leadership sessions for students and young professionals focused on ethics, public property, and civic courage.",
  },
  {
    title: "Stakeholder Meetings",
    description:
      "Structured dialogues with civic leaders, institutions, and communities to track issues and promote transparent action.",
  },
  {
    title: "Awareness Campaigns",
    description:
      "Public outreach, media engagement, and district-level mobilization under the banner of citizen responsibility.",
  },
];

const benefits = [
  "Verified membership using National ID number",
  "Access to integrity workshops and civic training",
  "Community alerts for meetings and awareness campaigns",
  "Opportunities to volunteer in district accountability teams",
];

const leaders = [
  { name: "Forum Chairperson", role: "National Coordination" },
  { name: "Secretary General", role: "Membership & Records" },
  { name: "Programs Director", role: "Training & Campaigns" },
];

const testimonials = [
  {
    quote:
      "Corruption becomes weaker when ordinary citizens are organized, informed, and willing to speak with one voice.",
    author: "Amina N.",
    location: "Kampala",
  },
  {
    quote:
      "Public property belongs to the people. Protecting it is not only for officials; it is our constitutional duty.",
    author: "Daniel O.",
    location: "Gulu",
  },
  {
    quote:
      "The movement gives young people a disciplined way to reject bribery and demand honest service delivery.",
    author: "Sarah K.",
    location: "Mbarara",
  },
];

const contactChannels = [
  {
    label: "Office",
    value: "Kampala, Uganda",
  },
  {
    href: "tel:+256700000000",
    label: "Phone",
    value: "+256 700 000 000",
  },
  {
    href: "mailto:info@cifacu.org",
    label: "Email",
    value: "info@cifacu.org",
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col overflow-hidden bg-[#fffaf2] text-[#211718]">
      <section className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-[#fffdf8] text-[#211718]">
        <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_17%_20%,rgba(246,200,76,0.18),transparent_32%),radial-gradient(circle_at_88%_15%,rgba(111,23,37,0.10),transparent_30%),linear-gradient(135deg,#ffffff_0%,#fffaf2_38%,#f3f5f4_72%,#ebe5dc_100%)]" />
        <div className="absolute inset-0 -z-20 opacity-[0.42] [background-image:linear-gradient(rgba(111,23,37,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(111,23,37,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute -left-20 top-24 -z-10 h-64 w-64 rounded-full border border-[#6f1725]/12 sm:h-96 sm:w-96" />
        <div className="absolute bottom-16 right-[-5rem] -z-10 h-72 w-72 rounded-full border border-[#f6c84c]/28 sm:h-[28rem] sm:w-[28rem]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.84)_0%,rgba(255,250,242,0.72)_46%,rgba(111,23,37,0.08)_100%)]" />
        <div className="absolute left-0 right-0 top-0 h-2 bg-[linear-gradient(90deg,#1d1d1d_0_33%,#f6c84c_33%_66%,#9b1b30_66%_100%)]" />

        <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-[92rem] items-center gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-10 lg:px-8 lg:py-12">
          <div className="order-2 max-w-3xl lg:order-1">
            <p className="mb-5 inline-flex rounded-full border border-[#6f1725]/12 bg-white/82 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8a1d2d] shadow-lg shadow-[#4d0e19]/8 backdrop-blur">
              Civic accountability and public integrity
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-tight text-[#4d0e19] sm:text-6xl lg:text-7xl">
              CITIZENS&apos; FORUM AGAINST CORRUPTION UGANDA (CIFACU)
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#514648] sm:text-xl">
              A citizen-led movement advancing accountability, protecting public
              property, and turning Uganda&apos;s constitutional duty into
              organized civic action.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/register"
                className="inline-flex items-center justify-center rounded-md bg-[#6f1725] px-7 py-4 text-base font-black text-white shadow-xl shadow-[#4d0e19]/18 transition hover:-translate-y-0.5 hover:bg-[#4d0e19] focus:outline-none focus:ring-2 focus:ring-[#f6c84c] focus:ring-offset-2 focus:ring-offset-[#fffaf2]"
              >
                Join the Movement
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-md border border-[#6f1725]/18 bg-white/80 px-7 py-4 text-base font-bold text-[#6f1725] shadow-lg shadow-[#4d0e19]/8 backdrop-blur transition hover:-translate-y-0.5 hover:border-[#6f1725] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#6f1725] focus:ring-offset-2 focus:ring-offset-[#fffaf2]"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="order-1 flex w-full justify-center lg:order-2">
            <div className="relative flex w-full items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[#f6c84c]/18 blur-3xl" />
              <HeroImageCarousel />
            </div>
          </div>
        </div>
      </section>

      <section id="join" className="bg-[#f7f8f7] py-20 text-[#211718] sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a1d2d]">
              Membership
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#4d0e19] sm:text-5xl">
              Register, verify, and stand with your community.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5b5051]">
              Citizens can register as members using their National ID number,
              helping the forum build a trusted network for training,
              coordination, and accountable civic participation.
            </p>
            <a
              href="/register"
              className="mt-8 inline-flex rounded-md bg-[#6f1725] px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-xl shadow-[#4d0e19]/14 transition hover:-translate-y-0.5 hover:bg-[#4d0e19]"
            >
              Start Registration
            </a>
          </div>
          <div className="grid gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="group flex gap-4 rounded-lg border border-[#6f1725]/10 bg-white p-5 shadow-xl shadow-[#4d0e19]/8 transition hover:-translate-y-1 hover:border-[#6f1725]/18 hover:shadow-[#4d0e19]/12"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#f6c84c] text-sm font-black text-[#4d0e19]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="self-center text-base font-semibold text-[#3f3436]">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="activities" className="bg-[#fffaf2] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a1d2d]">
              Activities
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Practical programs for public integrity.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {activities.map((activity) => (
              <article
                key={activity.title}
                className="rounded-lg border border-[#6f1725]/10 bg-white p-6 shadow-xl shadow-[#4d0e19]/8 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#4d0e19]/14"
              >
                <div className="mb-6 h-1.5 w-16 rounded-full bg-[linear-gradient(90deg,#1d1d1d,#f6c84c,#9b1b30)]" />
                <h3 className="text-xl font-black text-[#211718]">
                  {activity.title}
                </h3>
                <p className="mt-4 leading-7 text-[#5b5051]">
                  {activity.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a1d2d]">
                Leadership
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Placeholder forum leadership profiles.
              </h2>
            </div>
            <p className="max-w-sm text-sm font-semibold leading-6 text-[#6c6061]">
              Replace these profiles with official leaders, district
              coordinators, and verified office bearers.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {leaders.map((leader) => (
              <article
                key={leader.name}
                className="overflow-hidden rounded-lg border border-[#6f1725]/10 bg-[#fffaf2] shadow-xl shadow-[#4d0e19]/8"
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-[linear-gradient(135deg,#6f1725,#9b1b30_55%,#1d1d1d)]">
                  <span className="flex size-24 items-center justify-center rounded-full border border-white/30 bg-white/10 text-3xl font-black text-[#f6c84c] backdrop-blur">
                    CF
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#211718]">
                    {leader.name}
                  </h3>
                  <p className="mt-2 font-semibold text-[#8a1d2d]">
                    {leader.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#211718] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f6c84c]">
              Citizen Voices
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Ugandans speaking against corruption.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <figure
                key={item.author}
                className="rounded-lg border border-white/10 bg-white/8 p-6 shadow-xl shadow-black/20"
              >
                <blockquote className="text-lg font-semibold leading-8 text-white/90">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-5">
                  <span className="block font-black text-[#f6c84c]">
                    {item.author}
                  </span>
                  <span className="text-sm text-white/60">{item.location}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#fffaf2] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a1d2d]">
              Contact Us
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#4d0e19] sm:text-5xl">
              Enquiries, partnerships, and citizen coordination.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5b5051]">
              Reach the CIFACU team for membership support, district
              coordination, program partnerships, media enquiries, or civic
              accountability concerns.
            </p>

            <div className="mt-8 grid gap-4">
              {contactChannels.map((channel) => (
                <div
                  className="rounded-lg border border-[#6f1725]/10 bg-white p-5 shadow-lg shadow-[#4d0e19]/8"
                  key={channel.label}
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8a1d2d]">
                    {channel.label}
                  </p>
                  {channel.href ? (
                    <a
                      className="mt-2 block text-lg font-black text-[#211718] transition hover:text-[#8a1d2d]"
                      href={channel.href}
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-lg font-black text-[#211718]">
                      {channel.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

          </div>

          <ContactEnquiryForm />
        </div>
      </section>

    </main>
  );
}
