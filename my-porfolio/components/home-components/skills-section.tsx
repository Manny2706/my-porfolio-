// components/sections/skills-section.tsx
const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Django",
  "MongoDB",
  "PostgreSQL",
  "Git & GitHub",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="space-y-4">
      <h2 className="text-xl font-semibold text-slate-100">
        Skills &amp; Tech
      </h2>
      <p className="text-sm text-slate-400">
        A quick look at tools I use regularly.
      </p>
      <div className="mt-2 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-center text-slate-200"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
