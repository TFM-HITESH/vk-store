import { PrismaClient } from "@prisma/client";
declare global {
  // NOT RESET ON HOT RELOAD OF NEXTJS
  var prisma: PrismaClient | undefined;
}
export const db = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prisma = db;
