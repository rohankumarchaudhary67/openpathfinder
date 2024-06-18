import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const response = NextResponse.json({ success: true, message: 'Logged out successfully' });

    // Clear the 'auth-token' cookie by setting it to an empty value and setting maxAge to 0
    response.cookies.set('auth-token', '', { httpOnly: true, maxAge: 0 });

    return response;
}