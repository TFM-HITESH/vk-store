"use server";
import { RegisterSchema } from "@/schemas/authSchema";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
//register user to the database
export const RegisterUser = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const { email, password, username } = validatedFields.data;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.create({
      data: { email: email, name: username, password: hashedPassword },
    });
  } catch (error) {
    console.log("Error in register.ts");
    console.log(error);
  }
};
