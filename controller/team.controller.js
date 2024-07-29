import { Team } from "../model/team.model.js";

const createTeam = async (req, res) => {
    try {
        const {
            teamName,
            teamMembers,
            teamLeader,
            projectTopic,
            contact,
            email,
        } = req.body;

        if (
            !teamName ||
            !teamMembers ||
            !teamLeader ||
            !projectTopic ||
            !contact ||
            !email
        ) {
            return res
                .status(400)
                .json({ message: "Please fill all the fields" });
        }

        const team = await Team.findOne({ teamName });

        if (team) {
            return res
                .status(400)
                .json({ message: "Team name already exists" });
        }

        const leaderExists = await Team.findOne({ teamLeader });

        if (leaderExists) {
            return res
                .status(400)
                .json({ message: "Team Leader already exists" });
        }

        const memberExists = await Team.findOne({
            teamMembers: {
                $in: teamMembers,
            },
        });

        if (memberExists) {
            return res
                .status(400)
                .json({ message: "Team member already exists" });
        }

        const newTeam = await Team.create({
            teamName,
            teamMembers,
            teamLeader,
            projectTopic,
            contact,
            email,
        });
        if (newTeam) {
            return res.status(201).json({
                message: "Team created successfully",
                newTeam,
            });
        } else {
            return res.status(400).json({
                message: "Team creation failed",
            });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getAllteams = async (req, res) => {
    try {
        const teams = await Team.find();

        if (teams) {
            return res.status(200).json({ teams });
        } else {
            return res.status(404).json({ message: "Teams not found" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export { createTeam, getAllteams };
