// <root>/middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/index.php")) {
    const newUrl = new URL(
      request.nextUrl.pathname,
      process.env.NEXT_PUBLIC_CMS_ADDRESS
    );
    return NextResponse.redirect(`${newUrl.href}`);
  }

  if (request.nextUrl.pathname.startsWith("/wp-admin")) {
    const newUrl = new URL(
      request.nextUrl.pathname,
      process.env.NEXT_PUBLIC_WORDPRESS_ADDRESS
    );
    return NextResponse.redirect(`${newUrl.href}`);
    // This logic is only applied to /dashboard
  }

  if (request.nextUrl.pathname.startsWith("/wp-content")) {
    const newUrl = new URL(
      request.nextUrl.pathname,
      process.env.NEXT_PUBLIC_WORDPRESS_ADDRESS
    );
    return NextResponse.redirect(`${newUrl.href}`);
  }
}
