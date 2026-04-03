import { NextResponse } from "next/server";
import { PROTECTED_ROUTES } from "@/proxy";
import type { ProxyFunction } from "@/shared/types/proxy";

export const authGuard: ProxyFunction = async ({ req, session }) => {
  const pathname = req.nextUrl.pathname;
  const isProtected = PROTECTED_ROUTES.some((r) => pathname.startsWith(r));

  if (isProtected && (!session?.expiresAt || session.expiresAt < Date.now())) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
};
