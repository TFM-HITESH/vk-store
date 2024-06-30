"use client";

import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

export function MultiDirectionSlide() {
  const MULTIDIRECTION_SLIDE_VARIANTS = {
    hidden: { opacity: 0, x: "-25vw" },
    visible: { opacity: 1, x: 0 },
    right: { opacity: 0, x: "25vw" },
  };
  //   let generateZeros = (n: number) => Array(n).fill(0);
  //   let [keys, setKeys] = React.useState(generateZeros(20));
  //   function restartAnimation(index: number) {
  //     setKeys((prevKeys) => {
  //       const newKeys = [...prevKeys]; // copy the previous keys
  //       newKeys[index] += 1; // increment the key at the given index
  //       return newKeys;
  //     });
  //   }

  //   const index = 0;

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       restartAnimation(index); // Call your function here
  //     }, 5000); // 5000 milliseconds = 5 seconds

  //     // Clean up the interval on component unmount
  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div className="overflow-hidden flex justify-center items-center gap-4 text-white ">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="text-center font-display text-3xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-5xl md:leading-[5rem]"
      >
        Vicuna
      </motion.h1>

      <motion.h1
        initial="right"
        animate="visible"
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="text-center font-display text-3xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-5xl md:leading-[5rem]"
      >
        Kouture
      </motion.h1>
    </div>
  );
}
