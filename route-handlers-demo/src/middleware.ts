import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// //approach 1 - matcher config approach
// export const config = {
//   matcher: "/profile",
// };
// //redirects to home page

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/hello", request.nextUrl));
    //also supports url rewrites feature - (handling legacy url /imporving SEO )
    //return NextResponse.rewrite(new URL("/hello", request.nextUrl));
    // //keep the url unchanged while serving differnt content
  }
}
