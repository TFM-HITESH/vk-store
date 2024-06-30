"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Image from "next/image";
export function Hero() {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.25,
            duration: 1,
          },
        },
      }}
    >
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

        <div className="w-full flex flex-col items-end p-10 text-right">
          <motion.div
            className="text-[7rem] font-bold flex justify-center "
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            VICUNA <br /> KOUTURE
          </motion.div>
          <motion.div
            className="text-5xl flex justify-center "
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            UNLEASH YOUR PANACHE
          </motion.div>
          <motion.div
            className="flex justify-end items-end pt-[10%]"
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            <Image
              src="/vk2.png"
              height={200}
              width={200}
              alt="Picture of the author"
              className="flex flex-col z-10 relative opacity-70"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
