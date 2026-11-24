import { skillCategories } from "@/lib/portfolio-data";

export default function SkillsSection() {
  return (
    <section id="skills" className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold text-slate-100">
          Technical Skills
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          Languages, frameworks, databases, cloud tools, and core CS fundamentals.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition-colors hover:border-slate-700"
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-slate-800 bg-slate-950/80 px-2.5 py-1 text-xs text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
