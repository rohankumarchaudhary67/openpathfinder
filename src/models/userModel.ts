// models/users.ts

import mongoose, { Document, Model, Schema } from 'mongoose';

interface IUser extends Document {
    fullName: string;
    email: string;
    phoneNumber: string;
    username: string;
    password: string;
    bio: string;
    education: [{
        college?: string
        course?: string
        grade?: string
        graduatedYear?: number
    }];
    workExperience: [{
        company?: string
        position?: string
        startDate?: string
        endDate?: string
        employmentType?: string
    }];
    skills: [string];
    links: [string];
}

const provideText = (field: string) => {
    return `Please provide ${field}.`
}

const userSchema: Schema<IUser> = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, provideText("full name")]
    },
    email: {
        type: String,
        required: [true, provideText("email")],
        unique: true
    },
    phoneNumber: {
        type: String,
        required: [true, provideText("phone number")],
        unique: true
    },
    username: {
        type: String,
        required: [true, provideText("username")],
        unique: true
    },
    password: {
        type: String,
        required: [true, provideText("password")]
    },
    bio: {
        type: String
    },
    education: {
        type: [{
            college: {
                type: String
            },
            course: {
                type: String,
                required: false
            },
            grade: {
                type: String,
                required: false
            },
            graduatedYear: {
                type: String,
                required: false
            }
        }],
        required: false
    },
    workExperience: {
        type: [{
            company: {
                type: String,
                required: false
            },
            position: {
                type: String,
                required: false
            },
            startDate: {
                type: String,
                required: false
            },
            endDate: {
                type: String,
                required: false
            },
            employmentType: {
                type: String,
                required: false
            }
        }],
        required: false
    },
    skills: {
        type: [String],
        required: false
    },
    links: {
        type: [String],
        required: false
    }
}, { timestamps: true });

const User: Model<IUser> = mongoose.models.Users || mongoose.model<IUser>("Users", userSchema);

export default User;