import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import jwt from 'jsonwebtoken';

export async function GET(req: NextRequest) {
    await connect();

    const tokenCookie = req.cookies.get('auth-token');
    const token = tokenCookie?.value;
    const userId = req.nextUrl.searchParams.get('userId');

    if (!token) {
        return NextResponse.json({ success: true, message: "tokenNotFound" }, { status: 200 });
    }

    try {
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

        if (userId !== decoded.user.id) {
            return NextResponse.json({ success: false, message: "invalidUserId" }, { status: 200 });
        }

        const user = await User.findById(decoded.user.id).select('-password');

        if (!user) {
            return NextResponse.json({ success: false, message: "userNotFound" }, { status: 200 });
        }

        return NextResponse.json({ success: true, user }, { status: 200 });

    } catch (error: any) {
        return NextResponse.json({ success: false, message: "somethingWentWrong" }, { status: 401 });
    }
}