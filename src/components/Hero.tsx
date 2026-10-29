import heroImage from '../assets/hero.png'

type SocialLinkProps = {
  href: string
  label: string
  children: React.ReactNode
}

function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900"
    >
      {children}
    </a>
  )
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.52 2.87 8.35 6.84 9.7.5.09.68-.22.68-.49v-1.72c-2.78.62-3.37-1.35-3.37-1.35-.45-1.2-1.11-1.52-1.11-1.52-.91-.63.07-.62.07-.62 1.01.07 1.54 1.04 1.54 1.04.89 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.35 9.35 0 0 1 12 6.86c.85 0 1.71.12 2.51.36 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.02 1.64 1.02 2.76 0 3.95-2.35 4.81-4.59 5.07.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.23 10.23 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5A1.56 1.56 0 1 1 6.92 5.4a1.56 1.56 0 0 1 .02 3.1ZM5.5 9.92h2.84v8.58H5.5V9.92Zm5.2 0h2.72v1.17h.04c.38-.72 1.3-1.47 2.67-1.47 2.86 0 3.39 1.88 3.39 4.33v4.55h-2.85v-4.27c0-1.01-.02-2.31-1.4-2.31-1.41 0-1.63 1.1-1.63 2.23v4.35H10.7V9.92Z" />
    </svg>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-10 sm:pt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for opportunities
            </div>

            <h1 className="hero-title-reveal max-w-2xl text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-7xl">
              Hi, I&apos;m{' '}
              <span className="text-slate-900">
                Fatima
              </span>
            </h1>

            <p className="mt-6 text-xl font-medium text-slate-700 sm:text-2xl">
              Software Engineering Student | QA Engineer
            </p>

            <p className="mt-3 text-lg text-slate-600 sm:text-xl">
              Manual &amp; Automated Testing | Java / Spring Boot
            </p>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              My profile is focused on QA automation and software quality, with hands-on experience in automated UI testing, REST API testing, performance testing, and CI/CD practices for reliable, secure digital products.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                View Projects
              </a>
              <a
                href="/Fatima-Bousmiti-CV.pdf.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <SocialLink href="https://github.com/FATIMA-BOUSMITI" label="GitHub">
                <IconGitHub />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/fatima-bousmiti-a845292a7/" label="LinkedIn">
                <IconLinkedIn />
              </SocialLink>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={heroImage}
              alt="Fatima Bousmiti"
              className="w-full max-w-md rounded-[2rem] object-cover object-center shadow-[0_12px_30px_rgba(15,23,42,0.12)]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
