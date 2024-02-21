import { get } from 'http';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  if(request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup') {
    const cookies = request.cookies;
    const hasCookie = cookies.has('accessToken');
    if(hasCookie) {
      console.log('이미 로그인 되어있음')
    return NextResponse.redirect(new URL('/',request.nextUrl.origin))
    }
    return NextResponse.next()
  }
  if(request.nextUrl.pathname === '/mypage' || request.nextUrl.pathname === '/mypage/like' || request.nextUrl.pathname === "/mypage/follow") {
    const cookies = request.cookies;
    const hasCookie = cookies.has('accessToken');
    if(!hasCookie) {
      return NextResponse.redirect(new URL('/login',request.nextUrl.origin))
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/login','/signup','/mypage/:path*']
}