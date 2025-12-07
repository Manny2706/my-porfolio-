// components/sections/hero-section.tsx
"use client";
import dynamic from "next/dynamic";
const CircularText = dynamic(
  () => import("@/components/ui/CircularText"),
  { ssr: false }
);

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
      {/* Left: text */}
      <div className="max-w-xl text-center md:text-left">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
        Developer · Creator · Designer
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
            Next.js, React,&amp; Django,React-native.
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

        {/* Socials */}
        <div className="mt-5 flex items-center justify-center gap-3 text-sm text-slate-400 md:justify-start">
          <span className="text-xs uppercase tracking-[0.2em]">
            Find me on
          </span>
          <div className="flex gap-2">
            <Link
              href="https://github.com/"
              target="_blank"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 hover:bg-slate-800"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href="https://linkedin.com/"
              target="_blank"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 hover:bg-slate-800"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 hover:bg-slate-800"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

     
{/* RIGHT: avatar + circular text */}<div className="relative flex items-center justify-center">
  <div className="relative h-[220px] w-[220px] md:h-[260px] md:w-[260px]">

    {/* Circular text */}
    <CircularText
      text="MAYANK GUPTA • FULL STACK DEVELOPER • "
      size={260}            // matches container
      radiusOffset={22}     // distance from avatar
      spinDuration={18}
      onHover="speedUp"
      className="absolute inset-0"
    />

    {/* Avatar */}
    <div className="absolute inset-8 rounded-full overflow-hidden border border-slate-700 bg-slate-900 shadow-xl">
      <Image
        src="/avatar.jpg"
        alt="Mayank Gupta"
        fill
        sizes="(max-width: 768px) 180px, 240px"
        className="object-cover"
      />
    </div>

    {/* Glow */}
    <div className="absolute inset-10 rounded-full bg-blue-500/10 blur-xl" />
  </div>
</div>

    </section>
  );
}
