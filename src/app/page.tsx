import Image from "next/image";

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

export default function Home() {
  return (
    <main className="flex flex-1 flex-col overflow-hidden bg-[#fffaf2] text-[#211718]">
      <section className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-[#4d0e19] text-white">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center opacity-45"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(54,8,17,0.96)_0%,rgba(77,14,25,0.88)_43%,rgba(0,0,0,0.48)_100%)]" />
        <div className="absolute left-0 right-0 top-0 h-2 bg-[linear-gradient(90deg,#1d1d1d_0_33%,#f6c84c_33%_66%,#9b1b30_66%_100%)]" />

        <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-8 flex size-24 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white p-2 shadow-2xl shadow-black/25 sm:size-32">
              <Image
                alt="CIFACU official logo"
                className="h-full w-full object-contain"
                height={400}
                priority
                src="/logo.png"
                width={400}
              />
            </div>
            <p className="mb-5 inline-flex rounded-full border border-[#f6c84c]/40 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f6c84c] shadow-2xl shadow-black/20 backdrop-blur">
              Citizens Forum Against Corruption in Uganda
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Me &amp; You Against Corruption
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/86 sm:text-xl">
              A citizen-led movement advancing accountability, protecting public
              property, and turning Uganda&apos;s constitutional duty into
              organized civic action.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/register"
                className="inline-flex items-center justify-center rounded-md bg-[#f6c84c] px-7 py-4 text-base font-black text-[#4d0e19] shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6f1725]"
              >
                Join the Movement
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-[#f6c84c] hover:text-[#f6c84c] focus:outline-none focus:ring-2 focus:ring-[#f6c84c] focus:ring-offset-2 focus:ring-offset-[#6f1725]"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a1d2d]">
              Our Mandate
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#211718] sm:text-5xl">
              A constitutional duty carried by citizens.
            </h2>
          </div>
          <div className="rounded-lg border border-[#8a1d2d]/10 bg-[#fffaf2] p-8 shadow-2xl shadow-[#4d0e19]/8">
            <p className="text-lg leading-8 text-[#4d4243]">
              Citizens Forum Against Corruption in Uganda exists to mobilize
              citizens against corruption, misuse of public property, bribery,
              and abuse of entrusted power. The forum is inspired by Article
              17(1)(i) of Uganda&apos;s Constitution, which places a duty on
              every citizen to combat corruption and misuse of public property.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Accountability", "Public Integrity", "Citizen Action"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-md border-l-4 border-[#f6c84c] bg-white p-4 text-sm font-bold text-[#6f1725] shadow-sm"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="join" className="bg-[#6f1725] py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f6c84c]">
              Membership
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Register, verify, and stand with your community.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80">
              Citizens can register as members using their National ID number,
              helping the forum build a trusted network for training,
              coordination, and accountable civic participation.
            </p>
            <a
              href="/register"
              className="mt-8 inline-flex rounded-md bg-[#f6c84c] px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-[#4d0e19] shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white"
            >
              Start Registration
            </a>
          </div>
          <div className="grid gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="group flex gap-4 rounded-lg border border-white/10 bg-white/8 p-5 shadow-xl shadow-black/10 backdrop-blur transition hover:-translate-y-1 hover:bg-white/12"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#f6c84c] text-sm font-black text-[#4d0e19]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="self-center text-base font-semibold text-white">
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

    </main>
  );
}
