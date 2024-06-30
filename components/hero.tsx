"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Image from "next/image";
export function Hero() {
  return (
    <div className="flex flex-row text-white p-10 w-full relative h-[100vh] bg-black/40">
      <Image
        src="/llama.jpeg"
        fill={true}
        alt="Picture of the author"
        className="flex flex-col -z-10 relative"
      />
      <div className="flex items-center justify-center w-full ">
        <button className="bg-fuchsia-600/60 border ring-1 ring-gray-900/5 border-white border-1 p-4 px-8 text-3xl rounded-[0.2rem] hover:scale-110 hover:bg-fuchsia-600/90 hover:border-3 transition-all duration-300 ease-in-out font-bold hover:font-extrabold  hover:shadow-4xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/80">
          SHOP NOW !
        </button>
      </div>
      <div className="w-full">
        <div>VICUNA KOUTURE</div>
        <div>Unleash your Panache !</div>
        <div>Image</div>
      </div>
    </div>
  );
}
