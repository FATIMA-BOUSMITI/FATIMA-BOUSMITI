import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="pb-16 pt-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Skills</h2>
        </div>

        <div className="space-y-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="grid gap-4 rounded-2xl border border-slate-200 bg-white/90 p-5 sm:p-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8"
            >
              <h3 className="text-base font-semibold text-slate-900 lg:pt-1">{group.title}</h3>
              <div className="flex flex-wrap content-start gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm leading-5 text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
