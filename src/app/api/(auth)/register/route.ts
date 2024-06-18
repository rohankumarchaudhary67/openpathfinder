// pages/api/auth/register.ts

import { NextRequest, NextResponse } from 'next/server';
import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
    await connect();

    const { fullName, email, phoneNumber, username, password } = await req.json();

    try {
        // Check if user already exists
        let user = await User.findOne({ email });

        if (user) {
            return NextResponse.json({ success: false, message: 'userAlreadyExists' }, { status: 200 });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        user = new User({
            fullName,
            email,
            phoneNumber,
            username,
            password: hashedPassword,
            bio: "",
            education: [],
            workExperience: [],
            skills: [],
            links: []
        });

        await user.save();

        // Create JWT token
        const payload = {
            user: {
                id: user.id,
                email: user.email,
                phoneNumber: user.phoneNumber,
                username: user.username
            },
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET!, {
            expiresIn: '1d', // Token expires in 1 day
        });

        const response = NextResponse.json({ success: true });
        response.cookies.set("auth-token", token, { httpOnly: true, maxAge: 60 * 60 * 24 }); // Set cookie for 1 day

        return response;
    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message }, { status: 400 });
    }
}