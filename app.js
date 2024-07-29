import express from "express";
import cors from "cors";
import { createTeam, getAllteams } from "./controller/team.controller.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "*",
    })
);

app.get("/api", (req, res) => {
    res.send("Hello World!");
});

app.post("/api/create-team", createTeam);
app.get("/api/teams", getAllteams);

export { app };
