"use client"; // Indicates this is a client-side component in a framework like Next.js.

import React, { useEffect, useRef, useState } from "react"; // Import necessary React hooks.
import { useMotionValueEvent, useScroll } from "framer-motion"; // Import hooks from Framer Motion for animations and scroll tracking.
import { motion } from "framer-motion"; // Import motion for animated components.
import { cn } from "@/utils/cn"; // Import a utility function for class name management.

export const StickyScroll = ({
  content, // Array of content objects containing title, description, and optional content.
  contentClassName, // Optional additional class name for styling.
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any; // Type for the optional content node.
  }[];
  contentClassName?: string; // Type for optional class name.
}) => {
  const [activeCard, setActiveCard] = React.useState(0); // State to track the currently active card based on scroll position.
  const ref = useRef<any>(null); // Reference for the scroll container.
  const { scrollYProgress } = useScroll({ // Hook to track the scroll progress.
    // Uncomment line 22 and comment line 23 to change scroll behavior.
    // target: ref
    container: ref, // Set the scroll container to the ref.
    offset: ["start start", "end start"], // Define scroll offset for animations.
  });
  const cardLength = content.length; // Get the number of content cards.

  // Track changes in scroll progress.
  useMotionValueEvent(scrollYProgress, "change", (latest) => 
    {
    const cardsBreakpoints = content.map((_, index) => index / cardLength); // Calculate breakpoints for each card.
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint); // Calculate distance from current scroll position.
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) { // Find the closest breakpoint.
          return index; // Update active card index.
        }
        return acc; // Keep previous index if it's closer.
      },
      0 // Start with the first card as the active card.
    );
    setActiveCard(closestBreakpointIndex); // Update state with the closest card index.
  });

  // Define background colors and gradients for the active card.
  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0] // Initialize with the first gradient.
  );

  // Effect to update background gradient based on active card.
  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length], // Animate background color based on active card.
      }}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10" // Container styles.
      ref={ref} // Attach the ref to the container.
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => ( // Map through content to display each card.
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0, // Start with opacity 0.
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3, // Animate opacity based on active card.
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title} 
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0, // Start with opacity 0.
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3, // Animate opacity based on active card.
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description} // Display description of the current item.
              </motion.p>
            </div>
          ))}
          <div className="h-40" /> 
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }} // Set background gradient for the sidebar.
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName // Include additional class names.
        )}
      >
        {content[activeCard].content ?? null} 
      </div>
    </motion.div>
  );
};
