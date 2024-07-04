import React from "react";
import { AccordionFaq } from "./faq";
import RotateText from "./ui/rotate-text";

type Props = {};

export default function faqsection({}: Props) {
  return (
    <div className="w-full md:p-20 p-5 flex md:flex-row flex-col gap-10">
      <div className="md:w-[70%] w-full">
        <AccordionFaq />
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
          <div className="bg-transparent border border-white h-full w-full p-2 text-3xl flex items-center justify-center text-white font-black">
            <RotateText />
          </div>
        </div>
      </div>
    </div>
  );
}
