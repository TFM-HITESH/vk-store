"use client";

import React from "react";
import { AccordionFaq } from "./faq";
import RotateText from "./ui/rotate-text";
import { InstagramEmbed } from 'react-social-media-embed';

type Props = {};

export default function faqsection({ }: Props) {
  return (
    <div className="w-full md:p-20 p-5 flex md:flex-row flex-col gap-10">
      <div className="md:w-[70%] w-full flex-col md:flex-row  flex p-1 gap-4">
        {/* <AccordionFaq /> */}
        <div className="flex justify-center p-2 bg-[#76287E] items-center rounded-lg my-auto pt-5 px-3">
          <InstagramEmbed url="https://www.instagram.com/reel/C6WIP3bL-eg/?igsh=eDVjOW5odGh5NWYw" />
        </div>
        <div className="flex justify-center p-2 bg-[#76287E] items-center rounded-lg my-auto pt-5 px-3">
          <InstagramEmbed url="https://www.instagram.com/reel/C4BKXz2SL92/?igsh=Y3B6NzV5bWh0dHJ2" />
        </div>
        <div className="flex justify-center p-2 bg-[#76287E] items-center rounded-lg my-auto pt-5 px-3">
          <InstagramEmbed url="https://www.instagram.com/reel/C3z1Q_UrGoo/?igsh=aXI2cXhidm11eHpo" />
        </div>
      </div>
      <div className="md:w-[30%] w-full gap-5 flex md:flex-col flex-row">
        <div className="h-[50%] w-full border border-black p-4 flex flex-col gap-1">
          <p className="md:text-xl text-lg font-bold">NEWSLETTER</p>
          <p className="md:text-lg text-[10pt]">STAY UPDATED WITH THE LATEST TRENDS</p>
          <input
            placeholder="EMAIL"
            className="md:text-lg text-[10pt] border-b border-black mt-4 w-[75%] focus:outline-none"
          ></input>
          <button className="md:text-lg text-[10pt] bg-[#76287E] hover:bg-fuchsia-800/80 transition-all duration-100 ease-in-out hover:rounded-sm md:w-[30%] p-1 text-white text-bold">
            SUBSCRIBE
          </button>
        </div>
        <div className="h-[50%] w-full bg-[#76287E] p-3">
          <div className="bg-transparent border border-white h-full w-full p-2 flex items-center justify-center text-white font-black">
            <RotateText />
            {/* <RotateText /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
