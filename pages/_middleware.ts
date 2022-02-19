import { NextResponse, NextRequest } from 'next/server'
export async function middleware(req:any) {
    const { pathname } = req.nextUrl
    if (pathname == '/ticker') {
        return NextResponse.redirect(new URL('/', req.url))
    }
    return NextResponse.next()
}