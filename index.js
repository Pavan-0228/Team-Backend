import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./Db/index.js";

dotenv.config({
    path: "./.env",
});

const port = process.env.PORT || 3000;


connectDB()
    .then(() => {
        console.log("MongoDB connection success");
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error);
    });