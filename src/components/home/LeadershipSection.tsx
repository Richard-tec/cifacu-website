const leaders = Array.from({ length: 4 }, (_, index) => ({
  bio: "Short placeholder bio highlighting this leader's future profile and civic accountability work.",
  name: "Leader Name",
  role: "Role / Position",
  id: `leader-${index + 1}`,
}));

export function LeadershipSection() {
  return (
    <section id="leadership" className="bg-white py-16 text-[#211718] sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a1d2d]">
            Leadership
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#4d0e19] sm:text-5xl">
            CIFACU Leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#5b5051]">
            Leadership profiles will be added here to highlight the team
            guiding CIFACU&apos;s civic accountability and public integrity work.
          </p>
        </div>

        {/* TODO: Connect this section to real leadership data/content later. */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader) => (
            <article
              className="rounded-sm border border-[#6f1725]/10 bg-[#fffaf2] p-6 text-center shadow-lg shadow-[#4d0e19]/6"
              key={leader.id}
            >
              <div className="mx-auto flex size-20 items-center justify-center rounded-full border-4 border-[#f6c84c] bg-white text-xl font-black text-[#6f1725] shadow-inner shadow-[#4d0e19]/8">
                LN
              </div>
              <h3 className="mt-5 text-lg font-black text-[#4d0e19]">
                {leader.name}
              </h3>
              <p className="mt-1 text-sm font-black uppercase tracking-[0.12em] text-[#8a1d2d]">
                {leader.role}
              </p>
              <p className="mt-4 text-sm leading-6 text-[#5b5051]">
                {leader.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
