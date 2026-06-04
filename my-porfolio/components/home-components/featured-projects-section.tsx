
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Pitwatch-Ai-road-suvaliance-app",
    badge: "Full Stack",
    description:
      "Pitwatch-Ai-road-suvaliance-app- is an AI-assisted road surveillance platform for detecting potholes, tracking hazard reports, and presenting operational insights across a Flutter mobile app, a Django REST backend, and a React dashboard.",
    tech: "React.js · Django · PostgreSQL · Redis · CCloudinary · Docker · PostGIS · FLutter · Celery",
  },
  {
    title: "SarthiAi",
    badge: "Full Stack",
    description:
      "SarthiAi is a full-stack application designed to provide intelligent assistance for travelers, offering features like route planning, accommodation booking, and real-time updates.",
    tech: " Django · PostgreSQL · Redis · CCloudinary · Docker · Vapi ",
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
