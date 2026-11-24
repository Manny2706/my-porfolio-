export interface SkillCategory {
  category: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Go"],
  },
  {
    category: "Backend",
    items: [
      "Django",
      "Django REST Framework",
      "FastAPI",
      "Flask",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "WebSockets",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Tools & Cloud",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "Postman",
      "AWS S3",
      "Azure AI Services",
      "Cloudinary",
    ],
  },
  {
    category: "Core CS",
    items: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

export interface FeaturedProject {
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  tech: string;
  link?: string;
  linkLabel?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "JobSeeker Platform",
    badge: "Backend & Real-Time",
    description:
      "Scalable recruitment platform backend supporting recruiter and job-seeker workflows with role-based access control and real-time messaging.",
    highlights: [
      "Developed 20+ REST API endpoints with JWT authentication and role-based access control.",
      "Implemented real-time chat via Django Channels and WebSockets; optimized PostgreSQL queries, cutting average response time by 35%.",
    ],
    tech: "Django REST Framework · PostgreSQL · JWT · Django Channels",
    link: "https://jobseeker-backend-django.onrender.com",
    linkLabel: "Live / Repo",
  },
  {
    title: "PitWatch",
    badge: "Full Stack & Async ML",
    description:
      "AI-assisted road surveillance platform for detecting potholes, tracking hazard reports, and processing geospatial data asynchronously.",
    highlights: [
      "Integrated geospatial APIs and asynchronous ML inference using Celery and Redis for background task processing.",
      "Built asynchronous image-processing workflows that reduced request blocking by nearly 90%.",
    ],
    tech: "Django · Celery · Redis · PostgreSQL",
    link: "https://github.com/Manny2706/Pitwatch-Ai-road-surveillance-app",
    linkLabel: "GitHub",
  },
  {
    title: "ANTARIX – SatQuery AI",
    badge: "Multimodal & Agentic AI",
    description:
      "Multimodal satellite-imagery analysis platform for visual question answering, image captioning, and change detection.",
    highlights: [
      "Fine-tuned Qwen2-VL-2B-Instruct with LoRA/QLoRA for satellite visual question answering.",
      "Developed agentic AI workflows using LangGraph for captioning, natural-language querying, and change detection.",
    ],
    tech: "Python · Qwen2-VL · LoRA/QLoRA · LangGraph",
    link: "https://github.com/Manny2706/ANTARIX2.O",
    linkLabel: "GitHub",
  },
  {
    title: "ChallanSave",
    badge: "Live Project",
    description:
      "Traffic legal-assistance platform combining a modern web frontend with fast backend APIs and AI-powered user support.",
    highlights: [
      "Developed frontend and backend features, integrating REST APIs and third-party services.",
      "Integrated AI-powered support workflows to automate user assistance and improve UX.",
    ],
    tech: "Next.js · FastAPI · PostgreSQL",
    link: "https://challansave.in",
    linkLabel: "Live Project",
  },
];
