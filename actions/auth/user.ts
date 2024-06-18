"use server";

import { db } from "@/lib/db";
//Utiliy function to get user info from the database
export const getUserByEmail = async (email: string) => {
  try {
    const data = await db.user.findFirst({ where: { email } });
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getUserById = async (id: string) => {
  try {
    const data = await db.user.findFirst({ where: { id } });
    return data;
  } catch (e) {
    console.log(e);
  }
};
