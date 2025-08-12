import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers"; //headers from nextjs

//setting incoming request
export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));
  // return new Response("Profile API Data");

  const headerList = await headers();
  console.log(headerList.get("Authorization")); //To set headers you need to new response with custom headers

  const theme = request.cookies.get("theme");
  console.log(theme);

  const cookieStore = await cookies();
  cookieStore.set("resultsPerPage", "20");
  console.log(cookieStore.get("resultsPerPage"))

  return new Response("Profile API Data", {
    headers: {
      "Content-Type": "text/html",
      "set-Cookie": "theme=dark",
    },
  });
}
