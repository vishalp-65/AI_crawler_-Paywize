import express from "express";
import apiRoutes from "./routes/index";
import { errorHandler } from "./middlewares";
import dotenv from "dotenv";
import ApiError from "./utils/ApiError";
import httpStatus from "http-status";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options("*", cors());

app.use("/api", apiRoutes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// Error handler
app.use(errorHandler);

export default app;
