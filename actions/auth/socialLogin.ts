"use server";
import { signIn } from "@/auth";
//handles oAuth authentication
export const OnClick = async (provider: "google" | "twitter") => {
  await signIn(provider, {
    redirectTo: "/",
  });
};
