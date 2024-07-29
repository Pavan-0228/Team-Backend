import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema(
    {
        teamName: {
            type: String,
            required: true,
        },
        teamMembers: {
            type: [String],
            required: true,
        },
        teamLeader: {
            type: String,
            required: true,
        },
        projectTopic: {
            type: String,
            required: true,
        },
        contact: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        paymentStatus: {
            type: Boolean,
            default: false,
            required: true,
        },
    },
    { timestamps: true }
);

export const Team = mongoose.model("Team", TeamSchema);
