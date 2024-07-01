import React from "react";
import Image from "next/image";

type Props = {};

export default function creativeHubs({}: Props) {
  return (
    <div className="w-full bg-black py-[4rem] pb-[12rem] px-10 text-white relative flex flex-col items-center">
      <Image
        src="/dotgrid.svg"
        height={200}
        width={200}
        alt="Picture of the author"
        className="flex absolute top-[0%] left-[0%] z-100"
      />

      <p className="font-extrabold text-6xl z-20 flex">COMING SOON</p>
      {/* <VelocityScroll /> */}
      <div className="flex flex-row p-1 pt-[15%] w-full">
        <Image
          src="/create1.png"
          height={400}
          width={400}
          alt="Picture of the author"
          className="flex z-20 w-full"
        />
        <div className="w-full p-10">
          <div className="text-[4rem]">
            EXPLORE THE MIND OF A{" "}
            <span className="text-[#76287E] hover:underline hover:decoration-[#76287E] hover:underline-offset-2 hover:decoration-dotted">
              TRENDSETTER
            </span>
          </div>
          <div className="pt-[15%]">
            <button className="bg-[#76287E] p-3 text-2xl flex flex-row gap-4 items-center justify-center hover:gap-10 transition-all duration-300 ease-out shadow-2xl shadow-fuchsia-700 font-bold">
              DESIGN HUB
              <img src="arrow.svg" className="" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row p-1 pt-[15%] w-full">
        <div className="w-full p-10">
          <div className="text-[4rem]">
            BRING YOUR IDEAS INTO{" "}
            <span className="text-[#76287E] hover:underline hover:decoration-[#76287E] hover:underline-offset-2 hover:decoration-dotted">
              REALITY
            </span>
          </div>
          <div className="pt-[15%]">
            <button className="bg-[#76287E] p-3 text-2xl flex flex-row gap-4 items-center justify-center hover:gap-10 transition-all duration-300 ease-out shadow-2xl shadow-fuchsia-700 font-bold">
              DESIGNER STUDIO
              <img src="arrow.svg" className="" />
            </button>
          </div>
        </div>
        <Image
          src="/create2.png"
          height={400}
          width={400}
          alt="Picture of the author"
          className="flex z-20 w-full"
        />
      </div>
    </div>
  );
}
