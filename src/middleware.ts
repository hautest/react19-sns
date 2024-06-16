import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const isNextjsChunk = request.nextUrl.pathname.includes("_next");

  let queryParams = "";
  let pathname = "";

  if (!isNextjsChunk) {
    queryParams = request.nextUrl.searchParams.toString();
    pathname = request.nextUrl.pathname;
  }

  const response = NextResponse.next({
    headers: {
      queryParams,
      pathname,
    },
  });

  return response;
}
