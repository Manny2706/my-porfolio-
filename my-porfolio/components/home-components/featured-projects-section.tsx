// components/sections/featured-projects-section.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "JobSeeker – Job Portal",
    badge: "Full Stack",
    description:
      "A full-stack platform connecting job seekers with recruiters using Next.js & Django.",
    tech: "Next.js · Django · PostgreSQL",
  },
  {
    title: "KAMPAS ESPORTS Website",
    badge: "Frontend",
    description:
      "A modern esports landing page with animated UI sections & dark theme.",
    tech: "Next.js · Tailwind CSS",
  },
];

export default function FeaturedProjectsSection() {
  return (
    <section id="projects" className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-xl font-semibold text-slate-100">
          Featured Projects
        </h2>
        <Link
          href="/project"
          className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300"
        >
          View all
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-xl border border-slate-800 bg-slate-900 p-4"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              {project.badge}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-slate-100">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              {project.description}
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Tech: {project.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
