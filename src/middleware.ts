import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value

    if (!token && request.nextUrl.pathname === '/favorites') {
        return Response.redirect(new URL('/', request.url))
    }
    if (token && request.nextUrl.pathname === '/login') {
        console.log('login');
        return Response.redirect(new URL('/psychologists', request.url))
    }
    if (token && request.nextUrl.pathname === '/registration') {
        console.log('registration');
        return Response.redirect(new URL('/psychologists', request.url))
    }
}


