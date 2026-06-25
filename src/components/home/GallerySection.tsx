import Image from "next/image";
import Link from "next/link";

const galleryItems = [
  { src: "/Photo1.jpeg", title: "Community engagement" },
  { src: "/Photo2.jpeg", title: "Civic workshop" },
  { src: "/Photo3.jpeg", title: "Youth participation" },
  { src: "/Photo4.jpeg", title: "Awareness activity" },
];

export function GallerySection() {
  return (
    <section className="bg-[#fffaf2] py-16 text-[#211718] sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a1d2d]">
            Media Gallery
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#4d0e19] sm:text-5xl">
            CIFACU activities in pictures.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#5b5051]">
            Photos and videos from CIFACU activities will appear here.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <article
              className="group overflow-hidden rounded-sm border border-[#6f1725]/10 bg-white shadow-xl shadow-[#4d0e19]/8"
              key={item.title}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  alt={item.title}
                  className="object-cover transition duration-500 group-hover:scale-105"
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  src={item.src}
                  unoptimized
                />
              </div>
              <div className="border-t border-[#6f1725]/10 px-5 py-4">
                <h3 className="font-black text-[#211718]">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex rounded-sm bg-[#6f1725] px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-xl shadow-[#4d0e19]/14 transition hover:bg-[#4d0e19] focus:outline-none focus:ring-2 focus:ring-[#f6c84c]"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
