import React from "react";
import Image from "next/image";

type Props = {};

export default function creativeHubs({ }: Props) {

  const getRandomDelayClass = () => {
    const delays = ['delay-0', 'delay-0.5s', 'delay-1s', 'delay-1.5s', 'delay-2s', 'delay-2.5s', 'delay-3s'];
    return delays[Math.floor(Math.random() * delays.length)];
  };

  // const getRandomScaleClass = () => {
  //   const delays = ['scale-100', 'scale-110', 'scale-125', 'scale-150'];
  //   return delays[Math.floor(Math.random() * delays.length)];
  // };

  return (
    <div className="w-full bg-black py-[4rem] pb-[12rem] px-10 text-white relative flex flex-col items-center overflow-hidden">
      <Image
        src="/dotgrid.svg"
        height={200}
        width={200}
        alt="Picture of the author"
        className={`flex absolute top-[3%] left-[55%] z-100 animate-breathing ${getRandomDelayClass()}`}
      />

      <Image
        src="/dotgrid.svg"
        height={300}
        width={300}
        alt="Picture of the author"
        className={`flex absolute top-[33%] left-[85%] scale-150 z-100 animate-breathing ${getRandomDelayClass()}`}
      />


      <Image
        src="/dotgrid.svg"
        height={200}
        width={200}
        alt="Picture of the author"
        className={`flex absolute top-[42%] left-[2%] z-100 animate-breathing ${getRandomDelayClass()}`}
      />
      <Image
        src="/dotgrid.svg"
        height={400}
        width={400}
        alt="Picture of the author"
        className={`flex absolute top-[55%] left-[50%] z-100 animate-breathing ${getRandomDelayClass()}`}
      />




      <p className="font-extrabold md:text-6xl text-2xl z-20 flex">COMING SOON</p>
      {/* <VelocityScroll /> */}
      <div className="flex md:flex-row flex-col items-center p-1 pt-[15%] w-full">
        <div className="relative md:w-[1400px] w-[300px] md:h-[500px] h-[200px] overflow-hidden">
          <Image
            src="/create1.png"
            alt="Picture of the author"
            className="rounded-sm"
            object-fit="cover"
            fill={true}
          />
        </div>
        <div className="w-full p-10">
          <div className="md:text-[4rem] text-[2rem] md:text-left text-center flex flex-col z-200">
            EXPLORE THE MIND OF A{" "}
            <span className="text-[#76287E] hover:underline hover:decoration-[#76287E] hover:underline-offset-2 hover:decoration-dotted">
              TRENDSETTER
            </span>
          </div>
          <div className="pt-[15%] flex md:justify-start justify-center">
            <button className="bg-[#76287E] p-3 md:text-2xl text-xl flex flex-row gap-4 items-center justify-center hover:gap-10 transition-all duration-300 ease-out shadow-2xl shadow-fuchsia-700 font-bold">
              DESIGN HUB
              <img src="arrow.svg" className="" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center md:flex-row flex-col-reverse p-1 pt-[15%] w-full">
        <div className="w-full p-10">
          <div className="md:text-[4rem] text-[2rem] md:text-left text-center z-200 flex-col flex">
            BRING YOUR IDEAS INTO{" "}
            <span className="text-[#76287E] hover:underline hover:decoration-[#76287E] hover:underline-offset-2 hover:decoration-dotted">
              REALITY
            </span>
          </div>
          <div className="pt-[15%]">
            <button className="bg-[#76287E] md:p-3 p-2 md:text-2xl text-lg flex flex-row gap-4 items-center justify-center hover:gap-10 transition-all duration-300 ease-out shadow-2xl shadow-fuchsia-700 font-bold">
              DESIGNER STUDIO
              <img src="arrow.svg" className="" />
            </button>
          </div>
        </div>
        <div className="relative md:w-[1400px] w-[300px] md:h-[500px] h-[200px] overflow-hidden">
          <Image
            src="/create2.png"
            alt="Picture of the author"
            className="rounded-sm"
            object-fit="cover"
            fill={true}
          />
        </div>
      </div>
    </div>
  );
}
