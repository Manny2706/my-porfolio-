
"use client";
  
import { useState } from "react";
import { Menu, Home, FolderKanban, User, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import CircularNavigation from "@/components/ui/cicular-navigation-bar";

import HeroSection from "@/components/home-components/hero-section";
import SkillsSection from "@/components/home-components/skills-section";
import FeaturedProjectsSection from "@/components/home-components/featured-projects-section";
import ContactSection from "@/components/home-components/contact-section";

import { motion } from "framer-motion"; // 👈 make sure this is here

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Projects", icon: FolderKanban, href: "/project" },
  { name: "About", icon: User, href: "/about" },
  { name: "Contact", icon: Mail, href: "/contact" },
];

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <CircularNavigation
        navItems={navItems}
        isOpen={isOpen}
        toggleMenu={toggleMenu}
      />

      <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-20 px-4 pb-16 pt-24">
        <HeroSection />
        <SkillsSection />
        <FeaturedProjectsSection />
        <ContactSection />
      </main>

      {/* 🟣 Draggable + floating circular nav trigger */}
      <motion.div
        className="fixed top-6 left-6 z-40"  // 👈 default: top-left
        drag
        dragMomentum={false}
        dragElastic={0.2}
        initial={{ y: 0 }}
        animate={{ y: [0, -8, 0] }}          // 👈 up–down animation
        transition={{
          duration: 1.6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <Button
          size="icon"
          variant="outline"
          className="h-11 w-11 rounded-full border-slate-600 bg-slate-900/90 backdrop-blur hover:bg-slate-800"
          onClick={toggleMenu}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  );
}
