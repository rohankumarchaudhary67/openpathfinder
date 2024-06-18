import mongoose, { Document, Model, Schema } from 'mongoose';

interface IProject extends Document {
    projectId: string;  // Custom unique ID
    category: string[];
    projectName: string;
    languages: string[];
    projectDesc: string;
    projectAllDetails: string;
    projectOwner: string;
    projectOwnerImgLink: string;
    repoStars: number;
    noOfIssues: number;
    noOfcontributor: number;
    repoLink: string;
}

const projectSchema: Schema<IProject> = new mongoose.Schema({
    projectId: {
        type: String,
        unique: true,
        required: [true, "Please provide a unique ID"]
    },
    category: {
        type: [String],
        required: [true, "Please provide some categories"]
    },
    projectName: {
        type: String,
        required: [true, "Please provide project name"]
    },
    languages: {
        type: [String],
        required: [true, "Please provide some languages"]
    },
    projectDesc: {
        type: String,
        required: [true, "Please provide a small description of the project"]
    },
    projectAllDetails: {
        type: String,
        required: [true, "Please provide some brief details of the project"]
    },
    projectOwner: {
        type: String,
        required: [true, "Please provide the project owner's name"]
    },
    projectOwnerImgLink: {
        type: String
    },
    repoStars: {
        type: Number,
        required: [true, "Please provide the number of stars of the repository"]
    },
    noOfIssues: {
        type: Number,
        required: [true, "Please provide the number of issues in the repository"]
    },
    noOfcontributor: {
        type: Number,
        required: [true, "Please provide the number of contributors in the repository"]
    },
    repoLink: {
        type: String,
        required: [true, "Please provide the link to the repository"]
    }
}, { timestamps: true });

const Project: Model<IProject> = mongoose.models.Projects || mongoose.model<IProject>("Projects", projectSchema);

export default Project;