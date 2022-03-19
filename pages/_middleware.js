import {NextResponse} from 'next/server';

export default function redirections(req, e) {
  if (req.url.endsWith(".php")) {
    const newUrl = new URL(req.nextUrl.pathname, 'https://archive.mieuxvoter.fr');
    console.log(newUrl.href)
    return NextResponse.redirect(`${newUrl.href}`);
  }
}
