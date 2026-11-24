import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { featuredProjects } from "@/lib/portfolio-data";

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
        {featuredProjects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/80 p-5 transition-colors hover:border-slate-700"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-400">
                  {project.badge}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-sky-300"
                  >
                    {project.linkLabel ?? "View"}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
              <h3 className="mt-1.5 text-lg font-semibold text-slate-100">
                {project.title}
              </h3>
              <p className="mt-1.5 text-sm text-slate-300">
                {project.description}
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-400 list-disc pl-4">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <p className="mt-4 border-t border-slate-800 pt-3 text-xs text-slate-400">
              <span className="text-slate-500">Tech:</span> {project.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
