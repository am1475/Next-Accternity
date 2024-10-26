import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";
import { HeroHighlight } from "../components/ui/hero-highlight"; // Import the HeroHighlight component

export function AccordionDemo() {
    return (
      <div className="relative w-full">
        <HeroHighlight /> {/* Add the HeroHighlight component for the background */}
        <div className="absolute inset-0 min-h-screen py-10 px-4 flex flex-col items-center justify-center"> {/* Centering the content */}
          <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center mb-8">
            Frequently Asked Questions
          </h1>
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto text-white">
            
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                How do I post a new update on my feed?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base md:text-lg lg:text-xl">
                Go to the main feed page and click on the "Create Post" button. From there, you can add photos, text, and even location tags to your post.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                Can I edit my posts after publishing?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base md:text-lg lg:text-xl">
                Yes, you can edit your posts. Simply click on the three dots in the top right corner of your post and select "Edit Post."
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                How can I control who sees my posts?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base md:text-lg lg:text-xl">
                When creating a post, you have the option to set the audience to Public, Friends, or Only Me. You can also adjust these settings on individual posts after publishing.
              </AccordionContent>
            </AccordionItem>
    
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                How do I delete a comment on my post?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base md:text-lg lg:text-xl">
                To delete a comment, click on the three dots next to the comment and select "Delete." You can only delete comments on your posts or comments you have made.
              </AccordionContent>
            </AccordionItem>
            
          </Accordion>
        </div>
      </div>
    );
}
  
export default AccordionDemo;
