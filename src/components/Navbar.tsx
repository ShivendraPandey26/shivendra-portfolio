"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Projects">
        <div className="text-sm grid grid-cols-2 gap-10 p-4">
        <ProductItem
              title="E-Commerce Website"
              href="https://snapshop-shivendra.netlify.app/"
              src="/img/ecommerce.png"
              description="Responsive e-commerce platform with promo code functionality."
            />
        <ProductItem
              title="Image Search Website "
              href="https://get-image-shivendra.netlify.app/"
              src="/img/imagesearch.png"
              description="Image search platform with API integration, search, previews, and download options."
            />
        <ProductItem
              title="Pizza Website"
              href="https://shivendrapandey26.github.io/PizzaPal/"
              src="/img/pizza.png"
              description="Developed 'PizzaPal', a responsive pizza ordering site."
            />
        <ProductItem
              title="Tic Tac Toe"
              href="https://shivendrapandey26.github.io/Tic-Tac-Toe/"
              src="/img/tikteo.png"
              description="Developed a responsive Tic-Tac-Toe website for seamless play across all devices."
            />
        </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="More...">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">About</HoveredLink>
            <HoveredLink href="/contact">Contact</HoveredLink>
            <HoveredLink href="/projects">All Projects</HoveredLink>
          </div>
        </MenuItem>
        
      </Menu>
    </div>
  );
}

export default Navbar;
