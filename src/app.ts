import "reflect-metadata";
import express from "express";
import userRoutes from "./routes/users.routes";
import sessionRoutes from "./routes/session.routes";

const app = express();
app.use(express.json());

app.use("/user", userRoutes);
app.use("/login", sessionRoutes);

export default app;
