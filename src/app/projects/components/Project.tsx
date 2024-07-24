"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";

function HeroScrollDemo({ title2, imageSrc, imghref }) {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              {title2}
            </span>
        }
      >
        <Link
        href={imghref}
        target="_blank" 
        >
        <Image
          src={imageSrc}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
        </Link>
      </ContainerScroll>
    </div>
  );
}

export default HeroScrollDemo;
