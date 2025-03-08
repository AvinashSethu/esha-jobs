import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.pathname;

  // Protect /admin/dashboard and its sub-routes, but allow /admin/dashboard/login
  if (url.startsWith("/admin/dashboard/dashpage") && url !== "/admin/dashboard/login") {
    // Simulate authentication check (in a real app, check cookies, tokens, or session)
    const isAuthenticated = false; // Replace with real auth check logic

    // For this example, we'll assume the user is authenticated if they came from a successful login
    // In a real app, you'd check a session or token here
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/admin/dashboard/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*","/admin"],
};