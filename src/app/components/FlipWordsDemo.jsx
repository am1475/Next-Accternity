import { useRouter } from "next/navigation";
import React from "react";
import { FlipWords } from "../components/ui/flip-words";
import { MovingBorderDemo } from "./MovingBorderDemo"; // Ensure this component is properly imported

export function FlipWordsDemo() {
  const words = ["Connect", "Share", "Discover"];
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/feed");
  };


  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4">
      <div className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        Let's
        <FlipWords words={words} /> <br />
        Together
      </div>
      {/* Moving Border Demo */}
      <div className="mt-4">
        <MovingBorderDemo /> {/* Include your moving border component here */}
      </div>
    </div>
  );
}
