const newsCards = [
  {
    title: "Upcoming update",
    date: "Date to be announced",
    description:
      "New CIFACU updates will be published here after administrative review.",
    label: "Update",
  },
  {
    title: "Campaign highlight",
    date: "Date to be announced",
    description:
      "Campaign summaries and public integrity highlights will appear here.",
    label: "Campaign",
  },
  {
    title: "Community news",
    date: "Date to be announced",
    description:
      "Community stories and activity notes will be added once available.",
    label: "Community",
  },
];

export function NewsHighlightsSection() {
  return (
    <section id="news" className="bg-[#f7f8f7] py-16 text-[#211718] sm:py-24">
      {/* TODO: Connect this section to admin-managed news content later. */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a1d2d]">
            News &amp; Highlights
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#4d0e19] sm:text-5xl">
            Latest updates from CIFACU
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#5b5051]">
            News, announcements, campaign updates, and highlights will appear
            here once published by the administration team.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {newsCards.map((item) => (
            <article
              className="overflow-hidden rounded-sm border border-[#6f1725]/10 bg-white shadow-xl shadow-[#4d0e19]/8"
              key={item.title}
            >
              <div className="flex h-44 items-center justify-center bg-[linear-gradient(135deg,#6f1725,#9b1b30_58%,#211718)]">
                <span className="rounded-sm border border-white/20 bg-white/10 px-4 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#f6c84c] backdrop-blur">
                  {item.label}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8a1d2d]">
                  {item.date}
                </p>
                <h3 className="mt-3 text-xl font-black text-[#211718]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-[#5b5051]">
                  {item.description}
                </p>
                <a
                  className="mt-6 inline-flex text-sm font-black uppercase tracking-[0.08em] text-[#6f1725] transition hover:text-[#4d0e19]"
                  href="#news"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
