import { NextResponse, type NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "dev-secret");

export async function middleware(req: NextRequest) {
  const url = new URL(req.url);
  if (!url.pathname.startsWith("/admin")) return NextResponse.next();

  const token = req.cookies.get("token")?.value;
  if (!token) {
    const redirect = encodeURIComponent(url.pathname + url.search);
    return NextResponse.redirect(new URL(`/login?redirect=${redirect}`, req.url));
  }

  try {
    const { payload } = await jwtVerify(token, secret);
    if (payload.role !== "ADMIN") throw new Error("forbidden");
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
