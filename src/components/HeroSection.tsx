import Link from "next/link"; // Import Link from Next.js for client-side navigation
import { Spotlight } from "./ui/Spotlight"; // Import the Spotlight component for highlighting
import { Button } from "./ui/moving-border"; // Import the Button component with a moving border effect

// Define the HeroSection functional component
function HeroSection() {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0" // Styles for the main container
    >
      {/* Spotlight effect positioned above the hero section */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20" // Adjust positioning for different screen sizes
        fill="white" // Set the color of the spotlight
      />
      <div className="p-4 relative z-10 w-full text-center"> 
        <h1
          className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400" // Large heading with gradient text
        >
          Master the art of music
        </h1>
        <p
          className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto" // Subheading with responsive font size and color
        >
          Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.
        </p>
        <div className="mt-4"> 
          <Link href={"/courses"}>
           
            <Button
              borderRadius="1.75rem" // Set the border radius of the button
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800" // Button styling with dark mode support
            >
              Explore courses 
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection; // Export the HeroSection component for use in other parts of the app
