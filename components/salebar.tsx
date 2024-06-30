"use client";
import React from "react";
import { GradualSpacing } from "./ui/gradual-text";

type Props = {};

export default function salebar({}: Props) {
  return (
    <div className="mx-auto bg-black flex flex-row items-center justify-center h-10 text-white gap-x-[10rem]">
      <GradualSpacing text="GET 20% OFF ON SUMMER T-SHIRTS" />
      <GradualSpacing text="USE CODE: VICUSU20" />
    </div>
  );
}
