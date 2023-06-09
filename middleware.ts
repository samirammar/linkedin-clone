// <root>/middleware.ts
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req:NextRequest) {
  if(req.nextUrl.pathname === '/'){
    const session = await getToken({
        req,
        secret: process.env.JWT_SECRET,
        secureCookie: process.env.NODE_ENV === 'production',
    });

    if (!session) {
        return NextResponse.redirect(new URL('/home', req.url));
    }
  }
}

