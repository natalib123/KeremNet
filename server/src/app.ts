import { Express } from "express";
import express from "express";
import router from "./Routes/PostRoutes";

const app: Express = express();

app.use(express.json());

app.use('/api', router);

export default app;