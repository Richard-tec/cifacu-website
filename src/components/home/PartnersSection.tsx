const partners = ["Partner Logo", "Partner Logo", "Partner Logo", "Partner Logo"];

export function PartnersSection() {
  return (
    <section id="partners" className="bg-white py-16 text-[#211718] sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a1d2d]">
            Partners &amp; Stakeholders
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#4d0e19] sm:text-5xl">
            Our Partners &amp; Stakeholders
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#5b5051]">
            CIFACU works with communities, institutions, civil society actors,
            and public accountability stakeholders to promote integrity and
            citizen participation.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((label, index) => (
            <div
              className="flex h-28 items-center justify-center rounded-sm border border-[#6f1725]/10 bg-[#fffaf2] text-sm font-black uppercase tracking-[0.14em] text-[#6f1725] shadow-lg shadow-[#4d0e19]/6"
              key={`${label}-${index}`}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
