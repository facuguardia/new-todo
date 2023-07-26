import express from "express";
import morgan from "morgan";
import taskRoutes from "./routes/task.routes";

const app = express();

// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/task", taskRoutes);

export default app;
