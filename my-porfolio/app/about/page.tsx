"use client";

import AboutPageContent from "@/components/about-contents/about";

 import Plasma from "@/components/ui/Plasma";
import { Instagram } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">

      {/* PLASMA SECTION covering NAME + IMAGE */}
      <section className="relative py-20 overflow-hidden min-h-[600px]">

        {/* Plasma background */}
  <div className="absolute inset-0 z-0 w-full h-full " >
  <Plasma />
</div>

        {/* Overlay for readability */}
        <div className="absolute inset-0 -z-[9] bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950" />

        {/* CONTENT INSIDE PLASMA */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 flex flex-col items-center text-center gap-6">

          {/* Profile Image */}
          <div className="relative h-40 w-40 md:h-48 md:w-48 rounded-full overflow-hidden border border-white/20 shadow-2xl">
            <Image
              src="/avatar.jpg"
              alt="Mayank Gupta"
              fill
              sizes="(max-width: 768px) 160px, 192px"
              className="object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-xl">
            Mayank Gupta
          </h1>

          {/* Subtitle */}
          <p className="max-w-xl text-slate-200/90 text-sm md:text-base leading-relaxed">
            Full Stack Developer crafting immersive web experiences with modern UI, motion & 3D aesthetics.
          </p>

         {/* Social Links */}
<div className="flex items-center gap-3">

  {/* GitHub */}
  <a
    href="https://github.com/Manny2706"   // <-- add your username
    target="_blank"
    className="p-3 rounded-full bg-slate-900/40 backdrop-blur border border-white/10 hover:bg-slate-900/60 transition"
  >
    <Github className="h-5 w-5 text-slate-200" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/mayank-gupta-869a94327"  // <-- add your profile
    target="_blank"
    className="p-3 rounded-full bg-slate-900/40 backdrop-blur border border-white/10 hover:bg-slate-900/60 transition"
  >
    <Linkedin className="h-5 w-5 text-blue-400" />
  </a>

  {/* Instagram */}
  <a
    href="https://instagram.com/its_manny2706"   // <-- add your IG
    target="_blank"
    className="p-3 rounded-full bg-slate-900/40 backdrop-blur border border-white/10 hover:bg-slate-900/60 transition"
  >
    <Instagram className="h-5 w-5 text-pink-400" />
  </a>

  {/* Email */}
  <a
    href="mailto:mayankgupta270606@gmail.com"  // <-- your email
    className="p-3 rounded-full bg-slate-900/40 backdrop-blur border border-white/10 hover:bg-slate-900/60 transition"
  >
    <Mail className="h-5 w-5 text-green-400" />
  </a>

</div>



          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="mt-2 inline-flex items-center gap-2 px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-500 transition text-white"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* OTHER SECTIONS BELOW (Skills, Experience, Education) */}
      <AboutPageContent />
    </div>
  );
}
