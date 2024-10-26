"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { FlipWordsDemo } from "./FlipWordsDemo";


export function HeroHighlightDemo() {
  return (
    <HeroHighlight className="flex flex-col items-center text-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
      <FlipWordsDemo 
        className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300"
      >
       
      </motion.p>
    </HeroHighlight>
  );
}
