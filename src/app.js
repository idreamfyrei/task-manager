import express from "express";


const app = express();

// Routers
import { healthCheckRouter } from "./routes/healthcheck.route.js";
import { authRouter } from "./routes/auth.route.js";
import { projectRouter } from "./routes/project.route.js";
import { taskRouter } from "./routes/task.route.js";
import { noteRouter } from "./routes/note.route.js";

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/auth", authRouter);
app.use("/project", projectRouter);
app.use("/task", taskRouter);
app.use("/note", noteRouter);



export default app;
