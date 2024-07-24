"use client";
import React from "react";

function MidSection() {
  return (
    <div className="bg-gray-900 text-gray-200 p-6 rounded-lg shadow-lg max-w-7xl mx-auto my-14">
      <p className="text-lg leading-relaxed">
        I’m{" "}
        <span className="font-semibold text-blue-400">
          Shivendra Kumar Pandey
        </span>
        , a dedicated Full-Stack Web Developer with a focus on creating engaging
        and responsive web applications. Currently pursuing a Bachelor of
        Technology in Computer Science at{" "}
        <span className="font-semibold text-blue-400">
          Shri Shankaracharya Institute of Professional Management and
          Technology, Raipur
        </span>
        , I have a strong foundation in both frontend and backend development.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        My expertise spans various technologies, including JavaScript, C/C++,
        HTML, CSS, Node.js, and MongoDB, with a particular proficiency in
        React.js and Express. I’m experienced in designing and implementing
        user-friendly interfaces and scalable server-side solutions.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        I have successfully completed projects such as an e-commerce platform,
        an image search application, and a responsive pizza ordering website,
        demonstrating my ability to apply modern web development practices
        effectively. My work has been recognized with awards, including 1st
        Prize in a college web development competition and 2nd Prize in an
        Arduino project competition.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        Beyond coding, I’m passionate about mastering data structures, gaming,
        and staying updated with the latest tech trends. I’m always eager to
        take on new challenges and collaborate on innovative projects. Feel free
        to connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/shivendra-pandey-34075a245"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          LinkedIn
        </a>{" "}
        or{" "}
        <a
          href="https://github.com/ShivendraPandey26"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
}

export default MidSection;
