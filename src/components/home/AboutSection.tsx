import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="bg-[#fffaf2] py-16 text-[#211718] sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a1d2d]">
            About CIFACU
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#4d0e19] sm:text-5xl">
            About Citizens&apos; Forum Against Corruption Uganda
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#5b5051]">
            CIFACU is an inclusive, non-discriminatory, non-sectarian and
            intergenerational platform that mobilizes and empowers Ugandans to
            stand united against corruption by rejecting, resisting, and
            reporting it, in accordance with Article 17(1) of the 1995
            Constitution of Uganda.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["Reject", "Resist", "Report"].map((item) => (
              <div
                className="rounded-sm border border-[#6f1725]/10 bg-white px-4 py-4 text-center text-sm font-black uppercase tracking-[0.12em] text-[#6f1725] shadow-lg shadow-[#4d0e19]/6"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
          <Link
            href="/about"
            className="mt-8 inline-flex rounded-sm bg-[#6f1725] px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-xl shadow-[#4d0e19]/14 transition hover:bg-[#4d0e19] focus:outline-none focus:ring-2 focus:ring-[#f6c84c] focus:ring-offset-2 focus:ring-offset-[#fffaf2]"
          >
            Read More
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-sm border border-[#6f1725]/10 bg-white shadow-xl shadow-[#4d0e19]/10">
          <Image
            alt="CIFACU community accountability activity"
            className="aspect-[4/3] w-full object-cover"
            height={900}
            src="/Photo5.jpeg"
            unoptimized
            width={1200}
          />
          <div className="absolute inset-x-0 bottom-0 h-2 bg-[linear-gradient(90deg,#1d1d1d_0_33%,#f6c84c_33%_66%,#9b1b30_66%_100%)]" />
        </div>
      </div>
    </section>
  );
}
