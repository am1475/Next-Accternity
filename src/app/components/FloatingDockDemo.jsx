import React from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { HeroHighlight } from "../components/ui/hero-highlight";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Hackkerank",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    
    
    
    {
      title: "Leetcode",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <div className="relative w-full">
      <HeroHighlight />
      <div className="absolute inset-0 flex items-center justify-center  p-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text justify-center items-center text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Made By Amartya Paul
        </h1>
        <div className="flex justify-end">
          <FloatingDock
            // only for demo, remove for production
            mobileClassName="translate-y-20"
            items={links}
          />
        </div>
      </div>
    </div>
  );
}

export default FloatingDockDemo;
