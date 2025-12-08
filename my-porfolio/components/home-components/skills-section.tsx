
const skills = [
  "Next.js",
  "React",
  "React Native",
  "TypeScript",
  "JavaScript",
  "CSS",
  "HTML",
  "Python",
  "Django",
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
      <div className="mt-2 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3 md:grid-cols-4 hover:gap-4 transition-all duration-300 
      hover:ease-in-out hover:mt-4 hover:text-sm hover:text-slate-100">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-center text-slate-200 hover:bg-slate-800 transition-colors duration-200 ease-in-out 
            hover:text-slate-100 hover:border-slate-600 hover:border-2"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
