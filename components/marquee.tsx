import {
  CloudLightningIcon,
  Paintbrush,
  Shirt,
  ShoppingBagIcon,
  Sticker,
  SwatchBook,
} from "lucide-react";
import React from "react";

type Props = {};

export default function marquee({}: Props) {
  return (
    <div className="relative flex overflow-x-hidden bg-gradient-to-r from-[#341933] via-[#572a43] to-[#341933] animated-background text-white ">
      <div className="py-2 animate-marquee whitespace-nowrap text-lg flex flex-row">
        <span className="mx-5 hover:-translate-y-1 transition-all duration-100 ease-in">
          Free Shipping on all Prepaid orders
        </span>
        <ShoppingBagIcon className="hover:rotate-[360deg] transition-all duration-300 ease-in" />
        <span className="mx-5 hover:-translate-y-1 transition-all duration-100 ease-in">
          Classy style and fashion at VK
        </span>
        <Shirt className="hover:rotate-[360deg] transition-all duration-300 ease-in" />
        <span className="mx-5 hover:-translate-y-1 transition-all duration-100 ease-in">
          High Quality material for comfort
        </span>
        <Paintbrush className="hover:rotate-[360deg] transition-all duration-300 ease-in" />
        <span className="mx-5 hover:-translate-y-1 transition-all duration-100 ease-in">
          Design and create your own Fashion
        </span>
        <Sticker className="hover:rotate-[360deg] transition-all duration-300 ease-in" />
        <span className="mx-5 hover:-translate-y-1 transition-all duration-100 ease-in">
          100% Satisfaction
        </span>
        <SwatchBook className="hover:rotate-[360deg] transition-all duration-300 ease-in" />
      </div>

      <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap text-lg flex flex-row ">
        <span className="mx-5 hover:-translate-y-1 transition-all duration-100 ease-in">
          Free Shipping on all Prepaid orders
        </span>
        <ShoppingBagIcon className="hover:rotate-[360deg] transition-all duration-300 ease-in" />
        <span className="mx-5 hover:-translate-y-1 transition-all duration-100 ease-in">
          Classy style and fashion at VK
        </span>
        <Shirt className="hover:rotate-[360deg] transition-all duration-300 ease-in" />
        <span className="mx-5 hover:-translate-y-1 transition-all duration-100 ease-in">
          High Quality material for comfort
        </span>
        <Paintbrush className="hover:rotate-[360deg] transition-all duration-300 ease-in" />
        <span className="mx-5 hover:-translate-y-1 transition-all duration-100 ease-in">
          Design and create your own Fashion
        </span>
        <Sticker className="hover:rotate-[360deg] transition-all duration-300 ease-in" />
        <span className="mx-5 hover:-translate-y-1 transition-all duration-100 ease-in">
          100% Satisfaction
        </span>
        <SwatchBook className="hover:rotate-[360deg] transition-all duration-300 ease-in" />
      </div>
    </div>
  );
}
