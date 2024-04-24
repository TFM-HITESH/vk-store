import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string().min(1, { message: "please fill the password" }),
});
export const RegisterSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(25, {
      message: "Username too long",
    }),
  email: z.string().email(),
  password: z.string().min(6, {
    message: "password too Short",
  }),
});
