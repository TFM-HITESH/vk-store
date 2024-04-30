import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import authConfig from "./auth.config";
import { getUserById } from "./actions/auth/user";

const prisma = new PrismaClient();

export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks: {
    async session({ session, user, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      // if (token.role && session.user) {
      //   session.user.role = token.role;
      // }
      return {
        ...session,
        user: {
          ...session.user,
        },
      };
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // YOU CAN ACCESS THIS TOKEN IN MIDDLEWARE in req object

      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
