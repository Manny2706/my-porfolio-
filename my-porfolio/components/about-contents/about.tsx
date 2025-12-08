"use client";

import GsapSection from "@/components/ui/GsapSection";
import Stepper from "@/components/ui/Stepper";
import {
  GraduationCap,
  Briefcase,
  Award,
  ArrowRight,
  Mail,
} from "lucide-react";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "CSS",
  "HTML",
  "Python",
  "Tailwind CSS",
  "Node.js",
  "Django",
  "MongoDB",
  "PostgreSQL",
  "Git & GitHub",
  "Docker",
];

const educationSteps = [
  {
    title: "B.Tech in Computer Science",
    subtitle: "AKGEC · 2024–2028",
    content:
      "Focused on software development, DSA, systems, cloud, and full-stack engineering.",
  },
  {
    title: "Class 12 (PCM)",
    subtitle: "Sainik Institute · 2024",
    content:
      "Completed higher secondary education with interest in CS & mathematics.",
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
    period: "Internship",
    title: "AI with Azure Intern",
    place: "Pynetlabs",
    details:
      "Worked with Azure AI services, exploring cloud-based AI workflows, model deployment and integration with web apps.",
  },
  {
    period: "Trainee → Member",
    title: "CSI Trainee & Member",
    place: "Computer Society of India – AKGEC",
    details:
      "Completed CSI trainee program and became an active member, participating in tech events, sessions and community activities.",
  },
];

const achievements = [
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
          I&apos;m Mayank Gupta, a Computer Science undergrad and Full Stack
          Developer who loves building clean, fast and visually appealing web
          experiences. I enjoy working across the stack — from frontend
          interfaces to backend APIs and deployment.
        </p>
        <p className="text-sm md:text-base text-slate-300 leading-relaxed">
          Most of my projects use{" "}
          <span className="font-medium text-slate-100">
            Next.js, React, TypeScript, Tailwind, Node.js and Django
          </span>
          . I&apos;m also interested in cloud, AI integrations and how good UI +
          UX can make tech feel effortless for users.
        </p>
        <p className="text-sm md:text-base text-slate-300 leading-relaxed">
          Beyond code, I like exploring new tools, contributing to tech
          communities like CSI, and experimenting with animations and motion
          to make portfolios and apps stand out.
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
