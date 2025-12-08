"use client";

import FeaturedProjectsSection from "@/components/home-components/featured-projects-section";
import InfiniteMenu from "@/components/ui/InfiniteMenu"; // adjust path/case if needed


import {  Mail, Home, FolderKanban, User, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CircularNavigation from "@/components/ui/cicular-navigation-bar";

const projectItems = [
  {
    image: "/project-images/next-step.png",
    link: "https://jobseeker-backend-django.onrender.com",
    title: "NextStep",
    description: "Job portal for candidates & recruiters.",
  },
  {
    image: "/project-images/travefy.png",
    link: "https://steady-seahorse-cc4126.netlify.app/",
    title: " travefy",
    description: "Travel agency landing page.",
  },
  {
    image: "/project-images/space-expo.png",
    link: "https://manny2706.github.io/NASA--SPACE-EXPLORATION/",
    title: " Space Explorer",
    description: "Explore NASA's latest images and missions.",
  },
  {
    image: "project-images/currency-converter.png",
    link: "https://manny2706.github.io/CURRENCY-CONVERTER/",
    title: `Currency Converter`,
    description: "Convert currencies with real-time exchange rates.",
  },
  {
   image: "/project-images/blog-app.png",
    link: "https://django-task-bgej.onrender.com/",
    title: "blog website",
    description: "A blogging platform built with Django.",
  },
  
  {
    image: "/project-images/to-do.png",
    link: "https://mayank2412136task2csi.vercel.app/",
    title: "to-do",
    description: "A simple to-do list application built with Next.js.",
  },
  {
    image: "/project-images/forest-runner.png",
    link: "https://drive.google.com/drive/folders/1PPAqYAVZ2rMEAwlXwiskVoKQDjjTzBmD",
    title: "Forest runner",
    description: "Endless runner game built with Python and Pygame.",
  },

];

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Projects", icon: FolderKanban, href: "/project" },
  { name: "About", icon: User, href: "/about" },
  { name: "Contact", icon: Mail, href: "/contact" },
];


export default function ProjectsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
       <motion.div
        className="fixed top-6 left-6 z-40"
        drag
        dragMomentum={false}
        dragElastic={0.2}
        initial={{ y: 0 }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <Button
          size="icon"
          variant={isOpen ? "default" : "outline"}
          className={`h-11 w-11 rounded-full border-slate-600 bg-slate-900/90 backdrop-blur hover:bg-slate-800 ${isOpen ? "ring-2 ring-blue-500" : ""}`}
          onClick={toggleMenu}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </motion.div>
      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-4 pb-20 pt-24 space-y-14 sm:space-y-16">
        {/* Header */}
        <section className="space-y-4 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.20em] text-slate-500">
            Projects
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            My{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Work & Creations
            </span>
          </h1>
          <p className="mx-auto md:mx-0 max-w-xl text-sm sm:text-[0.95rem] text-slate-400">
            A mix of full-stack and frontend projects where I focus on clean
            UI, good UX and solving real-world problems.
          </p>
        </section>

        {/* InfiniteMenu – 3D spinner */}
        <section className="rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur overflow-hidden h-[320px] sm:h-[380px] md:h-[440px] lg:h-[520px]">
          <InfiniteMenu items={projectItems} />
        </section>
<CircularNavigation
            navItems={navItems}
            isOpen={isOpen}
            toggleMenu={toggleMenu}
          />
       <FeaturedProjectsSection />
      </main>
    </div>
  );
}
