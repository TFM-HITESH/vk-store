"use client"
import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Input1 from "./ui/Input1"

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("WORKINGsS")

  };


const Footer = () => {
    return (
        <div className="bg-[#A020F0] min-w-full h-[399px] flex flex-col">
      <div className="h-[10%] w-[80%] flex justify-center"></div>
      <div className="flex flex-row h-[70%] items-center ">
        <div className="w-[15%]"></div>
        <div className="w-[25%]  flex h-[80%] flex-col">
          <div className="h-[25%] font-abc text-6xl">VICUNA</div>
          <div className="h-[25%] font-abc text-6xl">KOUTURE</div>
          <div className="h-[20%] font-robotoSlab text-xl flex justfy-center items-center">
            Social Media
          </div>
          <div className="flex flex-row justify-start mt-2">
           <Link href={"www.google.com"}> <div className="pr-5"><Image src={"/facebook.png"} alt={"I"} height={32} width={32}/></div></Link>
           <Link href={"www.google.com"}> <div className="px-5"><Image src={"/twitter.png"} alt={"I"} height={32} width={32}/></div></Link>
           <Link href={"www.google.com"}> <div className="pl-5"><Image src={"/instagram.png"} alt={"I"} height={32} width={32}/></div></Link>
          </div>
          <div className="w-[30%]"></div>
        </div>
        <div className="w-[25%] flex flex-col lg:pt-[4%] ">
          <div className="h-[30%] flex items-center justify-center font-robotoSlab text-lg lg:mb-4 opacity-100">
            SHOP
          </div>
          <div className="h-[15%] flex items-center justify-center font-poppins text-sm lg:mb-2  opacity-70">
            Products
          </div>
          <div className="h-[15%] flex items-center justify-center font-poppins text-sm mb-2  opacity-70">
            Overview
          </div>
          <div className="h-[15%] flex items-center justify-center font-poppins text-sm mb-2  opacity-70">
            Pricing
          </div>
          <div className="h-[15%] flex items-center justify-center font-poppins text-sm mb-2  opacity-70">
            Releases
          </div>
        </div>
        <div className="w-[25%] flex flex-col lg:pt-[4%] ">
          <div className="h-[30%] flex items-center justify-center font-robotoSlab text-lg lg:mb-4 opacity-100">
            COMPANY
          </div>
          <div className="h-[15%] flex items-center justify-center font-poppins text-sm lg:mb-2  opacity-70">
            About Us
          </div>
          <div className="h-[15%] flex items-center justify-center font-poppins text-sm mb-2  opacity-70">
            Contact
          </div>
          <div className="h-[15%] flex items-center justify-center font-poppins text-sm mb-2  opacity-70">
            News
          </div>
          <div className="h-[15%] flex items-center justify-center font-poppins text-sm mb-2  opacity-70">
            Support
          </div>
        </div>
        <div className=" lg:ml-[2%] w-[50%] flex justify-center flex-col">
            <div className="h-[20%] text-lg font-robotoSlab lg:mt-[-3%]">STAY UP TO DATE</div>
            <div className="h-[80%]">
        <div className="container mx-auto mt-4">
        <form onSubmit={handleSubmit} className="flex items-center font-poppins">
        <Input1
          type="text"
          placeholder="Enter your email"
          showSubmit={true}

        />
      </form>
      
    </div>
    </div>
        </div>
        <div className="w-[2%]"></div>
      </div>
      <div className="flex h-[20%] flex-row">
        <div className="w-[70%] lg:ml-[7%] h-0.5 my-4 bg-white-100 border-0 rounded  dark:bg-white opacity-40"></div>
        <div className="w-[20%] flex flex-row justify-evenly my-2">
            <div className="font-poppins text-sm opacity-100">Terms</div>
            <div className="font-poppins text-sm opacity-100">Privacy</div>
            <div className="font-poppins text-sm opacity-100">Cookies</div>
        </div>
      </div>
    </div>
    )
}

export default Footer