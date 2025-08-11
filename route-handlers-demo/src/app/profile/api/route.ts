import { NextRequest } from "next/server";
import { headers } from "next/headers"; //headers from nextjs

//setting incoming request
export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders.get("Authorization"));
  // return new Response("Profile API Data");

  const headerList = await headers();
  console.log(headerList.get("Authorization")); //To set headers you need to new response with custom headers
  return new Response("Profile API Data", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
