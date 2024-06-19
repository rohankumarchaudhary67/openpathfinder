import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
    const token = req.cookies.get('auth-token'); // Ensure correct cookie key
    const url = req.nextUrl;

    if (!token) {
        if (url.pathname !== '/login' && url.pathname !== '/register') {
            // Redirect to login if not already on login or register page
            return NextResponse.redirect(new URL('/login', req.url));
        }
    } else {
        try {
            // If on login, register, or root path, verify the token
            if (url.pathname === '/login' || url.pathname === '/register' || url.pathname === '/') {
                return NextResponse.redirect(new URL('/dashboard', req.url));
            }
        } catch (error: any) {
            console.error('Error verifying token:', error.message);
            // Redirect to login on verification failure
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }

    // Proceed normally for all other paths
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/login', '/register'], // Adjust matcher to your routes
};
