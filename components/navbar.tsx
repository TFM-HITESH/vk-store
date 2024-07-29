// "use client"
import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import { auth } from "@/auth";
import Image from "next/image";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { MultiDirectionSlide } from "./ui/slide-text";

const Navbar = async () => {
  const categories = await getCategories();
  const session = await auth();

  return (
    <div className="shadow-sm bg-[#76287E] w-full">
      {/* <Container> */}
      <div className="relative sm:px-6 lg:px-12 flex py-4 items-center justify-center flex-row w-full mx-auto">


        {/* <Link
          href="/"
          className="flex lg:ml-0 gap-x-2 w-full items-center justify-center"
        >
          {/* <p className="font-bold text-xl">Vicuna Kouture</p>
             
        </Link> 
        */}

        <div className="w-full flex items-center">
          {/* <Image src="/vk.png" height={100} width={100} alt={""}></Image> */}
          <video preload="none" width="180" height="240" className="" autoPlay loop muted>
            <source src="vklogo.webm" type="video/webm" />

            Your browser does not support the video tag.
          </video>
        </div>

        {/* <MainNav data={categories} /> */}
        <div className="w-full flex items-center justify-center">
          <NavbarActions userName={session?.user?.name} />
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default Navbar;
