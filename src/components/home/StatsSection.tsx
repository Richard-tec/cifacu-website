const stats = [
  { label: "Districts Reached", value: "0" },
  { label: "Citizens Engaged", value: "0" },
  { label: "Activities Conducted", value: "0" },
  { label: "Reports Submitted", value: "0" },
];

export function StatsSection() {
  return (
    <section className="relative z-10 bg-white text-[#211718] shadow-lg shadow-[#4d0e19]/8">
      {/* TODO: Replace placeholder stats with admin/dashboard or database values later. */}
      <div className="mx-auto grid max-w-7xl divide-y divide-[#6f1725]/10 px-4 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div className="py-8 text-center" key={stat.label}>
            <p className="text-4xl font-black text-[#6f1725]">{stat.value}</p>
            <p className="mt-2 text-sm font-black uppercase tracking-[0.14em] text-[#5b5051]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
