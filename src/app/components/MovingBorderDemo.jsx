"use client";
import React from "react";
import { Button } from "../components/ui/moving-border"; // Adjust the import based on your actual Button component path
import { useRouter } from "next/navigation";

export function MovingBorderDemo() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/feed"); // Navigate to the /feed page
  };

  return (
    <div>
      <Button
        onClick={handleGetStarted} // Attach the click handler here
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Get Started
      </Button>
    </div>
  );
}
