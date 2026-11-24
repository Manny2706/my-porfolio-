"use client";

import GsapSection from "@/components/ui/GsapSection";
import Stepper from "@/components/ui/Stepper";
import { skillCategories } from "@/lib/portfolio-data";
import {
  GraduationCap,
  Briefcase,
  Award,
  ArrowRight,
  Mail,
} from "lucide-react";

const educationSteps = [
  {
    title: "B.Tech in Computer Science and Engineering",
    subtitle: "Ajay Kumar Garg Engineering College, Ghaziabad · CGPA: 8.30/10",
    content:
      "Focused on Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks, and full-stack software engineering.",
  },
  {
    title: "Class 12 (Science)",
    subtitle: "Sainik Institute Inter College, Bahraich · 2022–2024 · 85%",
    content:
      "Completed higher secondary education in Science with strong focus on mathematics and computer science.",
  },
  {
    title: "Class 10",
    subtitle: "Sainik Institute · 2020",
    content:
      "Completed foundational schooling with strong passion for technology.",
  },
];

const experience = [
  {
    period: "Technical Society",
    title: "Backend Developer",
    place: "Computer Society of India (CSI), AKGEC",
    details:
      "Developed registration pages supporting 2,000+ registrations and exam portals designed to serve thousands of concurrent users.",
  },
  {
    period: "Internship",
    title: "AI with Azure Intern",
    place: "Pynelabs",
    details:
      "Developed Python automation workflows using Azure AI services, reducing manual tasks by 40%, while gaining hands-on experience with cloud services and AI integration.",
  },
];

const achievements = [
  "600+ GitHub Contributions",
  "GitHub Achievements: YOLO, Pull Shark ×2, Quickdraw",
  "Top 100 at Innovate Bharath Hackathon 2026 (National Level)",
  "Member, Computer Society of India (CSI) – AKGEC Student Chapter",
];

function AboutPageContent() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-10 space-y-16">
      {/* Intro / Bio Section (text only, image + name are in Plasma section above) */}
      <GsapSection className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-100">
          About Me
        </h2>
        <p className="text-sm md:text-base text-slate-300 leading-relaxed">
          I&apos;m Mayank Gupta, a Software Developer and Computer Science
          undergrad with hands-on experience building scalable web applications,
          REST APIs, authentication systems, and real-time applications using
          Python, Django, FastAPI, Node.js, and PostgreSQL.
        </p>
        <p className="text-sm md:text-base text-slate-300 leading-relaxed">
          I&apos;m experienced in database optimization, asynchronous task
          processing, cloud integrations (AWS S3, Azure AI Services), and
          AI-powered applications — focused on writing maintainable code and
          building reliable software systems.
        </p>
        <p className="text-sm md:text-base text-slate-300 leading-relaxed">
          Beyond code, I contribute to tech communities like CSI AKGEC, explore
          agentic AI and multimodal workflows, and craft responsive frontends
          with React and Next.js.
        </p>

        <a
          href="/contact"
          className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300"
        >
          Let&apos;s connect
          <ArrowRight className="h-4 w-4" />
        </a>
      </GsapSection>

      {/* Skills */}
      <GsapSection className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-xl font-semibold text-slate-100">
            Skills
          </h2>
          <span className="rounded-md bg-slate-900 px-2 py-1 text-xs uppercase tracking-[0.18em] text-slate-400">
            Tech Stack
          </span>
        </div>
        <p className="text-sm text-slate-400">
          Technologies, languages and tools I use regularly:
        </p>
        <div className="mt-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
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
      </GsapSection>
{/* Education */}
<GsapSection className="space-y-6">
  <div className="flex items-center gap-2">
    <GraduationCap className="h-5 w-5 text-blue-400" />
    <h2 className="text-xl font-semibold text-slate-100">Education</h2>
  </div>

  <div className="bg-slate-900/40 backdrop-blur-sm rounded-xl border border-slate-800 p-6">
    <Stepper>
      {educationSteps.map((step, index) => (
        <div key={index} className="mt-4">
          <h3 className="font-medium text-slate-200">{step.title}</h3>
          <p className="text-xs text-slate-400">{step.subtitle}</p>
          <p className="mt-1 text-sm text-slate-300">{step.content}</p>
        </div>
      ))}
    </Stepper>
  </div>
</GsapSection>

      {/* Experience */}
      <GsapSection className="space-y-4">
        <div className="flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-blue-400" />
          <h2 className="text-xl font-semibold text-slate-100">
            Experience
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-800 bg-slate-900 p-4"
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                {exp.period}
              </p>
              <h3 className="mt-1 text-sm md:text-base font-semibold text-slate-100">
                {exp.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-400">
                {exp.place}
              </p>
              <p className="mt-2 text-xs md:text-sm text-slate-400">
                {exp.details}
              </p>
            </div>
          ))}
        </div>
      </GsapSection>

      {/* Achievements */}
      <GsapSection className="space-y-4">
        <div className="flex items-center gap-2">
          <Award className="h-5 w-5 text-blue-400" />
          <h2 className="text-xl font-semibold text-slate-100">
            Achievements
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {achievements.map((ach, i) => (
            <div
              key={i}
              className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-xs md:text-sm text-slate-200"
            >
              {ach}
            </div>
          ))}
        </div>
      </GsapSection>

      {/* Contact CTA */}
      <GsapSection className="space-y-3 text-center">
        <h2 className="text-xl font-semibold text-slate-100">
          Let&apos;s Work Together
        </h2>
        <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto">
          Have an idea, project or opportunity? I&apos;m open to internships,
          freelance work, collaborations and interesting side projects.
        </p>
        <a
          href="/contact"
          className="mt-3 inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-500"
        >
          <Mail className="h-4 w-4" />
          Go to Contact Page
        </a>
      </GsapSection>
    </div>
  );
}

export default AboutPageContent;
