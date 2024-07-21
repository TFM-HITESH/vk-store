import {
  Copyright,
  Facebook,
  FacebookIcon,
  Instagram,
  InstagramIcon,
  Linkedin,
  LinkedinIcon,
  Youtube,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto pt-20 pb-4 md:px-16 px-8 flex flex-row ">
        <div className="w-full h-full">
          <div className="md:text-2xl text-xl font-extrabold mb-[25%]">Vicuna Kouture</div>
          <div className="flex flex-row md:gap-2 gap-1">
            <p className="hover:rotate-[360deg] transition-all duration-500 ease-out">
              <Copyright />
            </p>
            <p className="md:text-xl text-xs hover:underline hover:decoration-dotted hover:underline-offset-2 transition-all duration-500 ease-out">
              2024 vicuna kouture
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-row mx-auto w-full md:gap-1 gap-2">
            <div className="w-full md:text-xl text-md">
              <p className="hover:underline hover:decoration-dotted hover:underline-offset-2 transition-all duration-200 ease-out hover:scale-110 hover:translate-x-3">
                Navigation
              </p>
              <div className="flex flex-col mt-[5%] md:text-lg text-sm font-light">
                <Link
                  href="/"
                  className="hover:translate-x-4 transition-all duration-200 ease-out"
                >
                  Trending
                </Link>
                <Link
                  href="/"
                  className="hover:translate-x-4 transition-all duration-200 ease-out"
                >
                  Shop
                </Link>
                <Link
                  href="/"
                  className="hover:translate-x-4 transition-all duration-200 ease-out"
                >
                  Collection
                </Link>
              </div>
            </div>
            <div className="w-full md:text-xl text-md ">
              <p className="hover:underline hover:decoration-dotted hover:underline-offset-2 transition-all duration-200 ease-out hover:scale-110 hover:translate-x-3">
                Website
              </p>
              <div className="flex flex-col mt-[5%] md:text-lg text-sm font-light">
                <Link
                  href="/"
                  className="hover:translate-x-4 transition-all duration-200 ease-out"
                >
                  About
                </Link>
                <Link
                  href="/"
                  className="hover:translate-x-4 transition-all duration-200 ease-out"
                >
                  Terms of Use
                </Link>
                <Link
                  href="/"
                  className="hover:translate-x-4 transition-all duration-200 ease-out"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div className="w-full md:text-xl text-md ">
              <p className="hover:underline hover:decoration-dotted hover:underline-offset-2 transition-all duration-200 ease-out hover:scale-110 hover:translate-x-3">
                Account
              </p>
              <div className="flex flex-col mt-[5%] md:text-lg text-sm font-light">
                <Link
                  href="/"
                  className="hover:translate-x-4 transition-all duration-200 ease-out"
                >
                  Purchase History
                </Link>
                <Link
                  href="/"
                  className="hover:translate-x-4 transition-all duration-200 ease-out"
                >
                  Order Status
                </Link>
                <Link
                  href="/"
                  className="hover:translate-x-4 transition-all duration-200 ease-out"
                >
                  Cart
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[10%] py-[10%]">
            <Link
              href="/"
              className="bg-white text-black p-2 rounded-lg hover:bg-blue-600 transition-all duration-150 ease-linear hover:text-white"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="/"
              className="bg-white text-black p-2 rounded-lg hover:bg-gradient-to-b hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 transition-all duration-150 ease-linear hover:text-white"
            >
              <InstagramIcon />
            </Link>
            <Link
              href="/"
              className="bg-white text-black p-2 rounded-lg hover:bg-red-600 transition-all duration-150 ease-linear hover:text-white"
            >
              <YoutubeIcon />
            </Link>
            <Link
              href="/"
              className="bg-white text-black p-2 rounded-lg hover:bg-sky-400 transition-all duration-150 ease-linear hover:text-white"
            >
              <LinkedinIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
