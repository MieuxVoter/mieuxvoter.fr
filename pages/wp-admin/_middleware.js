import {NextResponse} from 'next/server';

export default function redirections(req, e) {
  const newUrl = new URL(req.nextUrl.pathname, process.env.NEXT_PUBLIC_WORDPRESS_ADDRESS);
  console.log(req.nextUrl, newUrl.href)
  return NextResponse.redirect(`${newUrl.href}`);
}
