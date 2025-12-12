"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CircularText = dynamic(
  () => import("@/components/ui/CircularText"),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
      {/* LEFT: text */}
      <div className="max-w-xl text-center md:text-left">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
          Portfolio · Developer · Creator
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Mayank
          </span>
          .
        </h1>

        <p className="mt-3 text-sm text-slate-400 md:text-base">
          Full Stack developer who enjoys building clean, fast and modern web apps using{" "}
          <span className="text-slate-200 font-medium">
            Next.js, React, Node.js &amp; Django.
          </span>
        </p>

        
        {/* CTA buttons */}
         <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
             <Link href="/project">
            <Button className="inline-flex items-center gap-2">
             View Projects
             <ArrowRight className="h-8 w-8 text-slate-800 rotate-45 hover:rotate-0 transition-all duration-300 bg-slate-100 rounded-full " />
           </Button>
         </Link>

         <Link href="/contact">
            <Button
              variant="outline"
              className="bg-slate-800/50 hover:bg-slate-800 inline-flex items-center gap-2 "
           >
              Contact Me
            </Button>
           </Link>
        </div>


        <div className="mt-5 flex items-center justify-center gap-3 text-sm text-slate-400 md:justify-start">
          <span className="text-xs uppercase tracking-[0.2em]">
            Find me on
          </span>
          <div className="flex gap-2">
            <Link
              href="https://github.com/Manny2706"
              target="_blank"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 hover:bg-slate-800"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href="https://linkedin.com/in/mayank-gupta-869a94327"
              target="_blank"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 hover:bg-slate-800"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href="mailto:mayankgupta270606@gmail.com"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 hover:bg-slate-800"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT: avatar + circular text */}
      <div className="w-full md:w-auto flex justify-center md:justify-end">
        <div className="relative w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] flex items-center justify-center">
          {/* circular text (client-only, no SSR) */}
          <CircularText
            text="MAYANK GUPTA • FULL STACK DEVELOPER • "
            spinDuration={18}
            onHover="speedUp"
            className="pointer-events-auto"
          />

          {/* avatar in the middle */}
          <div className="absolute 
  h-36 w-36 
  sm:h-40 sm:w-40 
  md:h-44 md:w-44 
  lg:h-48 lg:w-48
  rounded-full overflow-hidden border border-slate-700 bg-slate-900 shadow-xl"
>
  <Image
    src="/mayank.png"
    alt="Mayank Gupta"
    fill
    sizes="
      (max-width: 640px) 144px,
      (max-width: 768px) 160px,
      (max-width: 1024px) 176px,
      192px
    "
    className="object-cover"
  />
</div>


          {/* soft glow */}
          <div className="pointer-events-none absolute h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 rounded-full bg-blue-500/15 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
