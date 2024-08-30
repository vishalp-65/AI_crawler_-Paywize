import mongoose from "mongoose";
import app from "./app";
import { config, DBConnect } from "./config";

const startServer = async () => {
    try {
        await DBConnect.connect();
        console.log("Database connected and synced");

        app.listen(config.port, () => {
            console.log(`Server is running on port ${config.port}`);
        });
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

startServer();
