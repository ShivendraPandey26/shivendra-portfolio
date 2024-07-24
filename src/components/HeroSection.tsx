"use client";
import { BoxesCore } from "./ui/background-boxes";
import { cn } from "@/utils/cn";

function HeroSection() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <BoxesCore />
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl text-white font-bold mb-4 relative z-20">
          HEY, I'M SHIVENDRA KUMAR PANDEY
        </h1>
        <p className="text-neutral-300 text-sm md:text-base mx-2 md:mx-4">
          Welcome to my portfolio! I’m Shivendra Kumar Pandey, a passionate
          Full-Stack Web Developer dedicated to crafting innovative and
          responsive web solutions. With expertise in modern technologies like
          React.js and Node.js, I thrive on building dynamic applications that
          deliver exceptional user experiences. Explore my projects to see how I
          blend creativity with technical skills to bring ideas to life. Whether
          you're looking for a developer for your next project or just curious
          about my work, feel free to connect with me!
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
