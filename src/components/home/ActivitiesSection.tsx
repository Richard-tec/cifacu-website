import Image from "next/image";
import Link from "next/link";
import { activities } from "@/lib/activities";

export function ActivitiesSection() {
  const previewActivities = activities.slice(0, 3);

  return (
    <section className="bg-white py-16 text-[#211718] sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a1d2d]">
              Activities
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#4d0e19] sm:text-5xl">
              Practical programs for public integrity.
            </h2>
          </div>
          <p className="max-w-md text-base font-semibold leading-7 text-[#5b5051]">
            Register for civic education, youth integrity training, stakeholder
            dialogue, and public awareness activities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {previewActivities.map((activity) => (
            <article
              className="group flex h-full flex-col overflow-hidden rounded-sm border border-[#6f1725]/10 bg-[#fffaf2] shadow-xl shadow-[#4d0e19]/8 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#4d0e19]/14"
              key={activity.title}
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  alt={`${activity.title} activity`}
                  className="object-cover transition duration-500 group-hover:scale-105"
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  src={activity.image}
                  unoptimized
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.03),rgba(91,17,29,0.68))]" />
                <span className="absolute left-4 top-4 rounded-sm bg-[#f6c84c] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#4d0e19]">
                  {activity.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-black text-[#211718]">
                  {activity.title}
                </h3>
                <p className="mt-4 flex-1 leading-7 text-[#5b5051]">
                  {activity.description}
                </p>
                <Link
                  className="mt-6 inline-flex items-center justify-center rounded-sm bg-[#6f1725] px-5 py-3 text-center text-sm font-black text-white shadow-lg shadow-[#4d0e19]/12 transition hover:bg-[#4d0e19] focus:outline-none focus:ring-4 focus:ring-[#f6c84c]/50"
                  href="/activities"
                >
                  View Activity Details
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/activities"
            className="inline-flex rounded-sm border border-[#6f1725]/18 bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-[#6f1725] shadow-lg shadow-[#4d0e19]/8 transition hover:border-[#6f1725] hover:text-[#4d0e19] focus:outline-none focus:ring-2 focus:ring-[#f6c84c]"
          >
            View All Activities
          </Link>
        </div>
      </div>
    </section>
  );
}
