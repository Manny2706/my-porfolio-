"use client";
 
import { useState } from "react";
import CircularNavigation from "@/components/ui/cicular-navigation-bar";
import { Home, FolderKanban, User, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
 
const navItems = [
{ name: "Home", icon: Home, href: "/" },
{ name: "Projects", icon: FolderKanban, href: "/projects" },
{ name: "About", icon: User, href: "/about" },
{ name: "Contact", icon: Mail, href: "/contact" },
];
 
export default function CircularNav() {
  const [isOpen, setIsOpen] = useState(false);
 
const toggleMenu = () => setIsOpen(!isOpen);
 
return (
 
<>
  <div className="h-screen w-full flex items-center justify-center">
    <Button onClick={toggleMenu}>Open Navigation</Button>
  </div>
  <CircularNavigation
    navItems={navItems}
    isOpen={isOpen}
    toggleMenu={toggleMenu}
  />
</>
); }