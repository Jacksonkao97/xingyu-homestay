// src/middleware.ts
import { NextResponse } from "next/server";

export function proxy() {
  // Just a pass-through to see if the page works
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
