import NextAuth from "next-auth";

import { authConfig } from "config/auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - public directory paths
     * - file extensions in the public directory
     * - manifest
     */
    "/((?!api/|_next/static|_next/image|customers|fonts|glb|icon|images|particles|favicon.ico|manifest).*)",
  ],
};
