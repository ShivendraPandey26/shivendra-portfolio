"use client";
import React from "react";
import HeroScrollDemo from "./components/Project";

function page() {
  return (
    <div>
      <HeroScrollDemo
        title2="E-Commerce Website"
        imageSrc="/img/ecommerce.png"
        imghref={"https://snapshop-shivendra.netlify.app/"}
      />
      <HeroScrollDemo
        title2="Image Search App"
        imageSrc="/img/imagesearch.png"
        imghref={"https://get-image-shivendra.netlify.app/"}
      />
      <HeroScrollDemo
        title2="Pizza Website"
        imageSrc="/img/pizza.png"
        imghref={"https://shivendrapandey26.github.io/PizzaPal/"}
      />
      <HeroScrollDemo
        title2="Tic Tac Teo"
        imageSrc="/img/tikteo.png"
        imghref={"https://shivendrapandey26.github.io/Tic-Tac-Toe/"}
      />
      <HeroScrollDemo
        title2="Dictionary App"
        imageSrc="/img/dic.png"
        imghref={"https://dictionary-app-shivendra.netlify.app/"}
      />
      <HeroScrollDemo
        title2="Password Generator"
        imageSrc="/img/password.png"
        imghref={"https://password-generator-shivendra.netlify.app/"}
      />
    </div>
  );
}

export default page;
