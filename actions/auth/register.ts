"use server";
import { RegisterSchema } from "@/schemas/authSchema";
import { z } from "zod";
import brcypt from "bcryptjs";
import { db } from "@/lib/db";
//register user to the database
export const RegisterUser = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const { email, password, username } = validatedFields.data;

  try {
    const hasedPassword = await brcypt.hash(password, 10);
    console.log("Creating");
    console.log(
      await db.user.create({
        data: { email: email, name: username, password: hasedPassword },
      })
    );
    console.log("done");
  } catch (error) {
    console.log("Error in register.ts");
    console.log(error);
  }
};
