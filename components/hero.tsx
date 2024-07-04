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
      <div className="flex md:flex-row flex-col-reverse justify-center text-white p-10 w-full relative h-[100vh] bg-black/40">
        <Image
          src="/llama.jpeg"
          fill={true}
          alt="Picture of the author"
          className="flex flex-col -z-10 relative object-cover"
        />
        <motion.div
          className="flex items-center justify-center w-full "
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <motion.button className="bg-fuchsia-600/60 border ring-1 ring-gray-900/5 border-white border-1 p-4 px-8 md:text-3xl text-xl rounded-[0.2rem] hover:scale-110 hover:bg-fuchsia-600/90 hover:border-3 transition-all duration-300 ease-in-out font-bold hover:font-extrabold  hover:shadow-4xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/80">
            SHOP NOW !
          </motion.button>
        </motion.div>

        <div className="w-full flex flex-col justify-center items-center md:items-start md:p-10 text-center md:text-left">
          <motion.div
            className="md:text-[7rem] text-7xl font-bold flex "
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            VICUNA KOUTURE
          </motion.div>
          <motion.div
            className="md:text-5xl text-2xl flex md:mb-0 mb-7"
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            UNLEASH YOUR PANACHE
          </motion.div>
          <motion.div
            className="flex w-full justify-center items-end pt-[10%]"
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            <Image
              src="/vk2.png"
              height={200}
              width={200}
              alt="Picture of the author"
              className="flex flex-col z-10 relative opacity-70 md:mb-0 mb-10"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
