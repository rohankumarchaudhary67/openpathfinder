import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
    await connect();

    const { email, password } = await req.json();

    try {
        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ success: false, message: "User Not Found" }, { status: 200 });
        }

        // Validate Password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return NextResponse.json({ success: false, message: "Invalid Password" }, { status: 200 });
        }

        const payload = {
            user: {
                id: user._id,
                email: user.email,
            }
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET!, {
            expiresIn: '1d',
        });

        const response = NextResponse.json({ success: true });
        response.cookies.set("auth-token", token, { httpOnly: true, maxAge: 60 * 60 * 24 }); // Set cookie for 1 day
        return response;
    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message }, { status: 400 });
    }
}