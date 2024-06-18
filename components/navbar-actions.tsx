"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import Link from "next/link";
import { signOut } from "@/auth";
import { handleSignOut } from "@/actions/auth/handleSignOut";

const NavbarActions = ({
  userName,
}: {
  userName: string | null | undefined;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      {userName && (
        <div className=" flex space-x-4">
          <form className="cursor-pointer" action={handleSignOut}>
            <Button
              className="flex items-center rounded-full bg-black px-4 py-2"
              type="submit"
            >
              Sign out
            </Button>
          </form>
          <Button className="flex items-center rounded-full bg-black px-4 py-2">
            {userName}
          </Button>
        </div>
      )}
      <Link href={"/auth/login"} className=" text-sm font-medium text-white">
        <Button className="flex items-center rounded-full bg-black px-4 py-2">
          Login
        </Button>
      </Link>
      <Link href={"/auth/signup"} className=" text-sm font-medium text-white">
        <Button className="flex items-center rounded-full bg-black px-4 py-2">
          SignUp
        </Button>
      </Link>

      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
