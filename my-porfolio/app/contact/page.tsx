"use client";

import Link from "next/link";
import { Mail, Github, Linkedin, Instagram, MapPin, Menu } from "lucide-react";

import CircularNavigation from "@/components/ui/cicular-navigation-bar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const navItems = [
  { name: "Home", icon: Mail, href: "/" },
  { name: "Projects", icon: Mail, href: "/project" },
  { name: "About", icon: Mail, href: "/about" },
  { name: "Contact", icon: Mail, href: "/contact" },
];

export default function ContactPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
     
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
          <Menu    className="h-5 w-5" />
        </Button>
      </motion.div>

      <main className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
          {/* LEFT: Text + contact info + form */}
          <section className="space-y-8">
            {/* Heading */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.20em] text-slate-400">
                Contact
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Let&apos;s{" "}
                <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                  build something
                </span>
                .
              </h1>
              <p className="max-w-xl text-sm sm:text-[0.95rem] text-slate-300">
                Open to internships, freelance work, collaborations and side
                projects. Reach out and I&apos;ll get back to you as soon as I
                can.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-3 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-sky-400" />
                {/* ⬅️ update with your real email */}
                <a
                  href="mailto:mayankgupta270606@gmail.com"
                  className="hover:text-sky-300"
                >
                  mayankgupta270606@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="h-4 w-4 text-sky-400" />
                <span>Based in India · Open to remote</span>
              </div>

              <div className="pt-2">
                <p className="mb-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                  Social
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="https://github.com/Manny2706"
                    target="_blank"
                    className="inline-flex items-center gap-1 text-sm text-slate-200 hover:text-sky-300"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                  <Link
                    href="https://linkedin.com/in/mayank-gupta-869a94327"
                    target="_blank"
                    className="inline-flex items-center gap-1 text-sm text-slate-200 hover:text-sky-300"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Link>
                  <Link
                    href="https://instagram.com/its_manny2706"
                    target="_blank"
                    className="inline-flex items-center gap-1 text-sm text-slate-200 hover:text-sky-300"
                  >
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </Link>
                </div>
              </div>
            </div>

            {/* Simple mailto CTA instead of complex form (for now) */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur p-5 sm:p-6 shadow-lg shadow-sky-500/10">
              <h2 className="mb-3 text-sm font-semibold text-slate-100">
                Quick message
              </h2>
              <p className="mb-4 text-sm text-slate-300">
                Click below to open your email client with a pre-filled subject.
              </p>
              <a
                href="mailto:mayankgupta270606@gmail.com?subject=Let%27s%20work%20together"
                className="inline-flex items-center justify-center rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400 transition"
              >
                Email me
              </a>
            </div>
          </section>

          {/* RIGHT: Highlight card over LightRays */}
          <section className="relative">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 backdrop-blur-xl p-6 sm:p-7 shadow-xl shadow-sky-500/20 space-y-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Currently
              </p>
              <h2 className="text-xl font-semibold text-slate-50">
                Available for internships & freelance work
              </h2>
              <p className="text-sm text-slate-300">
                I enjoy building clean, performant web apps using Next.js,
                React, Node.js and Django. If you have an idea or product in
                mind, I&apos;d love to hear about it.
              </p>

              <div className="mt-3 grid grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                    Focus
                  </p>
                  <p className="mt-1 text-sm">Full Stack Web · UI-heavy</p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                    Time
                  </p>
                  <p className="mt-1 text-sm">Part-time / Remote</p>
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-400">
               You can contact me at {" "}
                <span className="font-mono text-slate-200">
                 630-667-1439
                </span>
                .
              </p>
            </div>
          </section><CircularNavigation
                      navItems={navItems}
                      isOpen={isOpen}
                      toggleMenu={toggleMenu}
                    />
        </div>
      </main>
    </div>
  );
}
