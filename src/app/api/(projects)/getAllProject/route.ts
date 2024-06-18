import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import jwt from 'jsonwebtoken';
import Project from "@/models/projectModel";

export async function GET(req: NextRequest) {
    await connect();

    const tokenCookie = req.cookies.get('auth-token');
    const token = tokenCookie?.value;

    if (!token) {
        return NextResponse.json({ success: true, message: "tokneNotFound" }, { status: 200 });
    }

    try {
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

        const projects = await Project.find();

        return NextResponse.json({ success: true, projects }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ success: false, message: "somethingWentWrong" }, { status: 401 });
    }
}