import { NextRequest, NextResponse } from 'next/server';
import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import jwt from 'jsonwebtoken';

export async function GET(req: NextRequest) {
    await connect();

    const tokenCookie = req.cookies.get('auth-token');
    const token = tokenCookie?.value;

    if (!token) {
        return NextResponse.json({ success: false, message: 'Token not found' }, { status: 401 });
    }

    try {
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

        const user = await User.findById(decoded.user.id).select('-password'); // exclude password

        if (!user) {
            return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, user });
    } catch (error: any) {
        return NextResponse.json({ success: false, message: 'Invalid token' }, { status: 401 });
    }
}