import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") ?? "";
  const pathname = request.nextUrl.pathname;

  // サブドメイン → ルートへのリライト
  if (hostname.startsWith("hintl.")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? "/hintl" : `/hintl${pathname}`;
    return NextResponse.rewrite(url);
  }

  if (hostname.startsWith("aioru.")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? "/aioru" : `/aioru${pathname}`;
    return NextResponse.rewrite(url);
  }

  if (hostname.startsWith("creative.")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? "/creative" : `/creative${pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png).*)"],
};
