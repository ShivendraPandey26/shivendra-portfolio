import React from 'react';
import { HoverEffect } from './ui/card-hover-effect';

export function CardHoverEffectDemo() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <div className="border border-gray-700 p-8 rounded-lg shadow-md max-w-md w-full mb-12">
        <h1 className="text-4xl font-bold text-white text-center">Skills</h1>
      </div>
      <div className="max-w-5xl w-full px-4 sm:px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

export const projects = [
  { title: "JavaScript" },
  { title: "C/C++" },
  { title: "HTML" },
  { title: "CSS" },
  { title: "Node" },
  { title: "MongoDB" },
  { title: "React.js" },
  { title: "Next.js" },
  { title: "Express" },
  { title: "Tailwind CSS" },
  { title: "Bootstrap" },
  { title: "Git/Github" },
];
