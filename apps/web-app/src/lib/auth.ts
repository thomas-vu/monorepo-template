import Google from "next-auth/providers/google";
import NextAuth from "next-auth";

import { authConfig } from "config/auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [Google],
});
