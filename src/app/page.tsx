export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-[#f8f5f1] text-[#231f20]">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#8a1d2d]">
            Public integrity. Citizen action.
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[#231f20] sm:text-6xl">
            Citizens united against corruption.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5c5557]">
            A civic organization platform for accountability, transparency, and
            community-led action.
          </p>
        </div>
      </section>
    </main>
  );
}
