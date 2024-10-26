// src/app/page.js
"use client";
import { useRouter } from "next/navigation";
import { NavbarDemo } from "./components/NavbarDemo";
import { HeroHighlightDemo } from "./components/HeroHighlightDemo";
import { ImagesSliderDemo } from "./components/ImagesSliderDemo";
import { FeaturesSectionDemo } from "./components/FeaturesSectionDemo";
import { InfiniteMovingCardsDemo } from "./components/InfiniteMovingCardsDemo";
import { AccordionDemo } from "./components/AccordionDemo";
import { FloatingDockDemo } from "./components/FloatingDockDemo";

export default function HomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/feed");
  };

  return (
    <>
      <NavbarDemo />
    
      <HeroHighlightDemo />
      <FeaturesSectionDemo />
      <InfiniteMovingCardsDemo />
      <AccordionDemo />
      <FloatingDockDemo />

    </>
  );
}
