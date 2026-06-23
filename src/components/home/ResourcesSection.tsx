const resources = [
  {
    code: "AR",
    title: "Annual Reports",
    description:
      "Annual activity and accountability reports will be available for download.",
  },
  {
    code: "PB",
    title: "Publications",
    description:
      "CIFACU publications, briefs, and institutional materials will be listed here.",
  },
  {
    code: "AC",
    title: "Anti-Corruption Resources",
    description:
      "Reference materials for reporting, civic duty, and public integrity.",
  },
  {
    code: "CM",
    title: "Community Awareness Materials",
    description:
      "Community guides, campaign flyers, and awareness materials will appear here.",
  },
];

export function ResourcesSection() {
  return (
    <section id="resources" className="bg-white py-16 text-[#211718] sm:py-24">
      {/* TODO: Connect resources to admin-managed uploads later. */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a1d2d]">
              Resources
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#4d0e19] sm:text-5xl">
              Reports, publications, and downloads.
            </h2>
          </div>
          <p className="max-w-md text-base font-semibold leading-7 text-[#5b5051]">
            Downloadable reports and civic education materials will be published
            here when approved.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((item) => (
            <article
              className="rounded-sm border border-[#6f1725]/10 bg-[#fffaf2] p-6 shadow-xl shadow-[#4d0e19]/8"
              key={item.title}
            >
              <span className="flex size-14 items-center justify-center rounded-sm bg-[#6f1725] text-sm font-black text-[#f6c84c]">
                {item.code}
              </span>
              <h3 className="mt-6 text-xl font-black text-[#211718]">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-[#5b5051]">
                {item.description}
              </p>
              <button
                className="mt-6 inline-flex cursor-not-allowed rounded-sm border border-[#6f1725]/18 bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#6f1725]/55"
                disabled
                type="button"
              >
                Download
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
