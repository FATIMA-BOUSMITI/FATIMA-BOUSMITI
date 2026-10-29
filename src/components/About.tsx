export function About() {
  return (
    <section id="about" className="pb-8 pt-12 sm:pt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">About me</h2>
        </div>

        <div>
          <div className="grid gap-5 rounded-2xl border border-slate-200 bg-white/90 p-6 sm:p-8 lg:grid-cols-2 lg:gap-10">
            <p className="text-base leading-8 text-slate-700">
              I am a 5th-year Computer Engineering student at ENSA Safi, Morocco, with a strong interest in software testing, quality assurance, API validation, mobile development, and backend engineering.
            </p>
            <p className="text-base leading-8 text-slate-700">
              My profile is focused on QA automation and software quality, with hands-on experience in automated UI testing, REST API testing, performance testing, and CI/CD practices for reliable, secure digital products.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
